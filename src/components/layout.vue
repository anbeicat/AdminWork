<!--
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-04-11 09:44:53
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-06-07 11:15:25
 * @description: 
 * @FilePath: /AdminWork/src/components/layout.vue
-->
<!--
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-04-11 09:44:53
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-06-02 14:40:23
 * @description: 
 * @FilePath: /AdminWork/src/components/layout.vue
-->
<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted, h, Component, computed, nextTick } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import router from '../router/index';
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NEl, NCard, NIcon, NSpace, NDropdown, NBreadcrumbItem, NBreadcrumb, NButton, NAvatar, NTag, NScrollbar, NBadge, NMenu, NDrawer, NDrawerContent, NDivider, NGrid, NGi, NInputNumber, NSwitch, NColorPicker, NInput, NWatermark } from 'naive-ui'
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined, SearchOutlined, SettingOutlined, FullscreenOutlined, ReloadOutlined, BellOutlined, TranslationOutlined, CaretDownOutlined, CaretUpOutlined, LeftOutlined, RightOutlined, MenuOutlined, CloseCircleOutlined, CloseOutlined, SmileOutlined } from '@vicons/antd'
import { useDefaultStore } from "../store/defaultSettings"
const defaultStore = useDefaultStore()
defaultStore.$state = JSON.parse(localStorage['userInfo'])

// 变量
const routes = ref(router.options.routes[0].children)

const showCaretDown = ref(true)
const showCollapsed = ref(false)
// const bgc = ref('#f0f2f5')
const dropdownList = ref([{
    label: 'David Tao',
    key: 1
},
{
    label: '黑色柳丁',
    key: 2
}])
const menuOptions = ref();
const colorList: any[] = ['#19A05A', '#409EFF', '#F5222D', '#722ED1', '#ee4f12', '#0096c7', '#ff9801', '#ff3d68', '#01c1d4', '#71efa3', '#171010', '#78dec7', '#1768ac', '#1427df', '#43c628', '#ead41e', '#22bd7c', '#9727bf']
// 设置
const styleShow = ref(false);
const TranslationList = ref([{
    label: '简体中文',
    key: 1
},
{
    label: '英文',
    key: 2
}])
const ManagerList = ref([{
    label: '个人中心',
    key: 1
},
{
    label: '退出登录',
    key: 2
}])
const MenuOutlinedList = ref([{
    label: '刷新页面',
    key: 1,
    icon() {
        return h(NIcon, null, {
            default: () => h(ReloadOutlined)
        })
    },
},
{
    label: '关闭所有',
    key: 2,
    icon() {
        return h(NIcon, null, {
            default: () => h(CloseOutlined)
        })
    },
}])

let RefreshKey = ref(new Date().getTime())

const expandedKeys = ref(['index'])
const menuValue = ref('home')

// 生命周期
onMounted(async () => {
    expandedKeys.value = [location.pathname.split('/')[1]]
    menuValue.value = location.pathname.split('/')[location.pathname.split('/').length-1]
    let data: any = routes.value
    console.log('data', data);

    menuOptions.value = await Promise.all(
        data.map(async (m: any) => {
            if (m?.children && m?.children.length > 0) {
                const children = await Promise.all(
                    m.children.map(async (child: any) => await getOption(child.meta))
                );
                let menu: any = await getOption(m.meta);
                menu.children = children;
                return menu;
            } else {
                return await getOption(m.meta);
            }
        })
    );
})


// computed
const bgc = computed(() => {
    return defaultStore.theme === 'light' ? '#f0f2f5' : '#333'
})


// methods
const mouse = (isShow: boolean) => {
    showCaretDown.value = isShow
}
const getOption = async (menu: any) => ({
    label: () =>
        menu.name ? h(
            RouterLink,
            {
                to: menu.path,
            },
            { default: () => menu.label }
        ) : menu.label,
    key: menu.key,
    parentKey: menu.parentKey,
    icon: await renderIcon(menu.icon),
});
async function renderIcon(icon: string) {
    // @ts-ignore
    const { [icon]: iconComp } = await import("@vicons/antd");
    return () => h(NIcon, null, { default: () => h(iconComp) });
}

