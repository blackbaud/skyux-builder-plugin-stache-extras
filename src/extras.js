const preload = (content, resourcePath) => {
  if (!resourcePath.match(/app-extras\.module\.ts$/)) {
    return content;
  }

  let moduleDirectory = '@blackbaud/stache';
  if (resourcePath.match('/stache2/')) {
    moduleDirectory = './public';
  }

  content = `
import { SkyAppConfig } from '@blackbaud/skyux-builder/runtime';
import { StacheConfigService } from '${moduleDirectory}';

export const STACHE_CONFIG_PROVIDERS: any[] = [{
  provide: StacheConfigService,
  useExisting: SkyAppConfig
}];
${content}`;

  content = content.replace('providers: [', `providers: [
    STACHE_CONFIG_PROVIDERS,`);

  return content;
};

module.exports = { preload };
