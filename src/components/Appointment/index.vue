<template>
  <div class="appointment">
    <p>{{appointmentDate}} - {{appointment.posto}} - {{appointment.dose}}</p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "Appointment",

  props: {
    appointment: Object,
  },

  computed: {
    appointmentDate() {
      moment.locale("pt-br")
      
      return moment(this.appointment.dataAgendamento).format('LLL');
    }
  }
}
</script>

<style lang="scss">
  @import "../../styles/layout/globals";
  .appointment {
    text-align: center;
    border: 1px solid black;
    margin: 0 50px;
    border-radius: 6px;
    padding: 10px;

    cursor: pointer;
    color: $font;

    transition: 0.3s;
    &:hover {
        background: $green;
        color: #fff;
    }

  }
</style>