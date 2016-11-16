import angular from 'angular';
import categoriesComponent from './categories.component';
import CategoryItemsModule from './category-item/category-item';

const CategoriesModule = angular.module('categories', [
    CategoryItemsModule.name
    ])
    .component('categories', categoriesComponent);

export default CategoriesModule;