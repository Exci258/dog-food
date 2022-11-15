class Api {
    constructor(t) {
        this.path = 'https://api.react-learning.ru';
        this.token = t;
    }
    getProducts() {
        return fetch(`${this.path}/products`, {
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        });
    }
}

export default Api;
