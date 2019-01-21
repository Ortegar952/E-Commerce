function main(){
    $('#myForm').hide();
    $('#log-in').on("click",function(){
    $('#myForm').toggle();
  });
    $('#myForm-up').hide();
    $('#account').on("click",function(){
    $('#myForm-up').toggle();
  });
  

 
      // ============================================
      //       USER'S NAME && PASSWORD VALIDATION
      // ============================================

  // $('#sign-up').on('click',function(){
  //   let userName = $('#username1').val();
  //   let userEmail = $('#user-email1').val();
  //   let userPassword = $('#user-password1').val();
  //   let userPasswordconfirm = $('#user-password-confirm').val();

  //   if(userEmail == '' || userName == '' || userPassword.length == ''){
  //     window.alert('Please Fill In The Fields')
  //   }
  //   if(userPassword !== userPasswordconfirm){
  //       window.alert("Make Sure Password is the Same !")
  //   }
  //   else if(userName !== userEmail){
  //       window.alert("Make Sure userName Matches UserEmail");
  //   }
  //   else{
  //      userName = $('#username1').val();
  //      userEmail = $('#user-email1').val();
  //      userPassword = $('#user-password1').val();
  //      userPasswordconfirm = $('#user-password-confirm').val();
  //   }

      // STILL LEARNING ABOUT LOCAL STORAGE TO SAVE USERNAME & PASSWORD

    // if(localStorage){
    //   localStorage.setItem('username-user', userName);
    //   console.log(localStorage.getItem('username-user'));
    //   console.log("Im alive")
    // } else {
    //   window.alert("Sorry, your browser does not support Web Storage...");
    //   console.log("Not storage")
    // }

    // console.log(userPassword);
    // console.log(userPasswordconfirm);
    // console.log(userEmail);
    // console.log(userName);
  });
}
  $(document).ready(main);//making sure the site is ready before executing any 
                          //Jquery code the (main) callsback the function named main
                          //next keyword selects element right next to each other.
  


  
  
    
  
  
  
  
