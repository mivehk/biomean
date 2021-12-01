
import mongoose from "mongoose";

//const Schema = mongoose.Schema;

export const PatientsSchema = new mongoose.Schema ({

	patientName:{
		type: String,
		required: "Enter patient's name"
	},
	atrialFibrillation:{
		type: Boolean,
		default: false
	}
	/* ,
	BMPinstances:{
		type: [mongoose.Schema.Types.ObjectId] ,
		default:[]
	} */
},{collection: 'patientDocs'});

PatientsSchema.index({patientName:1 });

export const BMPSchema = new mongoose.Schema ({

	patientID:{
		type: mongoose.Schema.Types.ObjectId
	},
	documenNumber:{
		//To avoid keyword complication i called it documen
		type: Number,
		set: setnumb,
		//update: {$inc: {seq: 1}},
		//required: "Enter patient's number"
	} ,
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
	creatinineMicromole: {
		type: Number ,
		//required: true,
		set: setMicromole,
	},
	created_date:{
		type: Date,
		default:Date.now
	}
},{collection: 'BMPDocs'});

function setMicromole(creatinine){
	let micromoleval = parseFloat(this.creatinine*88.4);
	console.log(micromoleval);
	return micromoleval;
	 
}
function setnumb(){
	let jalad = parseInt(Date.now());
	return jalad;
}

/* 
function setPatientCode(patientName,patientNumber){
	let pcode=this.patientName;
	let pcode2= this.patientNumber;
	
	return Array.from(pcode,pcode2);
} */
