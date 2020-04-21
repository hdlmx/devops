<template>
    <a-layout id="components-layout-demo-top-side-2" style="height: 100%">
        <a-layout-header class="header" style="background: #022144;padding-left: 0">
            <div class="logo">
                <div>
                    <svg class="iconApp" aria-hidden="true" style="font-size:12px;margin-left: 30px">
                        <use xlink:href="#icondevops2"></use>
                    </svg>

                </div>
            </div>
            <a-row>
                <a-col span="3">
                    <div><span style="color: #ffffff;font-size: 25px;line-height:60px;">DevOps平台</span></div>
                </a-col>
                <a-col span="15">
                    <a-menu
                            mode="horizontal"
                            :defaultSelectedKeys="['2']"
                            :style="{ lineHeight: '64px',background:'#022144',color:'#B5B8BA','font-size':'16px','margin-left':'30px'}">
                        <a-menu-item key="develop">
                            <router-link to="/develop" style="color: #ffffff;font-size: 14px;font-weight: 600">开发中心
                            </router-link>
                        </a-menu-item>
                        <a-menu-item key="test">
                            <router-link to="/test" style="color: #ffffff;font-size: 14px;font-weight: 600">测试中心
                            </router-link>
                        </a-menu-item>
                        <a-menu-item key="operation">
                            <router-link to="/operation" style="color: #ffffff;font-size: 14px;font-weight: 600">运维中心
                            </router-link>
                        </a-menu-item>
                    </a-menu>

                </a-col>
                <a-col span="4">
                    <a-icon type="user" style="color: white;font-size: 25px"/>
                    <a-dropdown>
                        <a class="ant-dropdown-link" style="color: white" @click="e => e.preventDefault()">
                            项目经理
                            <a-icon type="down"/>
                        </a>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <a href="javascript:;">修改信息</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">退出</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </a-col>
            </a-row>


        </a-layout-header>
        <a-layout>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
    import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
    import router from './router'

    export default {
        name: 'app',
        data() {
            return {
                zh_CN,
                collapsed: false,
            }
        },
        components: {},
        router: router
    }
</script>

<style>
    @import "assets/iconfont/iconfont.css";

    html, body {
        margin: 0;
        height: 100%;
        width: 100%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #components-layout-demo-top-side-2 .logo {

        height: 100%;
        /* background: rgba(37, 40, 45, 1.0);*/
        float: left;
    }

    .header {
        background: #fff;
    }

    .icon {
        width: 2.5em;
        height: 2.5em;
        vertical-align: -1em;
        fill: currentColor;
        overflow: hidden;
    }

    .iconApp {
        width: 5em;
        height: 5em;
        vertical-align: -0.5em;
        fill: currentColor;
        overflow: hidden;
        margin-right: 10px;
    }

    .menu-style {
        color: #fff;
        font-weight: 600;
        font-size: 24px;
    }

</style>
