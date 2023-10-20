import { ElLoading } from 'element-plus'

let loading: { close: () => void; };
function openLoading() {
    loading = ElLoading.service({
        body: true,
        lock: true,
        text: 'Loading…',
        spinner: 'el- icon - loading',
        background: 'rgba(0, 0, 0, 0.7)'
})
}
function closeLoading() {
    loading.close();
}
export {
    openLoading,
    closeLoading
}