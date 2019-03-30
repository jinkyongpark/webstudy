function changeText(){
	var text = document.getElementById("message").value;
	
	var max = 140;
	var len = text.length;
	if(len>=max){
		document.getElementById("characterLeft").innerHTML="다썼지롱";
		document.getElementById("characterLeft").classList.add('disabled');
	}
	else{
		document.getElementById("characterLeft").innerHTML=max-len+"charactersLeft";
		document.getElementById("characterLeft").classList.remove('disabled');
	}
}