import { createStore } from 'vuex'
import { getMusicLyric } from '@/request/api/item'
export default createStore({
  state: {
    playlist: [{
      al: {
        id: 0,
        name: "",
        picUrl: "https://s3.bmp.ovh/imgs/2023/03/07/1b75cc5395b379bb.png",
      },
      ar: [{
        name: "",
      }],
      id: 0,
      name: "聆听好音乐",
    }],
    MusicList:[
    ],
    playlistIndex: 0,
    toPlay: true,
    detail: false,
    lyricList: {},
    currentTime: 0,
    duration: 0,
    url: [

    ],
    MVurl: "",
    userPage: false,
    // searchHistory: [],
    list: false,
    searchList: [],
    MoShi: 0,
    flag: [1, 0, 0, 0, 0],
    isLogin: false,
    user: {
      uid: 395095584,
    },
    userPlaylist: [],
    comments: [],
  },
  getters: {
  },
  mutations: {
    updatePlayState: function (state, value) {
      // console.log("change");
      state.toPlay = value;
      // console.log(state.toPlay);
    },
    updatePlayList: function (state, value) {
      state.playlist = value;
      // console.log(state.playlist);
    },
    updateMusicList: function (state, value) {
      state.MusicList = value;
      console.log(state.MusicList);
    },
    updatePlayListIndex: function (state, value) {
      state.playlistIndex = value;
      // console.log(state.playlistIndex);
    },
    updateDetailShow: function (state) {
      state.detail = !state.detail;
      // console.log(state.detail);
    },
    updateLyricList: function (state, value) {
      state.lyricList = value;
    },
    updateCurrentTime: function (state, value) {
      // console.log(state.currentTime);
      state.currentTime = value;
    },
    updateDuration(state, value) {
      state.duration = value;
    },
    updateMusicUrl(state, value) {
      state.url = value;
      // console.log(state.url);
    },
    updateAppendMusic(state, value) {
      state.playlist.splice(state.playlistIndex, 0, value);
      console.log(state.playlist);
    },
    updateAppendMusicUrl(state, value) {
      state.url.splice(state.playlistIndex, 0, value);
      // console.log(state.url);
    },
    updateUserPage(state) {
      state.userPage = !state.userPage;
      // console.log(state.userPage);
    },
    // updateSearchHistory(state, value) {
    //   state.searchHistory = value;
    //   // console.log(state.searchHistory);
    // },
    updateListShow(state) {
      state.list = !state.list;
    },
    updateSearchList(state, value) {
      state.searchList = value;
    },
    updateMoShi(state) {
      state.MoShi = (state.MoShi + 1) % 4;
    },
    updateFlag(state, value) {
      state.flag = [0, 0, 0, 0, 0];
      state.flag[value] = 1;
    },
    updateLogin(state) {
      state.isLogin = !state.isLogin;
    },
    updateMVurl(state, value) {
      state.MVurl = value;
      console.log(state.MVurl);
    },
    updateComments(state, value) {
      state.comments = value;
      console.log(state.comments);
    },
    updateUser(state, value) {
      state.user = value;
      // console.log(state.user);
    },
    updateUserPlaylist(state, value) {
      state.userPlaylist = value;
      // console.log(state.userPlaylist);
    },
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value);
      // console.log(res);
      context.commit("updateLyricList", res.data.lrc);
    },
  },
  modules: {
  }
})
