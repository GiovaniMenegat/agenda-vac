<template>
    <div class="modal-backdrop">
        <div class="modal">
            <header class="modal-header">
                <h1>Agendar horário</h1>
                <button
                    type="button"
                    class="btn-close"
                    @click="$emit('close')"
                >
                    x
                </button>
            </header>

            <section class="modal-body">
                
                <form>
                    <div class="schedule">
                        <label for="schedule">Horário</label>
                        <input 
                            type="datetime-local" 
                            id="schedule" 
                            name="schedule" 
                            :min="new Date()" 
                            v-model="appointment.schedule"
                        >
                    </div>

                    <div class="place">
                        <label for="place">Local</label>
                        <input type="place" id="place" name="place" v-model="appointment.place">
                    </div>

                    <div class="vaccine">
                        <label for="vaccine">Vacina</label>
                        <input type="vaccine" id="vaccine" name="vaccine" v-model="appointment.vaccine">
                    </div>

                    <button @click.prevent="create">
                        Confirmar
                    </button>
                </form>
                
            </section>
        </div>
  </div>
</template>

<script>
export default {
    name: 'ModalCreate',

    data() {
        return {
            appointment: {
                schedule: '',
                place: '',
                vaccine: ''
            }
        }
    },

    methods: {
        create() {
            console.log(typeof this.appointment.schedule);
            this.$store.dispatch('addAppointment', this.appointment);
            this.appointment = {
                schedule: '',
                place: '',
                vaccine: ''
            }
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss">
    @import "../../../styles/layout/globals";
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            height: 50vh;
            div {
                display: flex;
                align-items: center;
                flex-direction: column;
                label {
                    margin-bottom: 20px;
                }

                input {
                    width: 250px;
                    padding: 5px 15px;
                    font-size: 18px;
                }

                & + div {
                    margin-top: 20px;
                }
            }

            button {
                width: 100%;
                height: 14%;
                margin-top: 30px;
                border: 1px solid $green;
                border-radius: 6px;
                font-weight: 800;
                font-family:  'Roboto', sans-serif;
                font-size: 18px;
                color: $font;

                transition: 0.3s;
                &:hover {
                    background: $green;
                    color: #fff;
                }
                
            }
        }
    }

    .modal-header {
        padding: 40px;
        display: flex;
    }

    .modal-header {
        position: relative;
        border-bottom: 1px solid #eeeeee;
        color: $font;
        justify-content: space-between;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
    }

    .btn-close {
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        font-weight: bold;
        background: transparent;
    }

    .btn-green {
        color: white;
        background: #4AAE9B;
        border: 1px solid #4AAE9B;
        border-radius: 2px;
    }
</style>