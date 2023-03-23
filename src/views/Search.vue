<template>
  <div class="searchTop">
    <svg
      id="return"
      t="1677822913246"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3371"
      width="200"
      height="200"
      @click="$router.push('/')"
    >
      <path
        d="M631.04 161.941333a42.666667 42.666667 0 0 1 63.061333 57.386667l-2.474666 2.730667-289.962667 292.245333 289.706667 287.402667a42.666667 42.666667 0 0 1 2.730666 57.6l-2.474666 2.752a42.666667 42.666667 0 0 1-57.6 2.709333l-2.752-2.474667-320-317.44a42.666667 42.666667 0 0 1-2.709334-57.6l2.474667-2.752 320-322.56z"
        fill="#111111"
        p-id="3372"
      ></path>
    </svg>
    <div class="searchInput">
      <input
        type="text"
        :placeholder="this.defaultSearch"
        v-model="searchKey"
        @keydown.enter="toSearch"
      />
      <div id="advice">
        <div
          class="advice"
          v-for="item in this.searchAdvice"
          :key="item"
          @click="useAdvice(item.keyword)"
        >
          {{ item.keyword }}
        </div>
      </div>
    </div>
  </div>
  <NormalBack />
  <div class="searchHistory">
    <p>历史记录</p>
    <svg
      id="del"
      t="1677934362400"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2787"
      width="200"
      height="200"
      @click="delHistory"
    >
      <path
        d="M840 288H688v-56c0-40-32-72-72-72h-208C368 160 336 192 336 232V288h-152c-12.8 0-24 11.2-24 24s11.2 24 24 24h656c12.8 0 24-11.2 24-24s-11.2-24-24-24zM384 288v-56c0-12.8 11.2-24 24-24h208c12.8 0 24 11.2 24 24V288H384zM758.4 384c-12.8 0-24 11.2-24 24v363.2c0 24-19.2 44.8-44.8 44.8H332.8c-24 0-44.8-19.2-44.8-44.8V408c0-12.8-11.2-24-24-24s-24 11.2-24 24v363.2c0 51.2 41.6 92.8 92.8 92.8h358.4c51.2 0 92.8-41.6 92.8-92.8V408c-1.6-12.8-12.8-24-25.6-24z"
        fill="#272636"
        p-id="2788"
      ></path>
      <path
        d="M444.8 744v-336c0-12.8-11.2-24-24-24s-24 11.2-24 24v336c0 12.8 11.2 24 24 24s24-11.2 24-24zM627.2 744v-336c0-12.8-11.2-24-24-24s-24 11.2-24 24v336c0 12.8 11.2 24 24 24s24-11.2 24-24z"
        fill="#272636"
        p-id="2789"
      ></path>
    </svg>
    <div class="history">
      <div class="one" v-for="item in history" :key="item" @click="searchHistory(item)">
        {{ item }}
      </div>
    </div>
  </div>
  <div class="hot">
    <div
      class="song"
      v-for="(item, index) in this.hotSearch"
      @click="searchThem(item.first)"
    >
      {{ index + 1 }}.{{ item.first }}
    </div>
  </div>
