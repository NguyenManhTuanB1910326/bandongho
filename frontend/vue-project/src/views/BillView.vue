<template>
    <div class="container main_introd">
      <section class="body_intro">
        <h2 style="margin-top: 10px" class="text-center">Đơn hàng</h2>
  
        <table class="table text-center">
          <thead class="table-dark">
            <tr>
              <th>STT</th>
              <th>Tên khách hàng</th>
              <th>SĐT</th>
              <th>Tổng tiền</th>
              <th>Địa chỉ</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody style="color: black; font-weight: 900">
            <tr v-for="(item, index) in donHang.list" :key="index">
              <td>{{ index }}</td>
              <td>{{ item.tennguoimua }}</td>
              <td>{{ item.sdt }}</td>
              <td>{{ item.tongtien }}</td>
              <td>{{ item.diachi }}</td>
              <td
                v-if="item.tinhtrang == 0"
                class="text-danger"
                style="cursor: pointer"
                @click="duyetDon(item._id)"
              >
                Chưa duyệt
              </td>
              <td v-else class="text-success">Đã xác nhận</td>
            </tr>
          </tbody>
        </table>
  
        <br />
      </section>
    </div>
  </template>
  <script>
  import axios from "axios";
  import { reactive, watch } from "vue";
  
  export default {
    setup() {
      const donHang = reactive({
        list: [],
        isChecked: false,
      });
      let response;
      async function getAllDonHang() {
        try {
          response = await axios.get("http://localhost:3000/payment/laydathang");
          donHang.list = response.data;
          console.log(donHang.list.length);
        } catch (err) {
          console.log(err);
        }
      }
      getAllDonHang();
      async function duyetDon(id) {
        await axios.patch(`http://localhost:3000/payment/capnhat/${id}`, {
          tinhtrang: 1,
        });
        response = await axios.get("http://localhost:3000/payment/laydathang");
        donHang.isChecked = true;
      }
      watch(donHang, () => {
        console.log(1111);
        console.log(response.data);
        donHang.list = response.data;
      });
      return {
        duyetDon,
        donHang,
      };
    },
  };
  </script>
  