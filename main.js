let userData = [];

function submitForm() {

	let firstName = document.getElementById("firstName").value;
	let middleName = document.getElementById("middleName").value;
	let lastName = document.getElementById("lastName").value;
	let age = document.getElementById("age").value;

		if(firstName === "" || middleName === "" || lastName === "" || age === "") {
			alert("Please fill out all the details.");
			} else {
			let user = {
				firstName: firstName,
				middleName: middleName,
				lastName: lastName,
				age: age
			};
			userData.push(user);
			displayData();
		}
}

function clearForm() {

	document.getElementById("firstName").value = "";
	document.getElementById("middleName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("age").value = "";
}

function displayData() {

	let table = document.getElementById("userTable");
	let noRecord = document.getElementById("noRecord");

		while (table.rows.length > 1) {
		table.deleteRow(1);
		}

		if (userData.length === 0) {
			table.style.display = "none";
			noRecord.style.display = "block";
			return;
		}

	table.style.display = "table";
	noRecord.style.display = "none";

	for(let i = 0; i < userData.length; i++) {
		let row = table.insertRow();
		let firstNameCell = row.insertCell(0);
		let middleNameCell = row.insertCell(1);
		let lastNameCell = row.insertCell(2);
		let ageCell = row.insertCell(3);
		let actionCell = row.insertCell(4);

		firstNameCell.innerHTML = userData[i].firstName;
		middleNameCell.innerHTML = userData[i].middleName;
		lastNameCell.innerHTML = userData[i].lastName;
		ageCell.innerHTML = userData[i].age;
		actionCell.innerHTML = '<button onclick="editUser(' + i + ')">Edit</button> <button onclick="deleteUser(' + i + ')">Delete</button>';
	}
}

function editUser(index) {

    let user = userData[index];

    document.getElementById("firstName").value = user.firstName;
    document.getElementById("middleName").value = user.middleName;
    document.getElementById("lastName").value = user.lastName;
    document.getElementById("age").value = user.age;

    userData.splice(index, 1);
    
    let submitButton = document.querySelector('#userForm button[type="button"]');
    submitButton.onclick = function() {
        let firstName = document.getElementById("firstName").value;
        let middleName = document.getElementById("middleName").value;
        let lastName = document.getElementById("lastName").value;
        let age = document.getElementById("age").value;

        	if (firstName === "" || middleName === "" || lastName === "" || age === "") {
          	  alert("Please fill out all the details.");
       	 } else {
            	let updatedUser = {
               	 firstName: firstName,
               	 middleName: middleName,
              	  lastName: lastName,
              	  age: age
			  };
            
            userData.splice(index, 0, updatedUser);
            displayData();
            clearForm();
        }
    };
}

function deleteUser(index) {
	userData.splice(index, 1);

	displayData();
}

function clearTable() {
	userData = [];
	displayData();
	console.log
}
