export default {
  computed: {
    textWithCommas() {
      return this.inputValue.trim().replaceAll(" ", ",");
    },
    textWithLength() {
      const strArr = this.inputValue.split(" ");
      const newArr = strArr.map((item) => {
        return `${item} (${item.length})`;
      });

      return newArr.join(" ");
    },
  },
};
