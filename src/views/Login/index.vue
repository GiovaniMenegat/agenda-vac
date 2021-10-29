<template>
    <div class="login">
        <h1>Agenda Vac</h1>

        <form action="">

            <div class="user">
                <label for="user">Usuário</label>
                <input type="text" id="user" name="user" v-model="user">
            </div>

            <div class="password">
                <label for="password">Senha</label>
                <input type="password" id="password" name="password">
            </div>
            
            <button @click.prevent="login">
                Confirmar
            </button>
        </form>
    </div>
  
</template>

<script>
export default {
    name: 'Login',

    data() {
        return {
            user: ''
        }
    },

    methods: {
        login() {
            this.$store.commit('setUser', {
                user: this.user
            })
            this.$router.push({ name: 'Home'})
        }
    }
}
</script>

<style lang="scss">
    @import "../../styles/layout/globals";
    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;

        h1 {
            margin: 50px auto 30px;
        }

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
</style>