<template>
    <div class="container main_introd">
      <section class="body_intro">
        <h2 class="text-center">Lịch sử mua hàng</h2>
  
        <table class="table text-center">
          <thead class="table-dark">
            <tr>
              <th>STT</th>
              <th>Sản phẩm</th>
              <th>Tổng giá</th>
              <th>Tình trạng</th>
            </tr>
          </thead>
          <tbody v-if="history.list != null" style="color: #efefef">
            <tr v-for="(item, index) in history.list" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                <div v-for="(a, b) in item.dongho" :key="b">
                  <h4>{{ a.TenDongHo }}</h4>
                  <div style="display: flex; justify-content: center">
                    <img :src="`${a.HinhAnh1}`" style="width: 20%" alt="" />
                  </div>
                  <p>Gía: {{ a.GiaBan }}</p>
                  <p>Số lượng: {{ a.soluong }}</p>
                </div>
              </td>
              <td>{{ item.tongtien }}</td>
              <td v-if="item.tinhtrang == 0">Chưa duyệt</td>
              <td v-else>Duyệt</td>
            </tr>
          </tbody>
        </table>
  
        <br />
      </section>
    </div>
  </template>
  <script>
  import { reactive } from "vue";
  import axios from "axios";
  export default {
    setup() {
      const history = reactive({
        list: [],
      });
      async function getHistory(id) {
        try {
          const response = await axios.get(
            `http://localhost:3000/payment/lichsudonhang/${id}`
          );
          history.list = response.data;
        } catch (err) {
          console.log(err);
        }
      }
      getHistory(JSON.parse(localStorage.getItem("user"))._id);
      return {
        history,
      };
    },
  };
  </script>
  