const handleChangeTheme = ( value: any,type: string,) => {
    defaultStore.changeType( value,type)
}
const handleDefaultSetting = (value: boolean | string | number, typeName: string) => {
    defaultStore.changeType(value, typeName)
}
const handleActionBar = (value: boolean, actionBarName: string) => {
    defaultStore.changeActionBar(value, actionBarName)
}
// 全屏
const handleFullScreen = () => {
    let element = document.documentElement
    if (document.fullscreenElement) {
        document.exitFullscreen()
    } else {
        element.requestFullscreen()
    }
}
// 刷新页面
const handleRefresh = () => {
    // const fullPath=router.currentRoute.value.fullPath
    // router.push(`/redirect${fullPath}`)
    RefreshKey.value = new Date().getTime()
}
const handleChangeMenu=(key:string,item:any)=>{
    menuValue.value = key
}
const handleChangeMenuKeys=(key:string[])=>{
    expandedKeys.value = key
}
</script>

<template>
    <n-layout has-sider>
        <!-- 侧边栏 -->
        <n-layout-sider :collapsed="showCollapsed" class="layout-sider" collapse-mode="width" :collapsed-width="65"
            :width="defaultStore.sideWidth" bordered>
            <n-el class="logo-wrapper">
                <img src="../assets/WechatIMG46.jpeg" alt="logo">
                <div :class="showCollapsed ? 'close-title' : 'show-title'">
                    <span>Admin Work Pro</span>
                </div>
            </n-el>
            <!-- 菜单 -->
            <n-menu :options="menuOptions" :expanded-keys="expandedKeys" :value="menuValue" @update:value="(key: string, item: any) => {
                handleChangeMenu(key,item)
            }" @update:expanded-keys="(key: string[]) => {
                handleChangeMenuKeys(key)
            }" :accordion="defaultStore.accordionMenu" />
        </n-layout-sider>
        <!-- 主体 -->
        <n-layout class="layout">
            <!-- 头部 -->
            <n-layout-header>
                <n-el class="header-top">
                    <div class="header-top-left">
                        <div class="nav-wrapper">
                            <n-button :class="showCollapsed && 'MenuFoldOutlined'" text :focusable="false"
                                @click="() => { showCollapsed = !showCollapsed }">
                                <n-icon size="22">
                                    <MenuFoldOutlined />
                                </n-icon>
                            </n-button>

                        </div>
                        <div>
                            <n-breadcrumb>
                                <n-breadcrumb-item>
                                    <n-dropdown trigger="hover" :options="dropdownList">
                                        <div class="dropdownList">
                                            <span style="padding-right: 4px;">Dashborad</span>
                                            <n-icon size="18">
                                                <DownOutlined />
                                            </n-icon>
                                        </div>
                                    </n-dropdown>
                                </n-breadcrumb-item>
                                <n-breadcrumb-item>标签栏操作</n-breadcrumb-item>
                            </n-breadcrumb>
                        </div>
                    </div>
                    <div class="header-top-right">
                        <NSpace align="center">
                            <n-button text :focusable="false" v-if="defaultStore.actionBar.isShowSearch">
                                <n-icon size="18">
                                    <SearchOutlined />
                                </n-icon>
                            </n-button>
                            <n-button text :focusable="false" v-if="defaultStore.actionBar.isShowMessage">
                                <n-badge :value="9" :max="15" :offset="[0, 2]">
                                    <n-icon size="18" color="#d03050">
                                        <BellOutlined />
                                    </n-icon>
                                </n-badge>
                            </n-button>
                            <n-button text :focusable="false" v-if="defaultStore.actionBar.isShowRefresh"
                                @click="handleRefresh">
                                <n-icon size="18">
                                    <ReloadOutlined />
                                </n-icon>
                            </n-button>
                            <n-button text :focusable="false" v-if="defaultStore.actionBar.isShowFullScreen"
                                @click="handleFullScreen">
                                <n-icon size="18">
                                    <FullscreenOutlined />
                                </n-icon>
                            </n-button>
                            <n-dropdown trigger="hover" :options="TranslationList">
                                <n-button text :focusable="false">
                                    <n-icon size="18">
                                        <TranslationOutlined />
                                    </n-icon>
                                </n-button>
                            </n-dropdown>
                            <n-button text :focusable="false" @click="styleShow = true">
                                <n-icon size="18">
                                    <SettingOutlined />
                                </n-icon>
                            </n-button>

                            <n-dropdown trigger="hover" :options="ManagerList">
                                <n-button text :focusable="false" @mouseenter="mouse(false)" @mouseleave='mouse(true)'>
                                    <n-avatar round :size="28" src="../../src/assets/WechatIMG44.jpeg" />
                                    <!-- <n-avatar round :size="28">
                                        <n-icon color="#0e7a0d">
                                            <SmileOutlined />
                                        </n-icon> -->
                                    <!-- </n-avatar> -->

                                    <span style="margin-left: 6px;">超级管理员</span>
                                    <n-icon size="14">
                                        <CaretDownOutlined class="isshowCaretDown" />
                                    </n-icon>
                                </n-button>
                            </n-dropdown>
                        </NSpace>
                    </div>
                </n-el>

                <n-el class="header-bottom">
                    <n-button :focusable="false" text>
                        <n-icon size="20">
                            <LeftOutlined />
                        </n-icon>
                    </n-button>
                    <n-scrollbar x-scrollable>
                        <NSpace align="center" :wrap="false">
                            <n-button strong secondary size="tiny">
                                <template #icon>
                                    <n-icon>
                                        <MenuOutlined />
                                    </n-icon>
                                </template>
                                爱在西元前
                                <n-icon class='close-icon-item'>
                                    <CloseCircleOutlined />
                                </n-icon>
                            </n-button>
                            <n-button strong secondary size="tiny">
                                <template #icon>
                                    <n-icon>
                                        <MenuOutlined />
                                    </n-icon>
                                </template>
                                爱在西元前
                                <n-icon class='close-icon-item'>
                                    <CloseCircleOutlined />
                                </n-icon>
                            </n-button>
                        </NSpace>
                    </n-scrollbar>
                    <n-button :focusable="false" text>
                        <n-icon size="20">
                            <RightOutlined />
                        </n-icon>
                    </n-button>
                    <n-dropdown trigger="hover" :options="MenuOutlinedList">
                        <n-button :focusable="false" text>
                            <n-icon size="20">
                                <MenuOutlined />
                            </n-icon>
                        </n-button>
                    </n-dropdown>
                </n-el>
            </n-layout-header>

            <!-- 内容 -->
            <n-layout-content>
                <n-card bordered class="main">
                    <router-view :key="RefreshKey"></router-view>
                </n-card>
                <n-card bordered class="footer">{{ defaultStore.footerTip }}</n-card>
            </n-layout-content>
        </n-layout>
    </n-layout>

    <!-- 设置 -->
    <n-drawer v-model:show="styleShow" :width="280">
        <n-drawer-content title="系统设置" closable>
            <div>
                <n-divider dashed>主题设置</n-divider>
                <n-grid :x-gap="12" :y-gap="12" :cols="2">
                    <n-gi style="text-align: center;">
                        <div class="example-wrapper" @click="handleChangeTheme('light','theme')">
                            <div class="left"></div>
                            <div class="right">
                                <div class="right-top"></div>
                                <div class="right-bottom" style="background-color: rgb(245, 245, 245);"></div>
                            </div>
                        </div>
                        <div class="">明亮</div>
                        <i v-if="defaultStore.theme === 'light'" class="circle-tip"></i>
                    </n-gi>
                    <n-gi style="text-align: center;">
                        <div class="example-wrapper" style="background-color: rgb(0, 0, 0);"
                            @click="handleChangeTheme('darkTheme','theme')">
                            <div class="left" style="background-color: rgb(0, 0, 0);"></div>
                            <div class="right">
                                <div class="right-top" style="background-color: rgb(0, 0, 0);"></div>
                                <div class="right-bottom" style="background-color: rgb(51, 51, 51);"></div>
                            </div>
                        </div>
                        <div>暗黑</div>
                        <i v-if="defaultStore.theme === 'darkTheme'" class="circle-tip"></i>
                    </n-gi>
                </n-grid>
            </div>
            <!-- <div>
                                        <n-divider dashed>侧边栏样式</n-divider>
                                        <n-grid :x-gap="12" :y-gap="12" :cols="2">
                                            <n-gi style="text-align: center;">
                                                <div class="example-wrapper">
                                                    <div class="left"></div>
                                                    <div class="right">
                                                        <div class="right-top"></div>
                                                        <div class="right-bottom" style="background-color: rgb(245, 245, 245);"></div>
                                                    </div>
                                                </div>
                                                <div class="">明亮</div>
                                                <i v-if="defaultStore.theme === 'light'" class="circle-tip"></i>
                                            </n-gi>
                                            <n-gi style="text-align: center;">
                                                <div class="example-wrapper" style="background:  0% 0% / cover rgb(0, 0, 0);">
                                                    <div class="left"></div>
                                                    <div class="right">
                                                        <div class="right-top"></div>
                                                        <div class="right-bottom" style="background-color: rgb(51, 51, 51);"></div>
                                                    </div>
                                                </div>
                                                <div>暗黑</div>
                                                <i v-if="defaultStore.theme === 'dark'" class="circle-tip"></i>
                                            </n-gi>
                                        </n-grid>
                                    </div> -->
            <div>
                <n-divider dashed>菜单设置</n-divider>
                <div class="setting-item-wrapper">
                    <span>菜单宽度</span>
                    <n-input-number v-model:value="defaultStore.sideWidth" :min="200" :max="400" :step="10" @update:value="(value: number) => {
                        handleDefaultSetting(value, 'sideWidth')
                    }" />
                </div>
                <div class="setting-item-wrapper">
                    <span>手风琴模式</span>
                    <n-switch @update:value="(value: boolean) => {
                        handleDefaultSetting(value, 'accordionMenu')
                    }" :value="defaultStore.accordionMenu">
                        <template #checked>
                            选中
                        </template>
                        <template #unchecked>
                            关闭
                        </template>
                    </n-switch>
                </div>
            </div>
            <div>
                <n-divider dashed>主题色设置</n-divider>
                <n-grid :cols="6">
                    <n-gi @click="handleChangeTheme(item,'primaryColor')" class="colorlist" v-for="item in colorList"
                        :style="{ 'backgroundColor': item }">
                        <i v-if="defaultStore.primaryColor === item" class="circle"></i>
                    </n-gi>
                </n-grid>
                <n-color-picker :value="defaultStore.primaryColor" @update:value="(value: string) => {
                    handleDefaultSetting(value, 'primaryColor')
                }" />
            </div>
            <div>
                <n-divider dashed>按钮显示</n-divider>
                <div class="setting-item-wrapper">
                    <span>固定顶部导航</span>
                    <n-switch @update:value="(value: boolean) => {
                        handleDefaultSetting(value, 'isFixedNavBar')
                    }" :value="defaultStore.isFixedNavBar">
                    </n-switch>
                </div>
                <div class="setting-item-wrapper">
                    <span>搜索</span>
                    <n-switch @update:value="(value: boolean) => {
                        handleActionBar(value, 'isShowSearch')
                    }" :value="defaultStore.actionBar.isShowSearch">
                    </n-switch>
                </div>
                <div class="setting-item-wrapper">
                    <span>消息</span>
                    <n-switch @update:value="(value: boolean) => {
                        handleActionBar(value, 'isShowMessage')
                    }" :value="defaultStore.actionBar.isShowMessage">
                    </n-switch>
                </div>
                <div class="setting-item-wrapper">
                    <span>刷新</span>
                    <n-switch @update:value="(value: boolean) => {
                        handleActionBar(value, 'isShowRefresh')
                    }" :value="defaultStore.actionBar.isShowRefresh">
                    </n-switch>
                </div>
                <div class="setting-item-wrapper">
                    <span>全屏</span>
                    <n-switch @update:value="(value: boolean) => {
                        handleActionBar(value, 'isShowFullScreen')
                    }" :value="defaultStore.actionBar.isShowFullScreen">
                    </n-switch>
                </div>
            </div>
            <div>
                <n-divider dashed>水印功能</n-divider>
                <div class="setting-item-wrapper">
                    <span>开启水印</span>
                    <n-switch @update:value="(value: boolean) => {
                        handleDefaultSetting(value, 'isOpenWaterMark')
                    }" :value="defaultStore.isOpenWaterMark">
                    </n-switch>
                </div>
                <div class="setting-item-wrapper">
                    <span>水印内容</span>
                    <n-input v-model:value="defaultStore.waterMark" @update:value="(value: string) => {
                        handleDefaultSetting(value, 'waterMark')
                    }" type="text" placeholder="水印内容" />
                </div>
            </div>
            <div>
                <n-divider dashed>颜色模式</n-divider>
                <div class="setting-item-wrapper">
                    <span>灰色模式</span>
                    <n-switch @update:value="(value: boolean) => {
                        handleDefaultSetting(value, 'isGray')
                    }" :value="defaultStore.isGray">
                    </n-switch>
                </div>
            </div>
        </n-drawer-content>
    </n-drawer>

    <!-- 水印 -->
    <n-watermark v-if="defaultStore.isOpenWaterMark" :content="defaultStore.waterMark" cross fullscreen :font-size="16"
        :line-height="16" :width="384" :height="384" :x-offset="12" :y-offset="60" :rotate="-15" />
