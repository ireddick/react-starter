import hello from '../src/hello'

test('hello', () => {
  const result = hello()

  expect(result).toEqual('Hello, World! 🐶')
})
