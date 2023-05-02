//Import file global
import { defineAsyncComponent } from "vue";
//khi nào cần layout mới gọi tới => không phải goi như 1 components bình thường mà
//phải gỏi defineAsync để chạy đồng bộ, khi nào cần mới gọi hoạt động, còn làm kiểu kia sẽ lỗi
export function registerGlobalComponents(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("../layouts/AuthLayout.vue"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("../layouts/DefaultLayout.vue"))
  );
  app.component(
    "admin-layout",
    defineAsyncComponent(() => import("../layouts/AdminLayout.vue"))
  );
}
