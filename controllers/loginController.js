function login(app) {
	app.route("/")
		.get((request, response) => {
			response.render("account", {manager: "login"})
		})
		.post((request, response) => {
			console.log("POST")
		})
		
		
app.get("/test", (request, response) => {
	response.end("TEST")
})
}


module.exports = login