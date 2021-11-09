//using babel allows latest ES6 syntax instead of old "require" method of adding classes

import express from "express";
import routes from "./routes/biomeanRoutes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";

/* these lines are added to comply with changes
 applied in ES vs CS for old variables such as __dirname to work */

 import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename=fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//import ClusterSchema from "./src/models/vsanModel";
//import { addNewCluster , getClusters , getClusterWithID , updateCluster , deleteCluster} from "./src/controllers/vsanController"
//import fs from 'fs'
////import methodOverride from "method-override";


let teatime = Date.now();
let after = (v) =>{ console.log(`${v} \n Elapsed: ${ Date.now() - teatime}`)};

const app = express();
const PORT = 6969;

////app.use(methodOverride("_method"));


/* global global */
//mongoose connection
//waiting for result when connecting to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/biomeandb",{
	useNewUrlParser: true,
	useUnifiedTopology: true
}
);

//body parser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// app.use(methodOverride(function (req, res) {
// 	if (req.body && typeof req.body === "object" && "_method" in req.body) {
// 		// look in urlencoded POST bodies and delete it
// 		var method = req.body._method;
// 		delete req.body._method;
// 		return method;
// 	}
// }));

routes(app);
/* global __dirname */

app.set("view engine", "ejs");
app.set("views", path.join( __dirname , "/views"));

app.use(express.static(path.join( __dirname , "/public")));


//app.get("/" , (req,res)=>{ res.render("layout");});

//const Cluster = mongoose.model("Cluster" , ClusterSchema);


app.listen(PORT, () =>
	console.log(`Your server is running on port ${PORT}`)
);

after("server.js ran");

