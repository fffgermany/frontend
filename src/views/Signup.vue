<template>
    <div class="fff-signup main-container">
        <vue-headful title="Registrieren - Fridays For Future Regionalgruppen" />

        <form v-if="!signupSuccess">
            <div class="input-wrapper">
                <label>Name</label>
                <input v-model="model.name" placeholder="Name"/>
                <span class="fff-input__error">{{error.name}}</span>
            </div>

            <div class="input-wrapper">
                <label>E-Mail-Adresse</label>
                <input v-model="model.email" type="email" placeholder="E-Mail-Adresse"/>
                <span class="fff-input__error">{{error.email}}</span>
            </div>

            <div class="input-wrapper">
                <label>Beschreibung</label>
                <input v-model="model.description" placeholder="Beschreibung"/>
                <span class="fff-input__error">{{error.description}}</span>
            </div>

            <div class="input-wrapper">
                <label>Ortsgruppe</label>
                <select class="fff-signup__input fff-input"
                    v-model="model.ortsgruppe_id"
                    name="ortsgruppe">
                    <option value="null" disabled hidden>Ortsgruppe</option>
                        <option v-for="localgroup in localgroups" v-bind:value="localgroup.id" v-bind:key="localgroup.id">
                        {{ localgroup.name }}
                    </option>
                </select>
                <span class="fff-input__error">{{error.ortsgruppe_id}}</span>
            </div>

            <div class="input-wrapper">
                <label>Passwort</label>
                <input v-model="model.password" placeholder="Neues Passwort festlegen" type="password"/>
                <span class="fff-input__error">{{error.password}}</span>
            </div>

            <div class="input-wrapper">
                <label>Passwort wiederholen</label>
                <input v-model="model.password" placeholder="Passwort wiederholen" type="password"/>
                <span class="fff-input__error">{{error.password}}</span>
            </div>

            <div class="input-wrapper">
                <label>Secret</label>
                <input v-model="model.thesecret" placeholder="Secret"/>
                <span class="fff-input__error">{{error.thesecret}}</span>
            </div>

            <div>
                <button @click="submit">registrieren</button>
            </div>
        </form>

        <div v-if="signupSuccess">
            Wir haben dir eine Email geschickt, um deine Email-Adresse zu verifizieren.
            Wenn deine Email-Adresse verifiziert ist, schalten wir dein Konto frei.
        </div>
    </div>
</template>

<script>

export default {
    name: 'signup',
    data() {
        return {
            model: {
                email: null,
                name: null,
                ortsgruppe_id: null,
                password: null,
                thesecret: null,
            },
            signupSuccess: false,
            error: {},
        }
    },

    computed: {
        localgroups() {
            return this.$store.getters['localgroups/getItems'];
        },
    },

    methods: {
        async submit(event) {
            event.preventDefault();

            let response = await this.$store.dispatch('signup', this.model)
            // this.error = err.response;
        },
    },

    beforeCreate() {
        this.$store.dispatch('localgroups/getList');
    },
}
</script>

<style scoped>
</style>
