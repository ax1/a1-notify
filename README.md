# a1-notify

Use different techniques to notify an event (alarm, trigger)

Available methods: beep, email, web push notification.

## Usage

> Typescript is also available

No configuration required.

```javascript
const notify = require('a1-notify')
notify.beep()
```

## API

- **beep()**: Beep sound in the current computer
- **async rest(url, message)**: Send a web push notification
- **async push(message)**: Send a web push notification