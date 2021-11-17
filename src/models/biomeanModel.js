
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
	atrialFibrillation:{
		type: Boolean,
		default: false
	},
	creatinineMicromole: {
		type: Number ,
		//required: true,
		set: setMicromole,
		
    
	},
	created_date:{
		type: Date,
		default:Date.now
	}
});

function setMicromole(creatinine){
	let micromoleval = parseFloat(this.creatinine*88.4);
	console.log(micromoleval);
	return micromoleval;
	 
}


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

