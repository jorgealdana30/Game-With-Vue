<template>
    <div id="app">
        <Menu/>
        <div class="contenedor">
            <b-alert variant="secondary" :show="errorMsg">Usuario y contraseña no encontrados.</b-alert>
            <b-form>
                <b-form-group
                        id="input-group-1"
                        label="Correo electronico"
                        label-for="input-1"
                        description="¡No compartiremos tu correo con nadie más!"
                >
                    <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            required
                            placeholder="Ingresa tu correo"
                    ></b-form-input>
                </b-form-group>

                <label for="text-password">Password</label>
                <b-input type="password" id="text-password" placeholder="Ingresa tu contraseña" v-model="form.pass"
                         aria-describedby="password-help-block"></b-input>
                <b-form-text id="password-help-block">
                    Tu contraseña debe ser de 8 a 24 caracteres, debe contener numeros y letras, y no puede contener
                    espacios ni emojis.
                </b-form-text>
                <hr>
                <div class="d-flex flex-column">
                    <b-button type="submit" v-on:click="login" block variant="outline-primary">¡Ingresar!</b-button>
                    <b-button type="reset" block variant="outline-warning">Limpiar datos</b-button>
                    <hr>
                    <router-link to="/" style="margin-top: 8px">
                        <b-button type="reset" block variant="danger">Regresar</b-button>
                    </router-link>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
    import Menu from './Menu'
    import firebase from "firebase";

    var firebaseConfig = {
        apiKey: "AIzaSyCgqU6mbx8FgavQB9LOTo60UWC_EpDJOJ4",
        authDomain: "juego-ba5ea.firebaseapp.com",
        databaseURL: "https://juego-ba5ea.firebaseio.com",
        projectId: "juego-ba5ea",
        storageBucket: "",
        messagingSenderId: "912923335681",
        appId: "1:912923335681:web:37bdf144bc451f36"
    };
    firebase.initializeApp(firebaseConfig);
    export default {
        name: "LogIn",
        data() {
            return {
                errorMsg: false,
                form: {
                    email: '',
                    pass: '',
                    food: null,
                    checked: []
                },
                foods: [{text: 'Select One', value: null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true
            }
        },
        components: {
            Menu
        },
        methods: {
            login: function () {

               let f= firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.pass).catch(
                    function error(error) {
                        if (error.code === "auth/user-not-found") {
                            return true;
                        }
                    }
                );
                console.log(f)
            }
        }
    }
</script>

<style scoped>

</style>