import { google } from 'google-translate'

export function generateRandomGreeting() {
  const translate = new google.Translate()

  const randomLanguage = translate.languages[Math.floor(Math.random() * translate.languages.length)]

  return translate.translate("hello world", {
    to: randomLanguage,
  })
}
