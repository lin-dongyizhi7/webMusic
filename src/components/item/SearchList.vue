<template>
  <div class="top">
    <svg
      t="1677986520615"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6377"
      width="200"
      height="200"
      @click="this.$router.go(-1)"
    >
      <path
        d="M584.533333 499.2c0 12.8 4.266667 29.866667 12.8 42.666667 4.266667 8.533333-4.266667 34.133333-12.8 38.4-21.333333 8.533333-21.333333-12.8-25.6-25.6-8.533333-29.866667-25.6-38.4-55.466666-21.333334-25.6 12.8-46.933333 34.133333-68.266667 51.2-21.333333 21.333333-21.333333 68.266667 4.266667 89.6 17.066667 17.066667 34.133333 29.866667 55.466666 42.666667 42.666667 25.6 85.333333 21.333333 123.733334-12.8 8.533333-8.533333 17.066667-17.066667 29.866666-25.6 17.066667-12.8 29.866667-8.533333 38.4 12.8 21.333333 51.2 59.733333 68.266667 110.933334 59.733333 34.133333-4.266667 68.266667 8.533333 98.133333 34.133334 8.533333 8.533333 21.333333 12.8 34.133333 21.333333 25.6-68.266667-12.8-102.4-46.933333-136.533333-55.466667-51.2-115.2-93.866667-179.2-136.533334-17.066667-12.8-25.6-21.333333-25.6-34.133333"
        p-id="6378"
      ></path>
      <path
        d="M584.533333 516.266667c0-12.8 4.266667-29.866667 12.8-42.666667 4.266667-8.533333-4.266667-34.133333-12.8-38.4-21.333333-8.533333-21.333333 12.8-25.6 25.6-8.533333 29.866667-29.866667 38.4-55.466666 21.333333-25.6-12.8-46.933333-34.133333-68.266667-51.2-21.333333-21.333333-17.066667-68.266667 4.266667-89.6 17.066667-17.066667 38.4-29.866667 55.466666-42.666666 42.666667-25.6 85.333333-21.333333 123.733334 12.8 8.533333 8.533333 17.066667 17.066667 29.866666 25.6 17.066667 12.8 29.866667 8.533333 38.4-8.533334 21.333333-51.2 59.733333-68.266667 110.933334-59.733333 34.133333 4.266667 68.266667-8.533333 98.133333-34.133333 8.533333-8.533333 21.333333-12.8 34.133333-21.333334 25.6 68.266667-12.8 102.4-46.933333 136.533334-55.466667 51.2-119.466667 93.866667-179.2 136.533333-17.066667 12.8-25.6 21.333333-25.6 29.866667M456.533333 507.733333c0-8.533333-8.533333-12.8-21.333333-17.066666-8.533333-8.533333-34.133333-21.333333-46.933333-42.666667-8.533333-17.066667-4.266667-21.333333-17.066667-29.866667 0 0-8.533333-8.533333-25.6-12.8-25.6-4.266667-128 34.133333-256 102.4 128 68.266667 230.4 106.666667 256 102.4 17.066667 0 29.866667-12.8 29.866667-12.8 12.8-8.533333 8.533333-17.066667 17.066666-34.133333s12.8-21.333333 46.933334-38.4c8.533333-4.266667 12.8-12.8 17.066666-17.066667z"
        p-id="6379"
      ></path>
    </svg>
    <svg
      t="1677684056527"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2275"
      width="200"
      height="200"
      @click="playAll"
    >
      <path
        d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z"
        fill="#3D3D3D"
        p-id="2276"
      ></path>
    </svg>
  </div>
  <div class="body">
    <div class="song" v-for="(item, index) in this.searchList">
      <div class="seq">{{ index + 1 }}</div>
      <div class="info" @click="playMusic(index)">
        <div class="songName">{{ item.name }}</div>
        <div class="singerName">
          <span v-for="ar in item.artists" :key="ar">{{ ar.name }} {{ " " }}</span>
          <span> {{ " " }} {{ item.alias[0] }}</span>
        </div>
      </div>
      <div class="icons">
        <span v-if="item.mv != 0">
          <svg
            t="1677750635109"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2164"
            width="200"
            height="200"
            @click="playMV(index)"
          >
            <path
              d="M624.32 484.48a32 32 0 0 1 0 55.04l-160 96A32 32 0 0 1 416 608V416a32 32 0 0 1 48.32-27.52zM480 472.64v78.72L545.92 512z"
              p-id="2165"
            ></path>
            <path
              d="M896 768V256H128v512z m0 64H128a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64h768a64 64 0 0 1 64 64v512a64 64 0 0 1-64 64z"
              p-id="2166"
            ></path>
            <path d="M192 224a32 32 0 0 1 64 0v544a32 32 0 0 1-64 0z" p-id="2167"></path>
            <path
              d="M224 384a32 32 0 0 1 0 64H96a32 32 0 0 1 0-64z m0 192a32 32 0 0 1 0 64H96a32 32 0 0 1 0-64z m544-352a32 32 0 0 1 64 0v544a32 32 0 0 1-64 0z"
              p-id="2168"
            ></path>
            <path
              d="M800 448a32 32 0 0 1 0-64h128a32 32 0 0 1 0 64z m0 192a32 32 0 0 1 0-64h128a32 32 0 0 1 0 64z"
              p-id="2169"
            ></path>
          </svg>
        </span>
        <span>
          <svg
            t="1677749515956"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2023"
            width="200"
            height="200"
            id="xiangqing"
          >
            <path
              d="M440 112m72 0l0 0q72 0 72 72l0 0q0 72-72 72l0 0q-72 0-72-72l0 0q0-72 72-72Z"
              fill="#1A1A1A"
              p-id="2024"
            ></path>
            <path
              d="M440 440m72 0l0 0q72 0 72 72l0 0q0 72-72 72l0 0q-72 0-72-72l0 0q0-72 72-72Z"
              fill="#1A1A1A"
              p-id="2025"
            ></path>
            <path
              d="M440 768m72 0l0 0q72 0 72 72l0 0q0 72-72 72l0 0q-72 0-72-72l0 0q0-72 72-72Z"
              fill="#1A1A1A"
              p-id="2026"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  </div>
  <NormalBack />
