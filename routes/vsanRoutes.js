import { addNewCluster , getClusters , getClusterWithID , updateCluster , deleteCluster } from "../src/controllers/vsanController.js";
//import mongoose from "mongoose";
//import ClusterSchema  from "../models/vsanModel";
//import vsCluster from '../server';
import express from "express";

//const Cluster = mongoose.model("Cluster" , ClusterSchema);
//// import methodOverrride from "method-override";
//// const app= express();
//// app.use(methodOverride('_method'));


const routes = (app) => {

	app.route("/layout/:clusterid")
	
		.get((req,res ,err,next) => {
			if (err) {
				res.send(err);
			}
			console.log(`Request type: ${req.method}`);
			console.log (`Request from : ${ req.originalUrl}`);
			console.log("Hello World!");
			//clusterid = :_clusterid
			//const clus1 = await getClusterWithID
		    //res.render("layout",{ clusterout: clus1 ,template: "clusterpage" });
			//console.log("yes, sending cluster data to cluster page");
			//res.redirect("/cluster/:_id");
			//res.render("layout",{ clusterout: cluster ,template: "clusterpage" });
			//res.sendFile(path.join(__dirname ,"./views/layout/clusterpage.ejs"));
			next();
		},getClusterWithID )

		.post((req,res,err,next) =>{
			if(err){
				res.send(err);
			}
			console.log(`Request type: ${req.method}`);
			console.log (`Request from : ${ req.originalUrl}`);
			console.log( "deleting this selected clusterid");
			next();
		}, deleteCluster)

		
	
	app.route("/delete/:clusterid")

		.get((req,res ,err,next) => {
			if (err) {
				res.send(err);
			}
			console.log(`Request type: ${req.method}`);
			console.log (`Request from : ${ req.originalUrl}`);
			console.log("Hello World!");
			//clusterid = :_clusterid
			//const clus1 = await getClusterWithID
		    //res.render("layout",{ clusterout: clus1 ,template: "clusterpage" });
			//console.log("yes, sending cluster data to cluster page");
			//res.redirect("/cluster/:_id");
			//res.render("layout",{ clusterout: cluster ,template: "clusterpage" });
			//res.sendFile(path.join(__dirname ,"./views/layout/clusterpage.ejs"));
			next();
		},deleteCluster );

	app.route("/update/:clusterid")
		.get((req,res,err,next) =>{
			if(err){
				res.send(err);
			}
			console.log(`Request Type: ${req.method}`);
			console.log(`Request from: ${req.originalUrl}`);
			console.log(`Updating this ${req.params.clusterid}`);
			next();
			
		}, updateCluster)

		.post();
	
	// .put((req,res,err,next) =>{
	// 	if(err){
	// 		res.send(err);
	// 	}
	// 	res.redirect("/");
	// 	next();
	// }, updateCluster);
		

	// app.route("/cluster")

	// 	.get((req, res, next) => {
	// 		//middleware : middleware are functions have access to req/res objects; can change,end them or usin "next" call another function

	// 		console.log (`Request from : ${ req.originalUrl}`);
	// 		console.log(`Request type: ${req.method}`);
	// 		next();
	// 	}
	// 		//,getClusters 
	// 		/*(req,res,next) =>{
	//    res.send('GET request successful!')
	// }
	//  */
	// 	);
	app.route("/")
		.get((req,res,next )=>{
			//res.render('layout',{ pageTitle: 'cluster', template: 'index'});
			//res.send(vsCluster)
			console.log (`Request from : ${ req.originalUrl}`);
			console.log(`Request type: ${req.method}`);
			console.log("Get method from / reloaded");
			//console.log(`detail: ${req.body.details}`);
			next();
			//res.render('layout')
		} ,getClusters) 
	//addNewCluster
	// .get((req,res) => {
	//res.render('layout',{ pageTitle: 'Welcome', template: 'home'})
	// } )

		.post(addNewCluster) ;


	// app.route("/layout")
	// 	.delete((req,res,err,next) =>{
	// 		if(err){
	// 			res.send(err);
	// 		}
	// 		console.log(`Request type: ${req.method}`);
	// 		console.log (`Request from : ${ req.originalUrl}`);
	// 		console.log( "deleting this selected clusterid");
	// 		next();
	// 	}, deleteCluster)

	// 	.put((req,res,err,next)=>{
	// 		if(err){
	// 			res.send(err)
	// 		}
	// 		console.log(`Request type: ${req.method}`);
	// 		console.log (`Request from : ${ req.originalUrl}`);
	// 		console.log("updating this clusterid");
	// 		next();
	// 	}, updateCluster);


	// .put((req,res,err,next) =>{
	// 	if(err){
	// 		res.send(err);
	// 	}
	// 	res.redirect("/");
	// 	next();
	// }, updateCluster);

	// app.route("/:clusterid")

	// 	.get((req,res,err,next) =>{
	// 		if(err){
	// 			res.send(err);
	// 		}
	// 		console.log(`Request type: ${req.method}`);
	// 		console.log (`Request from : ${ req.originalUrl}`);
	// 		console.log( "deleting this selected clusterid");
	// 		next();
	// 	}, deleteCluster);
	
	// 	.get((req,res,err,next)=>{
	// 		if(err){
	// 			res.send(err);
	// 		}
	// 		console.log("testing testing");
	// 		//res.render("/layout/index2");
	// 		next();
	// 	} ,updateCluster );

	// .delete((req,res ,next ) => {
	// 	console.log("yes, sending cluster data to cluster page");
        
	// 	next();
	// } ,deleteCluster );
		

	//.delete( deleteCluster1 )
		
	/*(req,res) =>
    res.send('DELETE request successful!')
    */
    

	// .post(addNewCluster
        
	/* (req,res) =>
    res.send('POST request successful!')
    */
	//)
 
	// app.route("/cluster/:_id")

	// 	.get(getClusterWithID)

	//     .put(updateCluster)
        
	//    .delete( deleteCluster1)

        
	//.delete( deleteCluster)
            
	/*(req,res) =>
    res.send('PUT request successful!')
    */

	// app.route("/cluster/:_id")

	// 	.get((req,res ,next ) => {
	//         console.log("yes, sending cluster data to cluster page");
            
	// 		next();
	// 	} , getClusterWithID );


};

export default routes;


