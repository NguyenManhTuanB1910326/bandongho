<template>
    <div id="wrapper">
      <div id="banner-product">
        <img src="../img/bg/1.jpg" width="900" height="295" alt="" />
        <h2 class="title">DANH SÁCH SẢN PHẨM</h2>
      </div>
      <div id="page">
        <div class="featured-post" style="margin-bottom: 3%">
          <div class="search" style="text-align: center; height: 40px">
            <input
              type="text"
              placeholder="Tên sản phẩm"
              v-model="searchText"
              style="width: 30%; height: 30px"
            />
          </div>
          <!-- <div class="container">
            <select
              style="width: 10%; height: 30px"
              v-if="result2.isState"
              v-model="selected"
            >
              <option value="">Danh mục</option>
              <option
                v-for="category in result2.categories"
                :key="category.id"
                :value="category._id"
              >
                {{ category.TenDanhMuc }}
              </option></select
            >{{ selected }}
          </div> -->
        </div>
        <div id="product">
          <div
            class="row text-center container"
            style="margin: 0 auto"
            v-if="result.isState"
          >
            <div v-for="r in ketqualoc" :key="r._id" class="col-4 sanpham">
              <div style="height: 400px; border-radius: 10%">
                <img
                  :src="`${r.HinhAnh}`"
                  style="width: 100%; height: 300px; object-fit: cover"
                  alt="friends"
                />
                <h5 style="height: 30px">
                  <b>{{ r.TenDongHo }}</b>
                </h5>
                <h6 style="height: 30px">
                  <b>${{ r.GiaBan }}</b>
                </h6>
              </div>
  
              <router-link :to="{ name: 'ProductDetail', params: { id: r._id } }">
                <button class="btn btn-dark my-2 mx-2">Xem chi tiết</button>
              </router-link>
              <button class="btn" @click="addToCart(r)">Thêm vào giỏ</button>
            </div>
          </div>
          <div id="content"></div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  import { ref, reactive, computed } from "vue";
  export default {
    setup() {
      const searchText = ref(""); //lấy dữ liệu từ ô input
      //const selected = ref(""); //lấy ID CATEROGIES
      //result để lưu trữ các đồng hồ
      const result = reactive({
        products: [],
        isState: true,
      });
      //result2 để lưu trữ danh mục
      const result2 = reactive({
        categories: [],
        isState: true,
      });
      //Lưu cart
      const cart = reactive({
        products: [],
      });
      async function getAllDanhMuc() {
        try {
          const response = await axios.get(
            "http://localhost:3000/DanhMuc/GetDanhMuc"
          );
          result2.categories = response.data;
        } catch (error) {
          console.error(error);
          result2.isState = false;
        }
      }
      async function getAllDongHo() {
        try {
          const response = await axios.get(
            "http://localhost:3000/dongho/getalldongho"
          );
          result.products = response.data;
        } catch (error) {
          console.error(error);
          result.isState = false;
        }
      }
      getAllDanhMuc();
      getAllDongHo();
      // watch(searchText, () => {
      //   let rs = [];
      //   for (var i = 0; i < result.products.length; i++) {
      //     if (result.products[i].TenDongHo.includes(searchText.value)) {
      //       rs.push(result.products[i]);
      //     }
      //   }
      //   result.products = rs;
      // });
      let ketqualoc = computed(() => {
        return result.products.filter((e) =>
          e.TenDongHo.toLowerCase().includes(searchText.value.toLowerCase())
        );
      });
      function addToCart(r) {
        if (localStorage.getItem("token") != null) {
          if (localStorage.getItem("cart") != null) {
            cart.products = JSON.parse(localStorage.getItem("cart"));
          }
          for (var i = 0; i < cart.products.length; i++) {
            if (cart.products[i]._id == r._id) {
              cart.products[i].soluong++;
              localStorage.setItem("cart", JSON.stringify(cart.products));
              return;
            }
          }
          r.soluong = 1;
          cart.products.push(r);
          localStorage.setItem("cart", JSON.stringify(cart.products));
        } else {
          alert("Dang nhap ban oi");
        }
        alert("Đã Thêm giỏ hàng");
      }
      // watch(selected, () => {
      //   console.log(selected.value);
      //   result.products = result.products.filter((e) =>
      //     e.MaDanhMuc.includes(selected.value)
      //   );
      // });
      return {
        // selected,
        addToCart,
        result2,
        ketqualoc,
        result,
        searchText,
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
  h1,
  h2,
  h3 {
    margin: 0px;
    padding: 0px;
    font-family: "Abel", sans-serif;
    font-weight: 400;
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
  
  ul,
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
  
  .title {
    text-align: center;
  }
  
  .product .row div {
    border: 1px dotted black;
    padding: 2%;
    border-radius: 5%;
  }
  
  .product .row div:hover {
    margin-top: -5px;
    background-color: #000000;
  }
  
  .product .row h5 {
    text-align: justify;
    height: 100px;
  }
  
  .product .row col img {
    width: 20%;
    height: 20%;
    text-align: center;
  }
  </style>
  