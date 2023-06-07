<!--
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-06-05 09:32:25
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-06-07 11:00:09
 * @description: 
 * @FilePath: /AdminWork/src/pages/Table/index.vue
-->
<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted, h } from 'vue'
import { NDataTable, NButton,useMessage } from 'naive-ui'
const message = useMessage()
// data
const columns = [
    {
        title: 'Name',
        key: 'name',
        resizable: true
    },
    {
        title: 'Age',
        key: 'age',
        resizable: true
    },
    {
        title: 'Address',
        key: 'address',
        resizable: true
    },
    {
        title: 'Tags',
        key: 'tags',
        resizable: true
    },
    {
        title: 'Action',
        key: 'actions',
        // resizable: true,
        render(row) {
            return h(
                NButton,
                {
                    size: 'small',
                    onClick: () => sendMail(row)
                },
                { default: () => 'Send Email' }
            )
        }
    }

]
const sendMail = (rowData: any) => {
    message.info('send mail to ' + rowData.name)
}
const data = [
    {
        key: 0,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
    },
    {
        key: 1,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['wow']
    },
    {
        key: 2,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
    }
]
const pagination = {
    pageSize: 10
}
</script>

<template>
    <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="true" :single-line="false" />
</template>

<style lang='less' scoped></style>
