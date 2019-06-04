<template>
    <div class="fff-signin main-container">
        <form v-if="!signinSuccess">
            <div class="input-wrapper">
                <label>E-Mail-Adresse</label>
                <input v-model="model.email" type="email" placeholder="E-Mail-Adresse"/>
            </div>

            <div class="input-wrapper">
                <label>Passwort</label>
                <input v-model="model.password" type="password" placeholder="Passwort"/>
            </div>

            <div>
                <button @click="submit">Anmelden</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'signin',

    data() {
        return {
            model: {
                email: null,
                password: null,
            },
            signinSuccess: false,
        }
    },

    methods: {
        async submit(e) {
            e.preventDefault();

            await this.$store.dispatch('signin', this.model)
            this.$router.push({ name: 'home' })
        },
    },
}
</script>


<style scoped>
</style>
