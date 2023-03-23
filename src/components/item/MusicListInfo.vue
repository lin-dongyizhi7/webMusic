<template>
  <div class="cover">
    <img :src="playlist.coverImgUrl" alt="" />
    <div class="playCount">{{ tranceCount(playlist.playCount) }}</div>
  </div>
  <div class="info">
    <div class="listName">{{ playlist.name }}</div>
    <div class="usr">
      <div class="usrCover"><img :src="creator.avatarUrl" alt="" /></div>
      <div class="usrName">{{ creator.nickname }}</div>
      <div class="musicInfo">
        <svg
          t="1677749515956"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2023"
          width="200"
          height="200"
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
      </div>
    </div>
    <div class="tags">
      <span v-for="item in playlist.tags" :key="item" class="tag">{{ item }}</span>
    </div>
  </div>
  <div class="icons">
    <span id="fenxiang" class="listIcon">
      <svg
        t="1677659442271"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1903"
        width="200"
        height="200"
      >
        <path
          d="M576 192a128 128 0 1 1-60.96 240.576l-118.4 107.68c12.256 19.648 19.36 42.88 19.36 67.744l-0.032-1.376 202.176 47.36a128.064 128.064 0 0 1 111.456-77.824L736 576a128 128 0 1 1-127.296 141.568l-208-48.8a128 128 0 1 1-50.56-172.704l117.888-107.264A128 128 0 0 1 576 192z m160 448a64 64 0 1 0 0 128 64 64 0 0 0 0-128zM288 544a64 64 0 1 0 0 128 64 64 0 0 0 0-128z m288-288a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"
          fill="#000000"
          p-id="1904"
        ></path>
      </svg>
      <div>{{ tranceCount(playlist.shareCount) }}</div>
    </span>
    <span id="pinglun" class="listIcon" @click="openComments">
      <svg
        t="1677659813961"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3203"
        width="200"
        height="200"
      >
        <path
          d="M869.084233 187.133028l-0.822738 472.610898-171.140799-0.297782c-11.939937-0.021489-23.394826 2.27481-34.3309 6.904247-10.936073 4.630461-20.73423 11.253298-29.396517 19.84907l-121.602545 121.17992L389.615137 685.774789c-3.971451-4.656043-8.450463-8.643867-13.402241-11.963473-4.969175-3.317559-10.103102-5.968945-15.399735-7.986905-5.315052-1.998517-10.93812-3.672646-16.906042-4.985548-5.948479-1.331321-11.935843-2.010797-17.925255-2.038426l-171.123402-0.298805 0.822738-472.610898 713.366194 1.24127L869.084233 187.133028zM889.121592 97.607038 135.973346 96.296183c-19.22997-0.033769-35.667338 6.567579-49.295729 19.813255-13.627369 13.246699-20.458961 29.481452-20.491707 48.711422L65.290517 679.186743c-0.033769 19.232017 6.740518 35.505655 20.321838 48.79124s29.996175 19.952424 49.227168 19.986193l191.023638 0.330528 172.844603 174.410262c3.287883 3.316535 7.609305 4.988618 12.910031 4.998851 1.338485 0.002047 2.659573-0.321318 3.980661-0.970094l7.966439-3.984754 173.435051-173.808558 191.022615 0.332575c19.232017 0.032746 35.669384-6.576789 49.298799-19.813255 13.626345-13.238512 20.456914-29.488615 20.48966-48.720631l0.896416-514.364861c0.032746-19.22997-6.741541-35.489282-20.320814-48.783053-13.58132-13.292748-29.997198-19.952424-49.228191-19.98517L889.121592 97.606015zM245.818103 421.330978c0.028653-16.255219 5.860475-30.18344 17.496489-41.769312 11.615549-11.594059 25.41074-17.377786 41.331337-17.350157 6.621814 0.01228 12.93459 1.026376 18.900465 3.02694 5.948479 2.00875 11.425214 4.840238 16.411785 8.495488 4.968152 3.663436 9.284457 7.975649 12.912078 12.948917 3.609201 4.972245 6.421246 10.458189 8.438183 16.45067 1.997494 5.982248 2.980891 12.298094 2.952238 18.918885-0.042979 24.530696-11.343349 42.086537-33.939997 52.65729-7.966439 3.975545-16.600073 5.959735-25.898857 5.944386-15.902178-0.027629-29.677926-5.859451-41.252543-17.485233C251.573177 451.534883 245.789451 437.586197 245.818103 421.330978L245.818103 421.330978zM452.760293 422.206928c0.020466-11.271718 2.697435-21.388123 8.03193-30.334889 5.297656-8.945743 12.456706-16.070001 21.420869-21.355377 8.964162-5.294586 18.917862-7.927553 29.881564-7.90811 10.945283 0.01842 20.891819 2.686179 29.836539 8.011464 8.964162 5.325285 16.080234 12.465916 21.364587 21.430078 5.285377 8.965186 7.927553 19.080567 7.90811 30.361495-0.027629 15.920598-5.859451 29.667693-17.493419 41.261753-11.634991 11.585873-25.575492 17.368576-41.821501 17.339924-16.264429-0.027629-30.18344-5.859451-41.776476-17.485233C458.515367 451.895087 452.733687 438.117292 452.760293 422.206928L452.760293 422.206928zM661.715325 422.054455c0.027629-16.254196 5.859451-30.18344 17.494443-41.769312 11.632945-11.594059 25.41074-17.376763 41.331337-17.349133 11.252275 0.019443 21.379936 2.696412 30.325679 8.021697 8.946766 5.316076 16.060791 12.464893 21.347191 21.430078 5.302773 8.964162 7.92653 19.080567 7.907087 30.352285-0.027629 15.920598-5.860475 29.668717-17.476023 41.262776-11.633968 11.584849-25.574469 17.368576-41.838897 17.339924-16.264429-0.019443-30.184463-5.851265-41.778522-17.486256-11.593036-11.634991-17.359366-25.574469-17.330714-41.829687L661.715325 422.054455zM661.715325 422.054455"
          fill="#272636"
          p-id="3204"
        ></path>
      </svg>
      <div>{{ tranceCount(playlist.commentCount) }}</div>
    </span>
    <span id="shoucang" class="listIcon">
      <svg
        t="1677659879387"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="8492"
        width="200"
        height="200"
      >
        <path
          d="M511.971557 65.946944l135.447026 291.287904 307.955682 45.423961-222.056896 232.836909 51.112622 322.376438-272.486879-146.852793-272.486879 146.881236 51.112622-322.404882-221.971565-232.836909 307.955682-45.423961L511.971557 65.946944M511.971557 0.015359c-28.357977 0-54.212942 16.667777-66.272905 42.75029l-114.683413 248.167851-263.925443 40.901475c-27.106472 4.20961-49.605127 23.494171-58.365665 49.918003-8.703652 26.452275-2.104805 55.578221 17.03754 75.43165L219.119271 658.47791l-44.855095 279.114168c-4.522486 28.130431 7.13927 56.317747 30.064575 72.786422C216.900693 1019.395028 231.691212 1023.974401 246.510176 1023.974401c12.202179 0 24.375914-3.071877 35.411917-9.244074l230.049465-124.97989 230.106352 124.97989C753.142354 1020.874081 765.344533 1023.974401 777.489824 1023.974401c14.790519 0 29.581039-4.579373 42.209868-13.567457 22.868418-16.440231 34.530175-44.655992 29.979245-72.786422l-44.855095-279.114168 193.442929-201.293281c19.142345-19.853428 25.712749-48.979374 16.980654-75.43165-8.760539-26.423832-31.259194-45.708394-58.365665-49.918003l-263.868556-40.901475-114.740299-248.167851C566.269829 16.683137 540.386421 0.015359 511.971557 0.015359L511.971557 0.015359z"
          fill="#272636"
          p-id="8493"
        ></path>
      </svg>
      <div>{{ tranceCount(playlist.subscribedCount) }}</div>
    </span>
  </div>
