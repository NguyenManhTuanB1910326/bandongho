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
                  <h3 style="color: black" class="mb-4 pb-2 pb-md-0 mb-md-5">
                    Thêm sản phẩm
                  </h3>
                  <form @submit.prevent="addProduct">
                    <div style="color: black" class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            class="form-control form-control-lg"
                            v-model="obj.TenDongHo"
                          />
                          <label class="form-label" for="firstName"
                            >Tên đồng hồ</label
                          >
                        </div>
                      </div>
                      <div style="color: black" class="col-md-6 mb-4">
                        <div style="color: black" class="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            class="form-control form-control-lg"
                            v-model="obj.Mota"
                          />
                          <label class="form-label" for="lastName">Mô tả</label>
                        </div>
                      </div>
                    </div>
  
                    <div style="color: black" class="row">
                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="emailAddress"
                            class="form-control form-control-lg"
                            v-model="obj.HinhAnh"
                          />
                          <label class="form-label" for="emailAddress"
                            >Hình ảnh</label
                          >
                        </div>
                      </div>
                      <div style="color: black" class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="emailAddress"
                            class="form-control form-control-lg"
                            v-model="obj.HinhAnh1"
                          />
                          <label class="form-label" for="emailAddress"
                            >Hình ảnh 1</label
                          >
                        </div>
                      </div>
                    </div>
                    <div style="color: black" class="row">
                      <div class="col-md-4 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="number"
                            id="emailAddress"
                            class="form-control form-control-lg"
                            v-model="obj.GiaBan"
                          />
                          <label class="form-label" for="emailAddress"
                            >Gía bán</label
                          >
                        </div>
                      </div>
                      <div class="col-md-4 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="number"
                            id="emailAddress"
                            class="form-control form-control-lg"
                            v-model="obj.KhuyenMai"
                          />
                          <label class="form-label" for="emailAddress"
                            >Khuyến mãi</label
                          >
                        </div>
                      </div>
                      <div class="col-md-4 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="number"
                            id="emailAddress"
                            class="form-control form-control-lg"
                            v-model="obj.SL"
                          />
                          <label class="form-label" for="emailAddress"
                            >Số lượng</label
                          >
                        </div>
                      </div>
                    </div>
                    <!-- <div class="row">
                      <div class="col-4">
                        <select
                          class="select form-control-lg"
                          
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
                    </div> -->
                    <div style="color: black" class="row">
                      <div class="col-4">
                        <select
                          class="select form-control-lg"
                          v-model="obj.MaDanhMuc"
                        >
                          <option value="" disabled selected>
                            Chọn danh mục
                          </option>
                          <option
                            v-for="item in danhMuc.item"
                            :key="item._id"
                            :value="item._id"
                          >
                            {{ item.TenDanhMuc }}
                          </option>
                        </select>
                        <label class="form-label select-label">Danh mục</label>
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
  import { watch, reactive } from "vue";
  // import { reactive,  watch } from "vue";
  import { useRouter } from "vue-router";
  import axios from "axios";
  // import { watch, reactive, ref } from "vue";
  // import { useRouter } from "vue-router";
  export default {
    setup() {
      const router = useRouter();
      const obj = reactive({
        MaDanhMuc: "",
        TenDongHo: "",
        Mota: "",
        HinhAnh: "",
        HinhAnh1: "",
        GiaBan: "",
        KhuyenMai: "",
        SL: "",
      });
      const danhMuc = reactive({
        item: [],
      });
      async function getALLDanhMuc() {
        try {
          const response = await axios.get(
            "http://localhost:3000/DanhMuc/GetDanhMuc"
          );
          danhMuc.item = response.data;
        } catch (err) {
          console.log(err);
        }
      }
      getALLDanhMuc();
      watch(obj, () => {
        console.log(obj);
      });
      async function addProduct() {
        try {
          const response = await axios.post(
            "http://localhost:3000/DongHo/AddDongHoByIDDanhMuc",
            {
              MaDanhMuc: obj.MaDanhMuc,
              TenDongHo: obj.TenDongHo,
              Mota: obj.Mota,
              HinhAnh: obj.HinhAnh,
              HinhAnh1: obj.HinhAnh1,
              GiaBan: obj.GiaBan,
              KhuyenMai: obj.KhuyenMai,
              SL: obj.SL,
            }
          );
          if (response.data.errorCode == 0) {
            router.push("/admin");
          } else {
            alert(" Có lỗi gì  đó rồi kiểm tra lại đi");
          }
        } catch (err) {
          console.log(err);
        }
      }
      return {
        addProduct,
        danhMuc,
        obj,
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
  