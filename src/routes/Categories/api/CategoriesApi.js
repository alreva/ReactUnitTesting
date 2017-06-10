class CategoriesApi {
    static getAllCategories() {
        return fetch('/api/v1/images/all.json')
            .then(response => response.json())
            .catch(error => error)
    }
}

export default CategoriesApi