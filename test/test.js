const notify = require('../index')

notify.beep()
notify.push('https://rcc.esilab.org/pwa/notify', 'eeepa')

notify.email('angel.rego@tecnalia.com', 'comedor', 'ocupado').catch(console.error)

// notify.email()
// notify.rest()