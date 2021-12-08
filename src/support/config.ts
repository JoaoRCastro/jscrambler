import { LaunchOptions } from 'playwright';
export const browserOptions: LaunchOptions = {
  slowMo: 8000,
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
};