</template>
<script>
import { mapMutations, mapState } from "vuex";
import { getMusicUrl, getMvUrl, getComments } from "@/request/api/item";
import NormalBack from "./NormalBack.vue";

export default {
  data() {
    return { mvID: 0 };
  },
  computed: {
    ...mapState(["searchList", "playlist", "playlistIndex"]),
  },
  methods: {
    playMV: function (i) {
      this.toGetMVUrl(i);
      this.MVComments(i);
      this.$router.push("/mvPage");
    },
    toGetMVUrl: async function (i) {
      this.mvID = this.searchList[i].mv;
      let res = await getMvUrl(this.mvID);
      console.log(res.data.data);
      this.updateMVurl(res.data.data);
    },
    MVComments: async function (i) {
      this.mvID = this.searchList[i].mv;
      let info = { type: "mv", id: this.mvID, limit: 100 };
      let res = await getComments(info);
      this.updateComments(res.data);
    },
    playMusic: function (i) {
      // this.updatePlayList(this.searchList);
      console.log("append " + i);
      console.log(this.searchList[i]);
      let index = this.playlist.indexOf(this.searchList[i]);
      console.log(index);
      if (index == -1) {
        this.updateAppendMusic(this.searchList[i]);
        this.getUrl(i);
        this.updatePlayListIndex(this.playlistIndex);
      } else {
        // this.updatePlayList(this.searchList);
        this.updatePlayListIndex(index);
      }
    },
    playAll: function () {
      console.log(this.searchList);
      this.updatePlayList(this.searchList);
      this.updatePlayListIndex(0);
      this.getAllURL();
    },
    getAllURL: async function () {
      // console.log("get");
      let URL = [];
      console.log(this.searchList);
      for (let i in this.searchList) {
        // console.log(this.searchList[i]);
        let u = await getMusicUrl(this.searchList[i].id);
        // console.log(u);
        // console.log(u.data.data[0].url);
        URL[i] = u.data.data[0].url;
      }
      //   console.log(URL);
      this.updateMusicUrl(URL);
    },
    getUrl: async function (i) {
      console.log("append");
      let URL = "";
      // console.log(this.searchList[i]);
      let u = await getMusicUrl(this.searchList[i].id);
      URL = u.data.data[0].url;
      this.updateAppendMusicUrl(URL);
    },
    ...mapMutations([
      "updatePlayList",
      "updatePlayListIndex",
      "updateMusicUrl",
      "updateAppendMusic",
      "updateAppendMusicUrl",
      "updateMVurl",
      "updateComments",
    ]),
  },
  components: { NormalBack },
};
</script>
<style lang="less" scoped>
.top {
  position: fixed;
  top: 0.5rem;
  left: 4%;
  width: 92%;
  display: flex;
  padding-right: 2rem;
  justify-content: space-between;
  z-index: 10;
}
.body {
  position: relative;
  top: 2rem;
  left: 2%;
  width: 96%;
  margin-bottom: 6rem;
  //   background-color: antiquewhite;

  .song {
    //height: 2rem;
    // background-color: aqua;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0.4rem;

    .info {
      width: 72%;
    }
    .seq {
      position: relative;
      margin-right: 0.6rem;
    }
    .songName {
      margin-bottom: 0.5rem;
      font-size: xx-small;
    }
    .singerName {
      font-size: 1px;
      white-space: pre;

      span {
        word-wrap: break-word;
      }
    }
    .icons {
      position: absolute;
      right: 0.5rem;

      span {
        margin: 0.2rem;
      }
    }
  }
}
</style>
