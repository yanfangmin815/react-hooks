import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// import {Provider} from 'react-redux'
// import registerServiceWorker from './registerServiceWorker';

// 初始化域名为axios对象
import domains from '@/assets/invoker/invoker'
import '@/style/public.css'

// 绑定在React全局
React.$domains = domains

// moment.locale('zh-cn');

ReactDOM.render(
    (
        <App/>
    ),
    document.getElementById('root')
);
// registerServiceWorker();

