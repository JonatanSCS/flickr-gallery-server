require('dotenv').config()
const axios = require('axios');

const apiKey = process.env.FLICKR_KEY

module.exports.getPictures = async (ctx) => {
  let pictureList = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=10&format=json&nojsoncallback=1`)
  pictureList = pictureList.data.photos.photo

  const pictures = await Promise.all(pictureList.map(async p => {
    let photo = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${p.id}&format=json&nojsoncallback=1`)
    return {...photo.data, ...p}
  }))
  ctx.body = pictures
}