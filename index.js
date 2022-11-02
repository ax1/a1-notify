import * as a1_beep from 'a1-beep'
import fetch from 'node-fetch'
import { send } from './email.js'
import { execFile as execFileCallback } from 'child_process'
import { promisify } from 'util'

const execFile = promisify(execFileCallback)

/**
 * Beep sound in the current computer
 */
export function beep() { return a1_beep.beep() }

/**
 * Send generic REST message
 * @param {string} url
 * @param {string} message 
 * @param {string} token?
 */
export async function rest(url, message, token) {
  const payload = { title: 'a1-notify', message }
  const res = await fetch(url, { method: 'post', body: JSON.stringify(payload) })
  if (!res.ok) throw res
}


/**
 * Send a web push notification
 * @param {String} url                the endpoint of the service
 * @param {String | Object} message   text or { title, message }
 * @param {String} token?             [optional] for restricted messages
 */
export async function push(url, message, token) {
  if (!message) throw Error('message is undefined. Check if method call is url, message ,token?')
  await rest(url, message, token)
}


/**
 * Send plain text email.
 * process.env.USER_EMAIL and process.env.USER_PW must be set before
 */
export async function email(to, subject, text) {
  await send(to, subject, text)
}

/**
 * Send SMS. 
 * If arbitrary phone number, please deactivate sandboxing in the AWS console (SMS).
 * @param {string} phone      The number with extension. Eg: +34857698985 
 * @param {string} message    Max 140 characters
 */
export async function sms(phone, msg) {
  const aws = await import('/repo/aws.js')
  await aws.sns.sms(phone, msg)
}

export async function popup(title, msg) {
  const { out, err } = await execFile('notify-send', [title, msg])
  if (err) throw err
  return out
}
