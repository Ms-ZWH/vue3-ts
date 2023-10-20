<template>
    <div class="login_box">
        <div class="form_box">
            <div class="content">
                <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
                    class="demo-ruleForm">
                    <el-form-item label="UserName" prop="username">
                        <el-input v-model="ruleForm.username" />
                    </el-form-item>
                    <el-form-item label="UserPassword" prop="password">
                        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
                    </el-form-item>
                    <el-form-item>
                        <el-button class="primary_but" type="primary" @click="submitForm(ruleFormRef)">Create</el-button>
                        <el-button class="cancel_but" @click="resetForm()">Cancel</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { loginData } from '@/type/login'
import type { FormInstance } from 'element-plus'
import { login } from '@/request/api'
// 路由
import { useRouter } from 'vue-router'
const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the password'))
    } else {
        callback()
    }
}
export default defineComponent({
    name: 'login',
    props: {
    },
    setup() {
        const data = reactive(new loginData())
        const rules = reactive({
            username: [
                { required: true, message: 'Please input Activity name', trigger: 'blur' },
            ],
            password: [{ required: true, validator: validatePass, trigger: 'blur' }],
        })
        // 登录
        const ruleFormRef = ref<FormInstance>()
        const router = useRouter() //useRoute()相当于$route
        const submitForm = (formEl: FormInstance | undefined) => {
            if (!formEl) return
            formEl.validate((valid) => {
                if (valid) {
                    login(data.ruleForm).then((res) => {
                        console.log(res)
                        // 保存token
                        localStorage.setItem('token',res.data.token)
                        // 跳转页面
                        router.push('/home')
                    })
                    .catch((err: any) => {
                        console.log(err);
                    })

                } else {
                    console.log('error submit!')
                    return false
                }
            })
        }
        // 重置
        const resetForm = () => {
            data.ruleForm.username = ''
            data.ruleForm.password = ''
        }

        return { ...toRefs(data), rules, ruleFormRef, resetForm, submitForm };
    }
})
</script>

<style lang="scss" scoped>
.login_box {
    width: 100%;
    height: 100%;
    background-image: url('~@/assets/image/login.jpg');
    background-size: 100% 100%;
    overflow: hidden;
}

.form_box {
    width: 350px;
    height: 200px;
    margin: 150px auto;
    border: 3px solid $color-border;
    border-radius: 10px;
}

.content {
    margin: 36px 10px;
}
</style>