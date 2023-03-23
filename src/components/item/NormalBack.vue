<template>
  <div class="back">
    <img src="../../../source/kq_ll.jpg" alt="" />
  </div>
</template>
<style lang="less" scoped>
.back {
  position: fixed;
  top: 3rem;
  width: 100%;
  height: 100%;
  img {
    width:100%;
    filter: blur(10px);
    opacity: 0.7;
  }
  z-index: -100;
}
</style>
