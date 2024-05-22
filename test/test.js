import * as notify from '../index.js'

notify.beep()
// notify.push('https://rcc.esilab.org/pwa/notify', 'eeepa')
// await notify.popup('Popup example', 'This is a test')

await notify.email('angel.rego@tecnalia.com', 'comedor', 'ocupado').catch(console.error)
// notify.sms('1235424', 'pruebas').catch(console.error) disabled because sms charges 0.06 per message

// notify.email()
// notify.post()