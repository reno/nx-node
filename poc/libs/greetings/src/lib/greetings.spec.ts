import { greetings } from './greetings';

describe('translate', () => {
  test('Deve retornar a string "hello world"', () => {
    expect(greetings()).toEqual('hello world');
  })
})
