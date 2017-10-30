/**
* -----------------------------------------------------
* Created by uforgot on 2017. 10. 30.
* test
* -----------------------------------------------------
*/

<template>
    <div id="app">
        <comp-paper></comp-paper>
        <comp-button></comp-button>
    </div>
</template>

<style scoped lang="scss">
</style>

<script>
    import CompButton from './comp-button.vue';
    import CompPaper from './comp-paper.vue';

    export default {
        mixins: [],
        components: {
            'comp-button':CompButton,
            'comp-paper':CompPaper
        },

        props: {},
        data: function () {
            return {};
        },

        computed: {},
        methods: {},
        watch: {},

        //life cycle
        //beforeCreate : function() {},
        //created : function() {},
        //beforeMount : function() {},
        //mounted : function() {},
        //beforeUpdate : function() {},
        //updated : function() {},
        //activated : function() {},
        //deactivated : function() {},
        //beforeDestroy : function () {},
        //destroyed : function() {},
        dummy: {}
    }
</script>
