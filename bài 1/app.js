const a = document.querySelector("#start");
const b = document.querySelector("#end");
const button = document.querySelector("#submit");
// let soNguyenTo = true;
// console.log(a.value);
// console.log(b.value);

button.addEventListener("click", ()=>{

    if (a.value == "" | b.value == ""){
        alert("Hay nhap input!");
    }
    
    
    else if (a.value != "" && b.value != ""){
        
        for (let i = a.value; i<+b.value+1; i++){  
            let soNguyenTo = true;
            let j = 2;
            while (j<i){
                if (i%j==0){
                    
                    soNguyenTo = false;
                }
                j++;
            
            }
            if (soNguyenTo==true){
                if (i!=1){ //vi 1 khong phai la so nguyen to
                    const div = document.createElement("div");
                    div.innerHTML = `${i}`;
                    document.querySelector("body").appendChild(div);
                    }
                
            }
    
        }
    }
})
