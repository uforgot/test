/**
* -----------------------------------------------------
* Created by uforgot on 2017. 10. 30.
* test
* -----------------------------------------------------
*/

<template>
    <div id="app">
        <view-menu></view-menu>
    </div>
</template>

<style scoped lang="scss">
</style>

<script>
    import ViewMenu from './../view/view-menu.vue';

    export default {
        mixins: [],
        components: {
            'view-menu' : ViewMenu
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
