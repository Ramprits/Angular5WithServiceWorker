// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAO1Dxh9hWc_ag6nKOi8OezAc9JCVOM6E4',
    authDomain: 'angular5serviceworker.firebaseapp.com',
    databaseURL: 'https://angular5serviceworker.firebaseio.com',
    projectId: 'angular5serviceworker',
    storageBucket: '',
    messagingSenderId: '866497250219'
  }
};
