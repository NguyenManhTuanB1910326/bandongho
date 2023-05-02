<template>
    <div id="wrapper">
      <div id="menu">
        <ul>
          <li class="current_page_item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="current_page_item">
            <router-link to="/products">Product</router-link>
          </li>
          <li class="current_page_item">
            <router-link to="/cart">Cart</router-link>
          </li>
          <li class="current_page_item">
            <router-link to="/orderhistory">Order history</router-link>
          </li>
          <li class="current_page_item" v-if="!isUser">
            <router-link to="/login">Login</router-link>
          </li>
          <li class="current_page_item" v-else>
            <router-link to="/logout">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>
  <script>
  import { ref } from "vue";
  export default {
    setup() {
      const isUser = ref(false);
      if (localStorage.getItem("token") == null) {
        isUser.value = false;
      } else {
        isUser.value = true;
      }
      return {
        isUser,
      };
    },
  };
  </script>
  <style>
  /*
  Design by TEMPLATED
  http://templated.co
  Released for free under the Creative Commons Attribution License
  */
  
  body {
    margin: 0;
    padding: 0;
    /* background: #caa765 url(../img/bg/4.jpg) repeat center fixed; */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #fbfbfd;
    background-image: radial-gradient(circle, #f0f0f0 0%, #000000 100%);
  }
  
  h1,
  h2,
  h3 {
    margin: 0px;
    padding: 0px;
    font-family: "Abel", sans-serif;
    font-weight: 600;
  }
  
  h1 {
    font-size: 2em;
  }
  
  h2 {
    font-size: 2.4em;
  }
  
  h3 {
    font-size: 1.6em;
  }
  
  p,
  ul,
  ol {
    margin-top: 0;
    line-height: 180%;
  }
  a {
    text-decoration: none;
    color: #636900;
  }
  img.border {
    border: 6px solid #e1f1f6;
  }
  
  img.alignleft {
    float: left;
    margin-right: 25px;
  }
  
  img.alignright {
    float: right;
  }
  
  img.aligncenter {
    margin: 0px auto;
  }
  
  #wrapper {
    margin: 0 auto;
    padding: 0;
  }
  
  /* Header */
  
  #header {
    overflow: hidden;
    width: 900px;
    height: 100px;
    margin: 0 auto;
  }
  .title {
    text-align: center;
  }
  
  /* Menu */
  
  #menu {
    width: 100%;
    height: 50px;
    margin: 0 auto 0 auto;
    padding: 0px 40px;
    background-image: radial-gradient(circle, #f0eef0 0%, #070707 100%);
  }
  
  #menu ul {
    margin: 0;
    padding: 0px 0px 0px 0px;
    list-style: none;
    line-height: normal;
    display: flex;
    justify-content: center;
  }
  
  #menu li {
    width: 150px;
    text-align: center;
    height: 200px;
  }
  
  #menu a {
    display: block;
    height: 50px;
    margin-right: 1px;
    padding: 20px 20px 0px 20px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Abel", sans-serif;
    font-size: 12px;
    font-weight: normal;
    color: #ffffff;
    border: none;
  }
  
  #menu .current_page_item a {
    background: #0e0404;
  }
  
  #menu a:hover {
    background: #0f0505;
  }
  </style>
  