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
    <div style="font-size: medium; margin-left: 6.5rem">更多好歌单</div>
  </div>
  <NormalBack />
  <div class="lists">
    <div class="list" v-for="(item, index) in state.musicList">
      <router-link
        :to="{ path: '/itemMusic', query: { id: item.id, } }"
      >
        <!-- <div class="seq">{{ index + 1 }}</div> -->
        <img :src="item.picUrl" :alt="item.name" />
        <div class="info">{{ item.name }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import NormalBack from "@/components/item/NormalBack.vue";
import { getMusicList, tranceCount } from "@/request/api/home.js";
import { reactive, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      musicList: [],
    });
    onMounted(async () => {
      let res = await getMusicList(99);
      // console.log(res);
      state.musicList = res.data.result;
    });
    return { state, tranceCount };
  },
  components: {
    NormalBack,
  },
};
</script>
<style lang="less" scoped>
.searchTop {
  background-color: rgba(214, 24, 24, 0.9);
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  position: fixed;
  top: 0;
  left: auto;
  border: 1px solid;
  z-index: 10;
  // border-radius: 5px;
}
.lists {
  width: 94%;
  position: absolute;
  top: 4rem;
  left: 3%;
  //   height: 20rem;
  //   background-color: aqua;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .list {
    width: 30%;
    margin-bottom: 2rem;
    text-align: center;

    img {
      width: 100%;

      border-radius: 10px;
    }
    .info {
      font-size: xx-small;
    }
  }
}
</style>
