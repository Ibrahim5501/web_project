function verify(){
    var question1 = document.getElementsByName("question1")
    if(question1[0].checked == true){
        document.getElementById("question1_correct").style.display = "inline-block"
    } else{
        document.getElementById("question1_incorrect").style.display = "inline-block"
    }
    var question2 = document.getElementsByName("question2")
    if(question2[3].checked == true){
        document.getElementById("question2_correct").style.display = "inline-block"
    } else{
        document.getElementById("question2_incorrect").style.display = "inline-block"
    }
    var question3 = document.getElementsByName("question3")
    if(question3[1].checked == true){
        document.getElementById("question3_correct").style.display = "inline-block"
    } else{
        document.getElementById("question3_incorrect").style.display = "inline-block"
    }
    var question4 = document.getElementsByName("question4")
    if(question4[0].checked == true){
        document.getElementById("question4_correct").style.display = "inline-block"
    } else{
        document.getElementById("question4_incorrect").style.display = "inline-block"
    }
    var question5 = document.getElementsByName("question5")
    if(question5[2].checked == true){
        document.getElementById("question5_correct").style.display = "inline-block"
    } else{
        document.getElementById("question5_incorrect").style.display = "inline-block"
    }
    var question6 = document.getElementsByName("question6")
    if(question6[2].checked == true){
        document.getElementById("question6_correct").style.display = "inline-block"
    } else{
        document.getElementById("question6_incorrect").style.display = "inline-block"
    }
    var question7 = document.getElementsByName("question7")
    if(question7[0].checked == true){
        document.getElementById("question7_correct").style.display = "inline-block"
    } else{
        document.getElementById("question7_incorrect").style.display = "inline-block"
    }
    var question8 = document.getElementsByName("question8")
    if(question8[2].checked == true){
        document.getElementById("question8_correct").style.display = "inline-block"
    } else{
        document.getElementById("question8_incorrect").style.display = "inline-block"
    }
    var question9 = document.getElementsByName("question9")
    if(question9[2].checked == true){
        document.getElementById("question9_correct").style.display = "inline-block"
    } else{
        document.getElementById("question9_incorrect").style.display = "inline-block"
    }
    var question10 = document.getElementsByName("question10")
    if(question10[3].checked == true){
        document.getElementById("question10_correct").style.display = "inline-block"
    } else{
        document.getElementById("question10_incorrect").style.display = "inline-block"
    }
}