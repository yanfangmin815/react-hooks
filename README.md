> ## 安装与开发

## `init install`
    npm install

##  `start porject and open localhost:port`
    npm run start

## `将应用程序打包发布`
    npm run build


├── mock                            ## `本地模拟数据`
├── dist                            # 打包文件
├── build                           # 项目打包文件
|   ├── jest                        # 测试脚本
|   ├── scripts                     # 打包命令脚本
│   └── utils                       # 打包工具库
├── config                          # 全局配置
|   ├── beta_pm2.json               # 启动beta测试pm2命令
|   ├── dev_pm2.json                # 启动本地调试pm2命令（带本地模拟数据服）
│   └── settings.js                 # 配置文件，端口号，域名等
├── public                          
|   ├── favicon.ico                
|   ├── index.html                 
│   └── manifest.json               # 5+移动App的配置文件
├── src
|   ├── assets                      # 本地静态资源
│   ├── components                  # 项目通用通用组件
│   ├── router                      # 路由入口
│   ├── services                    # 服务封装
│   ├── store                       # redux存储
│   ├── views                       # 业务页面入口和常用模板
│   |    └── Template.js            # 新建页面模板(方便快速搭建页面)
│   ├── utils                       # 工具库,公共js文件
│   ├── styles                      # 公共样式
│   ├── index.js                    # 应用入口
│   └── App.js                      # 路由入口
├── tests                           # 测试工具
├── plan                            # 开发计划说明
├── skillReadme                     # 技术文档说明
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
