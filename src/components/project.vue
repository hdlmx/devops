<template>
    <div style="height: 100%">
        <a-layout style="padding: 28px;height: 100%">

            <a-layout style="height: 100%">
                <a-layout-header style="background: #f0f2f5">
                    <a-row>
                        <a-col :span="1">
                            <svg class="icon" aria-hidden="true" style="font-size:15px">
                            <use xlink:href="#iconxiangmu1"></use>
                        </svg>
                        </a-col>
                        <a-col :span="23"><h2>项目主页</h2></a-col>
                    </a-row>
                </a-layout-header>
                <a-layout-header style="background: #F5F8FA">
                    <a-row style="padding: 0;margin: 0">
                        <a-col :span="12" style="">
                            <a-row>
                                <a-col :span="2">
                                    <svg class="icon" aria-hidden="true" style="font-size:10px">
                                        <use xlink:href="#iconbaobiao"></use>
                                    </svg>
                                </a-col>
                                <a-col :span="22" style="text-align: left"><h3 style="">我的项目</h3></a-col>
                            </a-row>

                        </a-col>
                        <a-col :span="12" style="">
                            <a-row style="">
                                <a-col :span="6" style="">
                                    <a-button @click="showNewProjectModal" style=" background: #0E65C9;color: #fff">
                                        创建项目
                                    </a-button>
                                </a-col>
                                <a-col :span="12" style="">
                                    <a-input v-model="projectSearchName" placeholder="项目名称"></a-input>
                                </a-col>
                                <a-col :span="6">
                                    <a-button @click="searchProjectByName">
                                        <a-icon type="search"/>
                                    </a-button>
                                </a-col>
                            </a-row>
                        </a-col>
                    </a-row>
                </a-layout-header>
                <a-layout-content style="background: #fff;height: 100%;padding:28px">
                    <a-row type="flex" :gutter="20">
                        <a-col style="margin-top:10px;margin-bottom: 10px" :span="5"
                               v-for="(projectDetail,i) in projectListData" v-bind:key="projectDetail.id">
                            <router-link :to="{name:'project',params: { namespace: projectDetail.namespace }} ">
                                <div class="project-body"
                                     :style="{'background':'-webkit-linear-gradient(left bottom,'+colorTheme[i].left+','+colorTheme[i].right+')'}">
                                    <a-row>
                                        <a-col :span="24" style="text-align: center;">
                                            <h2 class="project-head">
                                                {{projectDetail.name}}
                                            </h2>
                                        </a-col>
                                    </a-row>
                                    <a-row>
                                        <a-col style="text-align: center;">
                                            <div>
                                                <a-icon type="clock-circle"/>
                                                {{projectDetail.createTime|dateFormat('YYYY-MM-DD')}}
                                            </div>
                                        </a-col>
                                    </a-row>
                                    <a-row>
                                        <a-col :span="24" style="text-align: center"><span class="=icon iconfont iconpm-blue-copy"
                                                               style="color: #fff;font-size:30px;text-align: center"></span>
                                        </a-col>
                                    </a-row>

                                </div>
                            </router-link>
                        </a-col>
                    </a-row>
                </a-layout-content>
            </a-layout>
        </a-layout>
        <a-modal v-if="newProjectShow" title="创建项目" v-model="newProjectShow" @ok="handleSubmit" okText="确认"
                 cancelText="取消">
            <a-form :form="projectForm" @submit="handleSubmit">
                <a-form-item label="项目名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-input
                            v-decorator="['name', { rules: [{ required: true, message: '请输入项目名称' }] }]"/>
                </a-form-item>
                <a-form-item label="命名空间" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-input
                            v-decorator="['namespace', { rules: [{ required: true, message: '请输入命名空间' }] }]"/>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>

