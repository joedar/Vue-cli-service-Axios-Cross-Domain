module.exports = {
	publicPath : './'
	// 不开启MAP
	,productionSourceMap : false
	// 启动设置
	,devServer : {
		// 端口号
		port : 8000
		// 代理
		,proxy : {
			// 请求的根路径
			'/api' : {
				// 跨域请求的目标地址
				target : 'https://movie.douban.com/j'
				// 路径重写
				,pathRewrite : {
					// 以正则匹配 开头/api
					'^/api' : ''
				}

			}
		}
	}
};
