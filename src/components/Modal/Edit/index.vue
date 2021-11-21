<template>
    <div class="modal-backdrop">
        <div class="modal">
            <header class="modal-header">
                <h1>Editar horário</h1>
                <button
                    type="button"
                    class="btn-close"
                    @click="$emit('closeEdit')"
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
                            v-model="appointmentObject.dataAgendamento"
                        >
                    </div>

                    <div class="place">
                        <label for="place">Local</label>
                        <input type="place" id="place" name="place" v-model="appointmentObject.posto">
                    </div>

                    <div class="vaccine">
                        <label for="vaccine">Vacina</label>
                        <input type="vaccine" id="vaccine" name="vaccine" v-model="appointmentObject.dose">
                    </div>

                    <button @click.prevent="edit">
                        Confirmar Alteração
                    </button>
                </form>
                
            </section>

            <footer class="modal-footer">
                <button @click.prevent="deleteAppointment">
                    Excluir agendamento
                </button>
            </footer>
        </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'ModalEdit',

    data() {
        return {
            appointmentObject: {
                dataAgendamento: '',
                posto: '',
                dose: ''
            }
        }
    },

    props: {
        appointment: Object,
        id: Number
    },

    methods: {
        edit() {
            this.appointmentObject.dataAgendamento = moment(String(this.appointmentObject.dataAgendamento)).format('YYYY-MM-DD hh:mm:ss')
            this.$store.dispatch('editAppointment', {
                    id: this.appointment.id, 
                    dataAgendamento: this.appointmentObject.dataAgendamento,
                    posto: this.appointmentObject.posto,
                    dose: this.appointmentObject.dose
                }
            );
            this.$emit('closeEdit')
        },
        deleteAppointment() {
            this.$store.dispatch('deleteAppointment', this.appointment.id);
            this.$emit('closeEdit')
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
        z-index: 998;
    }

    .modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        z-index: 999;
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

    .modal-footer {
        position: relative;
        text-align: center;

        button {
            border: none;
            background: transparent;
            margin: 10px auto;
            color: $red;
        }
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