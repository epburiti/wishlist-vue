<template>
  <h1>LIST</h1>
  <ul>
    <li v-for="item in products" :key="item.sku" class="card">
        <img
          :src="item.image"
          :alt="item.title"
          data-testid="cardImage"
        />
        <p className="title">{{ item.title }}</p>
        <p className="price">{{ item.price }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {},
  data() {
    return { products: [] };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const url =
        "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e";
      fetch(url, {
        method: "GET",
        mode: "cors", // pode ser cors ou basic(default)
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((res) => res.json())
        .then((json) => (this.products = json.products))
        .catch(function (err) {
          console.error("Failed retrieving information", err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
