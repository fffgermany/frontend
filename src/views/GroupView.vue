<template>
    <div class="fff-group-view main-container">
        <vue-headful :title="`${localgroup.name} - Fridays For Future Regionalgruppen`" />

        <EditButton v-if="isEditable" :to="{ name: 'groupEdit', id: localgroup.id }"/>
        
        <div class="map-placeholder">
            <div>
                <p>TODO: Karte</p>
                <p>Lat: {{ localgroup.lat }}</p>
                <p>Long: {{ localgroup.lng }}</p>
            </div>
        </div>

        <h2>Ortsgruppe: {{ localgroup.name }}</h2>

        <div class="attribute" v-if="localgroup.description">
            <span class="key">Beschreibung: </span>
            <span class="value">{{ localgroup.description }}</span>
        </div>

        <div class="attribute" v-if="localgroup.twitter">
            <span class="key">Twitter: </span>
            <span class="value">{{ localgroup.twitter }}</span>
        </div>
        
        <div class="attribute" v-if="localgroup.facebook">
            <span class="key">Facebook: </span>
            <span class="value">{{ localgroup.facebook }}</span>
        </div>

        <div class="attribute" v-if="localgroup.email">
            <span class="key">E-Mail: </span>
            <span class="value">{{ localgroup.email }}</span>
        </div>

        <div class="attribute" v-if="localgroup.telnr">
            <span class="key">Telefonnummer: </span>
            <span class="value">{{ localgroup.telnr }}</span>
        </div>

        <div class="attribute" v-if="localgroup.whatsapp">
            <span class="key">WhatsApp: </span>
            <span class="value">{{ localgroup.whatsapp }}</span>
        </div>

        <div class="attribute" v-if="localgroup.signalmsg">
            <span class="key">Signal: </span>
            <span class="value">{{ localgroup.signalmsg }}</span>
        </div>

        <div class="attribute" v-if="localgroup.instagram">
            <span class="key">Instagram: </span>
            <span class="value">{{ localgroup.instagram }}</span>
        </div>
    </div>
</template>

<script>
import EditButton from '@/components/EditButton'

export default {
    name: 'group-view',

    components: { EditButton },

    computed: {
        localgroups() {
            return this.$store.getters['localgroups/getItems'];
        },

        localgroup() {
            return this.localgroups.find(g => g.id == this.$route.params.id) || {};
        },

        isEditable() {
            const user = this.$store.getters['users/getUser']();
            return user.id === this.localgroup.admin_id;
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
