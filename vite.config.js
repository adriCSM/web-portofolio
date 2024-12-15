// import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   define: {
//     'process.env': JSON.stringify(process.env),
//   },
// });

import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd(), ''); // Load only VITE_ prefixed variables

  return {
    plugins: [vue()],
    define: {
      // Pass only necessary variables
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
    },
  };
});
