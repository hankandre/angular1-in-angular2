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
        this.CategoriesModel.setCurrentCategory(category)
    }

    isCurrentCategory(category) {
        return this.CategoriesModel.getCurrentCategory() &&
            this.CategoriesModel.getCurrentCategory().id === category;
    }
}

export default CategoriesController;
