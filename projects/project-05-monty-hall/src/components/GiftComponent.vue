<template>
  <div class="gift">
    <div class="gift-vertical-ribbon"></div>
    <div class="gift-horizontal-ribbon"></div>
    <div class="gift-box-lid"></div>
    <div class="gift-box"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.gift {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}

.gift-vertical-ribbon {
  position: absolute;
  width: 15px;
  height: 85px;
  background-color: red;
}

.gift-horizontal-ribbon {
  position: absolute;
  top: 40px;
  width: 90px;
  height: 15px;
  background-color: red;
}


.gift-box {
  width: 90px;
  height: 60px;
  background-color: #5c7e32;
}

.gift-box-lid {
  width: 100px;
  height: 25px;
  background-color: #7aa944;
}
</style>
