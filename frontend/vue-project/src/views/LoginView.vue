<template>
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login" @submit.prevent="handleSubmit">
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                class="login__input"
                placeholder="Email"
                v-model="Email"
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input"
                placeholder="Password"
                v-model="MatKhau"
              />
            </div>
            <div
              class="login__field"
              style="color: coral; font-weight: bold; font-style: italic"
              v-if="isChecked == false"
            >
              <p>Thông tin tài khoản không hợp lệ</p>
            </div>
            <button class="button login__submit">
              <span class="button__text">Log In Now</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div class="social-login">
            <router-link :to="{ name: 'Register', params: {} }">
              Sign in
            </router-link>
          </div>
        </div>
        <div class="screen__background">
          <span
            class="screen__background__shape screen__background__shape4"
          ></span>
          <span
            class="screen__background__shape screen__background__shape3"
          ></span>
          <span
            class="screen__background__shape screen__background__shape2"
          ></span>
          <span
            class="screen__background__shape screen__background__shape1"
          ></span>
        </div>
      </div>
    </div>
  </template>
  <style scoped>
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,700");
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Raleway, sans-serif;
  }
  
  body {
    background: #caa765
      url(data:image/jpeg;base64,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)
      repeat;
  }
  
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin-top: -4%;
  }
  
  .screen {
    background: linear-gradient(90deg, #020203, #f2f2f3);
    height: 600px;
    width: 360px;
    box-shadow: 0px 0px 24px #2c2c2c;
  }
  
  .screen__content {
    z-index: 1;
    position: relative;
    height: 100%;
  }
  
  .screen__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
  }
  
  .screen__background__shape {
    transform: rotate(45deg);
    position: absolute;
  }
  
  .screen__background__shape1 {
    height: 520px;
    width: 520px;
    background: url(../img/bg/5.jpg);
    background-size: cover;
    top: -50px;
    right: 120px;
    border-radius: 0 72px 0 0;
  }
  
  .screen__background__shape2 {
    height: 220px;
    width: 220px;
    background: #000000;
    top: -172px;
    right: 0;
    border-radius: 32px;
  }
  
  .screen__background__shape3 {
    height: 540px;
    width: 190px;
    background: linear-gradient(270deg, #f8f8f8, #000000);
    top: -24px;
    right: 0;
    border-radius: 32px;
  }
  
  .screen__background__shape4 {
    height: 400px;
    width: 200px;
    background: #ffffff;
    top: 420px;
    right: 50px;
    border-radius: 60px;
  }
  
  .login {
    width: 320px;
    padding: 30px;
    padding-top: 156px;
  }
  
  .login__field {
    padding: 20px 0px;
    position: relative;
  }
  
  .login__icon {
    position: absolute;
    top: 30px;
    color: #000000;
  }
  
  .login__input {
    border: none;
    border-bottom: 2px solid #d1d1d4;
    background: none;
    padding: 10px;
    padding-left: 24px;
    font-weight: 700;
    width: 75%;
    transition: 0.2s;
  }
  
  .login__input:active,
  .login__input:focus,
  .login__input:hover {
    outline: none;
    border-bottom-color: #0c0c0c;
  }
  
  .login__submit {
    background: #fff;
    font-size: 14px;
    margin-top: 30px;
    padding: 16px 20px;
    border-radius: 26px;
    border: 1px solid #d4d3e8;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    align-items: center;
    width: 100%;
    color: #000000;
    box-shadow: 0px 2px 2px #5c5696;
    cursor: pointer;
    transition: 0.2s;
  }
  
  .login__submit:active,
  .login__submit:focus,
  .login__submit:hover {
    border-color: #6a679e;
    outline: none;
  }
  
  .button__icon {
    font-size: 24px;
    margin-left: auto;
    color: #7875b5;
  }
  
  .social-login {
    position: absolute;
    height: 140px;
    width: 160px;
    text-align: center;
    bottom: 0px;
    right: 0px;
    color: #fff;
    line-height: 110px;
  }
  
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .social-login__icon {
    padding: 20px 10px;
    color: #fff;
    text-decoration: none;
    text-shadow: 0px 0px 8px #7875b5;
  }
  
  .social-login__icon:hover {
    transform: scale(1.5);
  }
  </style>
  <script>
  import axios from "axios";
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  export default {
    setup() {
      const router = useRouter();
      const isChecked = ref(true);
      const Email = ref("");
      const MatKhau = ref("");
      async function handleSubmit() {
        const response = await axios.post("http://localhost:3000/users/", {
          Email: Email.value,
          MatKhau: MatKhau.value,
        });
        if (Email.value == "admin@gmail.com" && MatKhau.value == "123") {
          localStorage.setItem("token2", response.data.token);
          router.push("/admin");
        } else {
          if (response.data.message == undefined) {
            const { MatKhau, ...data } = response.data.data;
            console.log(MatKhau);
            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem("token", response.data.token);
            isChecked.value = true;
            router.push("/");
          } else {
            isChecked.value = false;
          }
        }
      }
      return {
        isChecked,
        handleSubmit,
        Email,
        MatKhau,
      };
    },
  };
  </script>
  