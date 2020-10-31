// Final Project
// web115 -1101
// Sandhya Joshi
// April 7, 2019
// projectJS.js
/// Step 3 : In your HTML document named finalProject, write the Javascript code (after the opening BODY tag) that will link to your external JavaScript document named projectJS.js so that your name, course and section number appear in the finalProject.htm web document.

 
   var myh1 = document.createElement("h1");
    var h1text = document.createTextNode("Sandhya Joshi");
    myh1.appendChild(h1text);
    document.body.appendChild(myh1);
   

    var myh2 =  document.createElement("h2");
    var h2text = document.createTextNode("WEB 115 section 1101");
    myh2.appendChild(h2text);
    document.body.appendChild(myh2);
   


    myh1.style.color="red";
    myh1.style.fontFamily= "Tahoma";
    myh1.style.justifyContent = "center";

    myh2.style.color="red";
    myh2.style.fontFamily= "Garmond";
    myh2.style.font= "italic";
    myh2.style.justifyContent = "center";
  
  
   function createResume(){

         var name = document.getElementById("fullName").value;
         var address = document.getElementById("address").value;
         var phone = document.getElementById("phoneNumber").value;
         var email =  document.getElementById("emailAddress").value;
            
         var persInfo = document.getElementById("myTextArea1").value;
         var carInfo = document.getElementById("myTextArea2").value;
         var eduInfo =  document.getElementById("myTextArea3").value;
         var edate1  = document.getElementById("eDate1").value;
         var exdate2 = document.getElementById("exDate1").value;
         var edate3  = document.getElementById("eDate2").value;
         var exdate4 = document.getElementById("exDate2").value;
         var edate5  = document.getElementById("eDate3").value;
         var exdate6 = document.getElementById("exDate3").value;
         var edate7  = document.getElementById("eDate4").value;
         var exdate8 = document.getElementById("exDate4").value;

         var exper1 = document.getElementById("myTextArea4").value;
         var exper2 = document.getElementById("myTextArea5").value;
         var  exper3 = document.getElementById("myTextArea6").value;
         var  exper4 = document.getElementById("myTextArea7").value;
         var  busRef = document.getElementById("myTextArea8").value;
       
      displayOutput = ('<html style="background-color:#E8EAB9;font-family:monospace;"><title>Resume</title><body style="width:80%; margin: 50px auto;"> <p>'+name+'</p> <p>'+email+'</p> <p>'+address+' / '+phone+'</p> <hr> <div style="width:100% margin: 25px 0px;"> <div style="width:35%;clear:both; float:left; padding-bottom: 10px;">CAREER OBJECTIVES</div> <div style="width:60% ;padding-bottom:10px; float:right;padding-bottom:10px;">'+carInfo+'</div> </div> <br> <div style="width:100% margin: 25px 0px;"> <div style="width:35%; float:left;padding-bottom:10px;">PERSONAL DATA</div> <div style="width:60%; float:right;padding-bottom:10px;">'+persInfo+'</div> </div> <br>  <div style="width:100% margin: 25px 0px;"> <div style="width:35%; float:left;">EDUCATIONAL BACKGROUND</div> <div style="width:60%; float:right;padding-bottom:10px;">'+eduInfo+'</div> </div> <br> <div style="clear:both; width:35%; float: left;">PRIOR EMPLOYMENT EXPERIENCE</div> <div style="width:100%; clear:both; margin: 25px 0px; "> <div style="width:35%; float:left;padding-bottom:10px;">'+edate1 +' To '+exdate2+'</div> <div style="width:60%; float:right; padding-bottom:10px;">'+exper1+'</div> </div> <br> <div style="width:100%; margin: 25px 0px;clear:both;"> <div style="width:35%; float:left;padding-bottom:10px ">'+ edate3 + " To " + exdate4+'</div> <div style="width:60%; float:right;padding-bottom:10px;">'+exper2+'</div> </div> <br> <div style="width:100%; margin: 25px 0px;"> <div style="width:35%; float:left;padding-bottom:10px ">'+edate5 +" To " + exdate6 +'</div> <div style="width:60%; float:right;padding-bottom:10px;">'+exper3+'</div> </div> <br> <div style="width:100%; margin: 25px 0px"> <div style="width:35%; float:left;padding-bottom:10px; ">'+edate7 + " To "+ exdate8 +'</div> <div style="width:60%; float:right;padding-bottom:10px;">'+exper4+'</div> </div> <br> <div style="width:100%; margin: 25px 0px">  <div style="width:35%; float:left; padding-bottom:10px;">CHARACTER REFERENCES</div> <div style="width:60%; float:right; padding-bottom:10px;"> Upon Request</div> </div> <br> <div style="width:35%; float:left;padding-bottom:10px;">BUSINESS REFERENCES</div> <div style="width:60%; float:right;padding-bottom:10px; ">'+ busRef +'</div></div></body></html>');
       
       outputWindow = window.open('about:blank','myPop','width=800,height=800,left=200,top=200');
       outputWindow.document.write(displayOutput)
       //alert("HERE!");
   }

    
       

         function validateEmail(){
           var email = document.getElementById("emailAddress").value;
        
         var emailExp = /^(([^<>()\[\]\\.,;:@"\x00-\x20\x7F]|\\.)+|("""([^\x0A\x0D"\\]|\\\\)+"""))@(([a-z]|#\d+?)([a-z0-9-]|#\d+?)*([a-z0-9]|#\d+?)\.)+([a-z]{2,4})$/i;
           // if  !(emailExp.test(email)){
             //   alert("Invalid Email Address");
             //   document.getElementById("resumeCreate").disabled = true;
             //   email.focus();
           // }
            
           // else{
            //    document.getElementById("resumeCreate").disabled = false;
               
           // }
             var empty =/^(\w+\S+)$/;
             ///&& (!email.match(empty)))
       
             if ( email.match(emailExp)) {
                document.getElementById("create").disabled = false;
                //return true;
                 }
             else
             {
                  alert("Invalid email address");
                  document.getElementById("create").disabled = true;
                }

       }
            
           
       function myFunction() {
           return confirm("This will clear the form, Do you wish to continue?")
           // document.getElementById("form1").reset();
        } 