import mongoose from "mongoose";

//const Schema = mongoose.Schema;

const ClusterSchema = new mongoose.Schema ({

	cuName:{
		type: String,
		required: "Enter patient's name"
	},
	numNodes:{
		type: Number,
		required: "Enter number of nodes"
	} ,
	numCapdisks:{
		type: Number,
		required: "Enter number of capacity disks"
	} ,
	numDiskgroups:{
		type:Number,
		required: "Enter number of disk groups"
	} ,
	ssdSize:{
		type: Number,
		min: 500,
		max:62000,
		required: "Enter capacity disk size between 500-62000 GB"
	} ,
	FTM: {
		type: String,
		//items: [(1.00,"PFTT0"),(0.50,"PFTT1"),(0.333,"PFTT2"),(0.25,"PFTT3"),(0.75,"FTM5-PFTT1"),(0.67,"FTM6-PFTT2")],
		//items: [("PFTT-0",1.0),("PFTT-1",0.50),("PFTT-2",0.333),("PFTT-3",0.25),("PFTT-RAID5",0.75),("PFTT-RAID^6",0.67)],
		//items: [(1.00,0.50,0.333,0.25,0.75,0.67),("PFTT0","PFTT1","PFTT2","PFTT3","FTM5-PFTT1","FTM6-PFTT2")],
		//items: (1.00,0.50,0.333,0.25,0.75,0.67),
		//items: [{ val:Number , lab:String}],
		required: "Enter type of FTT"
	},
	FTM2: {
		type: Array,
		set: setFTM2,
		//items: [(1.00,"PFTT0"),(0.50,"PFTT1"),(0.333,"PFTT2"),(0.25,"PFTT3"),(0.75,"FTM5-PFTT1"),(0.67,"FTM6-PFTT2")],
		//items: [("PFTT-0",1.0),("PFTT-1",0.50),("PFTT-2",0.333),("PFTT-3",0.25),("PFTT-RAID5",0.75),("PFTT-RAID^6",0.67)],
		//items: [(1.00,0.50,0.333,0.25,0.75,0.67),("PFTT0","PFTT1","PFTT2","PFTT3","FTM5-PFTT1","FTM6-PFTT2")],
		//items: (1.00,0.50,0.333,0.25,0.75,0.67),
		//items: [{ val:Number , lab:String}],
		required: "2- Enter type of FTT"
	},
	isFavorite:{
		type: Boolean,
		default: false
	},
	rawCap: {
		type: Number ,
		//required: true,
		set: setRawCap,
		//get: getRawCap
		//set: (numNodes,numCapdisks,numDiskgroups,ssdSize) =>{numNodes*numCapdisks*numDiskgroups*ssdSize}
		//$multiply: ["$numNodes","$numCapdisks","$numDiskgroups","$ssdSize"]
    
	},
	spbmCap:{
		type: Number,
		//required:true,
		set: setSpbmCap,
		//get: getSpbmCap
		//set: (numNodes,numCapdisks,numDiskgroups,ssdSize,FTM) =>{numNodes*numCapdisks*numDiskgroups*ssdSize*FTM}
		//default:'1',
		//$multiply: ["$numNodes","$numCapdisks","$numDiskgroups","$ssdSize","$FTM"]
    
	},
	created_date:{
		type: Date,
		default:Date.now
	}
});

function setRawCap(numNodes,numCapdisks,numDiskgroups,ssdSize){
	let rawval = parseFloat(this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize);
	console.log(rawval);
	return rawval;
	//return(parseFloat(this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize)) 
}

function setSpbmCap(numNodes,numCapdisks,numDiskgroups,ssdSize,FTM){
	let spArray= this.FTM.split(",");
	let spVal = spArray[0];
	console.log(spArray);
	console.log(spVal);
	return(parseFloat(this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize*spVal));
}

function setFTM2(){
	//let ftms = "0.5,Hello";
	//console.log(typeof String(this.FTM));
	let ftms= String(this.FTM) ;
	console.log(ftms);
	let ff = ftms.split(",");
	console.log(ff);
	return(ff);
}

export default ClusterSchema;

// function getRawCap(rawCap,numNodes,numCapdisks,numDiskgroups,ssdSize){
//     if(!this.rawCap){
//         return(this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize) 
//     } else {
//         return(this.rawCap)
//     }
// }
// function getSpbmCap(spbmCap,numNodes,numCapdisks,numDiskgroups,ssdSize,FTM){
//     if(isNaN(this.spbmCap)){
//         return(parseFloat(this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize*this.FTM) ) 
//     } else {
//         return(this.spbmCap)
//     }
// }



// ClusterSchema.methods.set= function(numNodes,numCapdisks,numDiskgroups,ssdSize){
//     return(this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize)
//     console.log(ClusterSchema.paths.rawcap)} 
// const cluster = mongoose.model('cluster', ClusterSchema)

// cluster.set(function(numNodes,numCapdisks,numDiskgroups,ssdSize))

// console.log(ClusterSchema.paths.rawcap)


// ClusterSchema.paths.spbmcap.set(function(numNodes,numCapdisks,numDiskgroups,ssdSize,FTM){
//     return(this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize*this.FTM)
//     console.log(ClusterSchema.paths.spbmcap)
// })

//console.log(ClusterSchema.path['rawCap'])

// ClusterSchema.path('rawCap').set(function(value) {

//      let val = this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize
//      //let vali = parseFloat(val)
//      console.log(val)
//      //console.log(vali)
//      return val
//      //return vali   
// })

// ClusterSchema.path('rawCap').get(function(value) {

//     if (isNan(this.rawCap)){
//     let val2 = this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize
//     //let vali = parseFloat(val)
//     console.log(val2)
//     return val2} else {
//          return this.rawCap 
//     }
//     //console.log(vali)
   
//     //return vali
   
// })

// ClusterSchema.path('spbmCap').set(function(value) {

//     let spval =this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize*this.FTM
//     //let spvali = parseFloat(spval)
//     console.log(spval)
//     /////this.spbmCap = parseFloat(spval)
//     //console.log(spvali)
//     return spval
// })
// ClusterSchema.path('spbmCap').get(function(value) {

//     if (isNan(this.spbmCap)){
//     let spval2 = this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize*this.FTM
//     //let vali = parseFloat(val)
//     console.log(spval2)
//     return spval2} else {
//          return this.spbmCap 
//     }
//     //console.log(vali)
   
//     //return vali
//    isNa
// })

//function test() {return (this.numNodes* this.numCapdisks*this.numDiskgroups*this.ssdSize)})
//ClusterSchema.get('spbmCap',(numNodes,numCapdisks,numDiskgroups,ssdSize,FTM)=>(this.numNodes* this.numCapdisks*this.numDiskgroups*this.ssdSize*this.FTM))

//ClusterSchema.path('rawCap').get((numNodes,numCapdisks,numDiskgroups,ssdSize) =>(this.numNodes* this.numCapdisks* this.numDiskgroups* this.ssdSize))

