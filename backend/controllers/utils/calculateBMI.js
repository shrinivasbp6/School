
const bmiType = [
    {
        status: 'Underweight',
        message: 'You should eat a little bit more'
    },
    {
        status: 'Normal',
        message: 'Keep doing what you are doing'

    },
    {
        status: 'Overweight',
        message: 'You should cut down on your food a little bit'
    },
    {
        status: 'Obese',
        message: 'You should really do something about your appetite ASAP'
    },
]

const calculateBodyMassIndex = (height, weight) => {
    console.log(height, weight)
    const bmi = weight / (height * height);
    console.log(bmi)
    if (bmi < 18.5) return { ...bmiType[0], bmi }
    else if (bmi >= 18.5 && bmi <= 24.9) return { ...bmiType[1], bmi }
    else if (bmi >= 25 && bmi <= 29.9) return { ...bmiType[2], bmi }
    else return { ...bmiType[3], bmi }
}

module.exports = calculateBodyMassIndex
