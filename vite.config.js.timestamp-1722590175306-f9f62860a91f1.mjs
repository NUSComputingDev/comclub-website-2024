// vite.config.js
import { defineConfig } from "file:///C:/Users/Rayson/Desktop/coding/comclub/comclub-website-2024/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Rayson/Desktop/coding/comclub/comclub-website-2024/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwindcss from "file:///C:/Users/Rayson/Desktop/coding/comclub/comclub-website-2024/node_modules/tailwindcss/lib/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(
      {
        babel: {
          plugins: [
            ["@babel/plugin-syntax-import-attributes"]
          ]
        }
      }
    )
  ],
  base: "/",
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxSYXlzb25cXFxcRGVza3RvcFxcXFxjb2RpbmdcXFxcY29tY2x1YlxcXFxjb21jbHViLXdlYnNpdGUtMjAyNFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUmF5c29uXFxcXERlc2t0b3BcXFxcY29kaW5nXFxcXGNvbWNsdWJcXFxcY29tY2x1Yi13ZWJzaXRlLTIwMjRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1JheXNvbi9EZXNrdG9wL2NvZGluZy9jb21jbHViL2NvbWNsdWItd2Vic2l0ZS0yMDI0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcyc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KFxyXG4gICAgICB7XHJcbiAgICAgICAgYmFiZWw6IHtcclxuICAgICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgICAgWydAYmFiZWwvcGx1Z2luLXN5bnRheC1pbXBvcnQtYXR0cmlidXRlcyddLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgKSxcclxuICBdLFxyXG4gIGJhc2U6ICcvJyxcclxuICBjc3M6IHtcclxuICAgIHBvc3Rjc3M6IHtcclxuICAgICAgcGx1Z2luczogW3RhaWx3aW5kY3NzKCldLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpWCxTQUFTLG9CQUFvQjtBQUM5WSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxpQkFBaUI7QUFHeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFO0FBQUEsUUFDRSxPQUFPO0FBQUEsVUFDTCxTQUFTO0FBQUEsWUFDUCxDQUFDLHdDQUF3QztBQUFBLFVBQzNDO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLFlBQVksQ0FBQztBQUFBLElBQ3pCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
