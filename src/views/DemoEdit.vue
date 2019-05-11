<template>
    <div class="fff-demo-edit main-container">
        <h2>Demo bearbeiten</h2>

        <form>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="demo.ort"
                    name="ort"
                    type="text"
                    placeholder="Ort"/>
            </div>
            <div>
                <!-- <datetime type="datetime" v-model="demo.zeit"></datetime> -->

                <input class="fff-signup__input fff-input"
                    v-model="demo.zeit"
                    name="zeit"
                    type="datetime-local"
                    placeholder="Zeit"/>
            </div>
            <div>
                <select class="fff-signup__input fff-input"
                    v-model="demo.ortsgruppe_id"
                    name="ortsgruppe"
                    placeholder="Ortsgruppe">
                <option v-for="localgroup in localgroups" v-bind:value="localgroup.id" v-bind:key="localgroup.id">
                    {{ localgroup.name }}
                </option>
                </select>
            </div>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="demo.teilnehmerzahl"
                    name="teilnehmerzahl"
                    type="number"
                    placeholder="Teilnehmerzahl"/>
            </div>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="demo.beschreibung"
                    name="beschreibung"
                    type="textarea"
                    placeholder="Beschreibung"/>
            </div>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="demo.link"
                    name="link"
                    type="url"
                    placeholder="Link"/>
            </div>
            <div>
                <input class="fff-signup__input fff-input"
                    v-model="addressToLatLng"
                    name="addressToLatLng"
                    type="text"
                    placeholder="Gib die Adresse des Startpunktes ein und wir ermitteln die Koordinaten für dich"/>
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
                <button @click="erase($event)">löschen</button>
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

            this.$router.push({ name: 'demoList' });
        },

        async erase(event) {
            event.preventDefault();

            await this.$store.dispatch(`${namespace}/delete`, this.demo);
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

        demo() {
            return this.$store.getters['demos/getItemByID'](this.$router.currentRoute.params.id) || {};
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
