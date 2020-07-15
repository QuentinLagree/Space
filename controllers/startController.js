let startup = (app) => {
	let months = require("months")
	let countries = require("countries-list")
	app.route("/start")
		.get((request, response) => {
			if (request.session.connect === true) {
				if (request.session.starter === null) {
					let data = {
						manager: 'start',
						months: months.fr, 
						countries: countries["languages"], 
						currentyear: new Date().getFullYear(),
						values: request.session.values === undefined ? {} : request.session.values
					}
					response.render("account", {data: data})
				} else {
					response.redirect("/profile/" + request.session.user["user"].uuid)
				}
				
			} else {
				response.redirect("/login")
			}
		})
		.post((request, response) => {
			require("./functions/startFunc")(request, response)
		})

		app.route("/start/face/:uuid")
			.get((request, response) => {
				require("./functions/faceFunc")(request, response)
			})
}

module.exports = startup