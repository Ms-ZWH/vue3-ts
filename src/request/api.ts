import service from ".";
interface loginData {
    username: string,
    password: string
}
// 登录接口
export function login(data: loginData) {
    return service({
        url: "/login",
        method: "post",
        data
    })
}