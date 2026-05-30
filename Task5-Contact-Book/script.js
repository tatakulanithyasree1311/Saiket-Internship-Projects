displayContacts();

function addContact(){

let name =
document.getElementById("name").value;

let phone =
document.getElementById("phone").value;

let email =
document.getElementById("email").value;

if(name=="" || phone=="" || email==""){
alert("Please fill all fields");
return;
}

let contacts =
JSON.parse(localStorage.getItem("contacts")) || [];

contacts.push({
name,
phone,
email
});

localStorage.setItem(
"contacts",
JSON.stringify(contacts)
);

document.getElementById("name").value="";
document.getElementById("phone").value="";
document.getElementById("email").value="";

displayContacts();
}

function displayContacts(){

let search =
document.getElementById("search").value.toLowerCase();

let contacts =
JSON.parse(localStorage.getItem("contacts")) || [];

let output="";

contacts.forEach((contact,index)=>{

if(contact.name.toLowerCase().includes(search)){

output += `
<div class="contact">

<h3>${contact.name}</h3>

<p>${contact.phone}</p>

<p>${contact.email}</p>

<button onclick="deleteContact(${index})">
Delete
</button>

</div>
`;

}

});

document.getElementById("contacts").innerHTML =
output;
}

function deleteContact(index){

let contacts =
JSON.parse(localStorage.getItem("contacts"));

contacts.splice(index,1);

localStorage.setItem(
"contacts",
JSON.stringify(contacts)
);

displayContacts();
}