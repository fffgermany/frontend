<template>
    <div class="fff-demo-edit main-container">
        <h2>Ortsgruppe
            <span v-if="isNew">erstellen</span>
            <span v-else>bearbeiten</span>
        </h2>

        <form>
            <div class="input-wrapper">
                <label>Name</label>
                <input v-model="localgroup.name" placeholder="Name"/>
            </div>

            <div class="coordinates-wrapper">
                <div class="input-wrapper">
                    <label>Breitengrad der Koordinaten</label>
                    <input v-model="localgroup.lat" placeholder="Breitengrad der Koordinaten"/>
                </div>

                <div class="input-wrapper">
                    <label>Längengrad der Koordinaten</label>
                    <input v-model="localgroup.lng" placeholder="Längengrad der Koordinaten"/>
                </div>
            </div>

            <div class="input-wrapper">
                <label>Beschreibung</label>
                <input v-model="localgroup.description" placeholder="Beschreibung"/>
            </div>

            <div class="input-wrapper">
                <label>Twitter-Benutzername (ohne @)</label>
                <input v-model="localgroup.twitter" placeholder="Twitter"/>
            </div>

            <div class="input-wrapper">
                <label>Facebook-Benutzername</label>
                <input v-model="localgroup.facebook" placeholder="Facebook"/>
            </div>

            <div class="input-wrapper">
                <label>E-Mail-Adresse</label>
                <input v-model="localgroup.email" placeholder="öffentliche E-Mail-Adresse" type="email"/>
            </div>

            <div class="input-wrapper">
                <label>Telefonnummer</label>
                <input v-model="localgroup.telnr" placeholder="Telefonnummer" type="tel"/>
            </div>

            <div class="input-wrapper">
                <label>WhatsApp-Gruppenlink</label>
                <input v-model="localgroup.whatsapp" placeholder="WhatsApp"/>
            </div>

            <div class="input-wrapper">
                <label>Telegram-Gruppenlink</label>
                <input v-model="localgroup.telegram" placeholder="Telegram"/>
            </div>

            <div class="input-wrapper">
                <label>Signal</label>
                <input v-model="localgroup.signalmsg" placeholder="Signal"/>
            </div>

            <div class="input-wrapper">
                <label>Instagram-Benutzername (ohne @)</label>
                <input v-model="localgroup.instagram" placeholder="Instagram"/>
            </div>
            
            <button @click="submit($event)">Speichern</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'group-edit',

    methods: {
        async submit(event) {
            event.preventDefault();

            if (this.isNew) {
                await this.$store.dispatch(`localgroups/create`, this.localgroup);
            } else {
                await this.$store.dispatch(`localgroups/update`, this.localgroup);
            }

            this.$router.push({ name: 'demoList' });
        },

        async erase(event) {
            event.preventDefault();

            await this.$store.dispatch(`${namespace}/delete`, this.localgroup);
            this.$router.push({ name: 'demoList' });
        },

    },

    computed: {
        localgroups() {
            return this.$store.getters['localgroups/getItems'];
        },

        localgroup() {
            return this.localgroups.find(g => g.id == this.$route.params.id) || {};
        },

        isNew() {
            return this.$route.params.id === 'new';
        }
    },

    beforeCreate() {
        this.$store.dispatch('demos/getList');
        this.$store.dispatch('localgroups/getList');
        this.$store.dispatch('propaganda/getList');
    }
}
</script>

<style scoped>
.coordinates-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
}
</style>
