import angular from 'angular';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import '../style/app.css';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import HomeController from './controllers/HomeController.js';
import SidebarController from './controllers/SidebarController.js';
import DashboardController from './controllers/DashboardController.js';
import SettingsController from './controllers/SettingsController.js';


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter,ngMaterial])
	.config(routing)
	.controller('SidebarController', SidebarController)
	.controller('HomeController', HomeController)
	.controller('DashboardController', DashboardController)
	.controller('SettingsController', SettingsController);
 

export default MODULE_NAME;