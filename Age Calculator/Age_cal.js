const btn=document.getElementById("age_btn");
const input_dob=document.getElementById("age_dob");
const age=document.getElementById("output_age");

btn.addEventListener('click',()=>{
  const dob_value=input_dob.value;
  if( dob_value == "")
  alert("Please enter your Date Of Birth");
  else{
    let current_date=new Date();
    let dob_date= new Date(dob_value)
    var current_age= current_date.getFullYear() - dob_date.getFullYear() - 1 ;
    if( dob_date.getMonth() < current_date.getMonth() || (dob_date.getMonth() == current_date.getMonth() && dob_date.getDate() <= current_date.getDate()))
    current_age += 1;
    age.innerText = "Your age is "+current_age+" years old";
}
})
console.log(age);
console.log(btn);