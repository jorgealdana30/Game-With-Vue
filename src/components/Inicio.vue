<template>
    <div id="app">
        <Menu/>
        <div>
            <b-jumbotron header="Bienvenido" class="tituloJumbo"
                         lead="¡Ingresa y diviertete para comenzar esta gran aventura!">
                <p>¿Qué estás esperando? Inicia sesión o registrate para guardar tu progreso en la nube</p>
                <b-button  v-on:click="irA" block variant="danger">Ingresar</b-button>
                <b-button  v-on:click="irA" block variant="danger">Registrate</b-button>
            </b-jumbotron>
        </div>
    </div>
</template>

<script>
    import router from '../router'
    import Menu from './Menu'
    export default {
        name: 'app',
        components:{
            Menu
        },
        methods: {
            irA: function () {
                router.push({
                    name: 'LogIn'
                })
            }
        }

    }
</script>

<style>
    @import '~bootstrap/dist/css/bootstrap.css';
    @import '~bootstrap-vue/dist/bootstrap-vue.css';
    @import "../assets/style.css";
</style>