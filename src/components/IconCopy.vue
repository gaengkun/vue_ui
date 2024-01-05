<template>
   <ul class="list-box">
      <li @click="copyImagePath"><img src="@/assets/images/svg/bell.svg" /></li>
      <li @click="copyImagePath"><img src="@/assets/images/svg/check.svg" /></li>
      <li @click="copyImagePath"><img src="@/assets/images/svg/cross.svg" /></li>
      <li @click="copyImagePath"><img src="@/assets/images/svg/heart.svg" /></li>
      <li @click="copyImagePath"><img src="@/assets/images/svg/home.svg" /></li>
      <li @click="copyImagePath"><img src="@/assets/images/svg/marker.svg" /></li>
      <li @click="copyImagePath"><img src="@/assets/images/svg/menu_dots_vertical.svg" /></li>
      <li @click="copyImagePath"><img src="@/assets/images/svg/phone.svg" /></li>
      <li @click="copyImagePath"><img src="@/assets/images/svg/sliders.svg" /></li>
      <li @click="copyImagePath"><img src="@/assets/images/svg/small_right.svg" /></li>
   </ul>

   <Alert v-if="isAlertVisible" @close="closeAlert" />
</template>

<script setup lang="ts">
import Alert from './Alert.vue';
import { ref } from 'vue';

const isAlertVisible = ref(false);

const copyImagePath = (event: MouseEvent) => {
   const target = event.target as HTMLImageElement;

   if (target.tagName === 'IMG') {
      const imagePath = target.src;
      const relativePath = imagePath.replace(window.location.origin, '');
      const textarea = document.createElement('textarea');
      textarea.value = `@${relativePath}`;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      isAlertVisible.value = true;

      if (isAlertVisible.value) {
         setTimeout(() => {
            isAlertVisible.value = false;
         }, 500);
      }
   }
};

const closeAlert = () => {
   // Alert 컴포넌트가 닫히면 상태 변수를 업데이트하여 숨김
   isAlertVisible.value = false;
};
</script>

<style>
.list-box {
   max-width: 1200px;
   margin: auto;
   padding-top: 50px;
   display: flex;
   flex-wrap: wrap;
   > li {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc;
      width: 10%;
      padding: 20px;
      box-sizing: border-box;
      cursor: pointer;
      min-width: 100px;

      > img {
         display: block;
         width: 100%;
      }
   }
}

/* 여기에 필요한 스타일을 추가하세요. */
</style>
