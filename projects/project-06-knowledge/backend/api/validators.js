module.exports = (app) => {
  function exists(value, message) {
    if (
      !value ||
      (Array.isArray(value) && !value.length) ||
      (typeof value === "string" && !value.trim())
    ) {
      throw message;
    }
  }

  function notExists(value, message) {
    try {
      this.exists(value, message);
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
