<template>
    <div class="fff-demo-edit main-container">
        <form>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="localgroup.name"
                    name="name"
                    type="text"
                    placeholder="Name"/>
            </div>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="localgroup.lat"
                    name="lat"
                    type="number"
                    placeholder="Lat"/>
                <input class="fff-signup__input fff-input"
                    v-model="localgroup.lng"
                    name="lng"
                    type="number"
                    placeholder="Lng"/>
            </div>
            <div>
                <textarea class="fff-signup__input fff-input"
                    v-model="localgroup.description"
                    name="description"
                    placeholder="Beschreibung"/>
            </div>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="localgroup.twitter"
                    name="twitter"
                    type="text"
                    placeholder="Twitter"/>
            </div>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="localgroup.facebook"
                    name="facebook"
                    type="text"
                    placeholder="Facebook"/>
            </div>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="localgroup.email"
                    name="email"
                    type="text"
                    placeholder="Email"/>
            </div>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="localgroup.telnr"
                    name="telnr"
                    type="text"
                    placeholder="Telefon Nummer"/>
            </div>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="localgroup.whatsapp"
                    name="whatsapp"
                    type="text"
                    placeholder="Whatsapp"/>
            </div>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="localgroup.telegram"
                    name="telegram"
                    type="text"
                    placeholder="Telegram"/>
            </div>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="localgroup.signalmsg"
                    name="signalmsg"
                    type="text"
                    placeholder="signalmsg"/>
            </div>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="localgroup.instagram"
                    name="instagram"
                    type="text"
                    placeholder="instagram"/>
            </div>
            
            <button @click="submit($event)">speichern</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

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

<style lang="scss">
</style>
