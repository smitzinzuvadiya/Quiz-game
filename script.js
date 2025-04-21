let currentIndex = 0;
function loadpage(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            document.getElementById("clear").innerHTML = "";
            loadquestions();
        })
        .catch(error => {
            console.error("Error loading page:", error);
            document.getElementById("content").innerHTML = "<p>Failed to load content.</p>";
        });
    
}

const quizData = [
    {
      question: "What is the speed limit for cars in cities in India?",
      options: ["30 km/h", "50 km/h", "60 km/h", "80 km/h"],
      answer: 1
    },
    {
      question: "What is the legal age to apply for a driving license in India?",
      options: ["16 years", "18 years", "21 years", "25 years"],
      answer: 1
    },
    {
      question: "When should you use your vehicle’s horn?",
      options: ["To alert pedestrians", "To alert other drivers in an emergency", "To signal a turn", "All of the above"],
      answer: 3
    },
    {
      question: "What is the meaning of a yellow traffic light?",
      options: ["Go faster", "Prepare to stop", "Stop immediately", "Turn right"],
      answer: 1
    },
    {
      question: "What should you do when you see a red signal?",
      options: ["Stop and wait for the signal to turn green", "Move slowly through the signal", "Honk and move forward", "Continue driving"],
      answer: 0
    },
    {
      question: "How far should you park from a pedestrian crossing?",
      options: ["3 meters", "5 meters", "10 meters", "15 meters"],
      answer: 1
    },
    {
      question: "Which of the following is a valid reason to use high beam headlights?",
      options: ["In foggy conditions", "On highways at night", "When following another vehicle", "All of the above"],
      answer: 1
    },
    {
      question: "What should you do if you are involved in a minor accident?",
      options: ["Leave the scene immediately", "Call the police and exchange details with the other driver", "Argue with the other driver", "Continue driving"],
      answer: 1
    },
    {
      question: "What does a solid white line on the road indicate?",
      options: ["You can overtake", "Lane marking, do not cross", "Pedestrian lane", "Stop here"],
      answer: 1
    },
    {
      question: "What is the minimum distance you should keep between your vehicle and the vehicle in front?",
      options: ["1 meter", "2 meters", "3 meters", "4 meters"],
      answer: 2
    },
    {
      question: "What is the proper hand signal for a left turn?",
      options: ["Left arm stretched out horizontally", "Left arm bent upward", "Right arm stretched out horizontally", "Right arm bent upward"],
      answer: 0
    },
    {
      question: "What should you do when driving in heavy rain?",
      options: ["Turn on the headlights and slow down", "Keep driving at normal speed", "Turn off the wipers", "Drive without headlights"],
      answer: 0
    },
    {
      question: "What is the purpose of seatbelts in a vehicle?",
      options: ["To protect you in case of sudden stops or crashes", "To improve the comfort of the driver", "To make driving more enjoyable", "None of the above"],
      answer: 0
    },
    {
      question: "What is the main rule when driving in fog?",
      options: ["Use high beam headlights", "Drive with low beam headlights and slow down", "Drive at the maximum speed", "Turn on hazard lights"],
      answer: 1
    },
    {
      question: "Which of the following is required to drive in India?",
      options: ["A valid driving license", "A valid vehicle registration", "A valid insurance", "All of the above"],
      answer: 3
    },
    {
      question: "When should you use indicators while driving?",
      options: ["When turning left or right", "Before overtaking", "When changing lanes", "All of the above"],
      answer: 3
    },
    {
      question: "What does a roundabout sign mean?",
      options: ["Yield to traffic in the roundabout", "Stop completely before entering", "Exit right immediately", "All of the above"],
      answer: 0
    },
    {
      question: "What should you do if your brakes fail while driving?",
      options: ["Press the accelerator harder", "Pump the brake pedal and shift to a lower gear", "Turn off the engine", "Keep driving"],
      answer: 1
    },
    {
      question: "What is the purpose of a vehicle's rearview mirror?",
      options: ["To adjust seat position", "To see the road ahead", "To check the vehicles behind you", "To check the fuel gauge"],
      answer: 2
    },
    {
      question: "When are you allowed to use a mobile phone while driving?",
      options: ["Only when parked", "Only when driving straight on highways", "Only with hands-free technology", "Never"],
      answer: 3
    },
    {
      question: "What should you do before reversing your vehicle?",
      options: ["Check your side mirrors and look behind", "Honk", "Turn off the engine", "Accelerate gently"],
      answer: 0
    },
    {
      question: "What should you do if you miss your exit on a highway?",
      options: ["Reverse back to the exit", "Make a U-turn", "Continue driving to the next exit", "Stop and wait for instructions"],
      answer: 2
    },
    {
      question: "What is the speed limit for vehicles in rural areas?",
      options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
      answer: 3
    },
    {
      question: "What should you do if you see a school bus with flashing red lights?",
      options: ["Continue driving at normal speed", "Stop and wait until the lights stop flashing", "Overtake the bus carefully", "Honk and pass the bus"],
      answer: 1
    },
    {
      question: "What is the maximum permissible alcohol limit for a driver in India?",
      options: ["30 mg per 100 ml of blood", "60 mg per 100 ml of blood", "100 mg per 100 ml of blood", "There is no permissible limit"],
      answer: 0
    }
  ];


  
function loadquestions(){
  currentIndex = Math.floor(Math.random() * quizData.length);
  const current = quizData[currentIndex];
  document.getElementById("question").textContent = current.question;
  current.options.forEach((opt,i) => {
    document.getElementById(`opt${i}`).textContent = opt;
  });
}

function submitAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please choose an answer.");
    return;
  }

  const selectedValue = parseInt(selected.value);
  const correctAnswer = quizData[currentIndex].answer;

  updateScore(selectedValue, correctAnswer); 


  if (selectedValue === correctAnswer) {
    document.getElementById("result").textContent = "✅ Correct!";
  } else {
    document.getElementById("result").textContent = "❌ Wrong!";
  }
  quizData.splice(currentIndex, 1);
  }

  let total = 0;

  function next(){
    if (quizData.length === 0) {
      document.getElementById("container").remove();
      document.getElementById("over").innerText = "Quiz finished!";
      return;
    }
    currentIndex = Math.floor(Math.random() * quizData.length);
    const current = quizData[currentIndex];
    document.getElementById("question").textContent = current.question;
    current.options.forEach((opt,i) => {
      document.getElementById(`opt${i}`).textContent = opt;
    });
    document.getElementById("result").textContent = "";
    clearRadioSelection();

    

  }

  function clearRadioSelection() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
    }
  }

  let score = 0;
  let wrongscore = 0;
  
  function updateScore(selectedValue, correctAnswer) {
    if (selectedValue === correctAnswer) {
      score++;
      total++;
      document.getElementById("total-question").innerText = total;
    } else {
      wrongscore++;
      total++;
      document.getElementById("total-question").innerText = total;
    }
  
    document.getElementById("score").innerText = score;
    document.getElementById("wrong").innerText = wrongscore;
  }
  





  