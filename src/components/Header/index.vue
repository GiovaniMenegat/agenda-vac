<template>
    <header>
        <div class="left">
            <div class="left-img">
                <font-awesome-icon :icon="['fas', 'user']" />
            </div>
            
            <h4>{{userName}}</h4>
        </div>
        
        <font-awesome-icon @click="signout" class="signout" :icon="['fas', 'arrow-right']" />
    </header>
</template>

<script>
export default {
    name: 'Header',

    methods: {
        signout() {
            this.$store.commit('setUser', {
                user: ''
            })
            this.$router.push({ name: 'Login'})
        }
    },

    computed: {
        userName() {
            return this.$store.state.user.user
        }
    }
}
</script>

<style lang="scss">
    @import "../../styles/layout/globals";

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        border-bottom: 1px solid #000;

        .left {
            display: flex;
            align-items: center;

            &-img {
                padding: 10px;
                background: grey;
                border-radius: 50%;

                svg {
                    color: #fff;
                }
            }

            h4 {
                margin-left: 20px;
            }
        }

        .signout {
            cursor: pointer;
        }
    }

</style>