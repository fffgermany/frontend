<template>
    <div class="fff-marker-details">
        <div class="fff-marker-details__">
            <span class="key">Ort: </span>
            <span class="value">{{model.ort}} (Ortsgruppe: {{localgroup.name}})</span>
        </div>
        <div class="fff-marker-details__">
            <span class="key">Datum: </span>
            <span class="value">{{model.zeit}}</span>
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
        }        
    }
};
</script>

<style lang="scss">
.key {
    font-weight: bold;
}

.button-wrapper {
    margin-top: 10px;
    text-align: center;
}
</style>
