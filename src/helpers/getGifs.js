const limit = 10
const apiKey = 'D5ED1sqjbMYL6NX11f0m2NwBNESnbMDZ'

export const getGifs = async (category) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`
        const resp = await fetch(url)
        const { data } = await resp.json()
        return data.map(({ id, title, images }) => ({ id, title, url: images.downsized_medium.url }))
    } catch (error) {
        return error
    }
}
