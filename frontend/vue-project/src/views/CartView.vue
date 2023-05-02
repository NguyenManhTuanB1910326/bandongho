<template>
    <div class="container main_introd">
      <section class="body_intro">
        <h2 class="text-center">Điền thông tin mua hàng</h2>
        <router-link to="/payment">
          <a style="font-weight: bold" class="btn btn-success"
            >Tiến hành thanh toán</a
          >
        </router-link>
  
        <table v-if="cart.products != null" class="table text-center">
          <thead class="table-dark">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Gía</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody style="color: #efefef">
            <tr v-for="(cartItem, index) in cart.products" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ cartItem.TenDongHo }}</td>
              <td>${{ cartItem.GiaBan }}</td>
              <td style="display: flex; justify-content: center">
                <img style="width: 30%" :src="`${cartItem.HinhAnh1}`" />
              </td>
              <td>{{ cartItem.soluong }}</td>
              <td><a @click="deleteItemCart(cartItem)">Xóa</a></td>
            </tr>
          </tbody>
        </table>
  
        <br />
        <div
          style="font-size: 1.5rem; font-weight: bold; font-style: italic"
          class="text-right"
        >
          <u>Tổng cộng:</u> $ {{ sum }}
        </div>
        <div class="text-center">
          <router-link to="/products">
            <a class="btn btn-info" style="font-weight: bold"
              >Tiếp tục mua hàng</a
            >
          </router-link>
          <a
            style="font-weight: bold"
            class="btn btn-warning"
            @click="deleteAllCart"
            >Xóa giỏ hàng</a
          >
        </div>
      </section>
    </div>
  </template>
  <script>
  import { watch, reactive, ref } from "vue";
  import { useRouter } from "vue-router";
  export default {
    setup() {
      const router = useRouter();
      const sum = ref(0);
      const cart = reactive({
        products: [],
      });
      // if (localStorage.getItem("token") == null) {
      //   router.push("/");
      //   return;
      // }
  
      cart.products = JSON.parse(localStorage.getItem("cart"));
      console.log(cart.products);
      // const data = [5, 10, 15, 20, 25];
  
      // const res = data.reduce((total, currentValue) => {
      //   return total + currentValue;
      // });
      if (cart.products != null) {
        for (var i = 0; i < cart.products.length; i++) {
          sum.value +=
            parseInt(cart.products[i].GiaBan) *
            parseInt(cart.products[i].soluong);
        }
      }
      watch(cart, () => {
        sum.value = 0;
        for (var i = 0; i < cart.products.length; i++) {
          sum.value +=
            parseInt(cart.products[i].GiaBan) *
            parseInt(cart.products[i].soluong);
        }
      });
      function deleteAllCart() {
        localStorage.removeItem("cart");
        router.push("/products");
        return;
      }
      function deleteItemCart(item) {
        cart.products = cart.products.filter((c) => c !== item);
        if (cart.products > 0) {
          localStorage.setItem("cart", JSON.stringify(cart.products));
        } else {
          localStorage.removeItem("cart");
        }
      }
      return {
        deleteItemCart,
        deleteAllCart,
        sum,
        cart,
      };
    },
  };
  </script>
  