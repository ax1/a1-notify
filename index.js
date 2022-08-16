module.exports = { beep, rest, push, email, sms }

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
  const res = await require('node-fetch')(url, { method: 'post', body: JSON.stringify(payload) })
  if (!res.ok) throw res
}


/**
 * Send a web push notification
 * @param {String} url                the endpoint of the service
 * @param {String | Object} message   text or { title, message }
 * @param {String} token?             [optional] for restricted messages
 */
async function push(url, message, token) {
  if (!message) throw Error('message is undefined. Check if method call is url, message ,token?')
  await rest(url, message, token)
}


/**
 * Send plain text email.
 * process.env.USER_EMAIL and process.env.USER_PW must be set before
 */
async function email(to, subject, text) {
  await require('./email').send(to, subject, text)
}

/**
 * Send SMS. 
 * If arbitrary phone number, please deactivate sandboxing in the AWS console (SMS).
 * @param {string} phone      The number with extension. Eg: +34857698985 
 * @param {string} message    Max 140 characters
 */
async function sms(phone, msg) {
  const aws = await import('../repo/aws.js')
  await aws.sns.sms(phone, msg)
}