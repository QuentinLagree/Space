let logout = (request, response) => {
	if (request.body.logout === "no") {
		response.redirect("/profile")
	} else {
		request.session.connect = false
		request.session.user = undefined
		response.redirect("/")
	}
}

module.exports = logout