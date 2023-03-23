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
import NormalBack from "@/components/item/NormalBack.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["comments"]),
  },
  methods: {},
  components: {
    NormalBack,
  },
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
.commentList {
  width: 100%;
  position: absolute;
  top: 3rem;
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

    .user{
      // position: relative;
      // top: 0.2rem;
      height: 2rem;
      font-size: small;
      display: flex;
      align-items: center;

      .userCover{
        height: 2rem;
        width: 2rem;
        margin-right: 0.5rem;

        img{
          width: 2rem;
          height: 2rem;
          border-radius: 100%;
        }
      }

    }
    .cText{
      position: relative;
      top:0.4rem;
      left:1rem;
      width:17rem;
      font-size: xx-small;
    }
  }
}
</style>
