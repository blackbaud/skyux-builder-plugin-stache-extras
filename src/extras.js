const preload = (content, resourcePath) => {
  if (!resourcePath.match(/stache-extras\.module\.ts$/)) {
    return content;
  }

  // The providers listed below are automatically provided by their
  // respective plugin.
  return `
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    STACHE_JSON_DATA_PROVIDERS,
    STACHE_ROUTE_METADATA_PROVIDERS
  ]
})
export class StacheExtrasModule { }`;
};

module.exports = { preload };
