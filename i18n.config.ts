import messages from '~/assets/messages.json'

export default defineI18nConfig(() => {
  return {
    legacy: false,
		locale: 'es',
		lazy: true,
    messages
    // Custom message loader
  }
})