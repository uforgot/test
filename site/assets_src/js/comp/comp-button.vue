/**
* -----------------------------------------------------
* Created by uforgot on 2017. 10. 30.
* test
* -----------------------------------------------------
*/

<template>
    <div class="test" @mouseover="testMethod">
        <button>test</button>
    </div>
</template>

<style scoped lang="scss">
    .test {
        background: #f00;
    }
</style>

<script>
    export default {
        mixins: [],
        components: {},

        props: {},
        data: function () {
            return {};
        },

        computed: {},
        methods: {
            testMethod : function() {
                console.log('test');
            }
        },
        watch: {},

        //life cycle
        //beforeCreate : function() {},
        //created : function() {},
        //beforeMount : function() {},
        //mounted : function() {
        //    this.$el.addEventListener('mouseover', e => { this.testMethod(e) });
        //},
        //beforeUpdate : function() {},
        //updated : function() {},
        //activated : function() {},
        //deactivated : function() {},
        //beforeDestroy : function () {

        //},
        //destroyed : function() {},
        dummy: {}
    }
</script>
