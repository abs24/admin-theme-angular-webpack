routing.$inject = ['$urlRouterProvider', '$locationProvider','$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider,$stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      template: require('./templates/app.html'),
      controller: 'DashboardController',
      controllerAs: 'DashboardControl'
    })
	.state('home', {
      url: '/',
      template: require('./templates/app.html'),
      controller: 'DashboardController',
      controllerAs: 'DashboardControl'
    })
	.state('settings', {
      url: '/settings',
      template: require('./templates/settings.html'),
      controller: 'SettingsController',
      controllerAs: 'SettingsControl'
    });
  
  
}