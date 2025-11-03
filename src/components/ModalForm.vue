<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h2>{{ isEditing ? 'Editar registro' : 'Agregar nuevo registro' }}</h2>

      <form @submit.prevent="saveData">
        <div v-for="(field, i) in fields" :key="i">
          <label>{{ field.label }}:</label>
          <input
            v-model="localData[field.field]"
            type="text"
            required
          />
        </div>

        <div class="buttons">
          <button type="submit" class="btn-guardar">Guardar</button>
          <button type="button" class="btn-cerrar" @click="$emit('close')">Cerrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalForm",
  props: {
    show: Boolean,
    data: Object,
    fields: Array,
    isEditing: Boolean
  },
  data() {
    return {
      localData: this.data ? { ...this.data } : {}
    };
  },
  watch: {
    data(newVal) {
      this.localData = newVal ? { ...newVal } : {};
    }
  },
  methods: {
    saveData() {
      this.$emit("save", this.localData);
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 350px;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.btn-guardar {
  background-color: #04AA6D;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-cerrar {
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
}
</style>