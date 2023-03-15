module.exports = (app) => {
  function exists(value, message) {
    if (!value) throw message;
    if (Array.isArray(value) && value.length === 0) throw message;
    if (typeof value === "string" && !value.trim()) throw message;
  }

  function notExists(value, message) {
    try {
      exists(value, message);
    } catch (error) {
      return;
    }

    throw message;
  }

  function equals(firstValue, secondValue, message) {
    if (firstValue !== secondValue) throw message;
  }

  return { exists, notExists, equals };
};
