import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    proxy: {
      '/kma': {
        target: 'https://apihub.kma.go.kr', // 기상청 도메인
        changeOrigin: true,                  // Host 헤더를 target 으로 맞춤
        secure: false,                       // https 인증서 검증 건너뜀 (필요 시 true)
        rewrite: path => path.replace(/^\/kma/, ''), // '/kma' 프리픽스 제거
      },
    },
  },
})
