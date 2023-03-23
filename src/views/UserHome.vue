<template>
  <div class="top">
    <svg
      t="1678064554974"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2175"
      width="200"
      height="200"
    >
      <path
        d="M608 736a32 32 0 0 1 0 64H224a32 32 0 0 1 0-64h384z m0-352a160 160 0 0 1 139.552 238.304l86.4 86.4a32 32 0 0 1-45.28 45.248l-83.104-83.136A160 160 0 1 1 608 384z m0 64a96 96 0 1 0 0 192 96 96 0 0 0 0-192z m-224 96a32 32 0 0 1 0 64H224a32 32 0 0 1 0-64h160z m0-160a32 32 0 0 1 0 64H224a32 32 0 0 1 0-64h160z m416-160a32 32 0 0 1 0 64H224a32 32 0 1 1 0-64h576z"
        fill="#000000"
        p-id="2176"
      ></path>
    </svg>
    <input type="text" placeholder="搜索歌单曲目" />
  </div>
  <div class="bigImg" id="me" @click="closeBigImg">
    <img :src="this.user.profile.avatarUrl" alt="" />
  </div>
  <div class="userInfo">
    <div class="userCover" @click="login">
      <img :src="this.user.profile.avatarUrl" alt="" />
    </div>
    <div class="userName">{{ this.user.profile.nickname }}</div>
    <div class="some">
      <span>{{ this.user.profile.follows }} 关注</span>
      <span>|</span>
      <span>{{ this.user.profile.followeds }} 粉丝</span>
      <span>|</span>
      <span> Lv.{{ this.user.level }} </span>
    </div>
    <div class="sig">{{ this.user.profile.signature }}</div>
  </div>
  <div class="myLove">
    <router-link :to="{ path: '/itemMusic', query: { id: this.userPlaylist[0].id } }">
      <div class="pic"><img :src="this.userPlaylist[0].coverImgUrl" alt="" /></div>
      <div class="info">{{ this.userPlaylist[0].name }}</div>
      <div class="num">{{ this.userPlaylist[0].trackCount }}首</div>
    </router-link>
  </div>
  <div class="lists">
    <div class="trance">
      <span>创建歌单</span>
      <span> | </span>
      <span>收藏歌单</span>
    </div>
    <div class="myLists">
      <div style="font-size: xx-small; padding: 0.5rem 1rem">
        创建歌单{{ this.my.length }}
      </div>
      <div class="list" v-for="item in this.my" :key="item">
        <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
          <div class="pic"><img :src="item.coverImgUrl" alt="" /></div>
          <div class="info">{{ item.name }}</div>
          <div class="num">{{ item.trackCount }}首</div>
        </router-link>
      </div>
    </div>
    <div class="collect">
      <div style="font-size: xx-small; padding: 0.5rem 1rem">
        收藏歌单{{ this.other.length }}
      </div>
      <div class="list" v-for="item in this.other" :key="item">
        <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
          <div class="pic"><img :src="item.coverImgUrl" alt="" /></div>
          <div class="info">{{ item.name }}</div>
          <div class="num">{{ item.trackCount }}首</div>
        </router-link>
      </div>
    </div>
  </div>
  <BottomNav />
  <NormalBack />
</template>
<script>
import BottomNav from "@/components/home/BottomNav.vue";
import NormalBack from "@/components/item/NormalBack.vue";
import { Console } from "console";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      my: [],
      other: [],
    };
  },
  computed: {
    ...mapState(["isLogin", "user", "userPlaylist"]),
  },
  components: {
    BottomNav,
    NormalBack,
  },
  mounted() {
    this.classify();
  },
  methods: {
    classify: function () {
      for (let i in this.userPlaylist) {
        // console.log(this.userPlaylist[i].userId);
        if (this.userPlaylist[i].userId == 395095584) {
          if (this.userPlaylist[i].id != 560835284) this.my.push(this.userPlaylist[i]);
        } else {
          this.other.push(this.userPlaylist[i]);
        }
      }
    },
    calBirthday: function (i) {
      console.log(Date.now());
    },
    login: function () {
      if (!this.isLogin) this.$router.push("/login");
      let Im = document.getElementById("me");
      Im.style.display = "block";
      Im.style.zIndex = "300";
    },
    closeBigImg: function () {
      let Im = document.getElementById("me");
      Im.style.display = "none";
      Im.style.zIndex = "-1";
    },
    ...mapMutations([""]),
  },
};
</script>
<style lang="less" scoped>
.bigImg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: -1;
  display: none;

  img {
    width: 100%;
    position: absolute;
    top: 20%;
  }
}
.top {
  background-color: rgba(214, 24, 24, 0.9);
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: auto;
  border: 1px solid;
  z-index: 10;

  input {
    position: relative;
    top: 10%;
    width: 18rem;
    height: 1.5rem;
    border: 1px solid;
    border-radius: 0.6rem;
    box-shadow: 0 0 1px 1px;
    padding: 0.6rem;
  }
}
.userInfo {
  position: absolute;
  top: 18%;
  left: 4%;
  width: 92%;
  height: 10rem;

  background-color: rgba(100, 100, 100, 0.3);
  border-radius: 1rem;

  .userCover {
    position: relative;
    top: -3rem;
    left: 37%;
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
    // background-color: aqua;
    border: 1px solid rgba(100, 100, 100, 0.5);
    background-image: url("../../source/login.png");
    background-size: contain;

    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }
  .userName {
    width: 80%;
    position: absolute;
    top: 3.2rem;
    left: 10%;
    text-align: center;
    font-weight: 800;
  }
  .some {
    position: absolute;
    top: 5rem;
    left: 10%;
    width: 80%;
    text-align: center;
    font-size: smaller;

    span {
      margin: 0 0.6rem;
    }
  }
  .sig {
    position: absolute;
    top: 8rem;
    left: 10%;
    width: 80%;
    text-align: center;
    font-size: smaller;
  }
}

.myLove {
  position: absolute;
  top: 45%;
  left: 4%;
  width: 92%;
  height: 8rem;
  background-color: rgba(100, 100, 100, 0.3);
  border-radius: 1rem;
  display: flex;
  align-items: center;

  .pic {
    position: absolute;
    top: 15%;
    left: 1rem;
    height: 70%;
    img {
      height: 100%;
      border-radius: 20%;
    }
  }
  .info {
    position: absolute;
    left: 40%;
    top: 30%;
  }
  .num {
    position: absolute;
    left: 40%;
    top: 50%;
  }
}
.lists {
  position: absolute;
  top: 65%;
  left: 4%;
  width: 92%;
  padding-bottom: 6rem;
  .trance {
    height: 2rem;
    display: flex;
    justify-content: space-around;
  }
  .myLists,
  .collect {
    width: 100%;
    // height: 4rem;
    margin: 1rem 0;
    background-color: rgba(100, 100, 100, 0.3);
    border-radius: 1rem;

    .list {
      height: 4rem;
      display: flex;
      .pic {
        position: relative;
        top: 15%;
        left: 1rem;
        height: 70%;
        img {
          height: 100%;
          border-radius: 20%;
        }
      }
      font-size: xx-small;
      .info {
        width: 15rem;
        position: relative;
        top: -2rem;
        left: 5rem;
      }

      .num {
        position: relative;
        top: -2rem;
        left: 5rem;
      }
    }
  }
}
</style>
