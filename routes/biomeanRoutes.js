import { addNewCluster , getClusters , getClusterWithID , updateCluster , deleteCluster , showchartClusters } from "../src/controllers/biomeanController.js";
//import mongoose from "mongoose";
//import ClusterSchema  from "../models/biomeanModel";
//import vsCluster from '../server';
import express from "express";

const routes = (app) => {

	app.route("/showchart/:clusterid")
	
	.get((req,res ,err,next) => {
		if (err) {
			res.send(err);
		}
		console.log(`Request type: ${req.method}`);
		console.log (`Request from : ${ req.originalUrl}`);
		console.log("show chart!");
		next();
	},showchartClusters )

	.post((req,res,err,next) =>{
		if(err){
			res.send(err);
		}
		console.log(`Request type: ${req.method}`);
		console.log (`Request from : ${ req.originalUrl}`);
		console.log( "show charts for selected clusterid");
		next();
	}, showchartClusters )

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

};

export default routes;


