<template>
    <div class="common-layout">
        <el-container class="container">
            <el-header ref="backColor">
                <el-row :gutter="20">
                    <el-col :span="3">
                        <div class="grid-content ep-bg-purple">
                            <img src="@/assets/logo.png" class="logo_img" />
                        </div>
                    </el-col>
                    <el-col :span="17">
                        <div class="grid-content ep-bg-purple header_title text_style">
                            后台管理系统
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content ep-bg-purple header_right text_style">
                            <div @click="handleChangeColor">换肤</div>
                            <div @click="handleExit">退出</div>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <div class="header_bottom">
                <div class="nav_switch">
                    <el-icon @click="openNav">
                        <Operation />
                    </el-icon>
                </div>
            </div>
            <el-container>
                <div class="nav">
                    <NavigationBar :isCollapse="isCollapse" />
                </div>
                <el-container>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import router from '@/router';
import {
    Operation
} from '@element-plus/icons-vue';
import NavigationBar from '@/components/NavigationBar.vue'
export default defineComponent({
    // 注册组件
    components: {
        Operation,
        NavigationBar
    },
    setup() {
        // 初始化皮肤颜色
        window.document.documentElement.setAttribute('dataskin', 'skin1');
        const themesAttributeArr = reactive(['skin1', 'skin2', 'skin3'])
        const themesCount = ref(0)
        // 换肤
        const handleChangeColor = () => {
            ++themesCount.value
            console.log(themesCount.value, themesAttributeArr.length)
            if (themesCount.value >= themesAttributeArr.length) {
                themesCount.value = 0
            }
            window.document.documentElement.setAttribute('dataskin', themesAttributeArr[themesCount.value]);
        }
        // 退出
        const handleExit = () => {
            router.push('/login');
            localStorage.removeItem('token')
        }
        // 左侧导航栏收缩
        const isCollapse = ref<boolean>(true)
        const openNav = () => {
            isCollapse.value = !isCollapse.value
        }
        return {
            // ...token(isCollapse),
            isCollapse,
            handleChangeColor,
            handleExit,
            themesAttributeArr,
            openNav,

        }
    }
})
</script>

<style scoped lang="scss">
.common-layout {
    width: 100%;
    height: 100%;

    .container {
        width: 100%;
        height: 100vh;
    }
}

.el-header {
    height: 80px;

    .logo_img {
        height: 100%;
        margin: 0 auto;
    }

    .header_title {
        // text-align:center;
        width: 100%;
        height: 100%;
        font-size: $font-header-title;
        font-weight: 800;
        display: flex;
        align-items: center;
    }

    .header_right {
        width: 100%;
        height: 100%;
        font-size: $font-header-right;
        display: flex;
        align-items: center;

        div {
            margin: 0 10px;
            cursor: pointer;
        }
    }
}

.el-container {
    flex: 1;
}

.nav {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header_bottom {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
}

.nav_switch {
    // height:100%
    color: #fff;
    font-size: 28px;
}
</style>