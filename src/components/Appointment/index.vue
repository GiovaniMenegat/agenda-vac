<template>
  <div class="appointment">
    <p>{{appointment.schedule}} - {{appointment.place}} - {{appointment.vaccine}}</p>
  </div>
</template>

<script>
export default {
  name: "Appointment",

  props: {
    appointment: Object
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

    & + div {
      margin-top: 20px;
    }
  }
</style>