var addBtn=document.getElementById("addBtn");
var nameInput=document.getElementById("name");
var ageInput=document.getElementById("age");
var salaryInput=document.getElementById("salary");
var mobileInput=document.getElementById("mobile");
var inputs=document.getElementsByClassName("form-control");
var employees;

// var test=JSON.parse(localStorage.getItem("employeesList"))

if(localStorage.getItem("employeesList")==null)  
{
  
  employees=[];
}

else
{
   employees=JSON.parse(localStorage.getItem("employeesList"));
  dispalyData()
}



addBtn.onclick=function()
{
addEmployee();
dispalyData();
resetForm();
}


function addEmployee()
{
    var employee=
    {
    name:nameInput.value,
    age:ageInput.value,
    salary:salaryInput.value,
    mobile:mobileInput.value,
    }
    employees.push(employee)
    localStorage.setItem("employeesList",JSON.stringify(employees))
}

function dispalyData()
{
    var trs="";
    for(var i=0;i<employees.length;i++)
  { 
     trs+=`
    <tr>
    <td>${employees[i].name}</td>
    <td>${employees[i].age}</td>
    <td>${employees[i].salary}</td>
    <td>${employees[i].mobile}</td>
    <td><button onclick='updateEmployee(${i})' class="btn btn-primary">update</button></td>
    <td><button onclick='deleteEmployee(${i})'class="btn btn-danger">delete</button></td>
    </tr>
    `}
    
    document.getElementById("tBody").innerHTML=trs
  
}


function updateEmployee(index)
{
  nameInput.value=employees[index].name
  ageInput.value=employees[index].age
  salaryInput.value=employees[index].salary
  mobileInput.value=employees[index].mobile
  

  addBtn.innerHTML="update employee"
  
  addBtn.onclick=function()
  {
    employees[index].name=nameInput.value
    employees[index].age=ageInput.value
    employees[index].salary=salaryInput.value
    employees[index].mobile=mobileInput.value
    
    localStorage.setItem("employeesList",JSON.stringify(employees))
    dispalyData()
    resetForm()
    addBtn.innerHTML="add Employee";
    addBtn.disabled="true"

  }

}





function deleteEmployee(index)
{  
  employees.splice(index,1)
  dispalyData()
  localStorage.setItem("employeesList",JSON.stringify(employees))
}


function resetForm() {
  //   nameInput.value="";
  //   ageInput.value="";
  //   salaryInput.value="";
  //   mobileInput.value="";
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}


function search(searchtxt)
{
  let trs="";
  for(var i=0;i<employees.length;i++)
{ 
  if(
    employees[i].name.toLowerCase().includes(searchtxt.toLowerCase()) |
    employees[i].age.toLowerCase().includes(searchtxt.toLowerCase()) |
    employees[i].mobile.toLowerCase().includes(searchtxt.toLowerCase()) | 
    employees[i].salary.toLowerCase().includes(searchtxt.toLowerCase())
    )
  {
    trs+=

    `
    <tr>
    <td>${employees[i].name}</td>
    <td>${employees[i].age}</td>
    <td>${employees[i].salary}</td>
    <td>${employees[i].mobile}</td>
    <td><button onclick='updateEmployee(${i})' class="btn btn-primary">update</button></td>
    <td><button onclick='deleteEmployee(${i})'class="btn btn-danger">delete</button></td>
    </tr>  
    `
  }
  
}
  
  document.getElementById("tBody").innerHTML=trs

}


nameInput.onkeyup=function()
{
  var nameregex=/^[A-Za-z][a-z]{2,7}$/;
  if(!nameregex.test(nameInput.value))
  {
     addBtn.disabled="true"
  }
  else
  {
    addBtn.removeAttribute("disabled")
  }
}

ageInput.onkeyup=function()
{
  var ageRegex=/^([2-5][0-9]|60)$/;
  if(!ageRegex.test(ageInput.value))
  {
    addBtn.disabled="true"
  }
  else
  {
    addBtn.removeAttribute("disabled")
  }
}

salaryInput.onkeyup=function()
{
  var salaryRegex=/^(2[0-9]{4}|30000)$/;
  if(!salaryRegex.test(salaryInput.value))
  {
    addBtn.disabled="true"
  }
  else
  {
    addBtn.removeAttribute("disabled")
  }
}

mobileInput.onkeyup=function()
{
  var mobileRegex=/^(010|012|011|015)[0-9]{8}$/;
  if(!mobileRegex.test(mobileInput.value))
  {
    addBtn.disabled="true"
  }
  else
  {
    addBtn.removeAttribute("disabled")
  }
}



function reset()
{
  document.getElementById("reset").addEventListener("click",function(){
    location.reload();
  })
  
  

}
reset();
