function calcNumber(calc) {
    calc = splitString(calc)
    res = calc[0]
    cache = []
    console.log(calc)

    let sign = "";
    for (let j = 0; j < calc.length; j++) {
        if (calc[j] == "*" || calc[j] == "/") {
            sign = calc[j]
            continue
        }
    }

    for (let i = 0; i < calc.length; i++) {
        if (calc[i] == "+" || calc[i] == "-") {
            sign = calc[i]
            continue
        }

        if (sign == "+") 
            res += calc[i]

        if (sign == "-") 
            res -= calc[i]
    }

    return res
}

console.log(calcNumber("1 * 2 + 2 * 2"))
//console.log(calcNumber("13 + 5 * 4"))


function splitString(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        let number = "";
        if (!isNaN(str[i])) {
            for (let j = i; j < str.length; j++) {
                if (!isNaN(str[j])) {
                    number += str[j]
                    i = j
                } else
                    break
            }
            result.push(parseFloat(number))
        } else if (str[i] != " ")
            result.push(str[i])
    }
    return result
}

// console.log(splitString("134 + 40 + 49 - 1"))
// console.log(splitString("46 + 40 / 49 - 1"))
// console.log(splitString("777777 - 1"))
// console.log(splitString("777777 - 1 + 3 - 4+3"))

