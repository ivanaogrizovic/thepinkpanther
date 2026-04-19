// src/setupTests.ts
import "@testing-library/jest-dom";

import { TextEncoder, TextDecoder } from "util";

Object.assign(global, { TextDecoder, TextEncoder });
jest.mock("react-day-picker", () => ({
  DayPicker: () => null,
}));
