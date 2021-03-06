/**
 * Created by Shariar Shaikot on 10/3/16.
 */
function config($mdIconProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('blue-grey');

  $urlRouterProvider.otherwise("/");

  $stateProvider.
    state('app', {
      url: '/',
      controller: 'AppLoaderCtrl',
      templateUrl: 'interface/views/loader.html'
    });
}

export default config;
