<template>
  <div>
    <div class="door-area">
      <div class="door-frame" :class="{ isSelected: isSelected && !isOpen }">
        <Gift v-if="shouldShowGift" />
      </div>
      <div class="door" :class="{ isOpen }" @click="toggleSelect">
        <div class="number" :class="{ isSelected }">
          {{ number }}
        </div>
        <div
          class="knob"
          :class="{ isSelected }"
          @click.stop="isOpen = true"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Gift from "./GiftComponent.vue";

export default {
  components: { Gift },
  props: {
    number: {
      type: String,
      required: true,
    },
    hasGift: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      isSelected: false,
    };
  },
  computed: {
    shouldShowGift() {
      return this.hasGift && this.isOpen;
    },
  },
  methods: {
    toggleSelect() {
      this.isSelected = !this.isSelected;
    },
  },
};
</script>

<style>
:root {
  --door-border: 5px solid brown;
  --selected-border: 5px solid yellow;
}

.door-area {
  position: relative;
  width: 200px;
  height: 310px;
  border-bottom: 10px solid #aaa;
  margin-bottom: 20px;
  font-size: 3rem;
  display: flex;
  justify-content: center;
}

.door-frame {
  position: absolute;
  height: 300px;
  width: 180px;
  border-left: var(--door-border);
  border-right: var(--door-border);
  border-top: var(--door-border);
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.door {
  position: absolute;
  top: 5px;
  height: 295px;
  width: 170px;
  background-color: chocolate;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  user-select: none;
}

.door.isOpen {
  background-color: #0007;
}

.door.isOpen .knob {
  display: none;
}

.door.isOpen .number {
  display: none;
}

.door .knob {
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: brown;
  align-self: flex-start;
  margin-top: 60px;
}

.door-frame.isSelected {
  border-left: var(--selected-border);
  border-right: var(--selected-border);
  border-top: var(--selected-border);
}

.door .knob.isSelected {
  background-color: yellow;
}

.door .number.isSelected {
  color: yellow;
}
</style>
