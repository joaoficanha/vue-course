<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button
      v-for="button in buttons"
      :key="button.value"
      :label="button.label"
      :triple="button.triple"
      :double="button.double"
      :operation="button.operation"
      :onButtonClick="onButtonClick"
    />
  </div>
</template>

<script>
import Display from "./DisplayComponent.vue";
import Button from "./ButtonComponent.vue";
import buttons from "@/constants/buttons";

export default {
  components: { Display, Button },
  data() {
    return {
      buttons,
      displayValue: "0",
      clearDisplay: false,
      operator: null,
      values: [0, 0],
      current: 0,
    };
  },
  methods: {
    clear() {
      Object.assign(this.$data, this.$options.data());
    },
    addDigit(digit) {
      if (digit === "." && this.displayValue.includes(".")) return;

      const clearDisplay = this.displayValue === "0" || this.clearDisplay;
      const currentValue = clearDisplay ? "" : this.displayValue;

      this.displayValue = currentValue + digit;
      this.clearDisplay = false;
      this.values[this.current] = this.displayValue;
    },
    setOperator(operator) {
      if (this.current === 0) {
        this.operator = operator;
        this.current = 1;
        this.clearDisplay = true;
      } else {
        const isEqual = operator === "=";

        try {
          this.values[0] = eval(
            `${this.values[0]} ${this.operator} ${this.values[1]}`
          );
        } catch (err) {
          this.$emit("onError", err);
        }

        this.values[1] = 0;
        this.displayValue = this.values[0];
        this.operator = isEqual ? null : operator;
        this.current = isEqual ? 0 : 1;
        this.clearDisplay = !isEqual;
      }
    },
    onButtonClick(button) {
      if (button === "AC") {
        this.clear();
      } else if (["/", "*", "+", "-", "="].includes(button)) {
        this.setOperator(button);
      } else {
        this.addDigit(button);
      }
    },
  },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
