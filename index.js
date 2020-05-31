let controllers = require("./controllers/listControllers")

require("dotenv").config()

let express = require("express")
let bodyParser = require("body-parser")
let ejs = require("ejs")
let app = express()

app.set("view engine","ejs");
app.use("/assets", express.static("public"))



if (process.env.NODE_ENV === "production") {
	console.log("Le serveur est lancé !")
} else {
	console.log("Le serveur est en développement !")
}

controllers(app)

app.listen(8080, () => {
	if (process.env.NODE_ENV !== "production") {
		console.log("Le serveur est lancé sur le port 8080 ! : http://localhost:8080/")

	}
})