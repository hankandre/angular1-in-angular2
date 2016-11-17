class CategoriesModel {
    constructor($q) {
        'ngInject';
        this.$q = $q;
        this.categories = [
            {"id": 0, "name": "Development"},
            {"id": 1, "name": "Design"},
            {"id": 2, "name": "Exercise"},
            {"id": 3, "name": "Humor"}
        ];
    }

    getCategories(){
        return this.$q.when(this.categories);
    }

    setCurrentCategory(category) {
        return this.currentCategory = category;
    }

    getCurrentCategory() {
        console.log('THIS', this);
        return this.currentCategory;
    }
}

export default CategoriesModel;
