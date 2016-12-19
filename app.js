var array = [
{
"Employee":{
	"name": "Karan Prasad",
	"age" : "28",
	"salary" : "10 Lakhs",
	"address" : {
		"city":"New Delhi",
		"state":"Delhi",
		"pincode": "110021"}
		}
},

{
"Employee":{
	"name": "Arjun Prasad",
	"age" : "56",
	"salary" : "20 Lakhs",
	"address" : {
		"city":"Gurgaon",
		"state":"Haryana",
		"pincode": "110002"}
		}
},

{
"Employee":{
	"name": "Krishna Prasad",
	"age" : "86",
	"salary" : "30 Lakhs",
	"address" : {
		"city":"Jamshedpur",
		"state":"Bihar",
		"pincode": "110045"}
		}
},
{
"Employee":{
	"name": "Pandu Prasad",
	"age" : "86",
	"salary" : "30 Lakhs",
	"address" : {
		"city":"Jamshedpur",
		"state":"Bihar",
		"pincode": "110045"}
		}
},
{
"Employee":{
	"name": "Nakul Prasad",
	"age" : "86",
	"salary" : "30 Lakhs",
	"address" : {
		"city":"Jamshedpur",
		"state":"Bihar",
		"pincode": "110045"}
		}
}
];

for(var x in array){
	var a = array[x]
	console.log(a.Employee.name +' '+a.Employee.age +' '+a.Employee.salary +' '+a.Employee.address.city +' '+a.Employee.address.state +' '+ a.Employee.address.pincode)

}


