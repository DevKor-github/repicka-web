import { stackflow } from '@stackflow/react';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';

import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { activities, routes } from '@/libs/routes/stackConfig';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
      backgroundColor: 'transparent',
      dimBackgroundColor: 'transparent',
    }),
    historySyncPlugin({
      routes,
      fallbackActivity: () => 'NotFoundPage',
      useHash: false,
    }),
  ],
});
