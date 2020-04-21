module.exports = {
    devServer: {
        proxy: 'http://localhost:8080',
        /*本地开发服务器端口*/
        port: 80
    },
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    publicPath: "/",
    outputDir: "./build/devops",
    assetsDir: "static",
}
