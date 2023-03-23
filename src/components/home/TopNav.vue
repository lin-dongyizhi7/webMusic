<template>
  <div id="gengduo" class="topNav">
    <div class="topIcon">
      <svg
        t="1677576050223"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2400"
        width="200"
        height="200"
        @click="Page"
      >
        <path
          d="M256 448a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m256 0a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m256 0a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"
          fill="#000000"
          p-id="2401"
        ></path>
      </svg>
    </div>

    <div class="searchInput" @click="$router.push('/search')">
      <input />
    </div>
    <div id="shibie" class="topIcon">
      <svg
        t="1677575905357"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1847"
        width="200"
        height="200"
      >
        <path
          d="M487.04 652a32 32 0 0 1 49.92 0l128 160A32 32 0 0 1 640 864h-256a32 32 0 0 1-24.96-52zM512 723.2L450.528 800h122.912L512 723.2zM512 160c194.4 0 352 157.6 352 352 0 77.248-24.96 150.784-70.4 211.264a32 32 0 1 1-51.2-38.432A286.528 286.528 0 0 0 800 512a288 288 0 0 0-576 0c0 63.488 20.544 123.776 57.984 173.344a32 32 0 1 1-51.072 38.56A350.528 350.528 0 0 1 160 512C160 317.6 317.6 160 512 160z m0 192a160 160 0 0 1 120.416 265.376 32 32 0 1 1-48.16-42.176 96 96 0 1 0-144 0.64 32 32 0 0 1-47.776 42.56A160 160 0 0 1 512 352z"
          fill="#000000"
          p-id="1848"
        ></path>
      </svg>
    </div>
  </div>
  <div class="closePop" @click="updateUserPage"></div>
</template>
<script>
import User from "@/views/UserHome.vue";
import { mapState, mapMutations } from "vuex";

export default {
  setup() {},
  
  computed: {
    ...mapState(["userPage"]),
  },
  methods: {
    Page: function () {
      console.log("1");
      this.updateUserPage();
    },
    ...mapMutations(["updateUserPage"]),
  },
  components: {
    User,
  },
};
</script>
<style lang="less" scoped>
.topNav {
  background-color: rgba(214, 24, 24, 0.9);
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: auto;
  border: 1px solid;
  // border-radius: 5px;

  .searchInput {
    input {
      position: relative;
      top: 10%;
      width: 16rem;
      height: 1.5rem;
      border: 1px solid;
      border-radius: 0.6rem;
      box-shadow: 0 0 1px 1px;
    }
  }
}
.closePop {
  position: fixed;
  left: 80%;
  top: 0;
  height: 100%;
  width: 20%;
  // background-color: aqua;
}
</style>
