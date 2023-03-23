<template>
  <div class="pic">
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
        @click="$router.push('/userHome')"
      >
        <path
          d="M631.04 161.941333a42.666667 42.666667 0 0 1 63.061333 57.386667l-2.474666 2.730667-289.962667 292.245333 289.706667 287.402667a42.666667 42.666667 0 0 1 2.730666 57.6l-2.474666 2.752a42.666667 42.666667 0 0 1-57.6 2.709333l-2.752-2.474667-320-317.44a42.666667 42.666667 0 0 1-2.709334-57.6l2.474667-2.752 320-322.56z"
          fill="#111111"
          p-id="3372"
        ></path>
      </svg>
    </div>
    <div class="ic"><img src="../../source/R-C.png" alt="" /></div>
    <div class="in">
      <div class="info">
        <div class="title">手机号</div>
        <input type="text" v-model="phone" />
      </div>
      <div class="info" v-if="mi">
        <div class="mi">
          <div class="title">密码</div>
          <div class="change" @click="change">短信验证码登录</div>
        </div>
        <input id="pwdV" type="password" v-model="password" />
      </div>
      <div class="info" v-else>
        <div class="mi">
          <div class="title">短信验证码</div>
          <div style="margin-left: 2rem" @click="sendIdentify">发送验证码</div>
          <div class="change" @click="change">密码登录</div>
        </div>
        <input id="codeV" type="text" v-model="code" @keydown.enter="toVerify"/>
      </div>
    </div>
    <button @click="toLogin">登录</button>
  </div>
</template>
<script>
import { toLoginByPwd, sendCode, VerifyCode } from "@/request/api/home";
export default {
  data() {
    return {
      mi: true,
      phone: "",
      password: "",
      code: "",
      result: false,
    };
  },
  methods: {
    change: function () {
      this.mi = !this.mi;
    },
    sendIdentify: async function () {
      let res = await sendCode(this.phone);
      console.log(res);
      let p = document.getElementById("codeV");
      p.placeholder = "验证码已发送";
    },
    checkPWD: async function (info) {
      await toLoginByPwd(info).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
          let p = document.getElementById("pwdV");
          this.password = "";
          p.placeholder = "密码错误";
        }
      );
    },
    toVerify: async function (info) {
      await VerifyCode(info).then(
        (res) => {
          console.log(res);
          this.result = res.data.data;
          
        },
        (err) => {
          console.log(err);
          let p = document.getElementById("codeV");
          this.code = "";
          p.placeholder = "验证码错误";
        }
      );
    },
    toLogin: function () {
      if (this.mi) {
        console.log(this.phone);
        console.log(this.password);
        let info = { phone: this.phone, password: this.password };
        this.checkPWD(info);
      } else {
        console.log(this.phone);
        console.log(this.code);
        let info = { phone: this.phone, code: this.code };
        this.toVerify(info);
      }
    },
  },
  components: {},
};
</script>
<style lang="less" scoped>
.pic {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;
  background-color: rgba(214, 24, 24);

  img {
    width: 100%;
    // filter: blur(1px);
    // opacity: 0.2;
  }

  .top {
    z-index: 400;
    width: 94%;
    position: absolute;
    left: 3%;
    top: 1%;
  }

  .ic {
    width: 50%;
    position: absolute;
    top: 15%;
    left: 25%;
    animation: kq 5s linear infinite;
  }
  .in {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 30%;
    // background-color: aqua;
    padding: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .info {
      height: 3rem;
      .title {
        font-size: 1px;
        margin-left: 0.5rem;
        margin-bottom: 0.2rem;
        color: whitesmoke;
      }
      .mi {
        display: flex;
        font-size: 1px;
        color: whitesmoke;
      }
      .change {
        position: absolute;
        right: 4.2rem;
      }
      input {
        outline-style: none;
        border: 1px solid #ccc;
        width: 16rem;
        height: 1.6rem;
        border-radius: 0.4rem;
        font-family: "Microsoft soft";
        font-size: smaller;
        padding: 0.1rem 0.4rem;
      }
      input:focus {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
          0 0 8px rgba(102, 175, 233, 0.6);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
      }
    }
  }
  button {
    position: absolute;
    bottom: 20%;
    left: 40%;
    width: 20%;
  }
}

@keyframes kq {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
