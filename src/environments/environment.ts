// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDfl0l92o6BjoiujXCHB04_8XLHqJVn-l8',
    authDomain: 'ng-fitness-tracker-ce9ad.firebaseapp.com',
    databaseURL: 'https://ng-fitness-tracker-ce9ad.firebaseio.com',
    projectId: 'ng-fitness-tracker-ce9ad',
    storageBucket: 'ng-fitness-tracker-ce9ad.appspot.com',
    messagingSenderId: '197624689167'
  }
};