</template>
<script>
import { tranceCount, getUsrInfo } from "@/request/api/home.js";
import { getComments } from "@/request/api/item";
import { reactive, onMounted } from "vue";
import { mapMutations, mapState } from "vuex";
export default {
  setup(props) {
    return { tranceCount };
  },
  props: ["playlist", "creator",],
  async mounted() {},
  computed: {
    ...mapState(["comments"]),
  },
  methods: {
    openComments: async function () {
      // console.log(this.playlist);
      let id = this.playlist.id;
      console.log(id);
      let info = { type: "playlist", id: id, limit: 100 };
      let res = await getComments(info);
      // console.log(res.data);
      // this.comments=res.data;
      this.updateComments(res.data);
      this.$router.push("/commentsPage");
    },
    ...mapMutations(["updateComments", "updateMusicList"]),
  },
};
</script>
<style lang="less" scoped>
.cover {
  img {
    width: 9rem;
    // height: ;
    position: absolute;
    top: 4rem;
    left: 1rem;
    border-radius: 1rem;
  }
  .playCount {
    position: absolute;
    top: 4.5rem;
    right: 14rem;
    color: aliceblue;
    font-size: xx-small;
  }
}
.info {
  position: absolute;
  top: 4.5rem;
  left: 10.5rem;
  width: 12.5rem;
  height: 8rem;
  padding-left: 0.5rem;
  //   background-color: aqua;

  font-size: smaller;

  .listName {
    position: absolute;
    top: 0.5rem;
    // background-color: antiquewhite;
    width: 11.5rem;
  }
  .usr {
    position: absolute;
    top: 3.5rem;
    width: 11.5rem;
    height: 2rem;
    // background-color: brown;
    display: flex;
    align-items: center;

    .usrCover {
      position: absolute;
      left: 0.2rem;
      img {
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 100%;
      }
    }

    .usrName {
      position: absolute;
      left: 3.2rem;
    }

    .musicInfo {
      position: absolute;
      right: 0rem;
    }
  }
  .tags {
    position: absolute;
    bottom: 0.5rem;
    width: 11.5rem;
    height: 1.5rem;
    // background-color:blueviolet;
    font-size: xx-small;
    padding-top: 0.5rem;

    .tag {
      // border: .02rem solid #ccc;
      background-color: #eee;
      margin: 0.2rem;
      padding: 0.2rem;
      border-radius: 0.3rem;
    }
  }
}
.icons {
  position: absolute;
  top: 15rem;
  left: 5%;
  width: 90%;
  display: flex;
  justify-content: space-between;

  .listIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: small;
    padding: 0.2rem;
    border: 1px solid #eee;
    border-radius: 1rem;
    width: 6rem;
  }
}
</style>
