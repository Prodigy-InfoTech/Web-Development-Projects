let inputNumber = document.getElementById("number-show");
let btnstr = document.querySelectorAll("button");
let btnarr = Array.from(btnstr);
let show = "";
let somearrbtn = ["+", "-", "*", "/", "%"];
btnarr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      let same1 = show.indexOf("+");
      let same2 = show.indexOf("-");let same3 = show.indexOf("*");let same4 = show.indexOf("/");
      if (show.indexOf("%") > -1) {
        if (
          (show.indexOf("+") > -1 && show.indexOf("-") > -1) ||
          (show.indexOf("+") > -1 && show.indexOf("*") > -1) ||
          (show.indexOf("+") > -1 && show.indexOf("/") > -1) ||
          (show.indexOf("-") > -1 && show.indexOf("*") > -1) ||
          (show.indexOf("-") > -1 && show.indexOf("/") > -1) ||
          (show.indexOf("/") > -1 && show.indexOf("*") > -1)
        ) {
          show = "undefined";
          inputNumber.value = show;
          show = "";
        } else if (show.indexOf("-") > -1) {
          if(show.indexOf("%")==show.indexOf("-")+1||show.indexOf("-")==show.indexOf("%")+1){
            show="invalid";
            inputNumber.value = show;
            show="";
          }
          else{
            let plus = show.indexOf("-");
            let a = show.substring(0, plus);
            let b = show.substring(plus + 1, show.length - 1);
            let per = "a - (a*b/100)";
            show = eval(per);
            inputNumber.value = show;
          }
        } else if (show.indexOf("+") > -1) {
          if(show.indexOf("%")==show.indexOf("+")+1||show.indexOf("+")==show.indexOf("%")+1){
            show="invalid";
            inputNumber.value = show;
            show="";
          }
           else{
            let plus = show.indexOf("+");
            let a = show.substring(0, plus);
            let b = show.substring(plus + 1, show.length - 1);
            let c = Number(a);
            let percen = "c + (a*b/100)";
            show = eval(percen);
            inputNumber.value = show;
          }
        } else if (show.indexOf("/") > -1) {
          if(show.indexOf("%")==show.indexOf("-")+1||show.indexOf("-")==show.indexOf("%")+1){
            show="invalid";
            inputNumber.value = show;
            show="";
          }
          else{
            let plus = show.indexOf("/");
            let a = show.substring(0, plus);
            let b = show.substring(plus + 1, show.length - 1);
            let per = "(a/b)*100";
            show = eval(per);
            inputNumber.value = show;
          }
        } else if (show.indexOf("*") > -1) {
          if(show.indexOf("%")==show.indexOf("-")+1||show.indexOf("-")==show.indexOf("%")+1){
            show="invalid";
            inputNumber.value = show;
            show="";
          }
          else{
            show = eval(show.replace("%", "/100"));
            inputNumber.value = show;
          }
        }
         else {
          let same = show.indexOf("%");
          if(show.charAt(same+1)=="%"){
            show="invalid";
              inputNumber.value = show;
              show="";
            }
            else{
              let plus = show.indexOf("%");
              let a = show.substring(0, plus);
              let b = show.substring(plus + 1, show.length);
              let c = "a/100";
              let per = eval(c);
              let perto = "per + b";
              show = eval(perto);
              inputNumber.value = show;
            }
        }
      }
      else if(show.indexOf("+")==show.indexOf("-")+1||show.indexOf("+")==show.indexOf("*")+1||show.indexOf("+")==show.indexOf("/")+1||show.indexOf("-")==show.indexOf("+")+1||show.indexOf("-")==show.indexOf("*")+1||show.indexOf("-")==show.indexOf("/")+1||show.indexOf("*")==show.indexOf("+")+1||show.indexOf("*")==show.indexOf("-")+1||show.indexOf("*")==show.indexOf("/")+1||show.indexOf("/")==show.indexOf("+")+1||show.indexOf("/")==show.indexOf("-")+1||show.indexOf("/")==show.indexOf("*")+1||show.charAt(same1+1)=="+"||show.charAt(same2+1)=="-"||show.charAt(same3+1)=="*"||show.charAt(same4+1)=="/"){
        show="invalid";
              inputNumber.value = show;
              show="";
      }
       else {
        show = eval(show);
        inputNumber.value = show;
      }
    } else if (e.target.innerHTML == "AC") {
      show = "";
      inputNumber.value = show;
    } else if (e.target.innerHTML == "DEL") {
      show = show.substring(0, show.length - 1);
      inputNumber.value = show;
    } else {
      show += e.target.innerHTML;
      inputNumber.value = show;
    }
  });
});