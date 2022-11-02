import * as notify from '../index.js'

notify.beep()
notify.push('https://rcc.esilab.org/pwa/notify', 'eeepa')
await notify.popup('hooola', 'esto es una prueba')

//notify.email('angel.rego@tecnalia.com', 'comedor', 'ocupado').catch(console.error)
// notify.sms('1235424', 'pruebas').catch(console.error) disabled because sms charges 0.06 per message

// notify.email()
// notify.rest()