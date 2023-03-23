<template>
  <img :src="playlist.coverImgUrl" alt="" class="backImg" />
  <div class="listTop">
    <div class="back">
      <svg
        t="1677651312078"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2881"
        width="200"
        height="200"
        @click="$router.go(-1)"
      >
        <path
          d="M929.70745 487.72513 167.942967 487.72513l358.793666-318.918493c12.390191-11.012821 13.505595-29.982872 2.493797-42.37204-11.010775-12.388145-29.979802-13.506619-42.369993-2.492774L74.839499 490.168786c-6.407943 5.695722-10.073426 13.859659-10.073426 22.432918 0 8.573259 3.665483 16.737196 10.073426 22.432918l412.019914 366.227985c5.717212 5.082762 12.83533 7.581676 19.926842 7.581676 8.275477-0.002047 16.515139-3.403516 22.443152-10.07445 11.012821-12.389168 9.897418-31.359218-2.493797-42.37204L179.893136 548.100196l749.814314 0c16.575514 0 30.013571-13.612019 30.013571-30.187533S946.283987 487.72513 929.70745 487.72513z"
          fill="#272636"
          p-id="2882"
        ></path>
      </svg>
    </div>
    <div class="name">歌单</div>
    <div class="search">
      <svg
        t="1677651585398"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2760"
        width="200"
        height="200"
      >
        <path
          d="M934.242232 884.637975 738.287281 695.561689l1.836835-2.302439c52.767807-65.338101 81.829703-147.602709 81.829703-231.593636 0-203.716728-165.742858-369.473913-369.411491-369.473913-203.731054 0-369.505635 165.757185-369.505635 369.473913 0 203.715705 165.774581 369.45754 369.505635 369.45754 89.26607 0 175.511339-32.450063 242.841817-91.288123l2.209318-1.929955 195.485253 186.963159 1.959631 0 0.031722 1.61887c4.947685 3.483334 10.517541 5.319146 16.5837 5.319146 16.180518 0 29.308513-13.192464 29.308513-29.310559C940.96126 896.276037 938.72329 890.239554 934.242232 884.637975zM452.541305 772.413008c-171.358763 0-310.74637-139.388631-310.74637-310.74637 0-171.34239 139.387607-310.700321 310.74637-310.700321 171.309644 0 310.700321 139.357931 310.700321 310.700321C763.241626 633.024377 623.851972 772.413008 452.541305 772.413008z"
          fill="#272536"
          p-id="2761"
        ></path>
      </svg>
    </div>
    <div class="more">
      <svg
        t="1677651670949"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1469"
        width="200"
        height="200"
      >
        <path
          d="M440 112m72 0l0 0q72 0 72 72l0 0q0 72-72 72l0 0q-72 0-72-72l0 0q0-72 72-72Z"
          fill="#1A1A1A"
          p-id="1470"
        ></path>
        <path
          d="M440 440m72 0l0 0q72 0 72 72l0 0q0 72-72 72l0 0q-72 0-72-72l0 0q0-72 72-72Z"
          fill="#1A1A1A"
          p-id="1471"
        ></path>
        <path
          d="M440 768m72 0l0 0q72 0 72 72l0 0q0 72-72 72l0 0q-72 0-72-72l0 0q0-72 72-72Z"
          fill="#1A1A1A"
          p-id="1472"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  setup(props) {
    // console.log(props);
    if((props.playlist.creator=="")){
      props.playlist.creator=JSON.parse(sessionStorage.getItem().playlist),creator;
    }
  },
  props: ["playlist"],
};
</script>
<style lang="less" scoped>
img {
  width: 30rem;
  // height: ;
  z-index: -1;
  position: fixed;
  opacity: 0.4;
  filter: blur(0.2rem);
  top: 0;
}
.listTop {
  background-color: rgba(214, 24, 24, 0.4);
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  height: 3.2rem;
  top: 0;
  left: auto;
  border: 1px solid;
  font-size: 1.1rem;
  z-index: 10;

  .back {
    position: fixed;
    left: 0.5rem;
    top: 0.3rem;
  }
  .name {
    width: 6rem;
    position: fixed;
    left: 3.2rem;
    top: 0.6rem;
  }
  .search {
    position: fixed;
    right: 4rem;
    top: 0.3rem;
  }
  .more {
    position: fixed;
    right: 0.5rem;
    top: 0.3rem;
  }
}
</style>
