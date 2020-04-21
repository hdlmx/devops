import Vue from 'vue'
import VueRouter from 'vue-router'
import develop from "./components/application"
import test from './components/testerCenter'
import operator from './components/operatorCenter'

import app from './components/development/applicationDetail'
import server from './components/development/server'
import project from "./components/project";
import applicationDetail from "./components/development/developmentCenter2";
import build from "./components/development/build";

import testAssemblyLine from "./components/development/testAssemblyLine";
import deliverAssemblyLine from "./components/development/deliverAssemblyLine";

Vue.use(VueRouter)

const routes = [
    {
        path: '/develop', component: project,


    },
    {
        path: '/develop/project/:namespace/', name: 'project', component: develop,

        children: [
            {path: '/', name: 'appDefault', component: app},
            {path: 'app', name: 'app', component: app},
            {path: 'server', name: 'server', component: server},
        ]
    },
    {
        path: '/develop/project/:namespace/testAssemblyLine', name: 'testAssemblyLine', component: testAssemblyLine,
    },
    {
        path: '/develop/project/:namespace/deliverAssemblyLine', name: 'deliverAssemblyLine', component: deliverAssemblyLine,
    },
    {
        path: '/develop/project/:namespace/app/:mark', name: 'appDetail', component: applicationDetail,
        children: [{
            path: 'build', name: 'build', component: build,
        }]
    },
    {path: '/test', component: test},
    {path: '/operation', component: operator},
]
const router = new VueRouter({
    routes: routes
})
export default router