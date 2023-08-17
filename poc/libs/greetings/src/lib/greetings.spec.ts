import { generateRandomGreeting } from './greetings';
import { googleTranslate } from 'google-translate';

describe('translate', () => {
  test('Deve retornar a string "hello world" em um idioma aleatório', () => {
    const greeting = generateRandomGreeting()
    const englishTranslation = googleTranslate.translate(greeting, { to: 'english' })
    expect(englishTranslation).toBe('hello world');
  })
})
