import { types } from '../reducers/sideMenu';

export const toggleSideMenu = (status?: boolean) => ({
  type: types.toggleSideMenu,
  status
});
