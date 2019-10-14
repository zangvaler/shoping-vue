import Vue from 'vue'
import { Button, Row, Col, Search, Swipe, SwipeItem, Lazyload, List, Field, NavBar, Tab, Tabs, PullRefresh, Tabbar, TabbarItem, Cell, CellGroup, Stepper } from 'vant'
import App from './App.vue'
import router from './router'


Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field).use(NavBar).use(Tab).use(Tabs).use(PullRefresh).use(Tabbar).use(TabbarItem).use(Cell).use(CellGroup).use(Stepper)


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
