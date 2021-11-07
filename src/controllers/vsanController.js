import mongoose from "mongoose";
import ClusterSchema  from "../models/vsanModel.js";
//import path from "path";

const Cluster = mongoose.model("Cluster" , ClusterSchema);

export const getClusters = (req,res) =>{
    
	Cluster.find ({}, (err, cluster) => {
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
	//let newCluster = new Cluster(req.body);

	if (req.body.isFavorite){
		req.body.isFavorite =true;
		console.log("14th post getting started");
		let newCluster = new Cluster(req.body);
		//}
		
		newCluster.save((err, cluster) => {
			if (err) {
				res.send(err);
			} 
			//res.json(cluster)
			res.redirect("/");
		});
	} else { 
		req.body.isFavorite = false ;
		console.log("13th post getting started");
		let new2Cluster = new Cluster(req.body); 
		new2Cluster.save((err, cluster) => {
			if (err) {
				res.send(err);
			} 
			//res.json(cluster)
			res.redirect("/");
		});
	}
};

export const getClusterWithID = (req,res) =>{
    
	Cluster.findById( {_id:req.params.clusterid}, (err, cluster) => {
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

	Cluster.findById({ _id: req.params.clusterid } ,(err, Cluster) => {
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
	Cluster.deleteOne( {_id:req.params.clusterid} , (err, cluster) =>{
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
 

