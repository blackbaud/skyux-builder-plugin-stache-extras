const preload = (content, resourcePath) => {
  if (!resourcePath.match(/stache-extras\.module\.ts$/)) {
    return content;
  }

  let moduleDirectory = '@blackbaud/stache';
  if (resourcePath.match('/stache2/')) {
    moduleDirectory = './public';
  }

  return `
import { NgModule } from '@angular/core';

import { SkyAppConfig } from '@blackbaud/skyux-builder/runtime';

import { StacheConfigService } from '${moduleDirectory}';

export let STACHE_EXTRAS_PROVIDERS: any[] = [
  { provide: StacheConfigService, useExisting: SkyAppConfig }
];

@NgModule({
  providers: [
    STACHE_EXTRAS_PROVIDERS
  ]
})
export class StacheExtrasModule { }
`;
};

module.exports = { preload };
