(function(){
	var display= document.getElementById('display');

	var allRooms={
		meeting:{
			id: "Meeting Room: M001",
			status: "available"
		},
		games:{
			id: "Games Room: G001",
			status: "unavailable"
		},
		quiettime:{
			id: "Quiet Time Room: Q001",
			status: "available"
		},
		learning:{
			id: "Learing Room: L001",
			status: "unavailable"
		},
		working:{
			id: "Working Room: W001",
			status: "available"
		}
	};
	function getRoom(input){
		var room= input.replace(/[ ]+/g, "").toLowerCase();
		return allRooms[room];
	}
	function checkRoomAvailability(room){
		if(room.status === "available"){
			return "is available";
		}
		if(room.status === "unavailable"){
			return "is unavailable";
		}
	}
	function displayResult(room, result){
		return room.id+" "+result;
	}

	document.getElementById('check').addEventListener('click', function(){
		var userInput= document.getElementById('options').value;
		var room= getRoom(userInput);
		var result= checkRoomAvailability(room);
		setTimeout(function(){
			display.innerHTML= displayResult(room, result);	
		}, 1000);
	}, false);
	
})();