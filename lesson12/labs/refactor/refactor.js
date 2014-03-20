// 1
$("body").append("<img src='Will.jpg' alt='William\'s picture'><p>The instructor for this course is William Neely. William has a degree in Physics from Southwestern College.</p>");

var userImage = "Will.jpg";
var userAlt = "William's picture";

var userDescription = "";
userDescription += "<img src='" + userImage + "'alt='" + userAlt + "'>";
userDescription += "<p>"The instructor for this course is William Neely. William has a degree in Physics from Southwestern College.</p>")";

$("body").append(userDescription);

// 2
var items = ["Milk", "Cookies", "Sugar", "Bananas", "Gatorade"];

items.forEach(function(element,index){
	$("container?ol").prepend("<li>" + element + "</li>");
}

function createli(itemName) {
	$("#container>0l").prepend("<li>" + itemName + "</li>")
}

$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");



// 3
$("#container").css("width","960px");
$("#container").css("background","red");
$("#container").css("color","purple");
$("#main").css("width","960px");
$("#main").css("background","red");
$("#main").css("color","purple");


$("#container, #main").css({
	width: "960px",
	backgrond: "red",
	color: "purple"
})


// 4
$("input").css("width","200px")
$("input").attr("placeholder","My placeholder");
$("input").before("<label>My input</label>");

$("input").css("width", "200px").attr("placeholder", "My placeholder").
before("<label>My input</label>");