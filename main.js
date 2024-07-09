const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(
  ".header__content h4, .header__content .section__header",
  {
    ...scrollRevealOption,
    delay: 500,
  }
);

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

// price container
ScrollReveal().reveal(".price__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
});
// bmi calculator codeee ha yeh sara yahan sy
  function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    
    // Convert height from cm to meters
    var heightInMeters = height / 100;
    
    // Calculate BMI
    var bmi = weight / (heightInMeters * heightInMeters);
    
    // Display the result
    var resultElement = document.getElementById('bmiResult');
    resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
  }
  // protien card
  const proteinCards = document.querySelectorAll('.protein__card');

  // Add event listeners to each protein card
  proteinCards.forEach(card => {
    // Add mouseenter event listener
    card.addEventListener('mouseenter', () => {
      card.style.backgroundColor = '#f0f0f0'; // Change background color on hover
    });
  
    // Add mouseleave event listener
    card.addEventListener('mouseleave', () => {
      card.style.backgroundColor = '#f7f7f7'; // Restore original background color
    });
  });
  function contact(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="rgb(20, 251, 20)";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";

}

// submit

function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if(name.value == ""){
        alert("Please Enter Name")
    }else if(number.value == ""){
        alert("Please Enter Number")
    }else{
        alert("Thanks For Join : " + name.value)
    }
}
// calculator coding
function calculatePrice() {
  var plan = document.getElementById('plan').value;
  var features = document.getElementById('features').value;
  
  // Define the prices for each plan and feature
  var planPrices = {
    basic: 50,   // Price for Basic Plan
    weekly: 75,  // Price for Weekly Plan
    monthly: 100 // Price for Monthly Plan
  };

  var featurePrices = {
    'none': 0,
    'personal-trainer': 20, // Price for Personal Trainer feature
    'group-classes': 15     // Price for Group Classes feature
    // Add more feature prices as needed
  };

  // Calculate total price
  var totalPrice = planPrices[plan] + featurePrices[features];
  
  // Display the result
  var resultElement = document.getElementById('priceResult');
  resultElement.innerHTML = 'Total Price: $' + totalPrice.toFixed(2);
}
document.addEventListener("DOMContentLoaded", function() {
  const joinButtons = document.querySelectorAll(".join-now");

  joinButtons.forEach(button => {
    button.addEventListener("click", function() {
      const plan = button.dataset.plan;
      // Display a confirmation dialog before proceeding
      const confirmMessage = `Are you sure you want to buy the ${plan} plan?`;
      if (confirm(confirmMessage)) {
        // If user confirms, perform actions based on the selected plan
        alert(`You've selected the ${plan} plan.`);
        // You can add further actions here, such as redirecting to a checkout page
      }
    });
  });
});

        document.getElementById('registrationForm').addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const city = document.getElementById('city').value;
            const address = document.getElementById('address').value;
            const weight = document.getElementById('weight').value;
            const height = document.getElementById('height').value;
            const trainer = document.getElementById('trainer').value;
            const protein = document.getElementById('protein').value;

            const response = await fetch('http://localhost:5000/api/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, city, address, weight, height, trainer, protein })
            });

            const data = await response.json();
            document.getElementById('registrationResult').innerText = data.message;
        });
        document.getElementById('feedbackForm').addEventListener('submit', async function (event) {
          event.preventDefault();
        
          const feedbackName = document.getElementById('feedbackName').value;
          const feedbackEmail = document.getElementById('feedbackEmail').value;
          const feedbackMessage = document.getElementById('feedbackMessage').value;
        
          const response = await fetch('http://localhost:5000/api/feedback/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: feedbackName,
              email: feedbackEmail,
              message: feedbackMessage
            })
          });
        
          const data = await response.json();
          const feedbackResult = document.getElementById('feedbackResult');
          if (data.success) {
            feedbackResult.innerText = 'Thank you for your feedback!';
            feedbackResult.style.color = 'green';
          } else {
            feedbackResult.innerText = 'An error occurred. Please try again.';
            feedbackResult.style.color = 'red';
          }
        
          // Reset the form fields
          document.getElementById('feedbackForm').reset();
        });
        
        document.addEventListener("DOMContentLoaded", function () {
          const trainerRegistrationForm = document.getElementById("trainerRegistrationForm");
        
          trainerRegistrationForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission
        
            // Fetch form data
            const formData = new FormData(trainerRegistrationForm);
        
            // Convert form data to JSON object
            const trainerData = {};
            formData.forEach(function (value, key) {
              trainerData[key] = value;
            });
        
            // Send trainer data to the backend
            fetch("/api/trainer/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(trainerData),
            })
              .then((response) => response.json())
              .then((data) => {
                // Handle response from the server
                console.log("Trainer registration successful", data);
                // Optionally, you can display a success message to the user or redirect them to another page
              })
              .catch((error) => {
                console.error("Error registering trainer", error);
                // Optionally, you can display an error message to the user
              });
          });
        });
        