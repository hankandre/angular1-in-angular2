class CategoriesController {
    constructor(CategoriesModel) {
        'ngInject';
        this.categories = CategoriesModel.getCategories()
            .then(result => this.categories = result);
    }
}

export default CategoriesController;
