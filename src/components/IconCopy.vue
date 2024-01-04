<template>
   <ul class="list-box">
      <li @click="copyImagePath"><img src="@/assets/images/svg/bell.svg" /></li>
      <li><img src="../assets/images/svg/check.svg" /></li>
      <li><img src="../assets/images/svg/cross.svg" /></li>
      <li><img src="../assets/images/svg/heart.svg" /></li>
      <li><img src="../assets/images/svg/home.svg" /></li>
      <li><img src="../assets/images/svg/marker.svg" /></li>
      <li><img src="../assets/images/svg/menu_dots_vertical.svg" /></li>
      <li><img src="../assets/images/svg/phone.svg" /></li>
      <li><img src="../assets/images/svg/sliders.svg" /></li>
      <li><img src="../assets/images/svg/small_right.svg" /></li>
   </ul>
</template>

<script setup lang="ts">
// import * as path from 'path';

const copyImagePath = (e: string, event: MouseEvent) => {};
</script>

<style>
.list-box {
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

      > img {
         display: block;
         width: 100%;
      }
   }
}

/* 여기에 필요한 스타일을 추가하세요. */
</style>
