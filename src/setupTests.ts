import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// Node polyfills for Jest
Object.assign(global, { TextEncoder, TextDecoder });

// Mock react-day-picker
jest.mock("react-day-picker", () => ({
  DayPicker: () => null,
}));

// Mock IntersectionObserver
class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
  root = null;
  rootMargin = "";
  thresholds = [];
  takeRecords() {
    return [];
  }
}

Object.assign(global, {
  IntersectionObserver: IntersectionObserverMock,
});
