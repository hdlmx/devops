<template>
    <div style="height: 100%">
        <a-layout v-bind:style="{'height':'100%'}">
            <a-layout-sider width="200" style="background:#fff;height: 100%">
                <a-menu mode="inline" :defaultSelectedKeys="['1']">
                    <a-menu-item key="1">
                        <router-link :to="{name:'app'}">
                            <svg class="profile" aria-hidden="true" style="font-size:12px">
                                <use xlink:href="#icongailanxinxi"></use>
                            </svg>
                            <span>概览</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <router-link :to="{name:'build'}">
                            <svg class="containerApp" aria-hidden="true" style="font-size:12px">
                                <use xlink:href="#iconrongqigoujian1"></use>
                            </svg>
                            <span>构建</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <router-link :to="{name:'server'}">
                            <svg class="iconApp" aria-hidden="true" style="font-size:12px">
                                <use xlink:href="#icondanyuanceshiS"></use>
                            </svg>
                            <span>单元测试</span>
                        </router-link>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 18px">
                <a-layout-content :style="{ background: '#fff', margin: 0, minHeight: '280px' }">
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
    export default {
        name: "testAssemblyLine"
    }
</script>

<style scoped>

</style>