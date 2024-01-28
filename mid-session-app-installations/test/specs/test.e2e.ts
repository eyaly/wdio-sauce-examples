
describe('Install application', () => {
    it('should be able to install App', async () => {

        if (driver.isAndroid) {
            // install the app
            await driver.execute('mobile:installApp', {"appPath": "storage:filename=my-demo-app-android.apk"})
            // launch the app
            await driver.execute('mobile: startActivity', {intent: 'com.saucelabs.mydemoapp.android/.view.activities.SplashActivity'});
    
            // check the app is installed and is launched
            await driver.switchContext('NATIVE_APP');
            const elem = await $('id=com.saucelabs.mydemoapp.android:id/menuIV');
            await elem.waitForExist({ timeout: 10000 }); // waits for the element to exist for up to 10000 ms
        } else { // ios
            // install the app
            await driver.execute('mobile:installApp', {"appPath": "storage:filename=SauceLabs-Demo-App.ipa"})
            // launch the app
            await driver.execute('mobile: launchApp', {bundleId: 'com.saucelabs.mydemoapp.ios'});
    
            // check the app is installed and is launched
            await driver.switchContext('NATIVE_APP');
            const elem = await $('~Menu Icons');
            await elem.waitForExist({ timeout: 10000 }); // waits for the element to exist for up to 10000 ms
        }
    })
})

