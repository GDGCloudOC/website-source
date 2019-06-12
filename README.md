# Introduction
This is the code base for the GDG Cloud OC website. It provides more information about the group, details on past and future meetups, archives of videos and photos from past events, and a means for users to get in touch with other group members through Slack, or contact the group organizers through a contact form. It is built using Angular 7, and gets information on the events and photos from the Meetup API. Videos are retrieved from the [GDG Cloud OC YouTube channel](https://www.youtube.com/channel/UCGGpNEJD4nP5vtSuCbaKGBA/videos) using YouTube's Data API; see the section below for [setting up API keys](#Configuring-API-Keys).

# Getting Started

Make sure you have node (>= v10.14.1), npm (>= v6.9.0), and the Angular CLI (>= v7.3.9) installed globally.

# Install Dependencies
1. Open up a terminal and cd to `website-source/ng-project`.
2. Run `npm install`.

# Start Dev Server
Run `npm start`. This will start a dev server and open a browser to `localhost:4200`.

# Configuring API Keys
1. Contact Matthew Emes to get the API key for YouTube Data and any other keys that get added.
2. Create a file called `apiKeys.ts` in the directory `website-source/ng-project/src/app/services` and add the following code:
```javascript
export const youtubeApiKey = 'KEY_GOES_HERE';
export const youtubeApiKeyDev = 'KEY_GOES_HERE';
export const contactFormLinkDev = 'LINK_GOES_HERE';
```
3. Add the keys between the single quotes, and whatever you do, **DO NOT CHECK IN THIS FILE TO SOURCE CONTROL**. This file is already included in the `.gitignore` file, so make sure this does not get removed. The items that end in "dev" are used while you are developing. It is recommended that you generate your own YouTube Data API key using the [Google API Console](https://console.developers.google.com). If you do not provide your own API key, then the videos section will be broken, since the keys used in production only allow requests from the live site. It is also recommended that you create an account for [Basin](https://usebasin.com) if you plan to test the contact form. If you do not do this, you will not be able to retrieve the form submissions, and Matthew will not be happy about getting spammed by test emails.

# Contributors

 - Charlie Collier
 - Matthew Emes
 - Jarid Goodwin
 - Mikkel Sandberg
