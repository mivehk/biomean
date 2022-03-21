import { addNewCluster , getClusters ,getPatients, confirmDeleteCluster  , updateCluster , showchartClusters, downloadDEIdentified, deletingCluster } from "../src/controllers/biomeanController.js";
//import mongoose from "mongoose";
//import ClusterSchema  from "../models/biomeanModel";
//import vsCluster from '../server';
import express from "express";

const routes = (app) => {

	app.route("/showchart/:clusterid")
	
		.get((req,res,next) => {
			try{
			console.log(`Request type: ${req.method}`);
			console.log (`Request from : ${ req.originalUrl}`);
			console.log("show chart!");
			next()	
			} catch (error){
				return next(error)
			}
		
		}, showchartClusters  )

		.post((req,res,next) =>{
			if(err){
				res.send(err);
			}
			console.log(`Request type: ${req.method}`);
			console.log (`Request from : ${ req.originalUrl}`);
			console.log( "show charts for selected clusterid");
			next();
		}, showchartClusters )

	app.route("/pages/:clusterid")
	
		.get((req,res ,err,next) => {
			if (err) {
				res.send(err);
			}
			console.log(`Request type: ${req.method}`);
			console.log (`Request from : ${ req.originalUrl}`);
			console.log("Hello BMI World!");
			next();
		}, getClusters )

		.post()		
	
	app.route('/deleted/:clusterid')

	    .get(( req,res,next) => {
			try{
				console.log(`Request type: ${req.method}`);
				console.log (`Request from : ${ req.originalUrl}`);
				console.log("Why World?");
				next()
			}catch (error){
				console.log(error);
			}
		}, deletingCluster )
	
	app.route('/delete/:clusterid')
		
		.get((req,res,next) => {
			/* 	if (err) {
			res.send(err);
			} */
			try{
			console.log(`Request type: ${req.method}`);
			console.log (`Request from : ${ req.originalUrl}`);
			console.log("Hell(o) World!");
			next();
			} catch(error){
				return next(error)
			}
			
		 }, confirmDeleteCluster )
		
		
		

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
	
	app.route("/download/:clusterid")
		.get((req,res,err,next)=>{
			if(err){
				res.send(err);
			}
			console.log(`Request Type: ${req.method}`);
			console.log(`Request from: ${req.originalUrl}`);
			console.log(`Updating this ${req.params.clusterid}`);
			//res.download('./ddd.json');
			//res.setHeader("Content-Disposition","attachement; ./ddd.json");
			next();
		}, downloadDEIdentified);	
	

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
		} ,getPatients) 
	//addNewCluster
	// .get((req,res) => {
	//res.render('layout',{ pageTitle: 'Welcome', template: 'home'})
	// } )

		.post(addNewCluster) ;

};

export default routes;


