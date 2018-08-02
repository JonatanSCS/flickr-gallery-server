require('dotenv').config()
const axios = require('axios');

const apiKey = process.env.FLICKR_KEY

module.exports.getPictures = async (ctx) => {

  //  Recursively fetch to avoid flickr server errors
  let response;
  const recursiveGet = async () => {
    let pictureList = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=30&format=json&nojsoncallback=1`)
    response = pictureList.data.photos.photo
    if (!response) recursiveGet()
  }
  await recursiveGet()


  const pictureList = response

  const pictures = await Promise.all(pictureList.map(async p => {
    const photo = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${p.id}&format=json&nojsoncallback=1`)
    const ownerInfo = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.profile.getProfile&api_key=${apiKey}&user_id=${p.owner}&format=json&nojsoncallback=1`)

    return {
      ...photo.data,
      ownerInfo: ownerInfo.data,
      ...p}
  }))
  ctx.body = pictures
}