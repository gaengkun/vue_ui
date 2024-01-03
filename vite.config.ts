import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      vue(),
      AutoImport({
         resolvers: [ElementPlusResolver()],
      }),
      Components({
         resolvers: [ElementPlusResolver()],
      }),
   ],
   optimizeDeps: {
      include: ['element-plus'], // 프로젝트의 실제 의존성에 맞게 조정
   },
   resolve: {
      alias: {
         '@': `${__dirname}/src`,
         '@components': `${__dirname}/src/components`,
      },
   },
});
