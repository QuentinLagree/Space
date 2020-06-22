let flash = function (request, response, next) {

	if (request.session.flash) {
		response.locals.flash = request.session.flash
		request.session.flash = undefined
	}

	request.flash = function (type, content, field) {
		if (request.session.flash === undefined) { request.session.flash = {} }
		if (field !== undefined) { request.session.flash["field"] = field }
		request.session.flash[type] = content
		console.log(request.session.flash)
	}
	next()
}

module.exports = flash