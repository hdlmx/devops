import axios from "axios"
import router from "../router";
/*import {getToken} from "./sessionStorageUtil"*/
// 创建axios实例
const http = axios.create({
    baseURL: process.env.VUE_APP_APIURL, // api 的 base_url
    timeout: 17000 // 请求超时时间
})
var loadingInstance;
http.interceptors.request.use(
    config => {
        /* const token = sessionStorage.getItem("jwt")*/
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/json; charset=utf-8',
        };
        return config;
    },
    err => {
        if (err.response) {
            if (loadingInstance != undefined) {
                loadingInstance.close();
            }
            switch (err.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    window.localCookie.delCookie('jwtHeader');
                    router.push('/');
                    break
                case 404:
                    return Promise.reject("404！服务不可达");
            }
        }
        return Promise.reject("request:服务不可用！");
    }
);
http.interceptors.response.use(
    response => {
        /* if (loadingInstance != undefined) {
             loadingInstance.close();
         }
         let message = response.data.code;
         let loginDialogShow = store.getters.getterLoginDialogShow;
         switch (message) {
             case 401:
                 if (loginDialogShow == false) {
                     Message.error("请重新登录！")
                     store.commit("setLoginDialogShow")
                 }
                 break;
             case 404:
                 Message.error("404！服务不可达")
         }*/
        return response;
    },
    error => {
        /*if (loadingInstance != undefined) {
            loadingInstance.close();
        }*/
        if (error.response) {
            switch (error.response.status) {
                /*未登录或者没有权限错误*/
                case 401:
                    window.console.log("401错误")
                    this.$store.commit("setLoginDialogShow")
                    this.$message({
                        message: '请重新登录',
                        type: 'warning'
                    });
                    break;
                /*服务器发生未知错误*/
                case 500:
                    break;
                case 404:
            }
        }
        return Promise.reject("response1:服务不可用！");
    });
export {http}