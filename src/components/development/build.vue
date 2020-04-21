<template>
    <div>
        <a-layout>
            <a-layout-header style="background: #F5F8FA;padding-left: 10px;height: 48px;line-height: 48px">
                <a-row>
                    <a-col :span="12">
                        <svg class="iconApp" aria-hidden="true" style="font-size:12px">
                            <use xlink:href="#icongoujianguanliS"></use>
                        </svg>
                        <b>&nbsp构建任务</b>
                    </a-col>
                    <a-col span="12">
                        <a-row>
                            <a-col :span="12"></a-col>
                            <a-col :span="12">
                                <a-row>
                                    <a-col :span="12">

                                    </a-col>
                                    <a-col :span="12">
                                        <a-row>
                                            <a-col :span="12">
                                                <a-button type="primary" class="buttonColor">编辑</a-button>
                                            </a-col>
                                            <a-col :span="12">
                                                <a-button type="primary" class="buttonColor">立即构建</a-button>
                                            </a-col>
                                        </a-row>

                                    </a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                    </a-col>
                </a-row>

            </a-layout-header>
            <a-layout-content style="padding-left: 30px;padding-right:30px;background: #ffffff">
                <a-row class="buildInfo">
                    <a-col :span="12">
                        <a-col span="4">代码仓库：</a-col>
                        <a-col span="20">http://192.168.18.150/handong/springboot-app.git</a-col>
                    </a-col>
                    <a-col :span="12">
                        <a-col :span="4">分支</a-col>
                        <a-col :span="20">feature</a-col>
                    </a-col>
                </a-row>
                <a-row class="buildInfo">
                    <a-col :span="12">
                        <a-col :span="4">用&nbsp&nbsp户&nbsp&nbsp名：</a-col>
                        <a-col :span="20">projectMg</a-col>
                    </a-col>
                    <a-col :span="12">
                        <a-col :span="4">密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码：</a-col>
                        <a-col :span="10">
                            <a-input type="password"
                                     placeholder=" "
                                     style="border: none"
                                     v-decorator="['gitPassword']"
                                     :disabled="true"
                            >
                            </a-input>
                        </a-col>
                    </a-col>
                </a-row>
                <a-row class="buildInfo">
                    <a-col :span="12">
                        <a-row>
                            <a-col :span="4">构建工具：</a-col>
                            <a-col :span="20">maven</a-col>
                        </a-row>
                    </a-col>
                    <a-col :span="12">
                        <a-row>
                            <a-col :span="4">构建命令：</a-col>
                            <a-col :span="20">mvn build</a-col>
                        </a-row>
                    </a-col>
                </a-row>
            </a-layout-content>
            <a-layout-header style="background: #F5F8FA;padding-left: 10px;height: 48px;line-height: 48px">
                <a-row>
                    <a-col :span="12">
                        <svg class="buildLatest" aria-hidden="true" style="font-size:12px">
                            <use xlink:href="#icongoujianjilu"></use>
                        </svg>
                        <b>&nbsp;最新构建过程</b>
                    </a-col>
                </a-row>
            </a-layout-header>
            <a-layout-content style="padding-left: 30px;padding-right: 30px;padding-top:20px;background: #fff">
                <a-row :gutter="5">
                    <a-col :span="4">
                        <div>
                            <div class="taskTitle normalBackgroundColor">任务开始</div>
                            <div class="taskBody">
                                <div style="height: 50%;margin-top: 20px;margin-left: 70px">
                                    <svg class="iconApp" aria-hidden="true" style="font-size:20px;">
                                        <use xlink:href="#iconyunhangzhong"></use>
                                    </svg>
                                </div>
                                <div style="height: 50%;font-size: 12px;line-height: 50%">
                                    <div style="width:100%;height:30px;line-height:50%;margin-top:15px;">
                                        <p style="text-align: center">启动时间：2020/04/18/14:20</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </a-col>
                    <a-col :span="1">
                        <div>
                            <div class="jiantou">
                                <i class="iconfont iconyoujiantou jiantou2"></i>
                            </div>
                        </div>
                    </a-col>
                    <a-col :span="4">
                        <div>
                            <div class="taskTitle normalBackgroundColor">拉取代码</div>
                            <div class="taskBody">
                                <div style="height: 50%;margin-top: 20px;margin-left: 60px">
                                    <svg class="iconApp" aria-hidden="true" style="font-size:20px;">
                                        <use xlink:href="#iconyunhangzhong"></use>
                                    </svg>
                                </div>
                                <div style="height: 50%;font-size: 12px;line-height: 50%">
                                    <div style="width:100%;height:30px;line-height:50%;margin-top:15px">
                                        <p style="text-align: center">完成时间：2020/04/18/14:30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a-col>
                    <a-col :span="1">
                        <div>
                            <div class="jiantou">
                                <i class="iconfont iconyoujiantou jiantou2"></i>
                            </div>
                        </div>
                    </a-col>
                    <a-col :span="4">
                        <div>
                            <div class="taskTitle normalBackgroundColor">编译</div>
                            <div class="taskBody">
                                <div style="height: 50%;margin-top: 20px;margin-left: 68px">
                                    <svg class="iconApp" aria-hidden="true" style="font-size:20px;">
                                        <use xlink:href="#iconzhihangzhong"></use>
                                    </svg>
                                </div>
                                <div style="height: 50%;font-size: 12px;line-height: 50%">
                                    <div style="width:100%;height:30px;line-height:50%;margin-top:15px">
                                        <p style="text-align: center">执行中</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a-col>
                    <a-col :span="1">
                        <div>
                            <div class="jiantou">
                                <i class="iconfont iconyoujiantou jiantou2"></i>
                            </div>
                        </div>
                    </a-col>
                    <a-col :span="4">
                        <div>
                            <div class="taskTitle normalBackgroundColor">构建镜像</div>
                            <div class="taskBody">
                                <div style="height: 50%;margin-top: 20px;margin-left: 68px">
                                    <svg class="iconApp" aria-hidden="true" style="font-size:20px;">
                                        <use xlink:href="#icondengdai"></use>
                                    </svg>
                                </div>
                                <div style="height: 50%;font-size: 12px;line-height: 50%">

                                    <div style="width:100%;height:30px;line-height:50%;margin-top:15px;">
                                        <!--启动时间：2020/04/18/14:20-->
                                        <p style="text-align: center">等待</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a-col>
                    <a-col :span="1">
                        <div>
                            <div class="jiantou">
                                <i class="iconfont iconyoujiantou jiantou2"></i>
                            </div>
                        </div>
                    </a-col>
                    <a-col :span="4">
                        <div>
                            <div class="taskTitle normalBackgroundColor">任务完成</div>
                            <div class="taskBody">
                                <div style="height: 50%;margin-top: 20px;margin-left: 68px">
                                    <svg class="iconApp" aria-hidden="true" style="font-size:20px;">
                                        <use xlink:href="#icondengdai"></use>
                                    </svg>
                                </div>
                                <div style="height: 50%;font-size: 12px;line-height: 50%">
                                    <div style="width:100%;height:30px;line-height:50%;margin-top:15px;">
                                        <!--启动时间：2020/04/18/14:20-->
                                        <p style="text-align: center">等待</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a-col>
                </a-row>
            </a-layout-content>
            <a-layout-header style="background: #F5F8FA;padding-left: 10px;height: 48px;line-height: 48px">
                <a-row>
                    <a-col :span="24">
                        <svg class="buildLatest" aria-hidden="true" style="font-size:12px">
                            <use xlink:href="#iconwodegoujianjiluxuanzhong"></use>
                        </svg>
                        <b>&nbsp;构建记录</b>
                    </a-col>
                </a-row>
            </a-layout-header>
            <a-layout-content style="background-color:#fff">
                <a-table :columns="columns" :dataSource="data">
                    <a slot="name" slot-scope="text">{{ text }}</a>
                    <span slot="customTitle"><a-icon type="smile-o"/> Name</span>
                    <span slot="buildStatus" slot-scope="buildStatus">
        <a-tag
                :color="buildStatus == '完成' ? 'green' : 'volcano'"
                :key="buildStatus">
        {{ buildStatus=='完成'?1:2 }}
      </a-tag>
    </span>
                    <span slot="action" slot-scope="text, record">
                    <a>查看详情</a>
                      <a-divider type="vertical"/>
                     <a>删除</a>
                        <!--<a-divider type="vertical"/>
                        <a class="ant-dropdown-link"> More actions <a-icon type="down"/> </a>-->
    </span>
                </a-table>
            </a-layout-content>
        </a-layout>
    </div>
