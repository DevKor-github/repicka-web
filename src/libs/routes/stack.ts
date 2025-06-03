import { stackflow } from '@stackflow/react';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';

import Home from '@/pages/Home';
import Post from '@/pages/Post';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: { Home, Post },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  initialActivity: () => 'Home',
});
