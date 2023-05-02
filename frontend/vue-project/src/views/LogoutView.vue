<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    localStorage.removeItem("user");
    localStorage.removeItem("token2");
    router.push("/login");
  },
};
</script>