</template>

<script>
    const columns = [
        {
            title: '序号',
            dataIndex: 'index',
            key: 'index',
            slots: {title: 'customTitle'},
            scopedSlots: {customRender: 'name'},
        },
        {
            title: '开始时间',
            dataIndex: 'startTime',
            key: 'startTime',
        },

        {
            title: '完成时间',
            key: 'completeTime',
            dataIndex: 'completeTime',
            scopedSlots: {customRender: 'completeTime'},
        },
        {
            title: '状态',
            dataIndex: 'buildStatus',
            key: 'buildStatus',
        },
        {
            title: '操作',
            key: 'action',
            scopedSlots: {customRender: 'action'},
        },
    ];

    const data = [
        {
            key: '1',
            index: '1',
            startTime: '2020/03/20 12:20:45',
            buildStatus: '完成',
            completeTime: '2020/03/20 12/23:02',
        },
        {
            key: '2',
            index: '2',
            startTime: '2020/03/18 08:34:32',
            buildStatus: '编译失败',
            completeTime: '2020/03/18 08/35:52',
        },

    ];
    export default {
        name: "build",
        mounted() {

        },
        data: function () {
            return {
                gitPassword: "1231231",
                data: data,
                columns: columns,
            }
        },

        methods: {
            build() {
                this.$axios()
            }
        }
    }
</script>

<style scoped>
    .iconApp {
        width: 1.8em;
        height: 1.8em;
        vertical-align: -0.5em;
        fill: currentColor;
        overflow: hidden;
        margin-right: 2px;
    }

    .buttonColor {
        background: #27282C;
        border: none;
    }

    .buildInfo {
        border-bottom: solid 1px #EAEFF0;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .buildLatest {
        width: 1.7em;
        height: 1.7em;
        vertical-align: -0.5em;
        fill: currentColor;
        overflow: hidden;
        margin-right: 2px;
    }

    .buildContent {
        text-align: left;
    }

    .taskTitle {
        width: 100%;
        height: 26px;
        text-align: center;
        line-height: 26px;
        color: #fff;
    }

    .jiantou {
        width: 100%;
        height: 26px;
        text-align: center;
        line-height: 26px;
        color: #CCD1D9;

    }

    .normalBackgroundColor {
        background: #9BA3AF;
    }

    .successfulBackgroundColor {
        background: #31C854;
    }

    .failedBackgroundColor {
        background: #f5222d;

    }

    .jiantou2 {
        font-size: 30px;

    }

    .taskBody {
        width: 100%;
        height: 100px;
        border: 1px solid #B5B8BA;
        margin-top: 10px;
    }
</style>