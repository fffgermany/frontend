<template>
    <div class="fff-demo-view main-container">
        <vue-headful :title="`Demo in ${localgroup.name} - Fridays For Future Regionalgruppen`" />

        <EditButton v-if="isEditable" :to="{ name: 'demoEdit', id: demo.id }"/>
        
        <div class="map-placeholder">
            <div>
                <p>TODO: Karte</p>
                <p>Lat: {{ demo.lat }}</p>
                <p>Long: {{ demo.lng }}</p>
            </div>
        </div>

        <h2>Demo</h2>

        <div class="attribute" v-if="demo.ort">
            <span class="key">Ort: </span>
            <span class="value">{{ demo.ort }}</span>
        </div>

        <div class="attribute" v-if="demo.beschreibung">
            <span class="key">Beschreibung: </span>
            <span class="value">{{ demo.beschreibung }}</span>
        </div>

        <div class="attribute" v-if="demo.beschreibung">
            <span class="key">Teilnehmerzahl: </span>
            <span class="value">{{ demo.teilnehmerzahl }}</span>
        </div>

        <div class="attribute" v-if="localgroup">
            <span class="key">Ortsgruppe: </span>
            <router-link :to="{ name: 'groupView', params: { id: localgroup.id } }" class="value">{{ localgroup.name }}</router-link>
        </div>

        <div class="attribute" v-if="demo.link">
            <span class="key">Link: </span>
            <span class="value"><a :href="demo.link">{{ demo.link }}</a></span>
        </div>
    </div>
</template>

<script>
import EditButton from '@/components/EditButton'

export default {
    name: 'demo-view',

    components: { EditButton },

    computed: {
        localgroups() {
            return this.$store.getters['localgroups/getItems'];
        },

        demo() {
            return this.$store.getters['demos/getItemByID'](this.$router.currentRoute.params.id) || {};
        },

        localgroup() {
            if (this.demo && this.localgroups) {
                return this.localgroups.find(og => og.id === this.demo.ortsgruppe_id) || {};
            }
            return {}
        },

        isEditable() {
            if (!this.localgroup) return false

            const user = this.$store.getters['users/getUser']();
            return user.id === this.localgroup.admin_id;
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
.map-placeholder {
    background: lightblue;
    height: 300px;
    display: grid;
    place-items: center;
}

.attribute {
    margin: 10px 0;
}

.attribute .key {
    font-weight: bold;
}
</style>
