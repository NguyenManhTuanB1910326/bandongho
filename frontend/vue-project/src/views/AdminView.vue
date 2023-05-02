<template>
    <div class="container main_introd">
      <section class="body_intro">
        <h2 style="margin-top: 10px" class="text-center">Quản lý sản phẩm</h2>
        <router-link to="/addproduct">
          <a style="font-weight: bold" class="btn btn-success">Thêm sản phẩm</a>
        </router-link>
  
        <table class="table text-center">
          <thead class="table-dark">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Gía</th>
              <th>Hình ảnh</th>
            </tr>
          </thead>
          <tbody style="color: black; font-weight: 900">
            <tr v-for="(item, index) in result.products" :key="index">
              <td>{{ index }}</td>
              <td>{{ item.TenDongHo }}</td>
              <td>{{ item.GiaBan }}</td>
              <td style="display: flex; justify-content: center">
                <img style="width: 30%" :src="`${item.HinhAnh1}`" />
              </td>
            </tr>
          </tbody>
        </table>
  
        <br />
      </section>
    </div>
  </template>
  <script>
  import axios from "axios";
  import { reactive } from "vue";
  export default {
    setup() {
      const result = reactive({
        products: [],
        isState: true,
      });
      async function getAllDongHo() {
        try {
          const response = await axios.get(
            "http://localhost:3000/dongho/getalldongho"
          );
          result.products = response.data;
        } catch (er) {
          console.log(er);
        }
      }
      getAllDongHo();
      return {
        result,
      };
    },
  };
  </script>
  