document.querySelector(".mobile-btn").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

function submitJoinUsForm() {
    const fullname = document.getElementById('join-fullname').value.trim();
    const email = document.getElementById('join-email').value.trim();
    const number = document.getElementById('join-number').value.trim();
    const age = document.getElementById('join-age').value.trim();

    if (!fullname || !email || !number || !age) {
        alert('Please fill all the details.');
        return;
    }

    alert('Thank you for joining us, ' + fullname + '!');

    document.getElementById('join-fullname').value = '';
    document.getElementById('join-email').value = '';
    document.getElementById('join-goal').value = '';
    document.getElementById('join-number').value = '';
    document.getElementById('join-age').value = '';
}

function calculateBMI() {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  if (weight && height) {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let status = '';
    if (bmi < 18.5) status = 'Underweight';
    else if (bmi < 24.9) status = 'Normal weight';
    else if (bmi < 29.9) status = 'Overweight';
    else status = 'Obese';
    document.getElementById('bmi-result').innerText = `Your BMI is ${bmi} (${status})`;
  } else {
    document.getElementById('bmi-result').innerText = 'Please enter valid weight and height';
  }
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
}

function calculateCalories() {
  const weight = parseFloat(document.getElementById('cal-weight').value);
  const height = parseFloat(document.getElementById('cal-height').value);
  const age = parseFloat(document.getElementById('cal-age').value);
  const gender = document.getElementById('cal-gender').value;
  const activity = parseFloat(document.getElementById('cal-activity').value);

  if (!weight || !height || !age) {
    document.getElementById('cal-result').innerText = "Please fill all fields.";
    return;
  }

  let bmr;
  if (gender === "male") bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  else bmr = 10 * weight + 6.25 * height - 5 * age - 161;

  const tdee = Math.round(bmr * activity);
  document.getElementById('cal-result').innerText = `Your Maintenance Calories: ${tdee} kcal/day`;
  document.getElementById('cal-weight').value = '';
  document.getElementById('cal-height').value = '';
  document.getElementById('cal-age').value = '';
  document.getElementById('cal-gender').selectedIndex = 0;
  document.getElementById('cal-activity').selectedIndex = 0;
}

function calculateBodyFat() {
  const gender = document.getElementById('bf-gender').value;
  const height = parseFloat(document.getElementById('bf-height').value);
  const neck = parseFloat(document.getElementById('bf-neck').value);
  const waist = parseFloat(document.getElementById('bf-waist').value);

  if (!height || !neck || !waist || (gender === "female")) {
    document.getElementById('bf-result').innerText = "Please fill all required fields.";
    return;
  }

  let bodyFat;
  if (gender === "male") {
    bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) +
      0.15456 * Math.log10(height)) - 450;
  } else {
    bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist - neck) +
      0.22100 * Math.log10(height)) - 450;
  }
  document.getElementById('bf-result').innerText =
    `Your Body Fat: ${bodyFat.toFixed(2)}%`;

  document.getElementById('bf-gender').selectedIndex = 0;
  document.getElementById('bf-height').value = '';
  document.getElementById('bf-neck').value = '';
  document.getElementById('bf-waist').value = '';
}

function calculateIdealWeight() {
  const gender = document.getElementById('iw-gender').value;
  const height = parseFloat(document.getElementById('iw-height').value);

  if (!height) {
    document.getElementById('iw-result').innerText = "Please enter your height.";
    return;
  }

  const heightInInches = height / 2.54;
  let ideal;
  if (gender === "male") ideal = 50 + 2.3 * (heightInInches - 60);
  else ideal = 45.5 + 2.3 * (heightInInches - 60);

  document.getElementById('iw-result').innerText =
    `Your Ideal Weight: ${ideal.toFixed(1)} kg`;
  document.getElementById('iw-gender').selectedIndex = 0;
  document.getElementById('iw-height').value = '';
}

function calculateBMR() {
  const weight = parseFloat(document.getElementById('bmr-weight').value);
  const height = parseFloat(document.getElementById('bmr-height').value);
  const age = parseFloat(document.getElementById('bmr-age').value);
  const gender = document.getElementById('bmr-gender').value;

  if (!weight || !height || !age) {
    document.getElementById('bmr-result').innerText = "Please fill all fields.";
    return;
  }

  let bmr;
  if (gender === "male") bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  else bmr = 10 * weight + 6.25 * height - 5 * age - 161;

  document.getElementById('bmr-result').innerText =
    `Your BMR: ${bmr.toFixed(0)} kcal/day`;

  document.getElementById('bmr-weight').value = '';
  document.getElementById('bmr-height').value = '';
  document.getElementById('bmr-age').value = '';
  document.getElementById('bmr-gender').selectedIndex = 0;
}