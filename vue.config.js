module.exports = {
    devServer: {
        proxy: process.env.VUE_APP_APIURL,
        /*本地开发服务器端口*/
        port: 8088
    },
    publicPath: "/",
    outputDir: "/build/devops",
    assetsDir: "static",
}
