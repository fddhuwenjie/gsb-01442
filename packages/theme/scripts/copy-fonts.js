// 复制字体文件脚本
import { existsSync, mkdirSync, copyFileSync, readdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const srcDir = resolve(__dirname, '../src/fonts')
const distDir = resolve(__dirname, '../dist/fonts')

if (existsSync(srcDir)) {
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true })
  }

  const files = readdirSync(srcDir)
  files.forEach((file) => {
    copyFileSync(resolve(srcDir, file), resolve(distDir, file))
  })

  console.log('Fonts copied successfully!')
} else {
  console.log('No fonts directory found, skipping...')
}
