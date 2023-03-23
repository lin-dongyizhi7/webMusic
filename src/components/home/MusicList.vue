<template>
  <div class="musicLists">
    <div class="musicTop">
      <div class="title">推荐歌单</div>
      <div class="more" @click="$router.push('/moreLists')">more +</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :width="120" :show-indicators="false" class="myLists">
        <van-swipe-item v-for="item in state.musicList" :key="item">
          <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
            <img :src="item.picUrl" :alt="item.name" />
            <div class="info">
              <div class="playCount">
                <svg
                  t="1677640050746"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1841"
                  width="200"
                  height="200"
                >
                  <path
                    d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z"
                    fill="#3D3D3D"
                    p-id="1842"
                  ></path>
                </svg>
                <div class="count">{{ tranceCount(item.playCount) }}</div>
              </div>
              <div class="name">{{ item.name }}</div>
            </div>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import { getMusicList,tranceCount } from "@/request/api/home.js";
import { reactive, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      musicList: [],
    });
    onMounted(async () => {
      let res = await getMusicList(12);
      // console.log(res);
      state.musicList = res.data.result;
    });
    return { state, tranceCount };
  },
};
</script>
<style lang="less" scoped>
.musicLists {
  position: relative;
  top: 3rem;
  left: 3%;
  // background-color: paleturquoise;
  width: 94%;
  // height: 10rem;
  padding-bottom: 0.2rem;

  .musicTop {
    height: 1.2rem;
    width: 100%;
    display: flex;
    font-size: small;
    margin-bottom: 0.4rem;

    .title {
      position: relative;
      top: 0.2rem;
      left: 4%;
      font-weight: 900;
    }
    .more {
      height: 1rem;
      position: relative;
      top: 0.3rem;
      left: 64%;
      border: 1px solid #ccc;
      text-align: center;
      padding: 0 0.5rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    // height: 8rem;

    .myLists {
      width: 100%;
      height: 100%;
      padding: 0.3rem;
      // height: 4rem;
      .van-swipe__track {
        .van-swipe-item {
          margin: 0.1rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
          .info {
            margin: 0 0.2rem;
            .playCount {
              height: 2rem;
              display: flex;
              .icon {
                width: 1.2rem;
              }
              .count {
                height: 1rem;
                position: relative;
                top: 0.5rem;
                left: 1rem;
              }
            }
            font-size: 1px;
          }
        }
      }
    }
  }
}
</style>
