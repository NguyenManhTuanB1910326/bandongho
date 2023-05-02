<template>
    <div class="container main_introd">
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div
                class="card shadow-2-strong card-registration"
                style="border-radius: 15px"
              >
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">
                    Vui lòng điền thông tin
                  </h3>
                  <form v-if="user != null" @submit.prevent="xacNhanDatHang">
                    <div style="color: black" class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            class="form-control form-control-lg"
                            :value="user.HoTen"
                          />
                          <label class="form-label" for="firstName">Họ tên</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            class="form-control form-control-lg"
                            :value="user.SDT"
                          />
                          <label class="form-label" for="lastName"
                            >Số điện thoại</label
                          >
                        </div>
                      </div>
                    </div>
  
                    <div style="color: black" class="row">
                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            class="form-control form-control-lg"
                            :value="user.Email"
                          />
                          <label class="form-label" for="emailAddress"
                            >Email</label
                          >
                        </div>
                      </div>
                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="emailAddress"
                            class="form-control form-control-lg"
                            v-model="user.DiaChi"
                          />
                          <label class="form-label" for="emailAddress"
                            >Địa chỉ</label
                          >
                        </div>
                      </div>
                    </div>
  
                    <div style="color: black" class="row">
                      <div class="col-4">
                        <select
                          class="select form-control-lg"
                          v-model="selectedTinh"
                        >
                          <option value="" disabled selected>Chọn tỉnh</option>
                          <option
                            v-for="tinh in diachi.tinh"
                            :key="tinh._id"
                            :value="tinh.code"
                          >
                            {{ tinh.name }}
                          </option>
                        </select>
                        <label class="form-label select-label">Tỉnh</label>
                      </div>
                      <div class="col-4" v-if="diachi.huyen.length != 0">
                        <select
                          class="select form-control-lg"
                          v-model="selectedHuyen"
                        >
                          <option value="" disabled selected>Chọn huyện</option>
                          <option
                            v-for="huyen in diachi.huyen"
                            :key="huyen._id"
                            :value="huyen.code"
                          >
                            {{ huyen.name }}
                          </option>
                        </select>
                        <label class="form-label select-label">Huyện</label>
                      </div>
                      <div class="col-4" v-if="diachi.xa.length != 0">
                        <select
                          class="select form-control-lg"
                          v-model="selectedXa"
                        >
                          <option value="" disabled selected>Chọn xã</option>
                          <option
                            v-for="xa in diachi.xa"
                            :key="xa._id"
                            :value="xa.code"
                          >
                            {{ xa.name }}
                          </option>
                        </select>
                        <label class="form-label select-label">Xã</label>
                      </div>
                    </div>
  
                    <div class="mt-4 pt-2">
                      <input
                        class="btn btn-primary btn-lg"
                        type="submit"
                        value="Xác nhận"
                        style="color: black"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  <script>
  import { reactive, ref, watch } from "vue";
  import { useRouter } from "vue-router";
  import axios from "axios";
  // import { watch, reactive, ref } from "vue";
  // import { useRouter } from "vue-router";
  export default {
    setup() {
      const router = useRouter();
      if (localStorage.getItem("cart") == null) {
        router.push("/");
        return;
      }
      const user = reactive({
        id: "",
        HoTen: "",
        SDT: "",
        Email: "",
        DiaChi: "",
      });
      const diachi = reactive({
        tinh: [],
        huyen: [],
        xa: [],
      });
      const cart = reactive({
        products: [],
      });
      let tongTien = 0;
      const selectedTinh = ref("");
      const selectedHuyen = ref("");
      const selectedXa = ref("");
      if (localStorage.getItem("user") != null) {
        user.id = JSON.parse(localStorage.getItem("user"))._id;
        user.HoTen = JSON.parse(localStorage.getItem("user")).HoTen;
        user.SDT = JSON.parse(localStorage.getItem("user")).SDT;
        user.Email = JSON.parse(localStorage.getItem("user")).Email;
        cart.products = JSON.parse(localStorage.getItem("cart"));
        for (var i = 0; i < cart.products.length; i++) {
          tongTien +=
            parseInt(cart.products[i].GiaBan) *
            parseInt(cart.products[i].soluong);
        }
      }
      async function getAllTinh() {
        try {
          const response = await axios.get(
            "http://localhost:3000/Tinh/GetAllTinh"
          );
          diachi.tinh = response.data.data;
        } catch (err) {
          console.log(err);
        }
      }
      getAllTinh();
      watch(selectedTinh, async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/Tinh/GetAllHuyenByIDTinh?parent_code=${selectedTinh.value}`
          );
          diachi.huyen = response.data.data;
        } catch (err) {
          console.log(err);
        }
      });
      watch(selectedHuyen, async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/Tinh/GetAllXaByIDHuyen?parent_code=${selectedHuyen.value}`
          );
          diachi.xa = response.data.data;
        } catch (err) {
          console.log(err);
        }
      });
  
      async function xacNhanDatHang() {
        try {
          const response = await axios.post(
            "http://localhost:3000/payment/muahang",
            {
              dongho: cart.products,
              tongtien: tongTien,
              tinh: selectedTinh.value,
              huyen: selectedHuyen.value,
              xa: selectedXa.value,
              diachi: user.DiaChi,
              sdt: user.SDT,
              tinhtrang: 0,
              idkhachhang: user.id,
              tennguoimua: user.HoTen,
            }
          );
          if (response.data.result == "success") {
            alert("Đặt hàng thành công");
            router.push("/products");
            localStorage.removeItem("cart");
          }
        } catch (err) {
          console.log(err);
        }
      }
      return {
        xacNhanDatHang,
        selectedTinh,
        selectedHuyen,
        selectedXa,
        diachi,
        user,
      };
    },
  };
  </script>
  <style scoped>
  .gradient-custom {
    /* fallback for old browsers */
    background: #f093fb;
  
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(
      to bottom right,
      rgba(240, 147, 251, 1),
      rgba(245, 87, 108, 1)
    );
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(
      to bottom right,
      rgba(240, 147, 251, 1),
      rgba(245, 87, 108, 1)
    );
  }
  
  .card-registration .select-input.form-control[readonly]:not([disabled]) {
    font-size: 1rem;
    line-height: 2.15;
    padding-left: 0.75em;
    padding-right: 0.75em;
  }
  .card-registration .select-arrow {
    top: 13px;
  }
  </style>
  