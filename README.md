> ## 安装与开发

## `init install`
    npm install

##  `start porject and open localhost:port`
    npm run start

## `将应用程序打包发布`
    npm run build


├── mock                            ## `本地模拟数据`<br>
├── mock                            ## `本地模拟数据`<br>
├── build                           # 项目打包文件<br>
|   ├── jest                        # 测试脚本<br>
|   ├── scripts                     # 打包命令脚本<br>
│   └── utils                       # 打包工具库<br>
├── config                          # 全局配置
|   ├── beta_pm2.json               # 启动beta测试pm2命令<br>
|   ├── dev_pm2.json                # 启动本地调试pm2命令（带本地模拟数据服）<br>
│   └── settings.js                 # 配置文件，端口号，域名等<br>
├── public <br>                         
|   ├── favicon.ico                <br>
|   ├── index.html                 <br>
│   └── manifest.json               # 5+移动App的配置文件<br>
├── src<br>
|   ├── assets                      # 本地静态资源<br>
│   ├── components                  # 项目通用通用组件<br>
│   ├── router                      # 路由入口<br>
│   ├── services                    # 服务封装<br>
│   ├── store                       # redux存储<br>
│   ├── views                       # 业务页面入口和常用模板<br>
│   |    └── Template.js            # 新建页面模板(方便快速搭建页面)<br>
│   ├── utils                       # 工具库,公共js文件<br>
│   ├── styles                      # 公共样式<br>
│   ├── index.js                    # 应用入口<br>
│   └── App.js                      # 路由入口<br>
├── tests                           # 测试工具<br>
├── plan                            # 开发计划说明<br>
├── skillReadme                     # 技术文档说明<br>
├── .gitignore<br>
├── README.md<br>
├── package-lock.json<br>
└── package.json<br>
