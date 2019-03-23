import { checkTopOffset } from './withAdditionalHandlers';

import { firstWaypoint, secondWaypont } from '../constants';

describe('withAdditionalHandler', () => {
  describe('checkTopOffset', () => {
    it('should be displayed the entire header initially', () => {
      const props: any = {
        isNavigationVisible: false,
        isHeaderVisible: false,
        setHeaderState: jest.fn()
      };

      checkTopOffset(props)();

      expect(props.setHeaderState).toHaveBeenCalledWith({
        isNavigationVisible: true,
        isHeaderVisible: true
      });
    });

    it(`it should hide the menu when the user scrolls more than ${firstWaypoint}`, () => {
      (global as any).scrollY = firstWaypoint + 1;
      const props: any = {
        isNavigationVisible: true,
        isHeaderVisible: true,
        setHeaderState: jest.fn()
      };

      checkTopOffset(props)();

      expect(props.setHeaderState).toHaveBeenCalledWith({
        isNavigationVisible: false,
        isHeaderVisible: true
      });
    });

    it(`it should hide the header when the user scrolls more than ${secondWaypont}`, () => {
      (global as any).scrollY = secondWaypont + 1;
      const props: any = {
        isNavigationVisible: false,
        isHeaderVisible: true,
        setHeaderState: jest.fn()
      };

      checkTopOffset(props)();

      expect(props.setHeaderState).toHaveBeenCalledWith({
        isNavigationVisible: false,
        isHeaderVisible: false
      });
    });
  });
});