<script>
    import request from "../config/request";
    import "../assets/iconfont/iconfont"
    import moment from 'moment'
    import color from "../config/color";

    export default {
        name: "project",
        data: function () {
            return {
                newProjectShow: false,
                projectForm: this.$form.createForm(this, {name: 'dynamic_rule'}),
                projectListData: null,
                projectSearchName: null,
                colorTheme: color
            }
        },
        mounted() {
            this.getProjectList();
        },
        computed: {
            routerComputer: function (projectId) {
                return "/develop/" + projectId;
            }
        },
        filters: {
            dateFormat(dateStr, pattern) {
                return moment(dateStr).format(pattern)
            }
        },
        methods: {
            showNewProjectModal: function () {
                this.newProjectShow = true
            },
            searchProjectByName: function () {
                let _this = this;
                if (this.projectSearchName == null || this.projectSearchName === '') {
                    this.$message.error('项目名称为空！');
                } else {
                    this.$axios.get(request.project, {
                        params: {
                            "projectName": _this.projectSearchName
                        }
                    }).then(function (response) {
                        _this.projectListData = response.data.data;
                    })
                }
            },
            handleSubmit: function () {
                let projectJson = this.projectForm.getFieldsValue(['name', 'namespace']);
                let _this = this;
                this.$axios.post(request.project,
                    projectJson
                ).then(function (response) {
                    if (response.data.msg == 'success') {
                        _this.newProjectShow = false;
                        _this.$message.success(
                            '新建项目成功', 2,
                        );
                        _this.getProjectList();
                    } else {
                        _this.$message.success(
                            '新建项目失败', 2,
                        );
                    }
                })
            },
            hideModal: function () {
                this.newProjectShow = false
            },
            /*获取所有的项目*/
            getProjectList() {
                let _this = this;
                this.$axios.get(request.project).then(function (response) {
                    _this.projectListData = response.data.data;
                })
            }
        }
        ,
    }
</script>

<style scoped>
    .ant-layout-header {
        background: #fff;
        padding-left: 28px;
    }


    .project-body {
        width: 100%;
        height: 150px;
        /* background: #00264A;*/
        border-radius: 5px;
        /*  background: -webkit-linear-gradient(left bottom, #336699, #99CCCC);*/

        /*background: -o-linear-gradient(left bottom,red,blue);

        background: -mos-linear-gradient(left bottom,red,blue);

        background: -moz-linear-gradient(left bottom,red,blue);

        background: linear-gradient(left bottom,red,blue);*/
        /*  background-image: linear-gradient(-45deg, #00264A,#00264A,#68BD45);*/
        color: #fff;
        padding: 28px;
    }

    .project-body2 {
        width: 100%;
        height: 150px;
        /* background: #00264A;*/
        border-radius: 5px;
        background: -webkit-linear-gradient(left bottom, #990066, #003399);

        /*background: -o-linear-gradient(left bottom,red,blue);

        background: -mos-linear-gradient(left bottom,red,blue);

        background: -moz-linear-gradient(left bottom,red,blue);

        background: linear-gradient(left bottom,red,blue);*/
        /*
                background-image: linear-gradient(-45deg, #00264A,#00264A,#68BD45);
        */
        color: #fff;
        padding: 28px;
    }

    .project-body3 {
        width: 100%;
        height: 150px;
        /* background: #00264A;*/
        border-radius: 5px;
        background: -webkit-linear-gradient(left bottom, #990066, #003399);

        /*background: -o-linear-gradient(left bottom,red,blue);

        background: -mos-linear-gradient(left bottom,red,blue);

        background: -moz-linear-gradient(left bottom,red,blue);

        background: linear-gradient(left bottom,red,blue);*/
        /*
                background-image: linear-gradient(-45deg, #00264A,#00264A,#68BD45);
        */
        color: #fff;
        padding: 28px;
    }

    .project-body4 {
        width: 100%;
        height: 150px;
        /* background: #00264A;*/
        border-radius: 5px;
        background: -webkit-linear-gradient(left bottom, #FF0033, #FFCC33);

        /*background: -o-linear-gradient(left bottom,red,blue);

        background: -mos-linear-gradient(left bottom,red,blue);

        background: -moz-linear-gradient(left bottom,red,blue);

        background: linear-gradient(left bottom,red,blue);*/
        /*
                background-image: linear-gradient(-45deg, #00264A,#00264A,#68BD45);
        */
        color: #fff;
        padding: 28px;
    }

    .project-body5 {
        width: 100%;
        height: 150px;
        /* background: #00264A;*/
        border-radius: 5px;
        background: -webkit-linear-gradient(left bottom, #904CF3, #15DD69);

        /*background: -o-linear-gradient(left bottom,red,blue);

        background: -mos-linear-gradient(left bottom,red,blue);

        background: -moz-linear-gradient(left bottom,red,blue);

        background: linear-gradient(left bottom,red,blue);*/
        /*
                background-image: linear-gradient(-45deg, #00264A,#00264A,#68BD45);
        */
        color: #fff;
        padding: 28px;
    }

    .project-body:hover {
        width: 100%;
        height: 150px;
        /* background: #00264A;*/
        /* border-radius: 5px;
         border: 2px solid #2c3e50;*/
        box-shadow: 0px 0px 10px #888888, 0px 0px 20px #888374;
        /* background-image: linear-gradient(to right, red, yellow);*/
        /*
                background-image: linear-gradient(-45deg, #00264A,#00264A,#68BD45);
        */
        color: #fff;
        padding: 28px;
    }

    .project-head {
        color: #fff;
    }
</style>