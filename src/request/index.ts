import axios from 'axios'
import { openLoading, closeLoading } from '@/utils/loading'
import router from '@/router';
import { ElMessage, ElMessageBox } from 'element-plus'
// 创建axios实例
const service = axios.create({
    baseURL: "https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})
// 请求拦截
service.interceptors.request.use((config) => {
    // 加入loding
    openLoading()
    config.headers = config.headers || {}
    // 判断是否已经登录
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token') || ""
    }
    return config
})
// 响应拦截
service.interceptors.response.use((res) => {
    const code: number = res.data.data.code
    const status: number = res.status
    if (code != 200 || status === 401) {
        // 如果返回状态码为401，则表示未登录或登录已过期，跳转到登录页面
        ElMessage({
            type: 'error',
            message: '请求失败！',
        })
        router.push('/login');
        // 取消loding
        closeLoading()
        return Promise.reject(res.data)
    }
    // 取消loding
    closeLoading()
    return res.data
}, (err) => {
    console.log(err);
})

export default service