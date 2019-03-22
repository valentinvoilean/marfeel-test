interface SideMenuStateProps {
  isActive: boolean;
}

const initialState = {
  isActive: false
};

export const types = {
  toggleSideMenu: 'TOGGLE_SIDE_MENU'
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case types.toggleSideMenu: {
      if (typeof action.status === 'boolean') {
        return {
          ...state,
          isActive: action.status
        };
      }

      return {
        ...state,
        isActive: !state.isActive
      };
    }
    default:
      return state;
  }
};
