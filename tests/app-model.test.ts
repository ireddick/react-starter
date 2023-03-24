import { test, expect } from '@jest/globals'
import { hello } from "../src/app-model"

test("hello", () => {
  const result = hello()

  expect(result).toEqual("Hello, World! 🐶")
})
