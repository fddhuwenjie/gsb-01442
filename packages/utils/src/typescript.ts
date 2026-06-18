/**
 * 可能为数组类型
 */
export type MaybeArray<T> = T | T[]

/**
 * 可能为 Promise 类型
 */
export type MaybePromise<T> = T | Promise<T>

/**
 * 可能为 Ref 类型
 */
export type MaybeRef<T> = T | { value: T }

/**
 * 可空类型
 */
export type Nullable<T> = T | null

/**
 * 可选类型
 */
export type Optional<T> = T | undefined

/**
 * 排除某些键
 */
export type ExcludeKeys<T, K extends keyof T> = Omit<T, K>

/**
 * 选取某些键
 */
export type PickKeys<T, K extends keyof T> = Pick<T, K>

/**
 * 必须的键
 */
export type RequiredKeys<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>

/**
 * 可选的键
 */
export type OptionalKeys<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>

/**
 * 深层 Partial
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

/**
 * 深层 Required
 */
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
}

/**
 * 从联合类型中排除
 */
export type Exclude<T, U> = T extends U ? never : T

/**
 * 从联合类型中提取
 */
export type Extract<T, U> = T extends U ? T : never

/**
 * 获取对象值的类型
 */
export type ValueOf<T> = T[keyof T]

/**
 * 获取数组元素类型
 */
export type ElementOf<T> = T extends (infer E)[] ? E : never

/**
 * 字符串字面量联合
 */
export type StringLiteral<T> = T extends string ? (string extends T ? never : T) : never

/**
 * 判断是否为 never
 */
export type IsNever<T> = [T] extends [never] ? true : false

/**
 * 判断是否为 any
 */
export type IsAny<T> = 0 extends 1 & T ? true : false

/**
 * 判断是否为未知
 */
export type IsUnknown<T> = IsNever<T> extends false
  ? T extends unknown
    ? unknown extends T
      ? IsAny<T> extends false
        ? true
        : false
      : false
    : false
  : false
