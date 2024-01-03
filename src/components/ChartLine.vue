<template>
   <Line :data="data" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import { Line } from 'vue-chartjs';
import * as chartLineConfig from './chartLineConfig.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = ref(chartLineConfig.data);
const options = ref(chartLineConfig.options);
</script>

<style>
/* 여기에 필요한 스타일을 추가하세요. */
</style>
