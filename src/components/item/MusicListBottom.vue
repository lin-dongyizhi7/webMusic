<template>
  <div class="musicPlay">
    <div class="music" @click="out">
      <img :src="playlist[playlistIndex].al.picUrl" alt="" />
    </div>
    <div class="info" @click="out">
      <span>{{ playlist[playlistIndex].name }} {{ " - " }}</span>
      <span v-for="singer in playlist[playlistIndex].ar" :key="singer">
        {{ singer.name }} {{ " " }}</span
      >
      <span> {{ "- " }} {{ playlist[playlistIndex].al.name.slice(0, 20) }}</span>
      <span v-if="playlist[playlistIndex].al.name.length > 20">...</span>
    </div>
    <div id="bofang" class="playIcon">
      <svg
        t="1677578571260"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2553"
        width="200"
        height="200"
        @click="play"
        aria-hidden="true"
        v-if="toPlay"
      >
        <path
          d="M725.632 827.904c-63.104 42.88-136.832 65.408-213.504 65.408-210.304 0-381.312-171.008-381.312-381.184 0-75.52 22.016-148.608 63.744-211.072 8.576-12.672 4.992-29.952-7.68-38.528-12.672-8.576-29.952-4.992-38.528 7.68-47.872 71.68-73.088 155.392-73.088 241.92 0 240.768 195.968 436.608 436.864 436.608 87.68 0 172.416-25.856 244.736-74.88 12.672-8.576 16-25.856 7.424-38.656-8.704-12.544-25.984-15.872-38.656-7.296zM512 75.136c-93.312 0-182.272 28.928-257.408 83.84-12.416 9.088-15.104 26.496-6.016 38.784 9.088 12.416 26.496 15.104 38.784 6.016 65.536-47.744 143.232-73.088 224.64-73.088 210.176 0 381.184 171.136 381.184 381.312 0 81.408-25.216 159.104-73.088 224.512-9.088 12.416-6.272 29.824 6.016 38.784 4.864 3.712 10.624 5.376 16.384 5.376 8.576 0 17.024-3.968 22.4-11.52 54.912-75.136 83.84-164.096 83.84-257.28C948.864 271.104 753.024 75.136 512 75.136z m-84.864 611.968c4.864 0 9.6-1.152 13.952-3.84l251.904-145.408c8.576-4.864 13.824-14.08 13.824-24.064 0-9.984-5.248-19.072-13.824-24.064L441.216 344.32c-8.704-4.864-19.2-4.864-27.904 0-8.576 4.864-13.824 14.08-13.824 24.064V659.2c0 9.984 5.248 19.072 13.824 24.064 4.224 2.56 9.088 3.84 13.824 3.84z m27.904-270.592l168.576 97.28-168.576 97.28v-194.56z"
          fill="#040000"
          p-id="2554"
        ></path>
      </svg>
      <svg
        t="1677805125292"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2053"
        width="200"
        height="200"
        @click="play"
        aria-hidden="true"
        v-else
      >
        <path
          d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64z m0 68c-209.868 0-380 170.132-380 380s170.132 380 380 380 380-170.132 380-380-170.132-380-380-380zM400 352c17.673 0 32 14.327 32 32v256c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32V384c0-17.673 14.327-32 32-32z m225 0c17.673 0 32 14.327 32 32v256c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32V384c0-17.673 14.327-32 32-32z"
          fill="#000000"
          p-id="2054"
        ></path>
      </svg>
    </div>
    <div id="liebiao" class="playIcon">
      <svg
        t="1677578518612"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1507"
        width="200"
        height="200"
        @click="listOut"
      >
        <path
          d="M736 352a32 32 0 0 1 31.264 25.088c4.384 18.816 9.792 32.256 15.232 39.712l2.336 3.008c0.8 0.896 1.088 1.024 1.28 1.024 46.624 0 65.76 39.68 65.088 101.024a32 32 0 0 1-64-0.704c0.192-16.32-1.344-28.16-3.776-34.944l-0.608-1.504-1.92-0.032a65.088 65.088 0 0 1-12.896-2.24V736c0 57.824-66.816 96-144 96S480 793.824 480 736s66.816-96 144-96c29.184 0 56.864 5.44 80.032 15.36L704 384.704c0-1.408 0.032-2.816 0.192-4.224L704 384a32 32 0 0 1 32-32zM416 704a32 32 0 0 1 0 64H224a32 32 0 0 1 0-64h192z m208 0c-46.528 0-80 19.136-80 32s33.472 32 80 32 80-19.136 80-32-33.472-32-80-32zM544 448a32 32 0 0 1 0 64H224a32 32 0 0 1 0-64h320z m256-256a32 32 0 0 1 0 64H224a32 32 0 1 1 0-64h576z"
          fill="#000000"
          p-id="1508"
        ></path>
      </svg>
    </div>
    <van-popup
      v-model:show="list"
      position="bottom"
      :style="{ height: '60%', width: '100%' }"
    >
      <ListPlaying/>
    </van-popup>
    <van-popup
      v-model:show="detail"
      position="right"
      :style="{ height: '100%', width: '100%' }"
    >
      <MusicDetail
        :music="playlist[playlistIndex]"
        :playlist="playlist"
        :playlistIndex="playlistIndex"
        :toPlay="toPlay"
        :play="play"
        :getDuration="getDuration"
        :moveTime="moveTime"
      />
    </van-popup>
  </div>
  <!-- <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330  src="//music.163.com/outchain/player?type=2&id=298317"></iframe> -->

  <audio ref="audio" @timeupdate="updateTime" :src="`${this.url[this.playlistIndex]}`"></audio>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { reactive, onMounted } from "vue";
