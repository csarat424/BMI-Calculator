document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');

    calculateButton.addEventListener('click', () => {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height)) {
            resultDiv.textContent = 'Please enter valid weight and height.';
            return;
        }

        const bmi = calculateBMI(weight, height);
        const assessment = getAssessment(bmi);

        resultDiv.textContent = `Your BMI: ${bmi.toFixed(2)} - ${assessment}`;
    });

    function calculateBMI(weight, height) {
        return weight / (height * height);
    }

    function getAssessment(bmi) {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal Weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }
});
