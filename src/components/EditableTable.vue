<template>
  <div class="table-container">
    <h2>{{ title }}</h2>
    <button @click="openModal()" class="btn-agregar">Agregar</button>

    <table>
      <thead>
        <tr>
          <th v-for="(col, i) in columns" :key="i">{{ col.label }}</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="(col, i) in columns" :key="i">{{ item[col.field] }}</td>
          <td>
            <button class="btn-editar" @click="openModal(item, index)">Editar</button>
            <button class="btn-eliminar" @click="eliminar(index)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal reutilizable -->
    <ModalForm 
      :show="showModal"
      :data="selectedData"
      :fields="columns"
      :isEditing="isEditing"
      @close="closeModal"
      @save="guardar"
    />
  </div>
</template>

<script>
import ModalForm from '@/components/ModalForm.vue'

export default {
  name: "EditableTable",
  components: { ModalForm },
  props: {
    title: String,
    columns: Array, // [{ label: "Nombre", field: "nombre" }]
  },
  data() {
    return {
      items: [],
      showModal: false,
      selectedData: null,
      selectedIndex: null,
      isEditing: false
    };
  },
  methods: {
    openModal(data = null, index = null) {
      this.isEditing = !!data;
      this.selectedData = data ? { ...data } : {};
      this.selectedIndex = index;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    guardar(nuevo) {
      if (this.isEditing && this.selectedIndex !== null) {
        this.items.splice(this.selectedIndex, 1, nuevo);
      } else {
        this.items.push(nuevo);
      }
    },
    eliminar(index) {
      this.items.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.table-container {
  margin: 80px auto;
  width: 80%;
  text-align: center;
  font-family: 'Nunito', sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
}

th {
  background-color: #04AA6D;
  color: white;
}

.btn-agregar, .btn-editar, .btn-eliminar {
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-agregar {
  background-color: #04AA6D;
  color: white;
}

.btn-editar {
  background-color: #2196F3;
  color: white;
}

.btn-eliminar {
  background-color: #f44336;
  color: white;
}
</style>
