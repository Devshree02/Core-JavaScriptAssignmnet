// var count = 0;

// function resetForm() {
//   var new_stu = document.getElementsByClassName("new_student");
//   var reset_input = document.getElementById("name").value = "";
//   while (new_stu.length > 0) {
//     new_stu[0].parentNode.removeChild(new_stu[0]);
//   }

// }
// document.getElementById("addNewButton").addEventListener("click", function() {
//   var inpt= document.getElementById("name");
//   var cln= inpt.cloneNode(true);
//   cln.classList.add("new_student"); 
//   document.getElementById("mainId").appendChild(cln);

// });
// document.getElementById("submitButton").addEventListener("click", function() {
//   var table = document.getElementById("tab");
//   var inptmain= document.getElementsByClassName("nameClass");
//   var len=inptmain.length;
//   for (var i = 0 ; i < len ; i++)
//   {
//     var val = inptmain[i].value;
//     if (val){

//       count++;
//       var row = table.insertRow(table.rows.length);
//       var cell1 = row.insertCell(0);
//       var cell2 = row.insertCell(1);
      
//       cell1.innerHTML = count;
//       cell2.innerHTML = val;
//     }
//   }
//   resetForm();
  
// });

$(document).ready(function(){

  $("#addNewButton").click(function(){
    $("<input>").attr({
      placeholder : "Enter your name",
      class : "nameClass" 
    }).appendTo("#mainId");

  }); 

  function resetForm() {


    $(".nameClass").each(function() {
      $(this).remove();
    })
    $("#name").val("");
  }

  $("#submitButton").click(function(){

     // window.alert("submitButton");
     $(".mainClass input").each(function(index) {
      value = $(this).val();
      markup = "<tr><td>"+index+1+"</td><td>"+value+"</td></tr>";
      tableBody = $("table");
      tableBody.append(markup);
    });
     resetForm();

   }); 

}); 