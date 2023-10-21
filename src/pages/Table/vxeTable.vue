<!--
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-06-05 15:45:17
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-06-13 16:07:32
 * @description: 
 * @FilePath: /AdminWork/src/pages/Table/vxeTable.vue
-->
<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted, h,computed } from 'vue'
import { VxeGridProps, VxeTablePropTypes } from 'vxe-table'
import { useDefaultStore } from "../../store/defaultSettings"
const defaultStore = useDefaultStore()
// data
interface UserVO {
    id: number;
    name: string;
    role: string;
    sex: string;
    age: number;
    address: string;
}
const gridOptions = reactive<VxeGridProps<UserVO>>({
    border: true,
    stripe: true,
    height: '100%',
    rowConfig: {
        isHover: true,
        isCurrent: false,
    },
    columnConfig: { resizable: true },
    radioConfig: { labelField: 'role' },
    checkboxConfig: { labelField: 'name', highlight: false, range: true },
    toolbarConfig: {
    perfect: true,
    refresh: false,
    zoom: true,
    custom: true,
  },
    columns: [
        { type: 'seq', width: 50 },
        { type: 'checkbox', title: 'checkbox' },
        { type: 'radio', title: 'radio' },
        { field: 'name', title: 'Name', slots: { default: 'name' } },
        { field: 'sex', title: 'Sex', showHeaderOverflow: true },
        { field: 'address', title: 'Address', showOverflow: true }
    ],
    data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: '0', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: '0', age: 35, address: 'test abc' },
        { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 21, address: 'test abc' },
        { id: 10010, name: 'Test10', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
        { id: 10011, name: 'Test11', role: 'Test', sex: '0', age: 29, address: 'test abc' },
        { id: 10012, name: 'Test12', role: 'Develop', sex: '1', age: 27, address: 'test abc' },
        { id: 10013, name: 'Test13', role: 'Test', sex: '0', age: 24, address: 'test abc' },
        { id: 10014, name: 'Test14', role: 'Develop', sex: '1', age: 34, address: 'test abc' },
        { id: 10015, name: 'Test15', role: 'Test', sex: '1', age: 21, address: 'test abc' },
        { id: 10016, name: 'Test16', role: 'Develop', sex: '0', age: 20, address: 'test abc' },
        { id: 10017, name: 'Test17', role: 'Test', sex: '1', age: 31, address: 'test abc' },
        { id: 10018, name: 'Test18', role: 'Develop', sex: '0', age: 32, address: 'test abc' },
        { id: 10019, name: 'Test19', role: 'Test', sex: '1', age: 37, address: 'test abc' },
        { id: 10020, name: 'Test20', role: 'Develop', sex: '1', age: 41, address: 'test abc' }
    ]
})
// const dynamicVarSetting = computed(() => ({
//   '--vxe-font-color': 'red'
// }));
</script>

<template>
    <vxe-grid v-bind="gridOptions">
        <template #name="{ row }">
            <span>自定义插槽模板 {{ row.name }}</span>
        </template>
    </vxe-grid>
</template>

<style lang='less' scoped>
// .vxe-grid{
//     .vxe-cell{
//         span{
//             color: red;
//         }
//     }
// }
</style>
