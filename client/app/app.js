import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import CommonModule from './common/common';

angular.module('app', [
  ComponentsModule.name,
  CommonModule.name
])
  .component('app', appComponent)
;
