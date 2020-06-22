let controllers = require("./controllers/listControllers")
require("dotenv").config()
let express = require("express")
let ejs = require("ejs")
let bodyParser = require("body-parser")
let session = require('express-session')
let moment = require("moment");
let months = require("months")
let app = express()

app.set("view engine","ejs");
app.use("/assets", express.static("public"))
app.set('trust proxy', 1)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(require("./middlewares/flash"))

controllers(app)


if (process.env.NODE_ENV === "production") {
	console.log("Le serveur est lancé.")
} else {
	console.log("Le serveur est en développement.")
}


app.listen(8080, () => {
	if (process.env.NODE_ENV !== "production") {
		console.log("Le serveur est lancé sur le port 8080 : http://localhost:8080/")
	}
})