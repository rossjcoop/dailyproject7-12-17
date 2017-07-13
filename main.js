console.log(customers)
//first name, last name
//email address
//address
//phonenumber
//ssn (hidden)



let basiccustomerinfo = customers.results.map(function(item){

let customerpic = item.picture.large
let customernamef = item.name.first
let customernamel = item.name.last
let customeremail = item.email
let customerstreet = item.location.street
let customercity = item.location.city
let customerstate = item.location.state
let customerzip = item.location.postcode
let customerphonenumber = item.phone
let customerssn = item.id.value




let containerjs = document.getElementById("container")

let customerprofiles = `
	
<div class="profile">
 <img src="${customerpic}"</img>
 <h3><u>${customernamef} ${customernamel}</u></h3>
 <h5><a href="mailto:${customeremail}">${customeremail}</a></h5>
 <p>${customerstreet}</br>${customercity}, ${customerstate} ${customerzip}</p>
 <p>${customerphonenumber}</p>
 <p class="social">${customerssn}</p>
</div>
	

`
containerjs.innerHTML += customerprofiles



})