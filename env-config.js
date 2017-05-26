const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'API_URL': prod ? 'http://portfoliowp.x10host.com/wp-json/wp/v2/posts' : 'http://portfoliowp.x10host.com/wp-json/wp/v2/posts'
}