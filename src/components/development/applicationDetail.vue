<template>
    <a-layout>
        <a-layout-header style="background: #F5F8FA">
            <a-row style="padding: 0;margin: 0">
                <a-col :span="14" style=""><h3>应用列表</h3></a-col>
                <a-col :span="10" style="">
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
        <a-layout>
            <a-layout-content>{{this.$route.params.namespace}}</a-layout-content>
            <!--<a-layout-sider>Sider</a-layout-sider>-->
        </a-layout>
        <a-drawer
                title="添加应用"
                :width="780"
                @close="onClose"
                :visible="drawerVisible"
                :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}">
            <a-form :form="AppForm" layout="vertical" hideRequiredMark>
                <a-row :gutter="16">
                    <a-col :span="12">
                        <a-form-item label="应用名称">
                            <a-input
                                    v-decorator="['name', {rules: [{ required: true, message: '请输入应用名称' }]}]"
                                    placeholder="请输入应用名称"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="应用标识">
                            <a-input
                                    v-decorator="['mark', {rules: [{ required: true, message: '请输入应用标识' }]}]"
                                    style="width: 100%"
                                    placeholder="请输入应用标识"/>
                        </a-form-item>
                    </a-col>
                </a-row>

                <a-row>
                    <a-col :span="24">
                        <a-form-item label="代码仓库URL">
                            <a-input
                                    v-decorator="['gitRepository.url', {rules: [{ required: true, message: '请输入代码仓库url' }]}]"
                                    placeholder="请输入代码仓库url"/>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="16">
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
                <a-row>
                    <a-col :span="24">
                        <a-form-item label="镜像仓库URL">
                            <a-input
                                    v-decorator="['imageRepository.url', {rules: [{ required: true, message: '请输入代码仓库url' }]}]"
                                    placeholder="请输入代码仓库url"/>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="16">
                    <a-col :span="12">
                        <a-form-item label="镜像仓库用户名">
                            <a-input
                                    v-decorator="['imageRepository.username', {rules: [{ required: true, message: '请输入镜像仓库用户名' }]}]"
                                    placeholder="请输入代码仓库用户名"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="镜像仓库密码">
                            <a-input type="password"
                                     v-decorator="['imageRepository.password', {rules: [{ required: true, message: '请输入镜像仓库密码' }]}]"
                                     placeholder="请输入git仓库密码"/>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="16">
                    <a-col :span="12">
                        <a-form-item label="语言/平台">
                            <a-select
                                    v-decorator="['language.id', { rules: [{ required: true, message: '请选择语言或平台' }]}]"
                                    placeholder="请选择语言或平台">
                                <a-select-option v-for="languageItem in languageDataList" v-bind:key="languageItem.id"
                                                 v-bind:value="languageItem.id">{{languageItem.name}}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
            <div :style="{position: 'absolute',left: 0,bottom: 0,width: '100%', borderTop: '1px solid #e9e9e9',
                          padding: '10px 16px',
                          background: '#fff',
                          textAlign: 'right',}">
                <a-button :style="{marginRight: '8px'}" @click="onClose">
                    取消
                </a-button>
                <a-button @click="handleSubmit" type="primary">提交</a-button>
            </div>
        </a-drawer>
    </a-layout>
</template>

<script>
    import request from "../../config/request";

    export default {
        name: "applicationDetail",
        props: ['projectNamespace'],
        data: function () {
            return {
                appSearchName: null,
                newAppShow: false,
                drawerVisible: false,
                AppForm: this.$form.createForm(this),
                languageDataList: null
            }
        },
        mounted() {
            this.languageList();
            this.appList();
        },
        methods: {
            handleSubmit: function () {
                let _this = this;
                let applicationJson = this.AppForm.getFieldsValue(['name', 'mark', 'language.id', 'gitRepository.url', 'gitRepository.username', 'gitRepository.password'])
                applicationJson.projectNamespace = this.$route.params.namespace;
                this.$axios.post(request.app, applicationJson).then(function (response) {
                    if (response.data.msg == 'success') {
                        _this.$message.success("添加成功");
                        _this.onClose();
                    } else {
                        _this.$message.error("添加失败");
                    }
                })
            },
            showNewAppModal: function () {
                this.newAppShow = true;
            },
            searchAppByName() {

            },
            showDrawer() {
                this.drawerVisible = true;
            },
            onClose() {
                this.drawerVisible = false;
            },
            appList() {
                let _this = this;
                let projectNamespace = {'projectNamespace': _this.$route.params.namespace};
                this.$axios.get(request.app, {
                    params: projectNamespace
                }).then(function (response) {
                    let data = response.data.data;
                    window.console.log(data);

                })
            },
            languageList() {
                let _this = this;
                this.$axios.get(request.language).then(function (response) {
                        _this.languageDataList = response.data.data;
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>