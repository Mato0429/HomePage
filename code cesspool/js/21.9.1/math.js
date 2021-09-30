window.addEventListener("DOMContentLoaded",e => {

    //input受け取り
    let mainNum = document.querySelector("#int1");
    let inta = document.querySelector("#int2");
    let intb = document.querySelector("#int3");
    const btn = document.querySelector("#calc");
    let result = document.querySelectorAll("#result");

    //変数の宣言
    let max;
    let calcA;
    let calcB;
    let arrA;
    let arrB;

    btn.addEventListener("click",e2 => {
        if(inta.value <= 1 || intb.value <= 1 || inta.value == intb.value){
            result.innerHTML = (`value error`);
        }else{
            //判定
            if(inta.value > intb.value){
                max = Math.floor(mainNum.value / inta.value);
                calcA = inta.value;
                calcB = intb.value;
            }else{
                max = Math.floor(mainNum.value / intb.value);
                calcA = intb.value;
                calcB = inta.value;
            }
            //配列の宣言
            arrA = new Array(max);
            arrB = new Array(max);
            let arrC;
            let arrD;

            //関数の呼び出し
            math(mainNum.value,calcA,calcB);

            //0の要素を除く
            arrC = arrA.filter(x => x > 0);
            arrD = arrB.filter(x => x > 0);

            //log
            console.log(`arrA : ${arrA}`);
            console.log(`arrB : ${arrB}`);
            console.log(`arrC : ${arrC}`);
            console.log(`arrD : ${arrD}`);

            //結果の表示
            result[0].innerHTML = (`result : ${calcA}は${arrC}`);
            result[1].innerHTML = (`result : ${calcB}は${arrD}`);
        }
        function math(A,B,C){
            //演算
            for(let i = 0;i <= max;i++){
                arrA[i] = B * (i + 1);
                arrB[i] = A - arrA[i];
                arrA[i] /= B;
                if(arrB[i] % C == 0){arrB[i] /= C}
                else {
                    arrA[i] = 0;
                    arrB[i] = 0;
                }
            }
            
        }
        
    })
});
