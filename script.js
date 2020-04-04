// Array of objects with keys Principal and Time
const data = [
    {
        "Principal": 2500, 
        "time": 1.8
    },
    {
        "Principal": 1000,
        "time": 5
    },
    {
        "Principal": 3000,
        "time": 1
    },
    {
        "Principal": 2000, 
        "time": 3
    }
]

// Function interestCalulator takes in an array of objects and calculates
// the interest and rate. It logs to the console an array of objects with
// keys Principal, Rate, time and interest and values
const interestCalculator = function(array){
    const interestData = []
    array.forEach(element => {
        if(element["Principal"] >= 2500  &&  (element["time"] > 1 && element["time"] < 3)){
            let rate = 3
            let interest = (element["Principal"] * rate * element["time"])/100
            let object = {
                "Principal": `${element["Principal"]}`, 
                "Rate": `${rate}`, 
                "Time": `${element["time"]}`, 
                "Interest": `${interest}`
            }
            interestData.push(object)
        }else if(element["Principal"] >= 2500 && element["time"] >= 3){
            let rate = 4
            let interest = (element["Principal"] * rate * element["time"])/100
            let object = {
                "Principal": `${element["Principal"]}`, 
                "Rate": `${rate}`, 
                "Time": `${element["time"]}`, 
                "Interest": `${interest}`
            }
            interestData.push(object)
        }else if (element["Principal"] < 2500  ||  element["time"] <= 1) {
            let rate = 2
            let interest = (element["Principal"] * rate * element["time"])/100
            let object = {
                "Principal": `${element["Principal"]}`, 
                "Rate": `${rate}`, 
                "Time": `${element["time"]}`, 
                "Interest": `${interest}`
            }
            interestData.push(object)
        } else {
            let rate = 1
            let interest = (element["Principal"] * rate * element["time"])/100
            let object = {
                "Principal": `${element["Principal"]}`, 
                "Rate": `${rate}`, 
                "Time": `${element["time"]}`, 
                "Interest": `${interest}`
            }
            interestData.push(object)
        }
    });
    console.log(interestData)
    return interestData
}

// calling function interestCalculator and passing an argument data(the array of objects)
interestCalculator(data)