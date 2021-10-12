name_of_the_Guest_array=[];
function submit(){
var display_Guest_array=[];
for (var j=1; j <=4; j++){
    var name_of_the_Guest=document.getElementById("name_of_the_Guest_"+j.value;
    console.log (name_of_the_Guest);
    name_of_the_Guest_array.push(name_of_the_Guest);

}
console.log(name_of_the_Guest_array);
var length_of_name_of_the_Guests_array=name_of_the_Guest_array.length;
console.log(length_of_name_of_the_Guests_array);
for (var k=0; k<=length_of_name_of_the_Guests_array; k++)
{
display_Guest_array.push("<h4>NAME-"+name_of_the_Guest_array[k]+"</h4>");
console.log (display_Guest_array);
}
console.log (display_Guest_array);
document.getElementById("display_name").innerHTML=display_Guest_array;
var remove_commas=display_Guest_array.join(" ");
console.log (remove_commas);
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    name_of_the_Guest_array.sort();
    console.log (name_of_the_Guest_array);
    var display_Guest_array_sorting=[];
    var length_of_name_of_the_Guest_array=name_of_the_Guest_array.length;
console.log(length_of_name_of_the_Guest_array);
for (var k=0; k<length_of_name_of_the_Guest_array; k++)
}

var GuestName = document.getElementById("name1").value;
name_of_the_Guest.push(GuestName);
document.getElementById("   ").style.display="block";
name_of_the_Guest