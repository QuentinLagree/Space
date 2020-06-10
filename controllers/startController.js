let startup = (app) => {
	let months = require("months")
	app.route("/start")
		.get((request, response) => {
			// if (request.session.connect === true) {
				response.render("account", {manager: "start", months: months.fr, countries: countries["languages"], currentyear: new Date().getFullYear()})
			// } else {
				// response.redirect("/login")
			// }
		})
		.post((request, response) => {
			require("./functions/startFunc")(request, response)
		})
}

module.exports = startup