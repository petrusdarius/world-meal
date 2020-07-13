class DataSource extends HTMLElement {
    static searchMeal(keyword) {
        return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=68b7dd93258149d1bc09d74d123680a1&includeNutrition=true&cuisine=${keyword}`)
        .then(response => {
            return response.json()
        })

        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.result)
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
}

export default DataSource;