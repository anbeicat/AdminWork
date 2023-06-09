<!--
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-06-08 16:58:19
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-06-09 09:24:21
 * @description: 
 * @FilePath: /AdminWork/src/pages/Form/index.vue
-->
<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted, h } from 'vue'
import { NForm, NFormItem, useMessage, FormInst, NInput } from 'naive-ui'

const formRef = ref<FormInst | null>(null)
const formValue = reactive({
    user: {
        name: '',
        age: ''
    },
    phone: ''
})
</script>

<template>
    <n-form ref="formRef" inline label-placement="left" label-width="auto">
        <n-form-item label="姓名" path="user.name">
            <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
        </n-form-item>
    </n-form>
</template>

<style lang='less' scoped>

</style>
