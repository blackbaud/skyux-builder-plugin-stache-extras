const preload = (content, resourcePath) => {
  if (!resourcePath.match(/stache-extras\.module\.ts$/)) {
    return content;
  }

  // The providers listed below are automatically provided by their
  // respective plugin.
  return `
import { NgModule } from '@angular/core';

import { SkyAppConfig } from '@blackbaud/skyux-builder/runtime';
import { StacheModule, StacheConfigService } from '@blackbaud/stache';

@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    StacheModule
  ],
  providers: [
    STACHE_JSON_DATA_PROVIDERS,
    STACHE_ROUTE_METADATA_PROVIDERS,
    {
      provide: StacheConfigService,
      useExisting: SkyAppConfig
    }
  ]
})
export class StacheExtrasModule { }`;
};

module.exports = { preload };
