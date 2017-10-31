/**
* -----------------------------------------------------
* Created by uforgot on 2017. 10. 31.
* test
* -----------------------------------------------------
*/

<template>
    <div>
        <comp-menu v-for="item in menuData">
            {{item.title}}
        </comp-menu>
    </div>
</template>

<style scoped lang="scss">
    .hide {
        display:none;
    }
</style>

<script>
    import CompMenu from './../comp/comp-menu.vue'

    export default {
        mixins: [],
        components: {
             'comp-menu' : CompMenu
        },

        props: {},
        data: function () {
            return {
                menuData : [
                    {
                        title:'HOME',
                        href:'/'
                    },

                    {
                        title:'about',
                        href:'/about',
                        sub : [
                            {
                                title:'history',
                                href:'/about/history'
                            }
                        ]
                    },
                    {
                        title:'about',
                        href:'/about',
                        sub : [
                            {
                                title:'history',
                                href:'/about/history'
                            }
                        ]
                    }
,                    {
                        title:'about',
                        href:'/about',
                        sub : [
                            {
                                title:'history',
                                href:'/about/history'
                            }
                        ]
                    }
,                    {
                        title:'about',
                        href:'/about',
                        sub : [
                            {
                                title:'history',
                                href:'/about/history'
                            }
                        ]
                    }

                ]
            };
        },

        computed: {},
        methods: {
            aboutOver : function() {
                console.log('2222');
                this.isAboutOver = true;
            }
        },
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
