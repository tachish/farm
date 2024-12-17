/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface JsPluginAugmentResourceHashHookFilters {
  resourcePotTypes: Array<string>
  moduleIds: Array<string>
}
export interface JsPluginLoadHookFilters {
  resolvedPaths: Array<string>
}
export interface JsPluginRenderResourcePotHookFilters {
  resourcePotTypes: Array<string>
  moduleIds: Array<string>
}
/** Resolve hook filters, works as `||`. If any importers or sources matches any regex item in the Vec, we treat it as filtered. */
export interface JsPluginResolveHookFilters {
  importers: Array<string>
  sources: Array<string>
}
export interface JsPluginTransformHookFilters {
  resolvedPaths: Array<string>
  moduleTypes: Array<string>
}
export const enum JsPluginTransformHtmlHookOrder {
  Pre = 0,
  Normal = 1,
  Post = 2
}
export interface JsPluginProcessModuleHookFilters {
  moduleTypes: Array<string>
  resolvedPaths: Array<string>
}
export interface WatchDiffResult {
  add: Array<string>
  remove: Array<string>
}
export interface JsTracedModule {
  id: string
  contentHash: string
  packageName: string
  packageVersion: string
}
export interface JsTracedModuleGraph {
  root: string
  modules: Array<JsTracedModule>
  edges: Record<string, Array<string>>
  reverseEdges: Record<string, Array<string>>
}
export interface JsUpdateResult {
  added: Array<string>
  changed: Array<string>
  removed: Array<string>
  immutableModules: string
  mutableModules: string
  boundaries: Record<string, Array<Array<string>>>
  dynamicResourcesMap?: Record<string, Array<Array<string>>>
  extraWatchResult: WatchDiffResult
}
export type JsCompiler = Compiler
export declare class Compiler {
  constructor(config: object)
  traceDependencies(): object
  traceModuleGraph(): object
  /** async compile, return promise */
  compile(): object
  /** sync compile */
  compileSync(): void
  /** TODO: usage example */
  update(paths: Array<string>, callback: (...args: any[]) => any, sync: boolean, generateUpdateResource: boolean): object
  addWatchFiles(root: string, paths: Array<string>): void
  hasModule(resolvedPath: string): boolean
  getParentFiles(resolvedPath: string): Array<string>
  resources(): Record<string, Buffer>
  resourcesMap(): Record<string, unknown>
  watchModules(): Array<string>
  relativeModulePaths(): Array<string>
  resource(name: string): Buffer | null
  stats(): string
}
