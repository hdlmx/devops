<template>
    <div>
        <a-layout>
            <a-layout-header style="background: #F5F8FA;padding-left: 10px;height: 48px;line-height: 48px">
                <a-row>
                    <a-col :span="12">
                        <svg class="iconApp" aria-hidden="true" style="font-size:6px">
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
                    <a-col :span="2">代码仓库：</a-col>
                    <a-col :span="22" class="buildContent">http://192.168.18.150/handong/springboot-app.git</a-col>
                </a-row>
                <a-row class="buildInfo">
                    <a-col :span="12">
                        <a-col :span="4">用&nbsp&nbsp户&nbsp&nbsp名：</a-col>
                        <a-col :span="20">fasdfad</a-col>
                    </a-col>
                    <a-col :span="12">
                        <a-col :span="4">密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码：</a-col>
                        <a-col :span="20">312312</a-col>
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
                        <svg class="buildLatest" aria-hidden="true" style="font-size:6px">
                            <use xlink:href="#icongoujianjilu"></use>
                        </svg>
                        <b>&nbsp最新构建过程</b>
                    </a-col>
                </a-row>
            </a-layout-header>
            <a-layout-content style="padding-left: 30px;padding-right: 30px;padding-top:20px;background: #fff">
                <a-row :gutter="5">
                    <a-col :span="4">
                        <div>
                            <div class="taskTitle normalBackgroundColor">任务开始</div>
                            <div class="taskBody">

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

                            </div>
                        </div>
                    </a-col>
                </a-row>
            </a-layout-content>
            <a-layout-header style="background: #F5F8FA;padding-left: 10px;height: 48px;line-height: 48px">
                <a-row>

                    <a-col :span="24">
                        <svg class="buildLatest" aria-hidden="true" style="font-size:6px">
                            <use xlink:href="#iconwodegoujianjiluxuanzhong"></use>
                        </svg>
                        <b>&nbsp;构建记录</b>
                    </a-col>
                </a-row>
            </a-layout-header>
        </a-layout>
    </div>
</template>

<script>
    export default {
        name: "build",
        mounted() {

        },
        data: function () {
            return {}
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