class ImagesApi {
  static getImages (categoryId) {
    return fetch(`/api/v1/images/${categoryId}.json`)
      .then(response => response.json())
      .catch(error => {
        throw error
      })
  }
}

export default ImagesApi
