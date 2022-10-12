import checkValueInput from "../checkValueInput/checkValueInput.js";

function validation(element){
	let inputs = element.querySelectorAll('input')
	let check = false;
	for (let index = 0; index < inputs.length; index++) {
		if(checkValueInput(inputs[index].value)){
			inputs[index].style = 'border: 3px solid red';
			check = true;
		}
		else{
			inputs[index].style = 'border: 3px solid black';
		}
	}
	return check;
}

export default validation