import { getMusicUrl } from "@/request/api/item";
import MusicDetail from "@/components/item/MusicDetail.vue";
import ListPlaying from "./ListPlaying.vue";
export default {
  setup(props) {

  },
  computed: {
    ...mapState([
      "playlist",
      "playlistIndex",
      "toPlay",
      "detail",
      "currentTime",
      "duration",
      "url",
      "list",
      "MoShi",
    ]),
  },
  mounted() {
    // console.log(this.$refs);
    // console.log(this.playlist);
    // console.log("mounted");
    this.$store.dispatch("getLyric", this.playlist[this.playlistIndex].id);
    this.updateTime();
  },
  updated() {
    this.$store.dispatch("getLyric", this.playlist[this.playlistIndex].id);
    this.getDuration();
  },
  methods: {
    play: function () {
      if (this.$refs.audio.paused) {
        // console.log("1");
        this.updatePlayState(false);
        // this.toPlay=false;
        this.$refs.audio.play();
      } else {
        // console.log("0");
        this.updatePlayState(true);
        // this.toPlay=true;
        this.$refs.audio.pause();
      }
    },
    out: function () {
      // console.log("2");
      this.updateDetailShow();
    },
    listOut: function(){
      this.updateListShow();
    },
    getDuration: function () {
      this.updateDuration(this.$refs.audio.duration);
    },
    updateTime: function () {
      this.updateCurrentTime(this.$refs.audio.currentTime);
    },
    moveTime: function (i) {
      this.$refs.audio.currentTime = i;
      this.updateCurrentTime(this.$refs.audio.currentTime);
    },
    ...mapMutations([
      "updatePlayState",
      "updateDetailShow",
      "updateCurrentTime",
      "updateDuration",
      "updateMusicUrl",
      "updateListShow",
    ]),
  },
  watch: {
    playlistIndex: function () {
      console.log(this.playlist[this.playlistIndex]);
      this.getDuration();
      // console.log(this.duration);
      this.$refs.audio.autoplay = true;
      if (this.$refs.audio.paused) {
        this.updatePlayState(false);
      }
    },
    playlist: function () {
      // console.log(this.playlist);
      
      // this.updateMusicUrl(this.getURL());
      // console.log(this.url);
      if (this.playlistIndex === 0) {
        console.log("first");
        // console.log(this.$refs.audio);
        this.$refs.audio.autoplay = true;
        this.updatePlayState(false);
      }
      if (this.toPlay) {
        this.$refs.audio.autoplay = true;
        this.updatePlayState(false);
      }
    },
  },
  components: {
    MusicDetail,
    ListPlaying,
},
};
</script>
<style lang="less" scoped>
audio {
  position: absolute;
  top: 60%;
  left: 20%;
  z-index: 100;
}
.musicPlay {
  background-color: rgba(214, 24, 24, 0.9);
  width: 100%;
  height: 3rem;
  padding: 4px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  border: 1px solid;
  border-bottom: 0;
  z-index: 200;
  align-items: center;

  .music {
    position: absolute;
    left: 1rem;
    top: 0.2rem;

    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    border: 0.2rem solid;
    // background-color: aqua;

    img {
      width: 2.156rem;
      height: 2.16rem;
      border-radius: 100%;
    }
  }
  .info {
    position: absolute;
    left: 4rem;
    width: 50%;
    font-size: xx-small;
    // font-weight: 400;
  }

  .playIcon {
    margin: 0 10px 0 0px;
  }
}
</style>
