import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins:  
  [react(),tailwindcss()],
  resolve:{
    alias:{
      "@" : path.resolve(__dirname ,"./src"),  //here we are giving alias for src folder so that we don't need to put use  
    }                                          // full address for soruce - in easy language now we will use @ and it will be considered
  }                                            //as src - full dircrectoy 
})
