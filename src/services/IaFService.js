export default class IaFService {
    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api'
    }

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received status: ${res.status} `)
            // const catError = await fetch(`https://http.cat/${res.status}`)
            // return await catError
        }

        return await res.json()
    }
    getAllCharacters = () => {
        return this.getResourse('/characters?page=7&pageSize=8')
    }
    getCharacter = (id) => {
        return this.getResourse(`/characters/${id}`)
    }
    getAllBooks = () => {
        return this.getResourse('/books?page=1&pageSize=8')
    }
    getBook = (id) => {
        return this.getResourse(`/books/${id}`)
    }
    getAllHouses = () => {
        return this.getResourse('/houses?page=1&pageSize=8')
    }
    getHouse = (id) => {
        return this.getResourse(`/houses/${id}`)
    }
}