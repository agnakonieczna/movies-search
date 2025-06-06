import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
import { server } from './src/test/mocks/node';
import 'whatwg-fetch';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Polyfill for TextEncoder
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof window.TextEncoder === 'undefined') {
  window.TextEncoder = global.TextEncoder;
}

// Polyfill for TextDecoder
if (typeof global.TextDecoder === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  global.TextDecoder = TextDecoder;
}
if (typeof window.TextDecoder === 'undefined') {
  window.TextDecoder = global.TextDecoder;
}

jest.mock('./src/config', () => ({
  config: { apiToken: 'test-token' },
}));
