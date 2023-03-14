module.exports = (app) => {
  const { exists, notExists } = app.api.validators;

  const withPath = (categories) => {
    const getParent = (categories, parentId) => {
      const parent = categories.filter((category) => category.id === parentId);
      return parent.length ? parent[0] : null;
    };

    const categoriesWithPath = categories.map((category) => {
      let path = category.name;
      let parent = getParent(categories, category.parentId);

      while (parent) {
        path = `${parent.name} > ${path}`;
        parent = getParent(categories, parent.parentId);
      }

      return { ...category, path };
    });

    categoriesWithPath.sort((a, b) => {
      if (a.path < b.path) return -1;
      if (a.path > b.path) return 1;
      return 0;
    });

    return categoriesWithPath;
  };

  const generateCategoriesTree = (categories, tree) => {
    if (!tree) {
      tree = categories.filter((category) => !category.parentId);
    }

    tree = tree.map((node) => {
      const isChild = (n) => n.parentId === node.id;
      node.children = generateCategoriesTree(
        categories,
        categories.filter(isChild)
      );

      return node;
    });

    return tree;
  };

  const persist = (req, res) => {
    const category = { ...req.body };

    if (req.params.id) {
      category.id = req.params.id;
    }

    try {
      exists(category.name, "Name not informed.");
    } catch (error) {
      return res.status(400).send(error);
    }

    if (category.id) {
      app
        .db("categories")
        .update(category)
        .where({ id: category.id })
        .then(() => res.status(204).send())
        .catch((error) => res.status(500).send(error));
    } else {
      app
        .db("categories")
        .insert(category)
        .then(() => res.status(204).send())
        .catch((error) => res.status(500).send(error));
    }
  };

  const remove = async (req, res) => {
    try {
      const subCategory = app
        .db("categories")
        .where({ parentId: req.params.id });

      notExists(subCategory, "Category has subcategories.");

      const articles = app.db("articles").where({ categoryId: req.params.id });

      notExists(articles, "Category has articles.");

      const deletedRows = await app
        .db("categories")
        .where({ id: req.params.id })
        .del();

      exists(deletedRows, "Category not found.");

      return res.status(204).send();
    } catch (error) {
      return res.status(400).send(error);
    }
  };

  const get = (req, res) => {
    app
      .db("categories")
      .then((categories) => res.json(withPath(categories)))
      .catch((error) => res.status(500).send(error));
  };

  const getById = (req, res) => {
    app
      .db("categories")
      .where({ id: req.params.id })
      .first()
      .then((category) => res.json(category))
      .catch((error) => res.status(500).send(error));
  };

  const getTree = (req, res) => {
    app
      .db("categories")
      .then((categories) => res.json(generateCategoriesTree(categories)))
      .catch((error) => res.status(500).send(error));
  };

  return { persist, remove, get, getById, getTree };
};