</template>

<style lang="less" scoped >
.n-layout {
    width: 100%;
    height: 100%;

    .n-layout-sider {
        .logo-wrapper {
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px dashed var(--border-color);

            img {
                width: 30px;
                height: 30px;
            }

            .close-title {
                transform: scale(0);
                width: 0;
            }

            .show-title {
                margin-left: 10px;
                transform: scale(1);
                width: auto;
                transition: transform .2s ease-in;
            }
        }
    }

    .layout {
        padding-top: 88px;
        width: 100%;
        height: 100%;

        .n-layout-header {
            height: 88px;
            position: absolute;
            top: 0;
            right: 0;

            .header-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 48px;
                border-bottom: 1px solid var(--border-color);

                .header-top-left {
                    display: flex;

                    .nav-wrapper {
                        display: flex;
                        align-items: center;
                        padding: 0 10px;

                        .n-button {
                            transition: transform .3s ease;
                            transform: rotate(180deg);

                        }

                        .MenuFoldOutlined {
                            transition: transform .3s ease;
                            transform: rotate(360deg);
                        }
                    }

                    .n-breadcrumb {

                        .dropdownList {
                            // display: flex;
                        }
                    }
                }

                .header-top-right {
                    padding-right: 20px;
                    display: flex;
                    align-items: center;

                    .n-button .isshowCaretDown {
                        transform: rotate(0);
                        transition: transform .3s ease;
                    }

                    .n-button:hover .isshowCaretDown {
                        // transform: rotate(0);
                        transform: rotate(180deg);
                        transition: transform .3s ease;
                    }

                }
            }

            .header-bottom {
                height: 41px;
                display: flex;
                align-items: center;

                .n-icon {
                    margin: 0 8px;
                }

                .n-scrollbar .n-space {
                    height: 41px;
                    display: flex;
                    align-items: center;

                    .close-icon-item {
                        width: 0;
                        height: 0;
                        transition: all .2s ease-in-out;
                        overflow: hidden;
                        margin: 0;
                    }

                    div:not(:first-child) .n-button:hover .close-icon-item {
                        width: 1em;
                        height: 1em;
                        overflow: auto;
                        transition: all .2s ease-in-out;
                        margin: 0 2px;
                    }
                }


            }

        }

        .n-layout-content {
            height: 100%;
            padding: 5px;
            background-color: v-bind('bgc');

            .main {
                min-height: calc(100% - 60px);
            }

            .footer {
                margin-top: 5px;
                height: 45px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}

.example-wrapper {
    width: 50px;
    height: 40px;
    margin: 0 auto;
    border-radius: 4px;
    background-color: transparent;
    box-shadow: 0 2px 4px #0000001f, 0 0 6px #0000000a;

    .left {
        background-color: #fff;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        display: inline-block;
        width: 30%;
        height: 100%;
    }

    .right {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        display: inline-block;
        width: 70%;
        height: 100%;

        .right-bottom {
            height: 80%;
            border-bottom-right-radius: 4px;
        }

        .right-top {
            background-color: #fff;
            height: 20%;
            border-top-right-radius: 4px;
        }
    }
}

.setting-item-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    span {
        width: 125px
    }
}

.circle-tip::after {
    content: "";
    display: block;
    margin: 5px auto 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #03be32;
    text-align: center;
}

.circle::after {
    content: "";
    display: block;
    margin: 25px auto 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #03be32;
    text-align: center;
}

.colorlist {
    cursor: pointer;
    width: 30px;
    height: 24px;
    border-radius: 5px;
    border: 1px solid #c1c1c1;
    margin-bottom: 20px;
    box-shadow: 0 2px 12px #0000001a;
}
</style>
