import { greetings } from './greetings';

describe('greetings', () => {
  test('deve retornar a string "hello world"', () => {
    expect(greetings()).toEqual('hello world');
  })
})
