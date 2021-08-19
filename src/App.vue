<template>
  <app-header />
  <app-list />
  <router-view />
</template>
<script>
// @ is an alias to /src
import Header from "@/components/templates/Header/index.vue";
import List from "@/components/List/index.vue";

export default {
  name: "App",
  components: {
    'app-header': Header,
    'app-list':List
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
