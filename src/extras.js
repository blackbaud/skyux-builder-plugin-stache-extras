const jsonDataPlugin = require('@blackbaud/skyux-builder-plugin-stache-json-data');

const preload = (content, resourcePath) => {
  if (!resourcePath.match(/stache-extras\.module\.ts$/)) {
    return content;
  }

  return content.replace(
    'declare var StacheExtrasModule: any;',
`
import { NgModule } from '@angular/core';
@NgModule({
  providers: [
    ${jsonDataPlugin.getProviders()}
  ]
})
export class StacheExtrasModule { }`);
};

module.exports = { preload };
