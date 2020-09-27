const { google } = require('googleapis')
// const { generateString } = require('../utils/string.util')
// const Promise = require('bluebird')

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URL
} = process.env

// generate a url that asks permissions for Google Calendar scope
const scopes = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/userinfo.email'
]
// class Event {
//   constructor(auth) {
//     this.auth = auth
//     this.calendar = google.calendar({ version: 'v3', auth })
//   }
//   async addEvent({ summary, description, start_date, end_date, name }) {
//     let event = {
//       summary: summary,
//       description: description,
//       start: {
//         dateTime: start_date, // Format: '2015-05-28T09:00:00-07:00'
//         timeZone: 'Asia/Calcutta'
//       },
//       end: {
//         dateTime: end_date,
//         timeZone: 'Asia/Calcutta'
//       },
//       reminders: {
//         useDefault: false,
//         overrides: [
//           { method: 'email', minutes: 24 * 60 },
//           { method: 'popup', minutes: 15 }
//         ]
//       },
//       attendees: [{ email: 'asafnir@yahoo.com' }],
//       conferenceData: {
//         createRequest: { requestId: `${name}-${generateString(7)}` }
//       }
//     }
//     this.calendar.events.insert(
//       {
//         auth: this.auth,
//         calendarId: 'primary',
//         resource: event,
//         conferenceDataVersion: 1,
//         sendNotifications: true
//       },
//       (err, event) => {
//         if (err) {
//           console.log(
//             'There was an error contacting the Calendar service: ' + err
//           )
//           return
//         }
//         console.log('Event created: %s', event.data)
//         return event.data
//       }
//     )
//   }
// }

class GoogleWrapper {
  constructor(config = {}) {
    this.config = config
    this.redirectUrl = config.redirectUrl
      ? config.redirectUrl
      : GOOGLE_REDIRECT_URL
    this.auth = this.createConnection()
  }

  createConnection() {
    const auth = new google.auth.OAuth2(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      this.redirectUrl
    )
    return auth
  }

  async exchangeCode(code) {
    // get the auth "tokens" from the request
    const data = await this.auth.getToken(code)
    const tokens = data.tokens
    // add the tokens to the google api so we have access to the account
    this.auth.setCredentials(tokens)

    return tokens
  }

  async getConnectionUrl() {
    const url = await this.auth.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent', // access type and approval prompt will force a new refresh token to be made each time signs in
      scope: scopes
    })
    return url
  }

  async createEvent(tokens, eventDetails) {
    this.auth.setCredentials(tokens)
    const event = new Event(this.auth)
    const createdEvent = await event.addEvent(eventDetails)
    return createdEvent
  }
}

module.exports = GoogleWrapper
