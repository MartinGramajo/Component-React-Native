import { MenuItem } from "../interfaces/appInterfaces";

//Creamos una lista de elementos, data para iterar. 
export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    id: 2,
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    id: 3,
    name: 'Switch',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    id: 4,
    name: 'Alert',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    id: 5,
    name: 'TextInput',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    id: 6,
    name: 'PullToRefresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    id: 7,
    name: 'SectionList',
    icon: 'list-outline',
    component: 'SectionListScreen',
  },
  {
    id: 8,
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    id: 9,
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
];
