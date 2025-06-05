import type { ActivityComponentType } from '@stackflow/react';

import { pagesConfig } from '@/pages';

export const activities = Object.entries(pagesConfig).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: value.component,
  }),
  {} as Record<string, ActivityComponentType>,
);
export const routes = Object.entries(pagesConfig).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: '/repicka-web' + value.path,
  }),
  {} as Record<string, string>,
);
