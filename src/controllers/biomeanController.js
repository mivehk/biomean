import mongoose from "mongoose";
import {PatientsSchema , BMPSchema}  from "../models/biomeanModel.js";
import json2csv from "json2csv";
import fs from "fs";

//import path from "path";

const Cluster = mongoose.model("Cluster" , PatientsSchema, 'patientDocs');
const BMPCluster = mongoose.model("BMPCluster", BMPSchema ,'BMPDocs');

/* export const showchartClusters = (req,res) =>{
    
	BMPCluster.find ({}, (err, cluster) => {
		if (err) {
			res.send(err);
		}
		res.render("showchart.ejs");
	});
}; */

export const showchartClusters = (req,res) =>{
		BMPCluster.find({_id: req.params.clusterid},(err ,pati)=>{
			if(err){
				res.send(err);
			}
			//apparetnly fs module consider project folder as the current . folder 
			//console.log(pati[0].patientID);
					BMPCluster.find({'patientID': pati[0].patientID},(err , clast) =>{
            		//let csv = json2csv(clast,['_id','documenNumber','testDate','eGfr','glucose','creatinine','creatinineMicromole','created_date','patientID']);
            		let data = JSON.stringify(clast , null, 2);
					fs.writeFile('./public/testfile.json',data,function(err){
						if(err){
							res.send(err);
							console.log('json creation killed pet');
						}}
            		)
            		//console.log(clast);
					//console.log(data);
					res.render("showchart.ejs");
            		//return;
        			} 
	                )
	    } 
    ) 
}



export const getClusters = (req,res) =>{
    
	BMPCluster.find ({}, (err, cluster) => {
		if (err) {
			res.send(err);
		}
		//res.json(cluster);
		//res.render('layout/index')
		res.render("layout",{ clu: cluster, template: "index"});
		//res.redirect('/')
		//res.sendFile(path.join( __dirname , '/../../views/pages/index.ejs'))
	});
};

/* global  */

export const addNewCluster = (req,res) =>{

	//if (req.body.patientName){
		Cluster.find({'patientName': req.body.patientName},
			function dupName(err, results){
				if (err){
					logger.debug("Error from dupName check");
					console.dir(err);
					res.status(400);
					res.json(err);
					return;
			    }
				if (results.length > 0){
					//res.status(400);
					//res.json({error: "Patient name aleady exists."});
					console.log("Patient name already exists");
					
					const newBMPCluster2 = new BMPCluster(req.body);
					newBMPCluster2.patientID = results[0]._id;
					console.log(results);
					newBMPCluster2.save(
						res.redirect("/")
					);					
					Cluster.findById({_id:results[0]._id },(err,fj)=>{
						if(err){
							res.send(err);
						}
						//results[0].BMPinstances.push(newBMPCluster2._id);
						//Cluster.save();
					}						
				    );
					return;
		        }   	
			    else if (req.body.atrialFibrillation =true){
				        
		                console.log("patient with AF post getting started");
						let newBMPCluster = new BMPCluster(req.body);
						let newCluster = new Cluster(req.body);
		                 //}
						newBMPCluster.patientID = newCluster._id ;
						
						newCluster.save((err, cluster) => {
			            	if (err) {
				            	res.send(err);
				                console.log("error from saving patient cluster")
			                }   
								//res.json(cluster)
								//res.redirect("/");
						});
						//newCluster.BMPinstances.push(newBMPCluster._id);
						newBMPCluster.save((err, cluster) => {
							if (err) {
							res.send(err);
							} 
							
								//res.json(cluster)
							res.redirect("/");
						});
	           		 //}	

	        //}
		//)	
            	} 
				else { 
					req.body.atrialFibrillation = false ;
					console.log("patient without AF post getting started");
					let new2Cluster = new Cluster(req.body);
					let new2BMPCluster = new BMPCluster(req.body);
					new2BMPCluster.patientID = new2Cluster._id ;

					new2Cluster.save((err, cluster) => {
						if (err) {
							res.send(err);
			            } 
			//res.json(cluster)
			//res.redirect("/");
		            });
					//new2Cluster.BMPinstances.push(new2BMPCluster._id);
					new2BMPCluster.save((err, cluster) => {
						if (err) {
							res.send(err);
						} 
			//res.json(cluster)
			            res.redirect("/");
		            });
	            }; 
            }
		)
	};
		

export const getClusterWithID = (req,res) =>{
    
	BMPCluster.findById( {_id:req.params.clusterid}, (err, cluster) => {
		if (err) {
			res.send(err);
		}
		//res.redirect("/cluster/:clusterID");
		//res.render("layout",{ clusterout: cluster ,clusterid: req.params.clusterid, template: "index2" });
		//res.send(cluster);
		//res.render("/layout/index2");
		res.render("layout",{ clu2: cluster, template:"delete"});
	});
};

export const updateCluster = (req,res) => {      
    
	//let updatedCluster = new Cluster( req.body);

	BMPCluster.findById({ _id: req.params.clusterid } ,(err, Cluster) => {
		if (err) {
			res.send(err);
		}
		res.render("layout",{ uclu: Cluster, template:"update"});
	}
	);
};



export const deleteCluster = (req,res) =>{      
    
	//let clus = Number( req.params._id);
	//res.redirect("/cluster/:_id");
	//console.log(clusterid);
	console.log( req.params.clusterid);
	BMPCluster.deleteOne( {_id:req.params.clusterid} , (err, cluster) =>{
		if(err){
			res.send(err);
		}
		//res.render("layout",{ clusterout : cluster ,template:"clusterpage" }); 
		//res.send(clus)
		res.redirect("/");
	});
};
    


// Cluster.remove({ _id: req.params._id } ,(err, cluster ) => {
// 	if (err) {
// 		res.send(err);
//     }
       
        
// 	//res.json({message: 'successfully deleted cluster'});
        
//     res.send(clus);
		
// });
 

