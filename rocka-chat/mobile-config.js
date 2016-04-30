App.info({
  name: 'Rocka Chat',
  description: 'Live chat made with MeteorJs',
  author: 'RockaLabs',
  email: 'ops@rockalabs.com',
  website: 'http://chat.rocka.rocks',
  version: '0.0.1'
});

App.icons({
  // iOS
  'iphone_2x': 'public/mobile/icons/icon-60x60@2x.png',
  'ipad': 'public/mobile/icons/icon-76x76.png',
  'ipad_2x': 'public/mobile/icons/icon-76x76@2x.png',

  // Android
  'android_mdpi': 'public/mobile/icons/icon-48x48.png',
  'android_hdpi': 'public/mobile/icons/icon-72x72.png',
  'android_xhdpi': 'public/mobile/icons/icon-96x96.png'
});

App.launchScreens({
  // iOS
  'iphone_2x': 'public/mobile/splash/splash-320x480@2x.png',
  'iphone5': 'public/mobile/splash/splash-320x568@2x.png',
  'ipad_portrait': 'public/mobile/splash/splash-768x1048.png',
  'ipad_portrait_2x': 'public/mobile/splash/splash-768x1048@2x.png',
  'ipad_landscape': 'public/mobile/splash/splash-1024x768.png',
  'ipad_landscape_2x': 'public/mobile/splash/splash-1024x768@2x.png',

  // Android
  'android_mdpi_portrait': 'public/mobile/splash/splash-320x480.png',
  'android_mdpi_landscape': 'public/mobile/splash/splash-480x320.png',
  'android_hdpi_portrait': 'public/mobile/splash/splash-480x800.png',
  'android_hdpi_landscape': 'public/mobile/splash/splash-800x480.png',
  'android_xhdpi_portrait': 'public/mobile/splash/splash-720x1280.png',
  'android_xhdpi_landscape': 'public/mobile/splash/splash-1280x720.png'
});

App.setPreference('StatusBarOverlaysWebView', 'true');
App.setPreference('StatusBarBackgroundColor', '#3f51b5');

App.accessRule("blob:*");
