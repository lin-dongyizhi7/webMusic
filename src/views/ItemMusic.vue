<template>
  <MusicListTop :playlist="state.playlist" />
  <!-- <MusicListBottom /> -->
  <MusicListInfo :playlist="state.playlist" :creator="state.creator" />
  <MusicListMain :itemList="state.itemList" />
</template>
<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getMusicItemList, getMusicUrl, getMusicDetail } from "@/request/api/item";
import MusicListTop from "@/components/item/MusicListTop.vue";
import MusicListInfo from "@/components/item/MusicListInfo.vue";
import MusicListMain from "@/components/item/MusicListMain.vue";
import { mapMutations, mapState } from "vuex";

export default {
  setup() {
    const state = reactive({
      playlist: {},
      itemList: [],
      URL: [],
      creator: {},
    });
    onMounted(async () => {
      let id = useRoute().query.id;
      // console.log(id);
      // console.log(num);
      // get page
      let res = await getMusicItemList(id);
      // console.log(res);
      state.playlist = res.data.playlist;
      state.creator = res.data.playlist.creator;
      // get musics
      state.itemList = res.data.playlist.tracks;
      // console.log(res.data.playlist.trackIds);
      // for (let i in res.data.playlist.trackIds) {
      //     console.log(res.data.playlist.trackIds[i].id);
      //     let info = await getMusicDetail(res.data.playlist.trackIds[i].id);
      // //     // console.log(info);
      // //     // state.itemList.push(info);
      // }

      console.log(state.itemList);
      for (let i in state.itemList) {
        let u = await getMusicUrl(state.itemList[i].id);
        // console.log(u);
        // state.url[i] = u.data.data[0];
        state.URL[i] = u.data.data[0].url;
      }
      // console.log(state.url);
      // f5
      // console.log(this.url);
      sessionStorage.setItem("itemDetail", JSON.stringify(state));
    });

    return { state };
  },
  mounted() {
    // console.log(state.URL);
  },
  computed: {
    ...mapState(["url"]),
  },
  methods: {
    ...mapMutations(["updateMusicUrl"]),
  },
  components: {
    MusicListTop,
    MusicListInfo,
    MusicListMain,
  },
};
</script>
