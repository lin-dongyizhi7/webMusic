<template>
  <div class="top">
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
      @click="$router.go(-1)"
    >
      <path
        d="M631.04 161.941333a42.666667 42.666667 0 0 1 63.061333 57.386667l-2.474666 2.730667-289.962667 292.245333 289.706667 287.402667a42.666667 42.666667 0 0 1 2.730666 57.6l-2.474666 2.752a42.666667 42.666667 0 0 1-57.6 2.709333l-2.752-2.474667-320-317.44a42.666667 42.666667 0 0 1-2.709334-57.6l2.474667-2.752 320-322.56z"
        fill="#111111"
        p-id="3372"
      ></path>
    </svg>
  </div>
  <div class="mvBox">
    <video :src="this.MVurl.url" class="mv" controls></video>
  </div>

  <div class="commentList">
    <div class="hot">
      <div style="font-size: medium">热评</div>
      <div class="one" v-for="item in this.comments.hotComments" :key="item">
        <div class="user">
          <span class="userCover"><img :src="item.user.avatarUrl" alt="" /></span>
          <span class="nickname">{{ item.user.nickname }}</span>
        </div>
        <div class="cText">{{ item.content }}</div>
      </div>
    </div>
    <div class="normal">
      <div style="font-size: medium">评论</div>
      <div class="one" v-for="item in this.comments.comments" :key="item">
        <div class="user">
          <span class="userCover"><img :src="item.user.avatarUrl" alt="" /></span>
          <span class="nickname">{{ item.user.nickname }}</span>
        </div>
        <div class="cText">{{ item.content }}</div>
      </div>
    </div>
  </div>
  <NormalBack />
</template>
<script>
import { mapState } from "vuex";
import NormalBack from "@/components/item/NormalBack.vue";

export default {
  setup() {},
  mounted() {},
  computed: {
    ...mapState(["MVurl", "comments"]),
  },
  methods: {},
  components: {
    NormalBack,
  },
};
</script>
<style lang="less" scoped>
.top {
  background-color: rgba(214, 24, 24, 1);
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: auto;
  border: 1px solid;
  z-index: 200;
}
.mvBox {
  width: 100%;
  height: 32%;
  position: fixed;
  top: 3rem;
  padding: 0.5rem 0;

  background-color: black;
  z-index: 200;

  .mv {
    width: 100%;
    height: auto;
  }
}
.commentList {
  width: 100%;
  position: absolute;
  top: 16rem;
  padding: 1rem 2rem 6rem 2rem;

  .hot,
  .normal {
    margin-bottom: 0.5rem;

    border-radius: 2rem;
  }
  .one {
    padding: 1rem 0.5rem;
    margin: 0.5rem 0;
    background-color: rgba(100, 100, 100, 0.3);
    // display: flex;

    .user {
      // position: relative;
      // top: 0.2rem;
      height: 2rem;
      font-size: small;
      display: flex;
      align-items: center;

      .userCover {
        height: 2rem;
        width: 2rem;
        margin-right: 0.5rem;

        img {
          width: 2rem;
          height: 2rem;
          border-radius: 100%;
        }
      }
    }
    .cText {
      position: relative;
      top: 0.4rem;
      left: 1rem;
      width: 17rem;
      font-size: xx-small;
    }
  }
}
</style>
