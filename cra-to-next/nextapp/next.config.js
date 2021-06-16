module.exports = {
  rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/:path*',
        destination: 'http://localhost:4000/:path*'
      },
      //No caso de a Home não ser no next
      {
        source: '/',
        destination: 'http://localhost:4000/'
      }
    ]
  }
}
