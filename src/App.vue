<template>
    <a-layout id="home-page" style="height: 100%">
        <a-layout-sider
                :trigger="null"
                collapsible
                v-model="collapsed"
                style="background: #1F2126"
        >
            <div class="logo"/>
            <a-menu style="background: #1F2126" mode="inline" :defaultSelectedKeys="['1']">
                <a-menu-item key="1">
                    <a-icon type="user"/>
                    <span class="menu-name">项目</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="video-camera"/>
                    <span  class="menu-name">收藏夹</span>
                </a-menu-item>
                <a-menu-item key="4">
                    <a-icon type="upload"/>
                    <span  class="menu-name">发现镜像</span>
                </a-menu-item>
                <a-menu-item key="5">
                    <a-icon type="upload"/>
                    <span  class="menu-name">集群管理</span>
                </a-menu-item>
                <a-menu-item key="6">
                    <a-icon type="upload"/>
                    <span  class="menu-name">应用</span>
                </a-menu-item>
                <a-menu-item key="7">
                    <a-icon type="upload"/>
                    <span  class="menu-name">Stack</span>
                </a-menu-item>
                <a-menu-item key="8">
                    <a-icon type="upload"/>
                    <span  class="menu-name">开发者中心</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                        class="trigger"
                        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                        @click="()=> collapsed = !collapsed"
                />
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                Content
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
    import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

    export default {
        name: 'app',
        data() {
            return {
                zh_CN,
                collapsed: false,
            }
        },
        components: {}
    }
</script>

<style>
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
.menu-name{
  color: #9ba3af;
}
    #home-page .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
    }

    #home-page .trigger:hover {
        color: #1890ff;
    }

    #home-page .logo {
        height: 60px;
        background: rgba(37,40,45 .2);
    }
</style>
