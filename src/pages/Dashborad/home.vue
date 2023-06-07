<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted, h } from 'vue'
import { useDefaultStore } from "../../store/defaultSettings"
const defaultStore = useDefaultStore()

</script>

<template>
<div>
    {{ defaultStore.theme }}
</div>
</template>

<style lang='less' scoped>

</style>
