<template>
   <Bar :data="data" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'vue-chartjs';
import * as chartBarConfig from './chartBarConfig.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const data = ref(chartBarConfig.data);
const options = ref(chartBarConfig.options);
</script>

<style>
/* 여기에 필요한 스타일을 추가하세요. */
</style>
