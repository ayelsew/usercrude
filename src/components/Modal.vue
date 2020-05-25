<template>
  <div class="bg-modal" v-bind:class="{ hide: hideModal }">
    <div class="modal">
      <h3 class="modal-title">{{ title }}</h3>
      <form action>
        <div class="flex-direction-column">
          <label for="InputName">Nome</label>
          <input
            v-bind:value="name"
            @input="setName"
            placeholder="Ex: Wesley"
            id="InputName"
            type="text"
          />
        </div>
        <div class="flex-direction-column">
          <label for="InputEmail">E-mail</label>
          <input
            @input="setEmail"
            placeholder="Ex: wesley@safadao.com"
            v-bind:value="email"
            id="InputEmail"
          />
          <small></small>
        </div>
        <div class="flex-direction-column">
          <label for="InputRole">Cargo</label>
          <input
            @input="setRole"
            placeholder="Ex: Fullstack"
            v-bind:value="role"
            id="InputRole"
            type="text"
          />
        </div>
        <div class="flex-direction-row justify-content-space-between">
          <button v-on:click="button0" type="button" class="btn-model bg-red">Cancelar</button>
          <button v-on:click="button1" type="button" class="btn-model bg-black">Gravar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  computed: {
    hideModal() {
      return this.$store.state.modal.hide;
    },
    title() {
      return this.$store.state.modal.title;
    },
    name() {
      return this.$store.state.modal.name;
    },
    email() {
      return this.$store.state.modal.email;
    },
    role() {
      return this.$store.state.modal.role;
    }
  },
  methods: {
    setName(input) {
      const d = input.target.value;
      this.$store.dispatch("setModalName", d);
    },
    setEmail(input) {
      const d = input.target.value;
      this.$store.dispatch("setModalEmail", d);
    },
    setRole(input) {
      const d = input.target.value;
      this.$store.dispatch("setModalRole", d);
    },
    button0() {
      this.$store.state.modal.button0.func();
    },
    button1() {
      this.$store.state.modal.button1.func();
    }
  }
};
</script>

<style scoped>
.bg-modal {
  background-color: #d5d5d566;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: #ffffff;
  padding: 1.5rem;
  box-shadow: 0 0px 18px 0px gray;
  border-radius: 1px;
  min-width: 20rem;
  min-height: 10rem;
}

.modal > .modal-title {
  margin: 0;
}

.modal .btn-model {
  border: unset;
  padding: 0.5rem 2.9rem;
  cursor: pointer;
  font-weight: 900;
  color: #ffffff;
  text-transform: uppercase;
}

.flex-direction-column {
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
}
.flex-direction-row {
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
}

.justify-content-space-between {
  justify-content: space-between;
}

label {
  margin-bottom: 1px;
  margin-bottom: 4px;
}

.bg-black {
  background-color: #2d2d2d;
}
.bg-red {
  background-color: #e28686;
}

.hide {
  display: none;
}

input {
  box-sizing: content-box;
  display: block;
  float: none;
  line-height: normal;
  position: static;
  z-index: auto;
  padding: 8px;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  border-color: #c3c3c3;
}
</style>