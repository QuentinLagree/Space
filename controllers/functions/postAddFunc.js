let postAdd = (request,response, message) => {
	let Message;

	if (message === '' || message === undefined) {
		request.flash("error", "Ce champs n'est pas saisit")
		response.redirect("/post/new")
	} else {
		Message = require("../../models/post")
		Message.create(request.session.user["user"].name + " " + request.session.user["user"].firstname, message, () => {
			response.redirect("/post/new")
		})
	}
}

module.exports = postAdd