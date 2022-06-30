


export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=JYL5ydV40Lv8t59EeEdLynXaeI9wpli3&q=${category}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gits = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }))

    return gits

}