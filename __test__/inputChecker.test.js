/**
 * @jest-environment jsdom
 */

const {checkInput} = require('../src/client/js/inputChecker.js');

test('Testing inputChecker', () => {
  window.alert = jest.fn();
  expect(checkInput('http://foo.com/blah_blah')).toBe(0);
  expect(checkInput('https://www.example.com/foo/?bar=baz&inga=42&quux')).toBe(0);
  expect(checkInput('foo.com ')).toBe(undefined);
});
