
module.exports = {
  appName: 'cypress-vs-selenium',
  showLogs: false,
  batchName: 'cypress-vs-selenium',
  batchId: process.env.APPLITOOLS_BATCH_ID,
  apiKey: process.env.APPLITOOLS_API_KEY,
  serverUrl: process.env.APPLITOOLS_SERVER_URL,
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
