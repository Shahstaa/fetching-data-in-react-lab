const BASE_URL = 'https://swapi.dev/api/starships/'

const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data 
    } catch (err) {
        console.log('Error fetching starships:', err)
    }
}


const search = async (spaceshipName) => {
    try {
        const queryString = `?search=${spaceshipName}` 
        const res = await fetch(BASE_URL + queryString)
        const data = await res.json()
        return data 
    } catch (err) {
        console.log('Error searching for starships:', err)
    }
}

export { index, search }


  