</template>
<script>
import NormalBack from "@/components/item/NormalBack.vue";
import SearchList from "@/components/item/SearchList.vue";
import {
  getSearch,
  getDefaultSearch,
  getHotSearch,
  getSearchAdvice,
} from "@/request/api/home";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      history: [],
      searchKey: "",
      // searchList: [],
      defaultSearch: "",
      hotSearch: [],
      searchAdvice: [],
    };
  },
  computed: { ...mapState(["searchList"]) },
  async mounted() {
    this.history = JSON.parse(localStorage.getItem("history")) || [];
    let res = await getDefaultSearch();
    // console.log(res);
    this.defaultSearch = res.data.data.showKeyword;
    // console.log(res.data.data);
    // console.log(this.defaultSearch);
    res = await getHotSearch();
    // console.log(res.data.result.hots);
    this.hotSearch = res.data.result.hots;
  },
  methods: {
    useAdvice: function (name) {
      console.log(name);
      this.searchKey = name;
      let ad = document.getElementById("advice");
      ad.style.display = "none";
    },
    searchThem: function (item) {
      this.searchKey = item;
      this.toSearch();
    },
    toSearch: async function () {
      this.history.unshift(this.searchKey);
      this.history = [...new Set(this.history)];
      if (this.history.length > 15) this.history.pop();
      localStorage.setItem("history", JSON.stringify(this.history));
      let res = await getSearch(this.searchKey);
      // console.log(res);
      // console.log(res.data.result.songs);
      for (let i in res.data.result.songs) {
        this.updateData(res.data.result.songs[i]);
      }
      this.updateSearchList(res.data.result.songs);
      this.$router.push("/searchList");
      this.searchKey = "";
    },
    delHistory: function () {
      this.history = [];
      localStorage.removeItem("history");
    },
    searchHistory: async function (key) {
      let res = await getSearch(key);
      // console.log(res);
      console.log(res.data.result.songs);
      for (let i in res.data.result.songs) {
        this.updateData(res.data.result.songs[i]);
      }
      this.updateSearchList(res.data.result.songs);
      // console.log(this.searchList);
      this.$router.push("/searchList");
    },
    updateData: function (item) {
      item.al = item.album;
      item.al.picUrl = item.album.artist.img1v1Url;
      item.ar = item.artists;
      item.mv = item.mvid;
    },
    ...mapMutations(["updateSearchList"]),
  },
  components: {
    NormalBack,
    SearchList,
  },
  watch: {
    searchKey: async function () {
      if (!this.searchKey) {
        let ad = document.getElementById("advice");
        ad.style.display = "none";
        return;
      }
      let res = await getSearchAdvice(this.searchKey);
      console.log(res.data.result.allMatch);
      this.searchAdvice = res.data.result.allMatch;
      let ad = document.getElementById("advice");
      ad.style.display = "block";
    },
  },
};
</script>
<style lang="less" scoped>
.searchTop {
  background-color: rgba(214, 24, 24, 0.9);
  width: 100%;
  height: 3.3rem;
  padding: 8px;
  display: flex;
  //   justify-content: space-between;
  position: fixed;
  top: 0;
  left: auto;
  border: 1px solid;
  z-index: 10;
  // border-radius: 5px;

  .searchInput {
    input {
      position: relative;
      top: 10%;
      left: 5%;
      width: 18rem;
      height: 1.5rem;
      border: 1px solid;
      border-radius: 0.6rem;
      box-shadow: 0 0 1px 1px;
      padding: 0.6rem;
    }
    #advice {
      position: relative;
      left: 1.5rem;
      top: 0.3rem;
      width: 17rem;
      height: 1.5rem;
      // border: 1px solid;
      // box-shadow: 0 0 1px 1px;
      display: none;
      // background-color: rgba(240, 240, 240, 1);
    }
    .advice {
      position: relative;
      // top: 0.3rem;
      width: 17rem;
      height: 1.5rem;
      border: 1px solid;
      box-shadow: 0 0 1px 1px;
      // display: none;
      background-color: rgba(240, 240, 240, 1);
    }
  }
}
#del {
  position: absolute;
  left: 18rem;
  top: 0rem;
}
.searchHistory {
  position: absolute;
  top: 3.2rem;
  left: 1rem;
  p {
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    font-weight: 700;
  }
  .history {
    display: flex;
    flex-wrap: wrap;
    .one {
      padding: 0.1rem 0.4rem;
      margin: 0.2rem 0.2rem;
      border-radius: 0.6rem;
      font-size: small;
      height: 1.4rem;
      background-color: rgba(240, 240, 240, 1);
    }
  }
}

.hot {
  position: absolute;
  bottom: 10%;
  left: 5%;
  height: 30%;
  width: 90%;
  background-color: rgba(100, 100, 100, 0.3);
  padding: 2%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .song {
    width: 45%;
    height: 18%;

    // background-color: #fff;
  }
}
</style>
