<template>
  <div class="userInfo">
    <span>头像</span>
    <span>昵称</span>
    <span>关注</span>
  </div>
  <BottomNav />
  <NormalBack />
</template>
<script>
import BottomNav from "@/components/home/BottomNav.vue";
import NormalBack from "@/components/item/NormalBack.vue";

export default {
  components: {
    NormalBack,
    BottomNav,
  },
};
</script>
