<template>
    <div v-if="model" class="fff-marker-details">
        <div class="fff-marker-details__">
            <span class="key">Ort: </span>
            <span class="value">{{model.ort}} (Ortsgruppe: {{localgroup.name}})</span>
        </div>
        <div class="fff-marker-details__">
            <span class="key">Datum: </span>
            <span class="value">{{readableDate}}</span>
        </div>
        <div class="button-wrapper">
            <button @click="show">zur Demo</button>
        </div>
    </div>
</template>

<script>

import router from '@/router';
// ToDo add required
export default {
    name: 'gmInput',

    props: {
        model: Object,
    },

    methods: {
        show() {
            this.$router.push(`demos/${this.model.id}`);
        }
    },

    computed: {
        localgroup() {
            return this.$store.getters['localgroups/getItemByRelatedModel'](this.model);
        },

        readableDate() {
            const date = new Date(this.model.zeit);
            return date.toLocaleDateString(
                'de-DE', 
                {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit'}
            ) + ' Uhr'
        }
    }
};
</script>

<style scoped>
.key {
    font-weight: bold;
}

.button-wrapper {
    margin-top: 10px;
    text-align: center;
}
</style>
