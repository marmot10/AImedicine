module.exports = {
    devServer: {
        host: 'localhost',  //主机名
        https: false,
        // open: true,  //启动服务时自动打开浏览器
        // proxy是代理  其内容主要是为了解决*跨域问题*
        proxy: {
            '/user': {
                target: 'http://api.godreams.cn',
                changOrigin: true,  //开启代理
                pathRewrite: {
                    '^/login': ''
                }
            }
        }
    },
    lintOnSave: false,  //关闭代码风格检查
    productionSourceMap: false   // 不生成.map文件
}