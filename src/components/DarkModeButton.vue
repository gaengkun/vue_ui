<template>
   <el-switch
      v-model="darkModeValue"
      class="ml-2"
      inline-prompt
      :active-action-icon="Sunny"
      :inactive-action-icon="Moon"
      style="--el-switch-on-color: #f2f2f2; --el-switch-border-color: #dddfe5; --el-switch-off-color: #2c2c2c" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Sunny, Moon } from '@element-plus/icons-vue';

const darkModeValue = ref(true);

watch(darkModeValue, newValue => {
   if (newValue) {
      document.documentElement.classList.remove('dark');
   } else {
      document.documentElement.classList.add('dark');
   }
});
</script>
