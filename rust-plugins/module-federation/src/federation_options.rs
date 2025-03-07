// ModuleFederationOptions recording to https://module-federation.io/configure/index.html
use farmfe_core::{serde, HashMap};
use farmfe_core::serde_json::Value;

// TODO make sure this type definition.
type RemoteInfo = HashMap<String, HashMap<String, String>>;

// Exposes config, recording to https://github.com/module-federation/core/blob/b0e7c8c30cc45b79dfd39d7d45034860619babfd/apps/website-new/docs/zh/configure/exposes.mdx#L3
#[derive(serde::Deserialize)]
pub struct ExposesConfig {
    import: String,
}

pub type PluginExposesOptions = HashMap<String, Value>;

// TODO
#[derive(serde::Deserialize)]
pub struct Share {}

pub type ShareInfos = HashMap<String, Result<String, Share>>;

// TODO
#[derive(serde::Deserialize)]
pub struct PluginManifestOptions {}

// TODO
#[derive(serde::Deserialize)]
pub struct PluginDtsOptions {}

// TODO
#[derive(serde::Deserialize)]
pub struct PluginDevOptions {}

#[derive(serde::Deserialize)]
pub struct ModuleFederationOptions {
    // module federation name
    pub name: String,
    // remoteEntry name
    pub file_name: Option<String>,
    // module federation remotes module's alias and entry info
    pub remotes: Option<Vec<RemoteInfo>>,
    // module federation expose module's info
    pub exposes: Option<PluginExposesOptions>,
    // shared dependencies config
    pub shared: Option<ShareInfos>,
    // dynamic publicPath
    pub get_public_path: Option<String>,
    // runtime plugins
    pub runtime_plugins: Option<Vec<String>>,
    // runtime package dependencies
    pub implementation: Option<String>,
    // manifest config
    pub manifest: Option<Result<bool, PluginManifestOptions>>,
    // page reload or type reload
    pub dev: Option<Result<bool, PluginDevOptions>>,
    // typescript type generation
    pub dts: Option<Result<bool, PluginDtsOptions>>,
}