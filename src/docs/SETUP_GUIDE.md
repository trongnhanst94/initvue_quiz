# Setup guide


## 1. Setting Up Development Environment

1.  Install Android studio and SDK:
https://developer.android.com/studio
Install Xcode via App store (only for MacOS)

2.  Install NodeJs:
https://nodejs.org/en/

Note: Node version > 10

3.  Install Java JDK or using OpenSDK from Android studio folder
https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html

4.  Install Git:
https://git-scm.com/

5.  Setup environment variable JAVA_HOME:
https://confluence.atlassian.com/conf59/setting-the-java_home-variable-in-windows-792499849.html

6.  Install React Native Command Line Interface (CLI):

```shell
npm install -g react-native-cli
```

## 2. Build

1.  Clone from repository (Skip if you are using code folder):

```shell
git clone <path>
```

2.  Open terminal at project folder:

```shell
npm install
```

3.  Run Android (rebuild www and run):

```shell
npm run build-dev (for Debug)
npm run build-stag (for Staging)
npm run build-prod (for Production)
```

3.  Run iOS:

Open file .xcodeproj in folder ios and click Run

Note: Checking provisioning profile's developer certificate validity


## 3. Uninstall and Create bundle

1. Uninstall application:

```shell
adb uninstall "{package_name}"
```

2. Detect the device connection:

```shell
adb devices
```

3. For offline bunduling of JS into android:

```shell
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

## 4. Add reference to Android SDK path

Create file `./android/local.properties` with the following contents:

```
sdk.dir = PATH_TO_SDK
```

## 5. Update display and package name

Display name: The name of the app as it appears on the device screen, e.g. TapOff.
Package name: The signature used by the app and play stores, e.g. co.za.auxstudio.tapoff.

(ONCE-OFF).

```shell
yarn global add react-native-rename
```

1.  Update the display and package name (android only):

NOTE: The display name will need to be different to the name you initialised the project with.

```shell
react-native-rename "NEW DISPLAY NAME" -b NEW_PACKAGE_NAME
```

2.  Update the package name in XCode (iOS only):

NOTE: Follow this step to a tee, don't modify Info.plist's bundle identifier, you will run into build issues.

In Xcode, `Project` => `General` => `Identity` => `Bundle Identifier` => `NEW_PACKAGE_NAME`.

3.  Setup iOS app signing (since you have XCode open):

In Xcode, `Project` => `General` => `Signing` => Select team.

## 6. Add android app signing

1.  Generate keystore:

```shell
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

2.  Enter a password and your details.

3.  Move the generated `./src/my-release-key.keystore` to `./android/app/`.

4.  In `./android/gradle.properties`, add:

```gradle
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=YOUR_PASSWORD
MYAPP_RELEASE_KEY_PASSWORD=YOUR_PASSWORD
```

5.  In .`/android/app/build.gradle`, add (in android.defaultConfig):

```java
signingConfigs {
    release {
        if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
}
```

6.  In the same file add (in android.buildTypes.release):

```java
signingConfig signingConfigs.release
```

7.  If you want to commit the keystore to git:

In `./gitignore`, remove `*.keystore`.
