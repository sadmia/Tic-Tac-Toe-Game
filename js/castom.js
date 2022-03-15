"use strict";

let resetBtn = document.getElementById('resetBtn');
let boxSection = document.querySelectorAll(".box");
let boxDiv = document.querySelector(".boxDiv");

let wirningText = document.getElementById("wirningText");
let winVlu = document.getElementById("winVlu");
let pordaPage = document.querySelector(".pordaPage");


resetBtn.addEventListener("click", function() {
	location.reload(); 
})


let clickCount = 0;

let clickBox0 = 0;
let clickBox1 = 0;
let clickBox2 = 0;
let clickBox3 = 0;
let clickBox4 = 0;
let clickBox5 = 0;
let clickBox6 = 0;
let clickBox7 = 0;
let clickBox8 = 0;


function clickVlu(count) {
	let clickVluInput = count;
	if (clickVluInput > boxSection.length) {
		clickCount = 0;
		matchGame(0)
	}
}


boxSection[0].addEventListener("click", function() {
	clickBox0 = clickBox0 + 1;
	if (clickBox0 == 1) {
		clickVlu(clickCount = clickCount + 1);
		iconSetVlu(clickCount);
	} else {
		clickVlu(clickCount = clickCount);
		iconSetVlu(clickCount);
	}
	function iconSetVlu(vlu) {
		let iconModulus = vlu % 2;
		if (iconModulus == 0) {
			boxSection[0].innerText = "O";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		} else {
			boxSection[0].innerText = "X";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		}
	}
})
boxSection[1].addEventListener("click", function() {
	clickBox1 = clickBox1 + 1;
	if (clickBox1 == 1) {
		clickVlu(clickCount = clickCount + 1);
		iconSetVlu(clickCount);
	} else {
		clickVlu(clickCount = clickCount);
		iconSetVlu(clickCount);
	}
	function iconSetVlu(vlu) {
		let iconModulus = vlu % 2;
		if (iconModulus == 0) {
			boxSection[1].innerText = "O";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);

		} else {
			boxSection[1].innerText = "X";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		}
	}
})
boxSection[2].addEventListener("click", function() {
	clickBox2 = clickBox2 + 1;
	if (clickBox2 == 1) {
		clickVlu(clickCount = clickCount + 1);
		iconSetVlu(clickCount);
	} else {
		clickVlu(clickCount = clickCount);
		iconSetVlu(clickCount);
	}
	function iconSetVlu(vlu) {
		let iconModulus = vlu % 2;
		if (iconModulus == 0) {
			boxSection[2].innerText = "O";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		} else {
			boxSection[2].innerText = "X";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		}
	}
})
boxSection[3].addEventListener("click", function() {
	clickBox3 = clickBox3 + 1;
	if (clickBox3 == 1) {
		clickVlu(clickCount = clickCount + 1);
		iconSetVlu(clickCount);
	} else {
		clickVlu(clickCount = clickCount);
		iconSetVlu(clickCount);
	}
	function iconSetVlu(vlu) {
		let iconModulus = vlu % 2;
		if (iconModulus == 0) {
			boxSection[3].innerText = "O";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		} else {
			boxSection[3].innerText = "X";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		}
	}
})
boxSection[4].addEventListener("click", function() {
	clickBox4 = clickBox4 + 1;
	if (clickBox4 == 1) {
		clickVlu(clickCount = clickCount + 1);
		iconSetVlu(clickCount);
	} else {
		clickVlu(clickCount = clickCount);
		iconSetVlu(clickCount);
	}
	function iconSetVlu(vlu) {
		let iconModulus = vlu % 2;
		if (iconModulus == 0) {
			boxSection[4].innerText = "O";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		} else {
			boxSection[4].innerText = "X";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		}
	}
})
boxSection[5].addEventListener("click", function() {
	clickBox5 = clickBox5 + 1;
	if (clickBox5 == 1) {
		clickVlu(clickCount = clickCount + 1);
		iconSetVlu(clickCount);
	} else {
		clickVlu(clickCount = clickCount);
		iconSetVlu(clickCount);
	}
	function iconSetVlu(vlu) {
		let iconModulus = vlu % 2;
		if (iconModulus == 0) {
			boxSection[5].innerText = "O";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		} else {
			boxSection[5].innerText = "X";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		}
	}
})
boxSection[6].addEventListener("click", function() {
	clickBox6 = clickBox6 + 1;
	if (clickBox6 == 1) {
		clickVlu(clickCount = clickCount + 1);
		iconSetVlu(clickCount);
	} else {
		clickVlu(clickCount = clickCount);
		iconSetVlu(clickCount);
	}
	function iconSetVlu(vlu) {
		let iconModulus = vlu % 2;
		if (iconModulus == 0) {
			boxSection[6].innerText = "O";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		} else {
			boxSection[6].innerText = "X";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		}
	}
})
boxSection[7].addEventListener("click", function() {
	clickBox7 = clickBox7 + 1;
	if (clickBox7 == 1) {
		clickVlu(clickCount = clickCount + 1);
		iconSetVlu(clickCount);
	} else {
		clickVlu(clickCount = clickCount);
		iconSetVlu(clickCount);
	}
	function iconSetVlu(vlu) {
		let iconModulus = vlu % 2;
		if (iconModulus == 0) {
			boxSection[7].innerText = "O";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		} else {
			boxSection[7].innerText = "X";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		}
	}
})
boxSection[8].addEventListener("click", function() {
	clickBox8 = clickBox8 + 1;
	if (clickBox8 == 1) {
		clickVlu(clickCount = clickCount + 1);
		iconSetVlu(clickCount);
	} else {
		clickVlu(clickCount = clickCount);
		iconSetVlu(clickCount);
	}
	function iconSetVlu(vlu) {
		let iconModulus = vlu % 2;
		if (iconModulus == 0) {
			boxSection[8].innerText = "O";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		} else {
			boxSection[8].innerText = "X";
			boxVlu1(boxSection[0].innerText,boxSection[1].innerText,boxSection[2].innerText,boxSection[3].innerText,boxSection[4].innerText,boxSection[5].innerText,boxSection[6].innerText,boxSection[7].innerText,boxSection[8].innerText);
		}
	}
})


