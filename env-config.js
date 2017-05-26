const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'API_URL': prod ? 'https://portfoliowp.x10host.com/wp-json/wp/v2/posts' : 'https://portfoliowp.x10host.com/wp-json/wp/v2/posts'
}