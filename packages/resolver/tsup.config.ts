import { defineConfig } from 'tsup'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

/**
 * Resolver 的构建配置。
 *
 * 关键点：
 * 1. resolver 在源码层依赖 `@alkaid-plus/components/manifest`，
 *    通过仓库根 `tsconfig.json` 中的 `paths`（`@alkaid-plus/*` → `packages/*\/src`）
 *    映射到 `packages/components/src/manifest.ts`，让 IDE / vitest 直接可用。
 *
 * 2. 发布后的 resolver 包不带 `@alkaid-plus/components` 为运行时依赖；
 *    `@alkaid-plus/components/package.json` 的 `exports` 又会把
 *    `@alkaid-plus/components/manifest` 指向尚不存在的 `dist/manifest.mjs`，
 *    所以这里通过 esbuild 的 `alias` 把这个裸模块 ID 显式重写到 components
 *    包的源码 `manifest.ts`，同时用 `noExternal` 让 tsup 把 manifest 内容
 *    内联进 resolver 自己的 dist。这样无论 components 是否构建过，
 *    resolver 都能独立完成 build，发布后的 resolver 也不再依赖 components。
 *
 * 3. `unplugin-vue-components` 是 peerDependency，tsup 默认会保持其 external，
 *    无需额外配置。
 */
export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: false,
  // manifest 是纯数据，没有 Vue / Element Plus 副作用，可以放心内联
  noExternal: [/^@alkaid-plus\/components(\/.*)?$/],
  esbuildOptions(options) {
    options.alias = {
      ...(options.alias ?? {}),
      '@alkaid-plus/components/manifest': resolve(
        __dirname,
        '../components/src/manifest.ts',
      ),
    }
  },
})
