<template xmlns:a-col="http://www.w3.org/1999/html">
    <div style="height: 100%">
        <a-layout style="padding: 28px;height: 100%">
            <a-layout>
                <a-layout-content style="background: #fff;height: 100%;padding:28px">
                    <a-layout>
                        <a-layout-header style="background: #F5F8FA;padding-left: 15px">
                            <a-row style="padding: 0;margin: 0">
                                <a-col :span="1">
                                    <svg class="icon" aria-hidden="true" style="font-size:14px">
                                        <use xlink:href="#iconyingyong2"></use>
                                    </svg>
                                </a-col>
                                <a-col :span="11" style="font-size: 16px">应用列表</a-col>
                                <a-col :span="12" style="">
                                    <a-row style="">
                                        <a-col :span="6" style="">
                                            <a-button type="primary" ghost @click="showDrawer"
                                                      style=" background: #0E65C9;color: #0E65C9">
                                                添加应用
                                            </a-button>
                                        </a-col>
                                        <a-col :span="12" style="">
                                            <a-input v-model="appSearchName" placeholder="应用名称"></a-input>
                                        </a-col>
                                        <a-col :span="6">
                                            <a-button @click="searchAppByName">
                                                <a-icon type="search"/>
                                            </a-button>
                                        </a-col>
                                    </a-row>
                                </a-col>
                            </a-row>
                        </a-layout-header>
                        <a-layout-content style="padding: 10px">
                            <a-row type="flex" :gutter="20">
                                <a-col style="margin-top:10px;margin-bottom: 10px" :span="4"
                                       v-for="(appDetail,i) in appDataList" v-bind:key="appDetail.id">
                                    <router-link
                                            :to="{name:'appDetail',params: { mark: appDetail.mark,namespace:appDetail.projectNamespace }} ">
                                        <div class="app-body"
                                             :style="{'background':'-webkit-linear-gradient(left bottom,'+colorTheme[i].left+','+colorTheme[i].right+')'}">
                                            <a-row>
                                                <a-col :span="24" style="text-align: center;">
                                                    <h3 class="app-head">
                                                        {{appDetail.name}}
                                                    </h3>
                                                </a-col>
                                            </a-row>
                                            <a-row>
                                                <a-col style="text-align: center;">
                                                    <div>
                                                        <a-icon type="clock-circle"/>
                                                        {{appDetail.createTime|dateFormat('YYYY-MM-DD')}}
                                                    </div>
                                                </a-col>
                                            </a-row>
                                            <a-row>
                                                <a-col style="text-align: center;">
                                                    <div>
                                                        {{appDetail.language.name}}
                                                    </div>
                                                </a-col>
                                            </a-row>
                                            <a-row>
                                                <a-col :span="24" style="text-align: center"><span
                                                        class="=icon iconfont iconyingyong3 "
                                                        style="color: #fff;font-size:25px;text-align: center"></span>
                                                </a-col>
                                            </a-row>
                                        </div>
                                    </router-link>
                                </a-col>
                            </a-row>
                        </a-layout-content>
                    </a-layout>
                    <a-layout style="margin-top:28px">
                        <a-layout-header style="background: #F5F8FA;padding-left: 15px">
                            <a-row style="padding: 0;margin: 0">
                                <a-col :span="1">
                                    <svg class="icon" aria-hidden="true" style="font-size:14px">
                                        <use xlink:href="#icontongjituzhanshi-"></use>
                                    </svg>
                                </a-col>
                                <a-col :span="11" style="font-size: 16px">统计</a-col>
                            </a-row>
                        </a-layout-header>
                        <a-layout-content style="padding: 10px;height: 300px;width: 80%">
                            <v-chart :options="option" style="width: 80%"/>
                        </a-layout-content>
                    </a-layout>

                </a-layout-content>

                <a-layout-sider width="400" style="background: #fff;height: 100%;padding-top:28px">
                    <a-layout>
                        <a-layout-header style="background: #F5F8FA;padding-left: 15px">
                            <a-row style="padding: 0;margin: 0">
                                <a-col :span="24" style="font-size: 16px">操作</a-col>
                            </a-row>
                        </a-layout-header>
                        <a-layout-content style="padding-left: 15px;padding-right: 15px;padding-bottom: 12px">
                            <a-row type="flex" :gutter="20" style="margin-top: 10px">
                                <a-col :span="12" style="margin: 0 auto">
                                    <a-button type="primary" ghost style="width: 70%">
                                        <a-icon type="edit"/>
                                        修改项目
                                    </a-button>
                                </a-col>
                                <a-col :span="12">
                                    <a-button type="primary" ghost style="width: 70%">
                                        <svg class="iconApp" aria-hidden="true" style="font-size:12px">
                                            <use xlink:href="#iconshanchu"></use>
                                        </svg>
                                        删除项目
                                    </a-button>
                                </a-col>
                            </a-row>
                            <a-row type="flex" :gutter="20" style="margin-top: 10px">
                                <a-col :span="12">
                                    <a-button type="primary" ghost style="width: 70%">
                                        <router-link
                                                :to="{name:'testAssemblyLine',params: {namespace:namespace}} ">
                                            <svg class="iconApp" aria-hidden="true" style="font-size:12px">
                                                <use xlink:href="#iconquanbuliushuixian"></use>
                                            </svg>
                                            测试流水线
                                        </router-link>
                                    </a-button>
                                </a-col>
                                <a-col :span="12">
                                    <a-button type="primary" ghost style="width: 70%">
                                        <router-link
                                                :to="{name:'deliverAssemblyLine',params: {namespace:namespace}} ">
                                            <svg class="icon-jiaofu" aria-hidden="true" style="font-size:12px">
                                                <use xlink:href="#iconruanjianjiaofu"></use>
                                            </svg>
                                            交付流水线
                                        </router-link>
                                    </a-button>
                                </a-col>
                            </a-row>
                        </a-layout-content>
                    </a-layout>

                    <a-layout style="margin-top: 28px">
                        <a-layout-header style="background: #F5F8FA;padding-left: 15px">
                            <a-row style="padding: 0;margin: 0">
                                <a-col :span="12" style="font-size: 16px">项目成员</a-col>
                                <a-col :span="12" style="font-size: 16px">
                                    <a-button ghost style=" margin-top: 15px;border: none"
                                              @click="visible=!visible"><span
                                            class="icon iconfont icontianjiarenyuan2"
                                            style="font-size: 25px;color: #0E65C9"></span></a-button>
                                </a-col>
                            </a-row>
                        </a-layout-header>
                        <a-layout-content
                                style="padding-left: 15px;padding-right: 15px;padding-bottom: 15px;padding-top: 15px">
                            <a-row>
                                <a-col :span="2">

                                </a-col>
                                <a-col :span="10">角色</a-col>
                                <a-col :span="10">用户</a-col>
                            </a-row>
                            <a-row>
                                <a-col :span="2">
                                    <svg class="iconApp" aria-hidden="true" style="font-size:12px">
                                        <use xlink:href="#iconjingli"></use>
                                    </svg>
                                </a-col>
                                <a-col :span="10">运维经理</a-col>
                                <a-col :span="10">manager1</a-col>
                            </a-row>
                            <a-row>
                                <a-col :span="2">
                                    <svg class="iconApp" aria-hidden="true" style="font-size:12px">
                                        <use xlink:href="#iconyunwei"></use>
                                    </svg>
                                </a-col>
                                <a-col :span="10">运维者</a-col>
                                <a-col :span="10">operation1</a-col>
                            </a-row>
                        </a-layout-content>
                    </a-layout>
                </a-layout-sider>
            </a-layout>

            <a-drawer
                    title="添加应用"
                    :width="720"
                    @close="onClose"
                    :visible="drawerVisible"
                    :bodyStyle="{ paddingBottom: '80px' }"
            >

                <a-form :form="AppForm" layout="vertical" hideRequiredMark>
                    <a-row :gutter="[16, 2]">
                        <a-col :span="8">
                            <a-form-item label="应用名称">
                                <a-input
                                        v-decorator="['name', {rules: [{ required: true, message: '请输入应用名称' }]}]"
                                        placeholder="请输入应用名称"/>
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="应用标识">
                                <a-input
                                        v-decorator="['mark', {rules: [{ required: true, message: '请输入应用标识' }]}]"
                                        style="width: 100%"
                                        placeholder="请输入应用标识"/>
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="语言/平台">
                                <a-select
                                        v-decorator="['language.id', { rules: [{ required: true, message: '请选择语言或平台' }]}]"
                                        placeholder="请选择语言或平台">
                                    <a-select-option v-for="languageItem in languageDataList"
                                                     v-bind:key="languageItem.id"
                                                     v-bind:value="languageItem.id">{{languageItem.name}}
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-card title="GitLab仓库配置">
                        <a-row :gutter="[16, 2]">
                            <a-col :span="24">
                                <a-form-item label="代码仓库URL">
                                    <a-input
                                            v-decorator="['gitRepository.url', {rules: [{ required: true, message: '请输入代码仓库url' }]}]"
                                            placeholder="请输入代码仓库url"/>
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row :gutter="[16, 2]">
                            <a-col :span="12">
                                <a-form-item label="git仓库用户名">
                                    <a-input
                                            v-decorator="['gitRepository.username', {rules: [{ required: true, message: '请输入代码仓库用户名' }]}]"
                                            placeholder="请输入代码仓库用户名"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                                <a-form-item label="git仓库密码">
                                    <a-input type="password"
                                             v-decorator="['gitRepository.password', {rules: [{ required: true, message: '请输入git仓库密码' }]}]"
                                             placeholder="请输入git仓库密码"/>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-card>
                    <a-card title="镜像配置">
                        <a-row :gutter="[16, 2]">
                            <a-col :span="24">
                                <a-form-item label="镜像仓库URL">
                                    <a-input
                                            v-decorator="['imageRepository.url', {rules: [{ required: true, message: '请输入代码仓库url' }]}]"
                                            placeholder="请输入镜像仓库url"/>
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row :gutter="[16, 2]">
                            <a-col :span="12">
                                <a-form-item label="镜像仓库用户名">
                                    <a-input
                                            v-decorator="['imageRepository.username', {rules: [{ required: true, message: '请输入镜像仓库用户名' }]}]"
                                            placeholder="请输入镜像仓库用户名"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                                <a-form-item label="镜像仓库密码">
                                    <a-input type="password"
                                             v-decorator="['imageRepository.password', {rules: [{ required: true, message: '请输入镜像仓库密码' }]}]"
                                             placeholder="请输入镜像仓库密码"/>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-card>
                </a-form>
                <div
                        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
                >
                    <a-button :style="{ marginRight: '8px' }" @click="onClose">
                        取消
                    </a-button>
                    <a-button @click="onClose" type="primary">提交</a-button>
                </div>
            </a-drawer>
            <a-modal title="添加新成员" v-model="visible" @ok="newProjectmember" okText="确认" cancelText="取消">

            </a-modal>
        </a-layout>
    </div>
