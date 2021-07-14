if ( "serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration =>{
       console.log("SW Registred");
       console.log(registration);
 }).catch(error => {
     console.log("SW Regstration failed");
       console.log(error);
   })
}