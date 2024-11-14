// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyC5KGRm76LyIzHVipTCwPWasa802U8R_iQ",
    authDomain: "registrapp-15edb.firebaseapp.com",
    projectId: "registrapp-15edb",
    storageBucket: "registrapp-15edb.firebasestorage.app",
    messagingSenderId: "730336507392",
    appId: "1:730336507392:web:2b9add3514882ca5768ae5",
    measurementId: "TU_MEASUREMENT_ID",
    databaseURL: "TU_DATABASE_URL" // Necesario para Firebase Realtime Database
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