</template>

<script>
    import request from "../config/request";
    import color from "../config/color";
    import moment from 'moment'
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/chart/pie'
    import 'echarts/lib/chart/map'
    import 'echarts/lib/chart/radar'
    import 'echarts/lib/chart/scatter'
    import 'echarts/lib/chart/effectScatter'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/polar'
    import 'echarts/lib/component/geo'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'
    import 'echarts/lib/component/visualMap'
    import 'echarts/lib/component/dataset'
    import 'echarts/map/js/world'
    import 'zrender/lib/svg/svg'

    export default {
        name: "development",
        components: {
            'v-chart': ECharts
        },
        data: function () {

            return {
                namespace: this.$route.params.namespace,
                appSearchName: null,
                newAppShow: false,
                drawerVisible: false,
                AppForm: this.$form.createForm(this),
                languageDataList: null,
                appDataList: null,
                colorTheme: color,
                visible: false,
                option: {
                    title: {
                        text: '开发统计图'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data: ['构建次数', '测试次数', '交付次数']
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['1月', '2月', '3月', '4月']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '构建次数',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [50, 60, 64, 54]
                        },
                        {
                            name: '测试次数',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [30, 40, 32, 40]
                        },
                        {
                            name: '交付次数',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [20, 25, 30, 35]
                        },

                    ]
                }
            }
        },
        filters:
            {
                dateFormat(dateStr, pattern) {
                    return moment(dateStr).format(pattern)
                }
            }
        ,
        mounted() {
            this.languageList();
            this.appList();
        }
        ,
        methods: {
            handleSubmit: function () {
                let _this = this;
                let applicationJson = this.AppForm.getFieldsValue(['name', 'mark', 'language.id', 'gitRepository.url', 'gitRepository.username', 'gitRepository.password'])
                applicationJson.projectNamespace = this.$route.params.namespace;
                this.$axios.post(request.app, applicationJson).then(function (response) {
                    if (response.data.msg == 'success') {
                        _this.$message.success("添加成功");
                        _this.appList();
                        _this.onClose();
                    } else {
                        _this.$message.error("添加失败");
                    }
                })
            }

            ,
            showNewAppModal: function () {
                this.newAppShow = true;
            }
            ,
            searchAppByName() {

            }
            ,
            showDrawer() {
                this.drawerVisible = true;
            }
            ,
            onClose() {
                this.drawerVisible = false;
            }
            ,
            appList() {
                let _this = this;
                let projectNamespace = {'projectNamespace': _this.$route.params.namespace};
                this.$axios.get(request.app, {
                    params: projectNamespace
                }).then(function (response) {
                    _this.appDataList = response.data.data;

                })
            }
            ,
            languageList() {
                let _this = this;
                this.$axios.get(request.language).then(function (response) {
                        _this.languageDataList = response.data.data;
                    }
                )
            }
            ,
            newProjectmember() {

            }
        }
    }
</script>

<style scoped>
    .app-body {
        width: 100%;
        height: 150px;
        border-radius: 18px;
        color: #fff;
        padding: 25px 10px;
    }

    .echarts {
        width: 100%;
        height: 100%;
    }

    .app-head {
        color: #ffffff;
    }

    .iconApp {
        width: 1.8em;
        height: 1.8em;
        vertical-align: -0.5em;
        fill: currentColor;
        overflow: hidden;
        margin-right: 2px;
    }

    .row {
        margin: 0px;
    }

    .icon-jiaofu {
        width: 2.5em;
        height: 2.5em;
        vertical-align: -0.75em;
        fill: currentColor;
        overflow: hidden;
        margin-right: 2px;
    }
</style>