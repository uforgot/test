/**
 * -----------------------------------------------------
 * Created by uforgot on 2017. 10. 30.
 * test
 * -----------------------------------------------------
 */

import Vue from 'vue';
import App from './app.vue';


function init() {
    console.log('bbb');

    window.app = new Vue({
        render: h => h(App)
    }).$mount('#app');

    // new Vue({
    //     el:'#test-app',
    //     components: {
    //         'comp-button':CompButton,
    //         'comp-paper':CompPaper
    //     }
    // })
}

window.onLoad = init();