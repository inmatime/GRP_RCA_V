(function(){
	var display= document.getElementById('display');

	var allRooms={
		meeting:{
			id: "M001",
			status: "available"
		},
		games:{
			id: "G001",
			status: "unavailable"
		},
		quiettime:{
			id: "Q001",
			status: "available"
		},
		learning:{
			id: "L001",
			status: "unavailable"
		},
		working:{
			id: "W001",
			status: "available"
		}
	};
	function getRoom(input){
		var room= input.replace(/[ ]+/g, "").toLowerCase();
		return allRooms[room];
	}
	function checkRoomAvailability(room){
		if(room.status === "available"){
			return "Room is available";
		}
		if(room.status === "unavailable"){
			return "Room is unavailable";
		}
	}

	document.getElementById('check').addEventListener('click', function(){
		var userInput= document.getElementById('options').value;
		var room= getRoom(userInput);
		var result= checkRoomAvailability(room);
		display.innerHTML= result;
		
	}, false);
	
})();