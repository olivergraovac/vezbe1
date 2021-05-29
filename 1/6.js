//  WINDOW LOCAL AND SESSION STORAGE
//local storage
 function storage(){
    localStorage.setItem('firstname', 'Oliver')
    localStorage.getItem('firstname');
    console.log("First name is: "+ localStorage.getItem("firstname"))

    //primer2
    var firstName=localStorage.getItem("firstname")
    console.log("First name is: "+firstName)
    

    if(firstName !==""){
        console.log("First name: "+ firstName)
    }else if(firstName !==null){
        console.log("local storage is empty");
    }
}
storage ();

//SESION STORAGE
function sessionTask(){
    sessionStorage.setItem('firstname1', 'Oliver')
    sessionStorage.getItem('firstname1');
    //fje removeSessionStorage pozvana ovde
    //removeSessionStorage("firstname1");

    console.log("First1 name is: "+ sessionStorage.getItem("firstname1"))

    //primer2
    var firstName=sessionStorage.getItem("firstname1")
    console.log("First1 name is: "+firstName)
    

    if(firstName !==""){
        console.log("First name: "+ firstName)
    }else if(
