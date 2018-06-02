var s= "welcome cic hub";

var arr=[];
arr[0]=s[0].toUpperCase();

for(var i=1; i<s.length;i++){
    arr[i]=s[i];
    if(s[i]==' '){
        arr[i+1]=s[i+1].toUpperCase();
        i++;
    }

}

console.log(arr.join(""));

