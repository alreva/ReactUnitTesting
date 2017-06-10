class ImagesApi {
    static getImages(categoryId) {
        return fetch(`/api/v1/images/${categoryId}.json`)
            .then(response => response.json())
            .catch(error => error)
    }
}

export default ImagesApi