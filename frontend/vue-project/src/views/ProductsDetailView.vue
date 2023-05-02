<template>
    <div id="wrapper">
      <div id="header"></div>
      <div id="page">
        <div class="featured-post" style="margin-bottom: 3%">
          <h2 class="title">CHI TIẾT SẢN PHẨM</h2>
        </div>
        <div id="product">
          <div class="row text-center container" style="margin: 0 auto">
            <div class="text-center col">
              <div class="text-center item">
                <div v-if="!product.message">
                  <img
                    :src="`${product.HinhAnh1}`"
                    style="margin-right: 1%"
                    alt="friends"
                  />
                  <img :src="`${product.HinhAnh}`" alt="friends" />
                  <h5>
                    <b>{{ product.TenDongHo }}</b>
                  </h5>
                  <h6>
                    <b>${{ product.GiaBan }}</b>
                  </h6>
                  <b>Mô tả chi tiết:</b>
                  <p>{{ product.Mota }}</p>
                </div>
                <div v-else>Không có sản phẩm này đâu</div>
              </div>
            </div>
          </div>
          <div id="content"></div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  import { useRoute } from "vue-router";
  import { ref } from "vue";
  export default {
    setup() {
      const product = ref([]);
      const route = useRoute();
      axios
        .get(`http://localhost:3000/DongHo/getalldongho/${route.params.id}`)
        .then(function (response) {
          // handle success
          product.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          product.value = error;
        });
      console.log(product.value);
      return {
        product,
      };
    },
  };
  </script>
  <style scoped>
  body {
    margin: 0;
    padding: 0;
    background: #caa765 url(../assets/images/wrapper-bg.jpg) repeat;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #7f7f81;
  }
  
  h2 {
    margin: 0px;
    padding: 0px;
    font-family: "Abel", sans-serif;
    font-weight: 400;
  }
  
  h2 {
    font-size: 2.4em;
  }
  
  p,
  ul,
  ol {
    margin-top: 0;
    line-height: 180%;
  }
  
  ul,
  a {
    text-decoration: none;
    color: #636900;
  }
  
  #wrapper {
    margin: 0 auto;
    padding: 0;
  }
  
  .title {
    text-align: center;
  }
  .item {
    border: 1px dotted white;
    padding: 2%;
    border-radius: 5%;
  }
  img {
    width: 20%;
    height: 20%;
    display: inline-block;
  }
  p {
    text-align: justify;
  }
  </style>
  