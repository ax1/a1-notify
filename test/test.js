const notify = require('../index')

notify.beep()
notify.push('https://rcc.esilab.org/pwa/notify', 'eeepa')

//notify.email('angel.rego@tecnalia.com', 'comedor', 'ocupado').catch(console.error)
// notify.sms('1235424', 'pruebas').catch(console.error) disabled because sms charges 0.06 per message

// notify.email()
// notify.rest()