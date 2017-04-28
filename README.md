## Required Libraries
* Node JS
* Ionic 1.3

## How to run the app ?

* Run 'npm install' from the app directory.
* Run 'ionic run ios' to run the iOS app and 'ionic run android' to run Android App.


## Troubleshooting 

* In case facebook login does not work then follow below process.

Option 1
Run following commands from the root directory of the app.

> ionic plugin remove cordova-plugin-facebook4
> ionic plugin add cordova-plugin-facebook4

After this run the app for required platform either using 'ionic run ios' or 'ionic run android'.

Option 2

If facebook login still does not work then remove/add the specific platform by

For iOS platform
> ionic platform remove ios 
> ionic platform add ios

For Android platform
> ionic platform remove android
> ionic platform add android


