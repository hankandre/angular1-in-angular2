class CategoriesController {
    constructor(CategoriesModel) {
        'ngInject';
        this.CategoriesModel = CategoriesModel
    }

    $onInit() {
        this.CategoriesModel.getCategories()
        .then(result => this.categories = result);
    }

    onCategorySelected(category) {
        console.log('CATEGORY SELECTED!!!', category);
    }
}

export default CategoriesController;
