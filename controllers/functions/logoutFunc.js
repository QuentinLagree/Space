let logout = (request, response) => {
	if (request.body.logout === "no") {
		response.redirect("/profile/" + request.session.user["user"].uuid)
	} else {
		request.session.connect = undefined
		request.session.user = undefined
		response.redirect("/")
	}
}

module.exports = logout