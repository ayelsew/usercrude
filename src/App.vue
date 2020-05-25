<template>
  <div id="app">
    <h1>Usuários</h1>
    <Table />
    <Modal />
  </div>
</template>

<script>
import Table from "./components/Table";
import Modal from "./components/Modal";
export default {
  name: "App",
  components: {
    Table,
    Modal
  }
};
</script>

<style>
h1 {
  width: 70%;
  margin: auto;
  margin-bottom: 1pc;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
