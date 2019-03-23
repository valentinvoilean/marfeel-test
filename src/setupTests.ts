import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import throttle from 'lodash.throttle';

configure({ adapter: new Adapter() });

// mock the throttle method to bypass the timeout
jest.mock('lodash.throttle');
(throttle as any).mockImplementation((fn: any) => fn);

export default undefined;
