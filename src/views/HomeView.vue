<template>
  <TopNav />
  <BottomNav />
  <MainBody />
  <MusicList />
  <NormalBack />
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/home/TopNav.vue";
import BottomNav from "@/components/home/BottomNav.vue";
import MainBody from "@/components/home/MainBody.vue";
import MusicList from "@/components/home/MusicList.vue";
import NormalBack from "@/components/item/NormalBack.vue";
import { mapMutations, mapState } from "vuex";
import { getMusicUrl } from "@/request/api/item";

export default {
  name: "HomeView",
  components: {
    TopNav,
    BottomNav,
    MainBody,
    MusicList,
    NormalBack,
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped></style>
