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

    computed: {
        localgroup() {
            return this.$store.getters['localgroups/getItemByRelatedModel'](this.model);
        }        
    }
};
</script>

<style lang="scss">

.fff-marker-details {
    width: 200px;
}

.key {
    font-weight: bold;
}
</style>
