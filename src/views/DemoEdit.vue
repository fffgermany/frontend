<template>
    <div class="fff-demo-edit main-container">
        <h2>Demo
            <span v-if="isNew">erstellen</span>
            <span v-else>bearbeiten</span>
        </h2>

        <form>
            <div class="input-wrapper">
                <label>Ort</label>
                <input v-model="demo.ort" placeholder="Ort der Demonstration"/>
            </div>

            <div class="input-wrapper">
                <label>Zeit</label>
                <input v-model="demo.zeit"/>
            </div>

            <div class="input-wrapper">
                <label>Ortsgruppe</label>
                <input v-model="localgroup.name" disabled/>
            </div>

            <div class="input-wrapper">
                <label>Teilnehmerzahl</label>
                <input v-model="demo.teilnehmerzahl" type="number"/>
            </div>

            <div class="input-wrapper">
                <label>Beschreibung</label>
                <input v-model="demo.beschreibung" type="textarea"/>
            </div>
            
            <div class="input-wrapper">
                <label>Link</label>
                <input v-model="demo.link" type="url"/>
            </div>

            <div class="input-wrapper">
                <label>Adresse des Startpunktes</label>
                <input v-model="addressToLatLng" placeholder="Gib die exakte Adresse des Startpunktes ein und wir ermitteln die Koordinaten für Dich"/>
            </div>

            <div class="fff-input__lat-lng">
                <button :disabled="!addressToLatLng" @click="checkAdress($event)">Suche Koordination</button>
                <input class="fff-signup__input fff-input"
                    v-model="demo.lat"
                    name="lat"
                    type="number"
                    placeholder="Lat"/>
                <input class="fff-signup__input fff-input"
                    v-model="demo.lng"
                    name="lng"
                    type="number"
                    placeholder="Lng"/>
            </div>
            <div>
                <button @click="submit($event)">speichern</button>
                <button v-if="!isNew" @click="erase($event)">löschen</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'demo-edit',

    data() {
        return {
            addressToLatLng: null
        }
    },
   
    methods: {
        async submit(event) {
            event.preventDefault();

            if (this.isNew) {
                await this.$store.dispatch(`demos/create`, this.demo);
            } else {
                await this.$store.dispatch(`demos/update`, this.demo);
            }

            this.$router.push({ name: 'demoView', params: { id: this.$route.params.id } });
        },

        async erase(event) {
            event.preventDefault();

            let confirmation = confirm('Möchtest Du diese Demo wirklich löschen?')
            if (!confirmation) return

            await this.$store.dispatch('demos/delete', this.demo);
            this.$router.push({ name: 'demoList' });
        },

        checkAdress(event) {
            event.preventDefault();

            return axios
                .get('https://nominatim.openstreetmap.org/search?format=json&q=' + this.addressToLatLng)
                .then(this.setLatLng);
            },
        
        setLatLng(response) {
            if (response.data[0]) {
                this.demo.lat = response.data[0].lat;
                this.demo.lng = response.data[0].lon;
                this.$forceUpdate();
            }  
        }
    },

    computed: {
        localgroups() {
            return this.$store.getters['localgroups/getItems'];
        },

        localgroup() {
            // TODO: Select localgroup of user
            return this.localgroups[0] || {};
        },

        demo() {
            return this.$store.getters['demos/getItemByID'](this.$route.params.id) || {};
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
};
</script>

<style lang="scss">
.fff-input__lat-lng {
    display: flex;

    button {
        flex-basis: 100%;
        margin: 5px 5px 5px 0;

        &:disabled {
            background: grey;
        }
    }
}
</style>