resetBtn.addEventListener("click", function() {
	clickVlu(0);
})


function boxVlu1(vlu1,vlu2,vlu3,vlu4,vlu5,vlu6,vlu7,vlu8,vlu9,) {
	if (vlu1 == "X" && vlu2 == "X" && vlu3 == "X") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[0].style.color = "red";
		boxSection[1].style.color = "red";
		boxSection[2].style.color = "red";
		winVlu.innerText = "X";
		pordaPage.style.display = "block";
	}else if (vlu4 == "X" && vlu5 == "X" && vlu6 == "X") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[3].style.color = "red";
		boxSection[4].style.color = "red";
		boxSection[5].style.color = "red";
		winVlu.innerText = "X";
		pordaPage.style.display = "block";
	}else if (vlu7 == "X" && vlu8 == "X" && vlu9 == "X") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[6].style.color = "red";
		boxSection[7].style.color = "red";
		boxSection[8].style.color = "red";
		winVlu.innerText = "X";
		pordaPage.style.display = "block";
	}else if (vlu1 == "X" && vlu4 == "X" && vlu7 == "X") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[0].style.color = "red";
		boxSection[3].style.color = "red";
		boxSection[6].style.color = "red";
		winVlu.innerText = "X";
		pordaPage.style.display = "block";
	}else if (vlu2 == "X" && vlu5 == "X" && vlu8 == "X") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[1].style.color = "red";
		boxSection[4].style.color = "red";
		boxSection[7].style.color = "red";
		winVlu.innerText = "X";
		pordaPage.style.display = "block";
	}else if (vlu3 == "X" && vlu6 == "X" && vlu9 == "X") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[2].style.color = "red";
		boxSection[5].style.color = "red";
		boxSection[8].style.color = "red";
		winVlu.innerText = "X";
		pordaPage.style.display = "block";
	}else if (vlu1 == "X" && vlu5 == "X" && vlu9 == "X") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[0].style.color = "red";
		boxSection[4].style.color = "red";
		boxSection[8].style.color = "red";
		winVlu.innerText = "X";
		pordaPage.style.display = "block";
	}else if (vlu3 == "X" && vlu5 == "X" && vlu7 == "X") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[2].style.color = "red";
		boxSection[4].style.color = "red";
		boxSection[6].style.color = "red";
		winVlu.innerText = "X";
		pordaPage.style.display = "block";
	}else if (vlu1 == "O" && vlu2 == "O" && vlu3 == "O") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[0].style.color = "red";
		boxSection[1].style.color = "red";
		boxSection[2].style.color = "red";
		winVlu.innerText = "O";
		pordaPage.style.display = "block";
	}else if (vlu4 == "O" && vlu5 == "O" && vlu6 == "O") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[3].style.color = "red";
		boxSection[4].style.color = "red";
		boxSection[5].style.color = "red";
		winVlu.innerText = "O";
		pordaPage.style.display = "block";
	}else if (vlu7 == "O" && vlu8 == "O" && vlu9 == "O") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[6].style.color = "red";
		boxSection[7].style.color = "red";
		boxSection[8].style.color = "red";
		winVlu.innerText = "O";
		pordaPage.style.display = "block";
	}else if (vlu1 == "O" && vlu4 == "O" && vlu7 == "O") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[0].style.color = "red";
		boxSection[3].style.color = "red";
		boxSection[6].style.color = "red";
		winVlu.innerText = "O";
		pordaPage.style.display = "block";
	}else if (vlu2 == "O" && vlu5 == "O" && vlu8 == "O") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[1].style.color = "red";
		boxSection[4].style.color = "red";
		boxSection[7].style.color = "red";
		winVlu.innerText = "O";
		pordaPage.style.display = "block";
	}else if (vlu3 == "O" && vlu6 == "O" && vlu9 == "O") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[2].style.color = "red";
		boxSection[5].style.color = "red";
		boxSection[8].style.color = "red";
		winVlu.innerText = "O";
		pordaPage.style.display = "block";
	}else if (vlu1 == "O" && vlu5 == "O" && vlu9 == "O") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[0].style.color = "red";
		boxSection[4].style.color = "red";
		boxSection[8].style.color = "red";
		winVlu.innerText = "O";
		pordaPage.style.display = "block";
	}else if (vlu3 == "O" && vlu5 == "O" && vlu7 == "O") {
		wirningText.style.display = "block";
		resetBtn.style.display = "block";
		boxSection[2].style.color = "red";
		boxSection[4].style.color = "red";
		boxSection[6].style.color = "red";
		winVlu.innerText = "O";
		pordaPage.style.display = "block";
	} 


		if (
				(boxSection[0].innerText !== "") &&
				(boxSection[1].innerText !== "") &&
				(boxSection[2].innerText !== "") &&
				(boxSection[3].innerText !== "") &&
				(boxSection[4].innerText !== "") &&
				(boxSection[5].innerText !== "") &&
				(boxSection[6].innerText !== "") &&
				(boxSection[7].innerText !== "") &&
				(boxSection[8].innerText !== "")
			) {
				pordaPage.style.display = "block";
				resetBtn.style.display = "block";
			}
}