let data = 0

function write(str) {
    document.getElementsByClassName("lowerText")[0].innerText = str
}



uptext = document.getElementsByClassName('upperText')[0]
ltext = document.getElementsByClassName('lowerText')[0]
c = document.getElementsByTagName("button")

IsDouble = false
IsOpp = true
isProcent = false
k = 1
len = parseFloat(window.getComputedStyle(document.getElementsByClassName("lowerText")[0]).fontSize)

for(var i = 0; i < c.length; i++) {
    c[i].addEventListener('click', function() {
        if((ltext.innerText.length > 0) && (isNaN(parseFloat(ltext.innerText.slice(-1)))) && (ltext.innerText.slice(-1) != '%')){
            IsOpp = true
            console.log("yes")
        }else if((ltext.innerText.length > 0) && ((isNaN(parseFloat(ltext.innerText.slice(-1))) == false) || (ltext.innerText.slice(-1) == '%'))){
            IsOpp = false
        }
        if((ltext.innerText.length > 0) && (ltext.innerText.slice(-1) == '%')){
            isProcent = true
        }else{
            isProcent = false
        }
        let result = ""
        if ((isNaN(parseFloat(this.innerText)) == false) && (isProcent == false) && (document.getElementsByClassName("lowerText")[0].innerText.length < 14)) {
            IsOpp = false;
            if (ltext.innerText == "0") {
                ltext.innerText = ""
            }
            
            ltext.innerText += this.innerText
            let a = ltext.innerText
            result = (a.replace(/÷/g, '/'))
            result = (result.replace(/%/g, '*0.01'))
            result = (result.replace(/×/g, '*'))
            console.log(result)
            data = eval(result)
            

        } else if (this.innerText == "⌫") {
            console.log(ltext.innerText.slice(-1))
            if((ltext.innerText.length > 0) && (ltext.innerText.slice(-1) == ".")){
                IsDouble = false;
            }
            ltext.innerText = ltext.innerText.slice(0, -1);
            let a = ltext.innerText
            if (ltext.innerText.length > 0) {
                console.log(IsDouble, ltext.innerText.slice(0, -1) + "  kk")
                if((isNaN(parseFloat(a.slice(-1))) == false) || (a.slice(-1) == '%')){
                    result = (a.replace(/÷/g, '/'))
                    result = (result.replace(/%/g, '*0.01'))
                    result = (result.replace(/×/g, '*'))
                    console.log(result)
                    data = eval(result)
                    console.log(isNaN(parseFloat((a.slice(-2)))))
                }else{
                    console.log(isNaN(parseFloat((a.slice(-2)))))
                    result = a.slice(0, -1)
                    result = (result.replace(/÷/g, '/'))
                    result = (result.replace(/%/g, '*0.01'))
                    result = (result.replace(/×/g, '*'))
                    result = (result.replace(/∓/g, '(-1)'))
                    console.log(result)
                    data = eval(result)
                }
            } else {
                data = ""
            }
        } else if (this.innerText == "C") {

            ltext.innerText = ""
            uptext.innerText = ""
            data = ""
            IsDouble = false

        } else if ((this.innerText == "×") && (IsOpp == false)) {

            if ((ltext.innerText.slice(-1)) != "×") {
                ltext.innerText += "×"
                IsDouble = false
            }
        

        } else if ((this.innerText == "÷") && (IsOpp == false)) {

            if ((ltext.innerText.slice(-1)) != "÷") {
                ltext.innerText += "÷"
                IsDouble = false
            }
        

        } else if ((this.innerText == "%") && (IsOpp == false)) {

            if ((ltext.innerText.slice(-1)) != "%") {
                ltext.innerText += "%"
                IsDouble = false
                result = (ltext.innerText.replace(/÷/g, '/'))
                result = (result.replace(/%/g, '*0.01'))
                result = (result.replace(/×/g, '*'))
                console.log(result)
                data = eval(result)
            }
        

        } 
        else if ((this.innerText == "+") && (IsOpp == false)) {

            if ((ltext.innerText.slice(-1)) != "+") {
                ltext.innerText += "+"
            }
            IsDouble = false

        } else if ((this.innerText == "-") && (IsOpp == false)) {

            if ((ltext.innerText.slice(-1)) != "-") {
                ltext.innerText += "-"
            }
            IsDouble = false
        } else if ((this.innerText == "=") && (IsOpp == false)) {
            ltext.innerText = uptext.innerText
            data = ""
            if((document.getElementsByClassName("lowerText")[0].innerText.length <= 7)){
                k = 1
            }
            if((document.getElementsByClassName("lowerText")[0].innerText.length > 7) && (document.getElementsByClassName("lowerText")[0].innerText.length < 10)){
                k = 0.8
            }
            if((document.getElementsByClassName("lowerText")[0].innerText.length >= 10)){
                k = 0.5
            }
            document.getElementsByClassName("lowerText")[0].style.fontSize = len * k + "px"
            IsDouble = false;

        } else if (this.innerText == ".") {

            if (((ltext.innerText.slice(-1)) != ".") && (IsDouble == false) && (IsOpp == false)) {

                ltext.innerText += "."
                IsDouble = true;

            }else if(ltext.innerText)
            console.log(ltext.innerText, data)
            if(this.innerText != "."){
                data = eval(ltext.innerText)
            }
        }else if ((this.innerText == "∓")) {
            ltext.innerText += "-1×"

        }
        if(data != ""){
            uptext.innerText = parseFloat(data.toFixed(5)) + ""
        }else{
            uptext.innerText = ""
        }
        console.log(data + " IsOpp " + IsOpp)
        if((document.getElementsByClassName("lowerText")[0].innerText.length <= 7)){
            k = 1
        }
        if((document.getElementsByClassName("lowerText")[0].innerText.length > 7) && (document.getElementsByClassName("lowerText")[0].innerText.length < 10)){
            k = 0.8
        }
        if((document.getElementsByClassName("lowerText")[0].innerText.length >= 10)){
            k = 0.5
        }
        document.getElementsByClassName("lowerText")[0].style.fontSize = len * k + "px"
        console.log(k, document.getElementsByClassName("lowerText")[0].innerText.length, len)

    })
}
