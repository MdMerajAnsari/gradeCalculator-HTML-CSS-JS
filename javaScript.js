function calcu(){
    var eng=document.getElementById("eng").value;
    var hindi=document.getElementById("hindi").value;
    var maths=document.getElementById("maths").value;
    var phy=document.getElementById("phy").value;
    var che=document.getElementById("che").value;
    var grade="";

    var total=parseFloat(eng)+parseFloat(hindi)+parseFloat(maths)+parseFloat(phy)+parseFloat(che);
    var perc=(total/500)*100;
    if(perc>=80 &&perc<=100){
        grade='A';
    }
    else if(perc>=60 && perc<=79){
        grade='B';
    }
    else if(perc>=40 && perc<=59){
        grade='C';
    }
    else{
        grade='D';
    }
    if(perc>=40){
    document.getElementById("showData").innerHTML=`Your total marks is ${total} and Percentage is ${perc}%. Your Grade is ${grade}<br>Congatulation! You Are Promoted`;
    }
    else{
        document.getElementById("showData").innerHTML=`Your total marks is ${total} and Percentage is ${perc}%. Your Grade is ${grade}<br>Sorry  You are Fail !`;
    }

}