<template>
  <router-view />
  <MusicListBottom />
</template>
<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getMusicItemList, getMusicUrl } from "@/request/api/item";
import { getUserDetail, getUserPlaylist } from "@/request/api/home";
import MusicListBottom from "./components/item/MusicListBottom.vue";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return { uid: 395095584 };
  },
  components: { MusicListBottom },
  computed: {
    ...mapState(["user", "userPlaylist"]),
  },
  mounted() {
    this.me();
    this.getLists();
  },
  methods: {
    me: async function () {
      let res = await getUserDetail(this.uid);
      // console.log(res.data);
      this.updateUser(res.data);
    },
    getLists: async function () {
      // console.log(this.uid);
      let res = await getUserPlaylist(this.uid);
      // console.log(res.data.playlist);
      this.updateUserPlaylist(res.data.playlist);
    },
    ...mapMutations(["updateUser", "updateUserPlaylist"]),
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: 2rem;
  height: 2rem;
}
a {
  color: black;
}
</style>
