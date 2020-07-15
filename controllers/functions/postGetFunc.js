let postGet = (request,response) => {
	let Message = require("../../models/post")
	Message.all((posts) => {
		let data = {
			manager: "newPost",
			messages: posts
		}
		response.render("post", { data: data })
	})
}
module.exports = postGet