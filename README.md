
#install brew on mac, install npm and react-native
```
brew install 
brew install node
brew install watchman

npm install
npm install -g react-native-git-upgrade
react-native-git-upgrade


react-native run-ios
```

#create new project
```
$ react-native init ChatApp
$ cd ./ChatApp
$ react-native install @shoutem/ui
$ react-native install firebase
$ react-native install moment
$ react-native install redux
$ react-native install redux-thunk
$ react-native install redux-logger
$ react-native install react-native-keyboard-aware-scroll-view
```














rm -fr $TMPDIR/react-*


#apple IDs
`````
K297KEBU8G.com.jogchat.ios


Name:
jogchat
Key ID:
ETLMV55MZA
Services
APNs


team id:K297KEBU8G
````


npm install react-native-fcm --save
react-native link react-native-fcm


#solve fatal error
fatal error: 'FirebaseCore/FIRApp.h' file not found
#import <FirebaseCore/FIRApp.h>
manually download firebase
include .h .m and message,analytics framework


````
Go to Build Phases > Link Binary with Libraries > + > Add other While in the file selection window press: "CMD"+Shift+G (i.e. Go to folder) and type /usr/lib/ From /user/lib find and add : libz.dylib and libsqlite3.dylib
step 2: open your terminal (for mac)
cd /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.11.sdk/usr/lib

sudo ln -s /usr/lib/libsqlite3.dylib libsqlite3.dylib
sudo ln -s /usr/lib/libz.dylib libz.dylib
```


watchman watch-del-all
rm -rf node_modules && npm install
rm -fr $TMPDIR/react-*



react-native run-ios

Undefined symbols for architecture x86_64:
  "_FCMNotificationReceived", referenced from:
      -[AppDelegate application:didReceiveRemoteNotification:fetchCompletionHandler:] in AppDelegate.o
ld: symbol(s) not found for architecture x86_64
clang: error: linker command failed with exit code 1 (use -v to see invocation)
Showing first 200 warnings only

** BUILD FAILED **



The following build commands failed:
    Ld build/Build/Products/Debug-iphonesimulator/xxxxx.app/xxxxx normal x86_64
(1 failure)
Installing build/Build/Products/Debug-iphonesimulator/xxxx.app
An error was encountered processing the command (domain=LaunchServicesError, code=0):

solution:
react-native unlink react-native-fcm
react-native link react-native-fcm



No bundle url present
solution:
```
* Open a terminal window
* cd into YOUR_PROJECT/ios
* Remove the build folder with rm -r build
* Run react-native run-ios again
``


nw_connection_get_connected_socket_block_invoke 3 Connection has no connected handler
2017-05-19 23:25:53.335282-0400 test[21948:1121426] [] nw_connection_get_connected_socket_block_invoke 4 Connection has no connected handler
solution:
```
7	down vote
accepted	Try Below process
Xcode menu -> Product -> Edit Scheme...
Environment Variables -> Add -> Name: "OS_ACTIVITY_MODE", Value:"disable"
Run your app again
```

“No bundle url present” error with react-native iOS release mode
```
1. Run the following command:react-native bundle --dev false --platform ios --entry-file index.ios.js --bundle-output ios/main.jsbundle --assets-dest ./ios
2. Add main.jsbundle and assets directory to xcode by dragging them in your project.

/*{this.props.authorizing ? <Spinner /> : <LoginButton />}*/
```

#link and unlick certain modules will solve other errors
```
react-native unlink react-native-device-info
react-native link react-native-device-info
```

