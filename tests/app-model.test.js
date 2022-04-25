import { hello } from '../src/app-model'

test('hello', () => {
  const result = hello()

  expect(result).toEqual('Hello, World! 🐶')
})
