import type { App, Plugin, Component, Directive } from 'vue'

export type SFCWithInstall<T> = T & Plugin

/**
 * 为组件添加 install 方法，使其可以通过 app.use() 安装
 */
export const withInstall = <T extends Component>(component: T, alias?: string): SFCWithInstall<T> => {
  const comp = component as SFCWithInstall<T>
  comp.install = (app: App) => {
    const name = (component as any).name || alias
    if (name) {
      app.component(name, component)
    }
  }
  return comp
}

/**
 * 为多个组件添加 install 方法
 */
export const withInstallMultiple = <T extends Component>(
  main: T,
  extras: Component[]
): SFCWithInstall<T> => {
  const comp = main as SFCWithInstall<T>
  comp.install = (app: App) => {
    ;[main, ...extras].forEach((c) => {
      const name = (c as any).name
      if (name) {
        app.component(name, c)
      }
    })
  }
  return comp
}

/**
 * 为函数添加 install 方法
 */
export const withInstallFunction = <T>(fn: T, name: string): SFCWithInstall<T> => {
  const func = fn as SFCWithInstall<T>
  func.install = (app: App) => {
    app.config.globalProperties[name] = fn
  }
  return func
}

/**
 * 为指令添加 install 方法
 */
export const withInstallDirective = <T extends Directive>(
  directive: T,
  name: string
): SFCWithInstall<T> => {
  const dir = directive as SFCWithInstall<T>
  dir.install = (app: App) => {
    app.directive(name, directive)
  }
  return dir
}

/**
 * 创建全局安装器
 */
export const makeInstaller = (components: Plugin[]) => {
  const install = (app: App) => {
    components.forEach((c) => app.use(c))
  }
  return { install }
}
