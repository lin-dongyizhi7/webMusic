<template>
  <img src="../../../source/kq_ll.jpg" alt="" />
  <div class="top">
    <span>
      <svg
        t="1677978723293"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3379"
        width="200"
        height="200"
        @click="updateListShow"
      >
        <path
          d="M794.8 794.8c-14 14-36.9 14-50.9 0L229.2 280.1c-14-14-14-36.9 0-50.9s36.9-14 50.9 0L794.9 744c13.9 13.9 13.9 36.8-0.1 50.8z"
          fill="#585757"
          p-id="3380"
        ></path>
        <path
          d="M794.8 229.2c14 14 14 36.9 0 50.9L280.1 794.8c-14 14-36.9 14-50.9 0s-14-36.9 0-50.9L744 229.1c13.9-13.9 36.8-13.9 50.8 0.1z"
          fill="#585757"
          p-id="3381"
        ></path></svg
    ></span>
    <span class="title">播放列表</span>
  </div>
  <div class="body">
    <div class="lists" v-for="(item,index) in this.playlist" @click="choose(index)">
      <div class="info">{{ item.name }}</div>
      <div v-if="this.playlistIndex==index">播放中</div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["playlist","playlistIndex"]),
  },
  methods: {
    choose: function(i){
      this.updatePlayListIndex(i);
    },
    ...mapMutations(["updateListShow","updatePlayListIndex"]),
  },
  components: {},
};
</script>
<style lang="less" scoped>
img {
  position: fixed;
  width: 100%;
//   height: 100%;
  z-index: -10;
  filter: blur(10px);
  opacity: 0.4;
}
.top {
  position: fixed;
  top: 17rem;
  height: 2rem;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  //   background-color: aqua;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  .title {
    font-size: small;
    margin-right: 0.5rem;
  }
}
.body {
  width: 90%;
  position: relative;
  top: 2rem;
  margin: 0 5%;
  padding-bottom: 2rem;

  .lists {
    margin: 2rem 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info {
        width:80%;
    }

    //   background-color: darkgrey;
  }
}
</style>
