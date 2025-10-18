if(document.body.id === "home"){
	document.getElementById('menu-btn').addEventListener('click',function(){
		let hi = document.getElementById('navbar-1-div2-id').style.height;
		if(hi === "80vh"){
			document.getElementById('navbar-1-div2-id').style.height = "0px";
		}else {
			document.getElementById('navbar-1-div2-id').style.height = "80vh";
		}
	});

	for (let i=1; i <= 6; i++ ){
		document.getElementById(`que${i}`).style.height = "0px";
		document.getElementById(`que${i}`).style.overflow = "hidden";
		document.getElementById(`question-btn${i}`).addEventListener('click',function(){
			let hi = document.getElementById(`que${i}`).style.height;
			if(hi === "20vh"){
				document.getElementById(`que${i}`).style.height = "0px";
			}else {
				document.getElementById(`que${i}`).style.height = "20vh";
			}
		});
	};

} else if(document.body.id === "channel"){

	for (let i=1; i <= 25; i++ ){
		document.getElementById(`dc-${i}`).style.height = "0px";
		document.getElementById(`dc-${i}`).style.overflow = "hidden";
		document.getElementById(`bc-${i}`).addEventListener('click',function(){
			let hi = document.getElementById(`dc-${i}`).style.height;
			if(hi === "auto"){
				document.getElementById(`dc-${i}`).style.height = "0px";
			}else {
				document.getElementById(`dc-${i}`).style.height = "auto";
			}
		});
	}
}else if(document.body.id === "install"){
	for (let i=1; i <= 10; i++ ){
		document.getElementById(`gd${i}`).style.height = "0px";
		document.getElementById(`gd${i}`).style.overflow = "hidden";
		document.getElementById(`gt-${i}`).addEventListener('click',function(){
			let hi = document.getElementById(`gd${i}`).style.height;
			if(hi === "100vh"){
				document.getElementById(`gd${i}`).style.height = "0px";
			}else {
				document.getElementById(`gd${i}`).style.height = "100vh";
			}
		});
	}
}else if(document.body.id === "checkout"){
	
}