<template>
  <div class="home">
    <Header />

    <button type="button" class="home:create-button" @click="openCreateModal">Criar novo agendamento</button>

    <ModalCreate v-show="isModalCreateOpen" @close="closeCreateModal" />
  </div>
</template>

<script>

import Header from '@/components/Header'
import ModalCreate from '@/components/Modal/Create'

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
      console.log(ModalCreate);
    },
    closeCreateModal() {
      this.isModalCreateOpen = false;
    }
  },
  
  components: {
    Header,
    ModalCreate
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
  }
</style>