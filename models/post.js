let connection = require("../config/database")
let moment = require("moment")

class Message {
	constructor(post) {
		this.post = post
	}

	get id () {
		return this.post.id
	}

	get author () {
		return this.post.author
	}

	get content () {
		return this.post.content
	}

	get created_at () {
		return this.post.created_at
	}

	static create (author, content, callback) {
		let currentDate = new Date()
		let created_at = currentDate.getDate() + "\/" + (currentDate.getMonth() + 1) + "\/" + currentDate.getFullYear() + " à " + currentDate.getHours() + ":" + currentDate.getMinutes()
		connection.query("INSERT INTO posts SET author = ?, content = ?, created_at = ?", [author, content, created_at], (error, result) => {
			if (error) throw error
			callback(result) 
		})
	}

	static all (callback) {
		connection.query("SELECT * FROM posts", (error, posts) => {
			if (error) throw error
			callback(posts)
		})
	}
}

module.exports = Message