<template>
  <table id="UsersTable" cellspacing="0" cellpadding="0">
    <thead>
      <th>#</th>
      <th>Nome</th>
      <th>E-mail</th>
      <th>Cargo</th>
    </thead>
    <tbody>
      <tr v-if="users.length === 0">
        <td colspan="5">Não há dados</td>
      </tr>
      <template v-for="(user,index) in users">
        <tr v-bind:key="index">
          <td v-if="index+1 < 10">{{"0"+(index+1)}}</td>
          <td v-else>{{index+1}}</td>
          <td>{{user.name.split(" ")[0]}}</td>
          <td>{{user.email}}</td>
          <td>{{user.role}}</td>
          <td>
            <button class="btn-table" v-on:click="editUser(index)">Alt</button>
            <button class="btn-table" v-on:click="deleteUser(user.id)">Del</button>
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5">
          <button v-on:click="addUser" class="btn-table">Adicionar usuário</button>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { db } from "../db";

export default {
  name: "Table",
  data: () => ({
    users: []
  }),
  firestore: {
    users: db.collection("users").orderBy("createdAt")
  },
  methods: {
    addUser() {
      const { dispatch } = this.$store;
      const cleanUp = () => {
        dispatch("setModalTitle", "");
        dispatch("setModalName", "");
        dispatch("setModalEmail", "");
        dispatch("setModalRole", "");
      };
      dispatch("setModalTitle", "ADICIONAR USUÁRIO");
      dispatch("setModalButton0", {
        func: () => {
          dispatch("closeModal");
          cleanUp();
        }
      });
      dispatch("setModalButton1", {
        func: () => {
          const { modal } = this.$store.state;
          const user = {
            name: modal.name.trim(),
            email: modal.email,
            role: modal.role,
            createdAt: Date.now()
          };
          db.collection("users").add(user);
          dispatch("closeModal");
          cleanUp();
        }
      });
      this.$store.dispatch("openModal");
    },
    editUser(i) {
      const user = this.users[i];
      const { dispatch } = this.$store;
      const { modal } = this.$store.state;
      const cleanUp = () => {
        dispatch("setModalTitle", "");
        dispatch("setModalName", "");
        dispatch("setModalEmail", "");
        dispatch("setModalRole", "");
      };

      dispatch("setModalTitle", `Editar usuário #${i + 1}`);
      dispatch("setModalName", user.name);
      dispatch("setModalEmail", user.email);
      dispatch("setModalRole", user.role);

      let func0 = () => {
        dispatch("closeModal");
        cleanUp();
      };
      func1 = () => {
        db.collection("users")
          .doc(user.id)
          .update({
            name: modal.name,
            email: modal.email,
            role: modal.role
          });
        dispatch("closeModal");
        cleanUp();
      };

      dispatch("setModalButton0", {
        func: func0
      });

      dispatch("setModalButton1", {
        func: func1
      });
      dispatch("openModal");
    },
    deleteUser(id) {
      db.collection("users")
        .doc(id)
        .delete();
    }
  }
};
</script>

<style scoped>
table#UsersTable {
  width: 70%;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

table#UsersTable .btn-table {
  padding: 0;
  margin: 0;
  border-style: solid;
  background: #2f2f2f;
  color: white;
  border-color: #2f2f2f;
  border-radius: 4px;
  border-width: 0.3rem 0.5rem;
  cursor: pointer;
}

table#UsersTable tr {
  height: 2.5rem;
  text-align: start;
}
table#UsersTable > tbody > tr > td:last-child {
  text-align: center;
}
table#UsersTable > tbody > tr > td:last-child > button {
  margin: 0 0.2rem;
}

table#UsersTable > tbody > tr:nth-child(2n + 1) {
  background: #f3f3f3;
}

table#UsersTable > tfoot > * {
  text-align: center;
  font-weight: 600;
}
table#UsersTable > tfoot > tr > td > button {
  text-align: center;
  font-weight: 600;
}
</style>
