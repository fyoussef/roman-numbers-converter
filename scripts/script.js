function convert(){
    const input = Number(document.getElementById("input").value)

    const result = document.getElementById("result")

    result.innerText = handleNumber(input)

    if (input == '') {
        result.innerText = 'Enter a number'
    }

    if (input > 1000){
        alert('Only numbers from 0 to 1000')
    }
}

function handleNumber(input){

    var numbers = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    var roman = ''

    for (let romans in numbers){
        // romans
        // console.log(romans)

        while (input >= numbers[romans]){

            roman += romans;
            input -= numbers[romans];

        }
    }

    return roman

}
// convert()