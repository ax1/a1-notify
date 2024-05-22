# a1-notify

Use different techniques to notify an event (alarm, trigger).

Available methods: beep, email, web push notification, sms to phone, or desktop pop-up.

## Email special case

Tested from gmail to gmail and to outlook.

https://nodemailer.com/about/

https://support.google.com/accounts/answer/185833?hl=en

Steps:
- enable 2fa in the account
- create an app password (go to google account and type "app password" in the search bar)
- add env variables EMAIL_USER="aaa@bb.com" EMAIL_APP_PW="asdadadad"

## Usage

> Typescript is also available

No configuration required.

```javascript
import * as notify from 'a1-notify'
notify.beep()
```

## API

- **beep()**: Beep sound in the current computer.
- **async post(url, message)**: Send an HTTP POST message.
- **async push(url, message, token?)**: Send a web push notification. Token is optional for restricted push messages.
- **async email(to, subject, message)**: Send an email message. process.env.EMAIL_USER and process.env.EMAIL_APP_PW must be set before sending. Message can be either text or html.
- **async sms(phone, message)**: Send an SMS (requires AWS account and whitelisted or arbitrary SMS must be selected in the AWS console).
- **async popup(title,message)**: Display a desktop GNOME popup notification.