<template>
  <div>
    <Navbar />
    <EditableTable
      title="Lista de Estudiantes"
      :columns="[
        { label: 'Nombre', field: 'nombre' },
        { label: 'Edad', field: 'edad' },
        { label: 'Carrera', field: 'carrera' }
      ]"
    />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import EditableTable from '@/components/EditableTable.vue'

export default {
  name: 'Vista2',
  components: { Navbar, EditableTable }
}
</script>
