/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

// eslint-disable-next-line new-cap
configure({ adapter: new Adapter.default() });
