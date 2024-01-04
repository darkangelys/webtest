// #! 🪧 VITE CONFIG JS

//! IMPORT
//!! REQUIRE
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

//!! defineConfig()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // todo>> Configurer le serveur
  // changer le port par défaut du serveur
  server: {
    port: 3000
  }
});
