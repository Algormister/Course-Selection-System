module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                changeOrigin: true,
                // ws: true, 
                pathRewrite: {
                    '^/api': '',   //重写请求路径
                },
            }
        }
    }
  }