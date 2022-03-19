import mongoose from "mongoose";
import {PatientsSchema , BMPSchema}  from "../models/biomeanModel.js";
//import json2csv from "json2csv";
import fs from "fs";
//import { retrieveEJSON } from "mongodb/lib/core/utils";
//import path from "path";

const Cluster = mongoose.model("Cluster" , PatientsSchema, 'patientDocs');
const BMPCluster = mongoose.model("BMPCluster", BMPSchema ,'BMPDocs');


export const showchartClusters = (req,res) =>{
	BMPCluster.find({_id: req.params.clusterid},(err ,pati)=>{
			if(err){
				res.send(err);
			}
					
			//console.log(pati[0].patientID);
		BMPCluster.find({'patientID': pati[0].patientID},(err , clast) =>{
           	//let csv = json2csv(clast,['_id','documenNumber','testDate','eGfr','glucose','creatinine','creatinineMicromole','created_date','patientID']);
            		
			clast.sort(function(a,b){
				return a.testDate - b.testDate
			})
	
			let data = JSON.stringify(clast, null, 2);
			console.log(data)
			//apparetnly fs module consider project folder as the current . folder 
			fs.writeFile('./public/testfile.json',data,(error)=>{
				try{console.log("Hi naKhoda")}catch(error){return(error)}
			})
            //console.log(clast);
			//console.log(data);
			res.render("showchart.ejs");
            //return;
        		 
		})
	}) 
}

export const downloadDEIdentified = (req , res) =>{

	BMPCluster.find({_id: req.params.clusterid}, (err, saram)=>{
			if(err){
				console.log('error');
				return;
			}
			//console.log(saram);
			BMPCluster.find({'patientID': saram[0].patientID},(err, javab) =>{if(err){
					console.log('error');
					return;
				}
					let datum= JSON.stringify(javab, null,2);
					res.attachment('./public/ddd.json');
					res.setHeader('Content-Disposition','attachment; ./public/ddd.json');
			
					//var w = fs.createWriteStream('./public/ddd.json');
					fs.writeFile('./public/ddd.json', datum,(err)=>{if(err){
							console.log('error while writing a json file');
							return;
						}else{
					//res.attachment('./public/ddd.json');
			    	//var r = fs.createReadStream('./public/ddd.json');
					//res.setHeader('Content-Disposition','attachment; ./public/ddd.json');
					//r.close();
					//res.redirect("/");
						res.download('./public/ddd.json', (err)=>{ if(err){
							console.log('download error')
							}		
						})		
					};
				});
					//console.log(javab);
					//console.log(datum);
					//var w = fs.createWriteStream('./public/ddd.json');
					//var r = fs.createReadStream('./public/ddd.json');		  
					////res.setHeader('Content-Disposition','attachement; ddd.json');
					////res.attachment('./public/ddd.json'); 
					//r.close();
			
			console.log('DeIdentified ran successfully');
			//res.redirect("/");
		})
	})
}


export const getClusters = (req,res) =>{
    
	BMPCluster.find ({patientID: req.params.clusterid}, (err, cluster) => {
		if (err) {
			res.send(err);
		}
		//res.json(cluster);
		//res.render('layout/index')
		res.render("pages",{ clu: cluster, template: "index"});
		//res.redirect('/')
		//res.sendFile(path.join( __dirname , '/../../views/pages/index.ejs'))
	})
};

export const getPatients = (req,res) =>{
    
	Cluster.find ({}, (err, cluster) => {
		if (err) {
			res.send(err);
		}
		//res.json(cluster);
		//res.render('layout/index')
		res.render("layout",{ clu: cluster, template: "pidaf"});
		//res.redirect('/')
		//res.sendFile(path.join( __dirname , '/../../views/pages/index.ejs'))
	})
};

/* global  */

export const addNewCluster = (req,res) =>{

		Cluster.find({'patientName': req.body.patientName },
			function dupName(err, results){
				if (err){
					logger.debug("Error from dupName check");
					console.dir(err);
					res.status(400);
					res.json(err);
					return;
			    }
		    console.log(`${results.length}`)
				if (results.length > 0){
					console.log("Patient name already exists");
					
					const newBMPCluster2 = new BMPCluster(req.body);
					newBMPCluster2.patientID = results[0]._id;
					newBMPCluster2.atrialFibrillation=results[0].atrialFibrillation;
					console.log(results);
					newBMPCluster2.save(
						res.redirect("/")
					);					
					Cluster.findById({_id:results[0]._id },(err,fj)=>{
						if(err){
							res.send(err);
						}
					}						
				    );
					return;
		        } 
			console.log(`${results.length}`)	  	
				if(results.length==0 && req.body.atrialFibrillation != "Abnormal Heart Rhythm") { 
					//req.body.atrialFibrillation = false ;
					console.log("patient without AF post getting started");
					console.log(`result of name returned ${results.length}`)
					console.log(req.body.atrialFibrillation);
					let new2Cluster = new Cluster(req.body);
					let new2BMPCluster = new BMPCluster(req.body);
					new2BMPCluster.patientID = new2Cluster._id ;

						new2Cluster.save((err, cluster) => {
							if (err) {
								res.send(err);
			            	} 
		
		            	});	
						new2BMPCluster.save((err, cluster) => {
							if (err) {
								res.send(err);
							} 
		
			        	res.redirect("/");
		            });
	            }  
				else if (results.length==0 && req.body.atrialFibrillation =="Abnormal Heart Rhythm"){
				        
					console.log("patient with AF post getting started");
					console.log(`result of name returned ${results.length}`)
					console.log(req.body.atrialFibrillation);
					let newBMPCluster = new BMPCluster(req.body);
					let newCluster = new Cluster(req.body);
					 //}
					newBMPCluster.patientID = newCluster._id ;
					
					newCluster.save((err, cluster) => {
						if (err) {
							res.send(err);
							console.log("error from saving patient cluster")
						}   
					});
				
					newBMPCluster.save((err, cluster) => {
						if (err) {
						res.send(err);
						} 
						res.redirect("/");
					}); 
			    }   


            }
		)
	};
		

export const getClusterWithID = (req,res) =>{
    
	BMPCluster.findById( {_id:req.params.clusterid}, (err, cluster) => {
		if (err) {
			res.send(err);
		}
		res.render("delete",{ clu2: cluster, template:"delete"});
	});
};

export const getpatientWithID = (req,res) =>{
    
	BMPCluster.findById( {patientID:req.params.clusterid}, (err, cluster) => {
		if (err) {
			res.send(err);
		}
		res.render("layout",{ clu2: cluster, template:"index"});
	});
};


export const updateCluster = (req,res) => {      
    
	//let updatedCluster = new Cluster( req.body);

	BMPCluster.findById({ _id: req.params.clusterid } ,(err, Cluster) => {
		if (err) {
			res.send(err);
		}
		res.render("pages/update.ejs",{uclu: Cluster, template:"update"});
	}
	);
};

export const confirmDeleteCluster = (req,res) =>{      
    
	BMPCluster.findById( {_id:req.params.clusterid} , (err, cluster) =>{
		if(err){
			res.send(err);
		}
		res.render("pages/delete.ejs",{clu2: cluster, template:"delete"});
	});
};

export const deletingCluster = (req,res) =>{      
    
	BMPCluster.deleteOne( {_id:req.params.clusterid} , (err) =>{
		if(err){
			//res.send(err);
			console.log( req.params.clusterid);
		}
		res.redirect("/");
	});
};
    

