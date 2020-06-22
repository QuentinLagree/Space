let findProfile = (request, response) => {
	let User;
	let uuid = request.params.uuid

	if (uuid === "" || uuid === undefined) {
		response.redirect("/logout")
	} else {
		User = require("../../models/User")
		User.findByUuid(uuid, (user) => {
			if (user["user"] === undefined) {
				response.render("errorPages/NotFound", {url: request.url})
			} else {
				request.session.user = user
				let data = {
					user: request.session.user,
					manager: 'profile'
				}
				response.render("account", {data: data})
			}
		})
	}
}

module.exports = findProfile