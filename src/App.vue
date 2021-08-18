<template>
  <Header />
  <router-view />
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header/index.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style lang="scss">
body {
  *,
  & {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}
</style>
