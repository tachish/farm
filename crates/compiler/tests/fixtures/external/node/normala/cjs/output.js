//index.js:
 global.nodeRequire = require;global['__farm_default_namespace__'] = {__FARM_TARGET_ENV__: 'node'};function __commonJs(mod) {
    var module;
    return ()=>{
        if (module) {
            return module.exports;
        }
        module = {
            exports: {}
        };
        if (typeof mod === "function") {
            mod(module, module.exports);
        } else {
            mod[Object.keys(mod)[0]](module, module.exports);
        }
        return module.exports;
    };
}
var index_js_cjs = __commonJs((module, exports)=>{
    "use strict";
    console.log('runtime/index.js');
    global['__farm_default_namespace__'].__farm_module_system__.setPlugins([]);
});
index_js_cjs();
var __farm_external_module_jquery = require("jquery");global['__farm_default_namespace__'].__farm_module_system__.setExternalModules({"jquery": __farm_external_module_jquery});(function(_){for(var r in _){_[r].__farm_resource_pot__='file://'+__filename;global['__farm_default_namespace__'].__farm_module_system__.register(r,_[r])}})({"b5d64806":function  (module, exports, farmRequire, farmDynamicRequire) {
    module._m(exports);
    var _f_jquery = module.i(farmRequire('jquery'));
    console.log(module.f(_f_jquery).find);
}
,});global['__farm_default_namespace__'].__farm_module_system__.setInitialLoadedResources([]);global['__farm_default_namespace__'].__farm_module_system__.setDynamicModuleResourcesMap([],{  });var farmModuleSystem = global['__farm_default_namespace__'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("b5d64806");