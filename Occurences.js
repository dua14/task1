var occurences=0;
function countchar( statement , letter){
         for ( var i=0;i<str.length;i++){
             if(statement[i]==letter){
           occurences++;
             }
         }
         console.log(letter+" occurs "+ occurences+" times in "+statement);
       
}
countchar("Dua Batool", 'o');