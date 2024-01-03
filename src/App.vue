<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';
// import SlideTime from './components/SlideTime.vue';
import DarkModeButton from './components/DarkModeButton.vue';
import ChartBar from './components/ChartBar.vue';
import ChartLine from './components/ChartLine.vue';
</script>

<template>
   <div style="padding: 20px">
      <DarkModeButton />

      <div style="max-width: 900px; margin: auto">
         <ChartBar />
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div style="max-width: 900px; margin: auto">
         <ChartLine />
      </div>
   </div>
   <!-- <SlideTime /> -->
</template>

<style>
@import './assets/scss/style.scss';
</style>
