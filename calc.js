document.getElementById('bmi-form').addEventListener('submit',function (e) {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    if (!weight || !height) {
      alert('Please enter valid weight and height!');
      return;
    }
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters ** 2);
    const bmiRounded = bmi.toFixed(2);
    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }
    document.getElementById('bmi-output').innerHTML =
      `<h5>Your BMI is: <span class="text-primary">${bmiRounded}</span></h5>
       <p>Category: <span class="text-success">${category}</span></p>`;
  });
  