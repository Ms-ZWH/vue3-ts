<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="!isCollapse" @open="handleOpen"
        @close="handleClose">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>Navigator One</span>
            </template>
            <el-sub-menu index="1-1">
                <template #title><span>item one</span></template>
                <el-menu-item index="1-1-1">item one-1</el-menu-item>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue';

export default defineComponent({

    // 注册组件
    components: {
        Document,
        IconMenu,
        Location,
        Setting,
    },
    props: {
        isCollapse: {

        }
    },
    setup() {
        // 左侧导航栏收缩
        const handleOpen = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        }
        const handleClose = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        }
        return {
            handleOpen,
            handleClose,
        }
    }
})
</script>

<style lang="scss" scoped>
.el-menu {
    flex: 1;
}
</style>