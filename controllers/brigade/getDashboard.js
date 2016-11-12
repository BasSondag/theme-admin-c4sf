/**
 *  Exports
 */

module.exports = {
  method: 'get',
  endpoint: '/brigade/dashboard',
  authenticated: true,
  roles: ['core', 'superAdmin'],
  scopes: [],
  middleware: [],
  controller: getDashboard
}

/**
 *  Controller
 */
function getDashboard (req, res, next) {
  res.render(res.locals.brigade.theme.slug + '/views/dashboard/index', {
    title: 'Check in',
    view: 'checkin',
    brigade: res.locals.brigade,
    user: res.locals.user
  })
}
