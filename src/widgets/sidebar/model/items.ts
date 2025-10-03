import { cilHome, cilMonitor, cilUser } from '@coreui/icons';

import { RoutePath } from 'shared/config';

export interface SidebarItemType {
  path: string;
  text: string;
  icon: string | string[];
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'main',
    icon: cilHome,
  },
  {
    path: RoutePath.about,
    text: 'about',
    icon: cilMonitor,
  },
  {
    path: RoutePath.profile,
    text: 'profile',
    icon: cilUser,
    authOnly: true,
  },
];
