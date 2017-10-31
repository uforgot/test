/**
 * -----------------------------------------------------
 * Created by uforgot on 2017. 10. 30.
 * test
 * -----------------------------------------------------
 */

import Vue from 'vue';
import ViewApp from './view/view-app.vue';

function init() {
    window.app = new Vue({
        render: h => h(ViewApp)
    }).$mount('#app');
}

window.onLoad = init();