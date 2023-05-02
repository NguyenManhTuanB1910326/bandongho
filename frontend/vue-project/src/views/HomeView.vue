<template>
    <div id="wrapper">
      <!-- end #menu -->
      <div id="banner">
        <img class="img-banner" src="../img/bg/2.jpg" alt="" />
        <div class="banner-text">
          <h2>ĐỒNG HỒ THỜI TRANG</h2>
          <p>
            Đây là cửa hàng chuyên về đồng hồ. Các mẫu đồng hồ được cập nhật mới
            mỗi ngày phù hợp với mọi nhu cầu như đi chơi, đi làm, đủ mọi loại tuổi
            từ trung niên đến thiếu nhi, từ người già đến người trẻ. Mang đồng hồ
            làm tôn lên vẻ sang trọng quý phái của chúng ta
          </p>
        </div>
      </div>
      <div class="img-page">
        <img src="../img/men/m4.jpg" alt="" />
        <img src="../img/men/m5.jpg" alt="" />
      </div>
      <div class="img-page">
        <img src="../img/men/m6.jpg" alt="" />
        <img src="../img/men/m7.jpg" alt="" />
      </div>
      <!-- end #header -->
      <div id="page">
        <div id="content">
          <div class="post1">
            <h2 class="title"><a href="#">Thời trang thượng hạng</a></h2>
            <p class="meta">
              Được úp bởi <a href="#">một cá nhân</a> vào ngày 24/03/2023
              &nbsp;&bull;&nbsp;
              <a href="#" class="comments">Bình luận (64)</a> &nbsp;&bull;&nbsp;
            </p>
            <div class="entry">
              <p>
                Mang một chiếc đồng hồ thời trang trên tay nêu lên tầm giá trị bản
                thân lên tầm cao mới. Khẳng định bản thân mình trong mắt mọi
                người. Sự quý phái sang trọng từ đó được mọi người nển na hơn
              </p>
            </div>
          </div>
          <div class="post2">
            <h2 class="title">
              <a href="#">Món quá tặng ý nghĩa</a>
            </h2>
            <p class="meta">
              Được úp bởi <a href="#">một cá nhân</a> vào ngày 24/03/2023
              &nbsp;&bull;&nbsp;
              <a href="#" class="comments">Bình luận (64)</a> &nbsp;&bull;&nbsp;
            </p>
            <div class="entry">
              <p>
                Đối với cặp đôi yêu nhau thì đây là một món quà tặng hết sức ý
                nghĩa đến từng cm. Không riêng là vật chất mà đó là sự tinh tế đến
                từ tấm lòng của người tặng. Có thể tiện theo dõi giờ giấc đi mọi
                nơi mà không cần phải coi điện thoại. Ngoài ra làm vật bíu cho ông
                bà cha mẹ là một điều hết sức ý nghĩa
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about" style="padding-left: 129px; padding-right: 129px">
        <h2 class="title" style="text-align: center">
          HÃY ĐẾN VÀ TRẢI NGHIỆM BẠN NHÉ!
        </h2>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  import { ref } from "vue";
  export default {
    setup() {
      const result = ref([]);
      axios
        .get("http://localhost:3000/DanhMuc/GetDanhMuc")
        .then(function (response) {
          // handle success
          result.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      return {
        result,
      };
    },
  };
  </script>
  <style>
  /* Header */
  /* #banner{
    margin-left: 200px;
  } */
  </style>
  