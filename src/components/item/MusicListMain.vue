<template>
  <div class="body">
    <div class="top">
      <div class="left">
        <span>
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
        </span>
        <span>播放全部</span>
        <span>{{}}</span>
      </div>
      <div class="right">
        <span
          ><svg
            t="1677684007678"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6575"
            width="200"
            height="200"
          >
            <path
              d="M554.666667 469.333333h341.333333v85.333334h-341.333333v341.333333h-85.333334v-341.333333H128v-85.333334h341.333333V128h85.333334z"
              fill="#2E2F30"
              p-id="6576"
            ></path></svg
        ></span>
        <span
          ><svg
            t="1677683617004"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1993"
            width="200"
            height="200"
          >
            <path
              d="M768 768a32 32 0 0 1 0 64H256a32 32 0 0 1 0-64h512zM512 192a32 32 0 0 1 32 32v345.504l128.64-128.608a32 32 0 0 1 42.496-2.496l2.784 2.496a32 32 0 0 1 2.496 42.464l-2.496 2.784-181.024 181.024a32 32 0 0 1-42.464 2.496l-2.784-2.496-181.024-181.024a32 32 0 0 1 42.464-47.744l2.784 2.496L480 565.024V224a32 32 0 0 1 32-32z"
              fill="#000000"
              p-id="1994"
            ></path></svg
        ></span>
        <span
          ><svg
            t="1677683641070"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2132"
            width="200"
            height="200"
          >
            <path
              d="M704 544a160 160 0 1 1 0 320 160 160 0 0 1 0-320z m-384 0a160 160 0 1 1 0 320 160 160 0 0 1 0-320z m384 64a96 96 0 1 0 0 192 96 96 0 0 0 0-192z m-384 0a96 96 0 1 0 0 192 96 96 0 0 0 0-192zM704 160a160 160 0 1 1 0 320 160 160 0 0 1 0-320z m-171.168 39.872a32 32 0 0 1 5.888 41.92l-2.432 3.2-192 223.84a32 32 0 0 1-43.968 4.416l-2.944-2.624-96-96a32 32 0 0 1 42.24-47.904l3.008 2.656 71.552 71.52 169.536-197.568a32 32 0 0 1 45.12-3.456zM704 224a96 96 0 1 0 0 192 96 96 0 0 0 0-192z"
              fill="#000000"
              p-id="2133"
            ></path></svg
        ></span>
      </div>
    </div>
    <div class="list">
      <div class="song" v-for="(item, index) in itemList">
        <div class="seq">{{ index + 1 }}</div>
        <div class="info" @click="playMusic(index)">
          <div class="songName">{{ item.name }}</div>
          <div class="singerName">
            <span v-for="ar in item.ar" :key="ar">{{ ar.name }} {{ " " }}</span>
            <!-- <span> {{ " " }} {{ item.al.name }}</span> -->
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
              <path
                d="M192 224a32 32 0 0 1 64 0v544a32 32 0 0 1-64 0z"
                p-id="2167"
              ></path>
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
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { getMusicUrl, getMvUrl, getComments } from "@/request/api/item";

export default {
  data() {
    return { mvID: 0 };
  },
  setup(props) {
    // console.log(props);
  },
  props: ["itemList"],
  mounted() {},
  computed: {
    ...mapState(["playlist", "playlistIndex"]),
  },
  methods: {
    playMV: function (i) {
      this.toGetMVUrl(i);
      this.MVComments(i);
      this.$router.push("/mvPage");
    },
    toGetMVUrl: async function (i) {
      this.mvID = this.itemList[i].mv;
      let res = await getMvUrl(this.mvID);
      // console.log(res.data.data);
      this.updateMVurl(res.data.data);
    },
    MVComments: async function (i) {
      // this.mvID = this.searchList[i].mv;
      console.log(this.mvID);
      let info = { type: "mv", id: this.mvID, limit: 100 };
      let res = await getComments(info);
      this.updateComments(res.data);
    },
    playMusic: function (i) {
      // this.updatePlayList(this.itemList);
      // console.log("append ");
      console.log(this.itemList[i]);
      console.log(this.itemList[i].mv);
      let index = this.playlist.indexOf(this.itemList[i]);
      // console.log(index);
      if (index == -1) {
        this.updateAppendMusic(this.itemList[i]);
        this.getUrl(i);
        this.updatePlayListIndex(this.playlistIndex);
      } else {
        // this.updatePlayList(this.itemList);
        this.updatePlayListIndex(index);
      }
    },
    playAll: function () {
      this.updatePlayList(this.itemList);
      this.updatePlayListIndex(0);
      // console.log(this.itemList);
      this.getAllURL();
    },
    getAllURL: async function () {
      // console.log("get");
      let URL = [];
      // console.log(this.itemList);
      for (let i in this.itemList) {
        // console.log(this.itemList[i]);
        let u = await getMusicUrl(this.itemList[i].id);
        // console.log(u);
        // console.log(u.data.data[0].url);
        URL[i] = u.data.data[0].url;
      }
      // console.log(URL);
      this.updateMusicUrl(URL);
    },
    getUrl: async function (i) {
      console.log("append");
      let URL = "";
      // console.log(this.itemList[i]);
      let u = await getMusicUrl(this.itemList[i].id);
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
};
</script>
<style lang="less" scoped>
.body {
  position: absolute;
  top: 18rem;
  width: 100%;
  // background-color: white;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  padding-top: 0.2rem;

  padding-bottom: 3rem;
}
.top {
  position: relative;
  top: 0rem;
  left: 1rem;
  width: 90%;
  display: flex;

  .left {
    display: flex;
    font-size: smaller;
    align-items: center;
  }
  .right {
    position: absolute;
    left: 14rem;
    display: flex;

    span {
      margin: 0.2rem;
    }
  }
}
.list {
  position: absolute;
  top: 2.5rem;
  width: 100%;
  //height: 10rem;
  // background-color: palevioletred;
  padding: 0.4rem;
  padding-bottom: 3rem;

  .song {
    //height: 2rem;
    // background-color: aqua;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0.4rem;

    .info {
      width: 80%;
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
      word-wrap: break-word;
    }
    .icons {
      position: absolute;
      right: 0.5rem;

      span {
        margin: 0.2rem;
      }
    }
  }
  #xiangqing {
  }
}
</style>
