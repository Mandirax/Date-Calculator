function DateCalculator(){
    var dates = document.getElementById('dt').value;
    var date2= document.getElementById('dt').value;
    var num = parseInt(document.getElementById('n').value);
   
    
   

    var date = new Date(dates);
    var datess = new Date(date2);
    var datez = new Date(date2);


date.setDate(date.getDate() + num);
console.log(datess.getFullYear());
console.log(datez.getMonth()+1);

    document.getElementById('ans').innerHTML=datez.getMonth()+1 +"/" +date.getUTCDate()+"/"+datess.getFullYear();




}