import angular from 'angular';
import '../style/app.css';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import HomeController from './controllers/HomeController.js';
import SidebarController from './controllers/SidebarController.js';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter])
	.config(routing)
	.controller('SidebarController', SidebarController)
	.controller('HomeController', HomeController);
 

export default MODULE_NAME;