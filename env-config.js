const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'API_URL': prod ? 'http://billhefty-portfolio-wp.herokuapp.com/wp-json/wp/v2/posts' : 'http://billhefty-portfolio-wp.herokuapp.com/wp-json/wp/v2/posts'
}