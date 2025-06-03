import { stackflow } from '@stackflow/react';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';

import { pages } from '@/pages';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: pages,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  initialActivity: () => 'HomePage',
});
