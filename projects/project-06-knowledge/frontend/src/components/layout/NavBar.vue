<template>
  <aside class="menu" v-show="isMenuOpen">
    <div class="menu-filter">
      <i class="fa fa-search fa-lg"></i>
      <input
        type="text"
        placeholder="Type to filter..."
        v-model="treeFilter"
        class="filter-field"
      />
    </div>
    <app-nav-tree
      :data="treeData"
      :options="treeOptions"
      :filter="treeFilter"
      ref="tree"
    />
  </aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import LiquorTree from "liquor-tree";

export default {
  name: "app-nav-bar",
  components: { "app-nav-tree": LiquorTree },
  data() {
    return {
      treeFilter: "",
      treeData: this.fetchTreeData(),
      treeOptions: {
        propertyNames: { text: "name" },
        filter: { emptyText: "Category not found." },
      },
    };
  },
  computed: {
    ...mapGetters(["isMenuOpen"]),
  },
  methods: {
    ...mapActions(["toggleMenu"]),
    fetchTreeData() {
      return this.$http
        .get("/categories/tree")
        .then((response) => response.data);
    },
    onNodeSelect(node) {
      this.$router.push({
        name: "articlesByCategory",
        params: { id: node.id },
      });

      if (this.$mq === "xs" || this.$mq === "sm") {
        this.toggleMenu(false);
      }
    },
  },
  mounted() {
    this.$refs.tree.$on("node:selected", this.onNodeSelect);
  },
};
</script>

<style>
.menu {
  grid-area: menu;
  background: linear-gradient(to right, #232526, #414345);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.menu a,
.menu a:hover {
  color: #fff;
  text-decoration: none;
}

.menu .tree-node.selected > .tree-content,
.menu .tree-node .tree-content:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.tree-arrow.has-child {
  filter: brightness(2);
}

.menu .menu-filter {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #aaa;
}

.menu .menu-filter i {
  color: #aaa;
  margin-right: 10px;
}

.menu input {
  color: #ccc;
  font-size: 1.3rem;
  border: 0;
  outline: 0;
  width: 100%;
  background: transparent;
}

.tree-filter-empty {
  color: #ccc;
  font-size: 1.3rem;
  margin-left: 20px;
}
</style>
