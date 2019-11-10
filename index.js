module.exports = { beep, rest, push }

/**
 * Beep sound in the current computer
 */
function beep() {
  require('a1-beep').beep()
}

/**
 * Send generic REST message
 * @param {string} url
 * @param {string} message 
 * @param {string} token?
 */
async function rest(url, message, token) {
  const payload = { title: 'a1-notify', message }
  await require('node-fetch')(url, { method: 'post', body: JSON.stringify(payload) })
}

/**
 * Send a web push notification
 * @param {string} message 
 * @param {string} token?
 */
async function push(message, token) {
  await rest('https://rcc.esilab.org/a1-pwa/notify', message, token)
}

/**
 * Send plain text email
 */
async function email() {
  //TODO see RTX project for email example
}