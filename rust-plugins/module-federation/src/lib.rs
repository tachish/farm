#![deny(clippy::all)]

mod federation_options;

use farmfe_core::{config::Config, context::CompilationContext, error::CompilationError, plugin::Plugin, serde_json, stats::Stats};

use std::sync::Arc;
use farmfe_macro_plugin::farm_plugin;
use federation_options::ModuleFederationOptions;

/// 底层分为 sharedPlugin, exposePlugin, remotePlugin
/// sharedPlugin
/// exposePlugin
/// remotePlugin
#[farm_plugin]
pub struct FarmfeModuleFederation {
  options: ModuleFederationOptions
}

fn validate_options(options: &ModuleFederationOptions) {
  // name is required.
  if options.name.is_empty() {
    panic!("name is empty");
  }

  // module federation requires one of remotes, exposes config.
  if let (None, None) = (&options.remotes, &options.exposes) {
    panic!("need one of remotes or exposes config");
  }
}

fn normalize_options(mut options: ModuleFederationOptions) -> ModuleFederationOptions {
  validate_options(&options);

  // in expose scene, options.file_name if is nil, should use project's entry as options.file_name
  if options.file_name.is_none() && !options.exposes.is_none() {
    // TODO get project's entry file name.
    options.name = String::from("");
  }

  options
}

impl FarmfeModuleFederation {
  fn new(_config: &Config, options: String) -> Self {
    let options: ModuleFederationOptions = normalize_options(serde_json::from_str(&options).unwrap());

    Self {
      options
    }
  }
}

impl Plugin for FarmfeModuleFederation {
  fn name(&self) -> &str {
    "FarmfeModuleFederation"
  }

  fn finish(
    &self,
    _stat: &Stats,
    _context: &Arc<CompilationContext>,
  ) -> Result<Option<()>, CompilationError> {
    println!("Module Federation Plugin Finish");
    Ok(None)
  }
}
