<template>
  <header>
    <h1>MegaNets</h1>
    <div class="content-search">
      <ul>
        <li>Cidade</li>
        <li>Central de Atendimento</li>
        <li>Lista de desejos</li>
      </ul>
      <input type="text" placeholder="Buscar..." />
    </div>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
