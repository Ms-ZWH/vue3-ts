<template>
    <div class="common-layout">
        <el-container>
            <el-header ref="backColor">
                <el-row :gutter="20">
                    <el-col :span="3">
                        <div class="grid-content ep-bg-purple">
                            <img src="@/assets/logo.png" class="logo_img" />
                        </div>
                    </el-col>
                    <el-col :span="17">
                        <div class="grid-content ep-bg-purple header_title text_color">
                            后台管理系统
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content ep-bg-purple header_right text_color">
                            <div @click="handleChangeColor">换肤</div>
                            <div @click="handleExit">退出</div>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                        <el-radio-button :label="false">expand</el-radio-button>
                        <el-radio-button :label="true">collapse</el-radio-button>
                    </el-radio-group>
                    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
                        @close="handleClose">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <location />
                                </el-icon>
                                <span>Navigator One</span>
                            </template>
                            <el-menu-item-group>
                                <template #title><span>Group One</span></template>
                                <el-menu-item index="1-1">item one</el-menu-item>
                                <el-menu-item index="1-2">item two</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="Group Two">
                                <el-menu-item index="1-3">item three</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="1-4">
                                <template #title><span>item four</span></template>
                                <el-menu-item index="1-4-1">item one</el-menu-item>
                            </el-sub-menu>
                        </el-sub-menu>
                        <el-menu-item index="2">
                            <el-icon><icon-menu /></el-icon>
                            <template #title>Navigator Two</template>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <el-icon>
                                <document />
                            </el-icon>
                            <template #title>Navigator Three</template>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <el-icon>
                                <setting />
                            </el-icon>
                            <template #title>Navigator Four</template>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
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
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Management
} from '@element-plus/icons-vue';
export default defineComponent({
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

        const isCollapse = ref(true)
        const handleOpen = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        }
        const handleClose = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        }
        return {
            // ...token(isCollapse),
            isCollapse,
            handleChangeColor,
            handleExit,
            themesAttributeArr,
            handleOpen,
            handleClose
        }
    }
})
</script>

<style scoped lang="scss">
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

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
}
</style>