import mongoose from "mongoose";

//const Schema = mongoose.Schema;

const PatientsSchema = new mongoose.Schema ({

	patientName:{
		type: String,
		required: "Enter patient's name"
	},
	documenNumber:{
		type: Number,
		set: setnumb,
		//update: {$inc: {seq: 1}},
		//required: "Enter patient's number"
	} ,
	/* patientCode:{
		type: [],
		set: setPatientCode,
	}, */
	testDate:{
		type: Date,
		required: "Enter test date"
	} ,
	eGfr:{
		type: Number,
		required: "Enter eGFR value"
	} ,
	glucose:{
		type:Number,
		required: "Enter glucose value"
	} ,
	creatinine:{
		type: Number,
		//min: 0.0,
		//max: 100,
		required: "Enter creatinine serum value"
	} ,
	/*FTM: {
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
	},*/
	atrialFibrillation:{
		type: Boolean,
		default: false
	},
	creatinineMicromole: {
		type: Number ,
		//required: true,
		set: setMicromole,
		//get: getRawCap
		//set: (numNodes,numCapdisks,numDiskgroups,ssdSize) =>{numNodes*numCapdisks*numDiskgroups*ssdSize}
		//$multiply: ["$numNodes","$numCapdisks","$numDiskgroups","$ssdSize"]
    
	},
	/*spbmCap:{
		type: Number,
		//required:true,
		set: setSpbmCap,
		//get: getSpbmCap
		//set: (numNodes,numCapdisks,numDiskgroups,ssdSize,FTM) =>{numNodes*numCapdisks*numDiskgroups*ssdSize*FTM}
		//default:'1',
		//$multiply: ["$numNodes","$numCapdisks","$numDiskgroups","$ssdSize","$FTM"]
    
	},*/
	created_date:{
		type: Date,
		default:Date.now
	}
});

function setMicromole(creatinine){
	let micromoleval = parseFloat(this.creatinine*88.4);
	console.log(micromoleval);
	return micromoleval;
	//return(parseFloat(this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize)) 
}

/* function setSpbmCap(numNodes,numCapdisks,numDiskgroups,ssdSize,FTM){
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
} */

function setPatientCode(patientName,patientNumber){
	let pcode=this.patientName;
	let pcode2= this.patientNumber;
	
	return Array.from(pcode,pcode2);
}

function setnumb(){
	let jalad = parseInt(Date.now());
	return jalad;
}


export default PatientsSchema;

