
module.exports = {
  appName: 'cypress-vs-selenium',
  showLogs: false,
  batchName: 'cypress-vs-selenium',
  apiKey: process.env.APPLITOOLS_API_KEY,
  serverUrl: 'https://gannetteyesapi.applitools.com',
  matchLevel: 'Strict',
  concurrency: 3,
  browser: [
    { width: 1280, height: 960, name: 'chrome' },
    { width: 1280, height: 960, name: 'firefox' },
    { width: 1280, height: 960, name: 'safari' },
    { deviceName: 'Nexus 7' },
    { iosDeviceInfo: {
      deviceName: 'iPhone 11'
    }}
  ]
}