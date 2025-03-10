//index.js:
 window['__farm_default_namespace__'] = {__FARM_TARGET_ENV__: 'browser'};function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}function __commonJs(mod) {
  var module;
  return () => {
    if (module) {
      return module.exports;
    }
    module = {
      exports: {},
    };
    if(typeof mod === "function") {
      mod(module, module.exports);
    }else {
      mod[Object.keys(mod)[0]](module, module.exports);
    }
    return module.exports;
  };
}((function(){// module_id: ../../_internal/runtime/index.js.farm-runtime
var index_js_cjs = __commonJs({
    "../../_internal/runtime/index.js.farm-runtime": (module, exports)=>{
        "use strict";
        console.log('runtime/index.js');
        window['__farm_default_namespace__'].__farm_module_system__.setPlugins([]);
    }
});
index_js_cjs();
})());(function(_){var filename = ((function(){var _documentCurrentScript = typeof document !== "undefined" ? document.currentScript : null;return typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : _documentCurrentScript && _documentCurrentScript.src || new URL("index_ddf1.js", document.baseURI).href})());for(var r in _){_[r].__farm_resource_pot__=filename;window['__farm_default_namespace__'].__farm_module_system__.register(r,_[r])}})({"dep.ts":function  (module, exports, farmRequire, farmDynamicRequire) {
    module._m(exports);
    module.o(exports, "a", function() {
        return a;
    });
    module.o(exports, "invalidate", function() {
        return invalidate;
    });
    if (module.meta.hot) {
        module.meta.hot.accept(()=>{
            module.meta.hot.invalidate('parent module should accept this');
        });
    }
    var a = '1';
    function invalidate() {
        return `invalidate data`;
    }
}
,
"index.ts":function  (module, exports, farmRequire, farmDynamicRequire) {
    module._m(exports);
    module.o(exports, "InvalidateParent", function() {
        return InvalidateParent;
    });
    var _f_dep = farmRequire("dep.ts");
    console.log(_f_dep.a);
    const id = 'InvalidateParent';
    function InvalidateParent() {
        return {
            render: ()=>{
                const renderData = _f_dep.invalidate();
                const div = document.createElement('div', {});
                div.id = id;
                div.innerText = renderData;
                div.className = 'box';
                return div;
            }
        };
    }
    if (module.meta.hot) {
        module.meta.hot.accept();
        const div = document.getElementById(id);
        if (div) {
            const comp = InvalidateParent().render();
            console.log(div, comp);
            div.replaceWith(comp);
        }
    }
}
,});window['__farm_default_namespace__'].__farm_module_system__.setInitialLoadedResources([]);window['__farm_default_namespace__'].__farm_module_system__.setDynamicModuleResourcesMap([],{  });var farmModuleSystem = window['__farm_default_namespace__'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("index.ts");var InvalidateParent=entry.InvalidateParent;export { InvalidateParent };