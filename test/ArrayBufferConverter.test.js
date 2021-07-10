/* eslint-disable linebreak-style */
import getBuffer from '../src/js/getBuffer';
import ArrayBufferConverter from '../src/js/ArrayBufferConverter';

test('Test ArrayBufferConverter.toString() getBuffer', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(getBuffer());
  expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
