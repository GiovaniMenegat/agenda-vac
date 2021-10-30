<template>
  <div class="home">
    <Header />

    <button type="button" class="home:create-button" @click="openCreateModal">Criar novo agendamento</button>

    <ModalCreate v-show="isModalCreateOpen" @close="closeCreateModal" />

    <div class="home:appointments">
      <Appointment 
        v-for="(appointment, idx) in appointments" 
        :key="idx" 
        :appointment="appointment"
      />
    </div>
    
  </div>
</template>

<script>

import Header from '@/components/Header'
import ModalCreate from '@/components/Modal/Create'
import Appointment from '@/components/Appointment'

export default {
  name: 'Home',

  data() {
    return {
      isModalCreateOpen: false
    }
  },

  methods: {
    openCreateModal() {
      this.isModalCreateOpen = true;
    },
    closeCreateModal() {
      this.isModalCreateOpen = false;
    }
  },

  mounted() {
    console.log(this.appointments);
  },
  
  components: {
    Header,
    ModalCreate,
    Appointment
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
  }
</style>