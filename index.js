let email_value = $("input[type='email']");
let password_value = $("input[type='password']");
let comfirm_password = $("input[type='comfirm_password']");
let charc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
function key_press(input_field,span_field){
    $(input_field).keypress(function (e) { 
        $(span_field).addClass("d-none")
    });
};
key_press(email_value,"span[type='email']");
key_press(password_value,$("span[type='password']"))
key_press(comfirm_password,$("span[type='comfirm_password']"))
function check_email(e_input){
     let x = e_input.val().toLowerCase()
     let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let condition =  re.test(x);
      if(condition){
        password_value.focus();
        $("span[type='email']").addClass("d-none")
      }else{
        $("span[type='email']").removeClass("d-none")
      }

};
function check_password(password_input){
    for (let i = 0; i < password_input.val().length; i++) {
          let pass_input_charc = password_input.val()[i]
          
          let passCharLen = password_input.val().length;
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
          let condition=  specialChars.test(password_input.val());
          for (let j = 0; j < charc.length; j++) {
            let each_charc = charc[j]
          console.log(pass_input_charc,each_charc)
            if(pass_input_charc == each_charc && condition && passCharLen > 7){
           
            comfirm_password.focus()
            
            $("span[type='password']").addClass("d-none")
           
            j=charc.length +1;
            i=password_input.val().length
          }else{
            $("span[type='password']").removeClass("d-none")
          }
          }
          
    }
        
}
function comfirm_password_func(comfirm_password){
  if(comfirm_password.val() == password_value.val()){
    $("span[type='comfirm_password']").addClass("d-none")
    alert("signing up complete");
  }else{
    console.log(comfirm_password.val())
    $("span[type='comfirm_password']").removeClass("d-none")
  }
}
$(".btn").click(function (e) { 
    e.preventDefault();
    if(email_value.val()==""||password_value.val()==""||comfirm_password.val()==""){
      email_value.focus();
      alert("please fill the input")
    }else{
      check_email(email_value);
      check_password(password_value);
      comfirm_password_func(comfirm_password)
    }
    
});

