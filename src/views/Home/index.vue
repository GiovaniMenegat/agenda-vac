<template>
  <div class="home">
    <Header />

    <button type="button" class="home:create-button" @click="openCreateModal">Criar novo agendamento</button>

    <ModalCreate v-show="isModalCreateOpen" @close="closeCreateModal" />

    <div class="home:appointments">
      <div 
        class="home:appointment"
        v-for="(appointment, idx) in appointments" 
        :key="idx"
      >
        
        <Appointment
          :appointment="appointment"
          @click.native="openEditModal(idx)"
        />

        <ModalEdit 
          v-show="isModalEditOpen === idx "
          :appointment="appointment"
          :id="idx"
          @closeEdit="closeEditModal" 
        />
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header'
import ModalCreate from '@/components/Modal/Create'
import ModalEdit from '@/components/Modal/Edit'
import Appointment from '@/components/Appointment'

export default {
  name: 'Home',

  data() {
    return {
      isModalCreateOpen: false,
      isModalEditOpen: null
    }
  },

  methods: {
    openCreateModal() {
      this.isModalCreateOpen = true;
    },
    closeCreateModal() {
      this.isModalCreateOpen = false;
    },
    openEditModal(id) {
      this.isModalEditOpen = id;
    },
    closeEditModal() {
      this.isModalEditOpen = null;
    }
  },
  
  components: {
    Header,
    ModalCreate,
    ModalEdit,
    Appointment
  },

  mounted() {
    this.$store.dispatch('fetchAppointments');
  },

  computed: {
      appointments() {
        return this.$store.state.appointments
      }
    }
}
</script>

<style lang="scss">
  @import "../../styles/layout/globals";
  .home {
    &\:create-button {
      float: right;
      margin: 20px 50px;
      padding: 10px 20px;
      background: $green;
      border: 1px solid $green;
      border-radius: 6px;
      color: #fff;
    }

    &\:appointments {
      margin-top: 100px;
    }
    
    &\:appointment {
      & + div {
        margin-top: 20px;
      }
    }
    
  }
</style>