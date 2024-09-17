
function tabuada( ){

    for( var x=1; x<=10; x++){  
         
        for( var y=0; y<=10; y++){
            var res = x * y;
            //console.log( x ,"x", y ,"=",res);
            document.write( x ,"x", y ,"=",res,"<br/>");
        }
        //console.log(" ")
        document.write("<br/>");
    }
}
