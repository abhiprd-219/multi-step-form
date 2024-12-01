let nextBtn2 = document.querySelector(".nextBtn2");
let back2 = document.querySelector(".back2");
let nextBtn1 = document.querySelector(".nextBtn1");
let back1 = document.querySelector(".back1");
let err1 = document.querySelector("#err1");
let err2 = document.querySelector("#err2");
let err3 = document.querySelector("#err3");
let nam = document.querySelector("#name");
let mail = document.querySelector("#mail");
let mob = document.querySelector("#mob");
let step1 = document.querySelector(".step1");
let step2 = document.querySelector(".step2");
let step3 = document.querySelector(".step3");
let step4 = document.querySelector(".step4");
let step5 = document.querySelector(".step5");
let para1 = document.querySelector(".para1");
let para2 = document.querySelector(".para2");
let para3 = document.querySelector(".para3");
let para4 = document.querySelector(".para4");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let arcade = document.querySelector(".arcade");
let advanced = document.querySelector(".advanced");
let pro = document.querySelector(".pro");
let price1 = document.querySelector("#price1");
let price2 = document.querySelector("#price2");
let price3 = document.querySelector("#price3");
let serviceprice = document.querySelector("#serviceprice");
let storageprice = document.querySelector("#storageprice");
let profileprice = document.querySelector("#profileprice");
let checkbox1 = document.querySelector("#checkbox1");
let checkbox2 = document.querySelector("#checkbox2");
let checkbox3 = document.querySelector("#checkbox3");
let orgname = document.getElementById("orgname");
let strname = document.querySelector("#strname");
let profname = document.querySelector("#profname");
let planNam = document.getElementById("planName");
let PlanPrice = document.querySelector("#planPrice");
let offer1 = document.querySelector("#offer1");
let offer2 = document.querySelector("#offer2");
let offer3 = document.querySelector("#offer3");
let clickedDivInStep3 = [];

// Toggle button states
let period = "monthly";
let planName = "Arcade";
let price = "$9/mo";
let sceme = [];
let scemeprice = [];

// Track current step
let currentStep = 1;
let totalSteps = 5;

// Hide all steps and buttons
const hideAllSteps = () => {
  [step1, step2, step3, step4, step5].forEach((step) =>
    step.classList.add("hidden")
  );
  [nextBtn1, nextBtn2].forEach((btn) => btn.classList.add("hidden"));
  [back1, back2].forEach((btn) => btn.classList.add("hidden"));
};

// Show the step and related buttons
const showStepAndButtons = (stepNum) => {
  hideAllSteps();

  switch (stepNum) {
    case 1:
      step1.classList.remove("hidden");
      nextBtn1.classList.remove("hidden");
      nextBtn2.classList.remove("hidden"); 
      nextBtn1.style.background="darkblue";
      nextBtn2.style.background='darkblue';
      nextBtn1.innerText="Next step";
      nextBtn2.innerText="Next step";
      break;
    case 2:
      step2.classList.remove("hidden");
      back1.classList.remove("hidden"); 
      back2.classList.remove("hidden"); 
      nextBtn1.classList.remove("hidden"); 
      nextBtn2.classList.remove("hidden"); 
      nextBtn1.style.background="darkblue";
      nextBtn2.style.background='darkblue';
      nextBtn1.innerText="Next step";
      nextBtn2.innerText="Next step";
      break;
    case 3:
      step3.classList.remove("hidden");
      back1.classList.remove("hidden"); 
      back2.classList.remove("hidden"); 
      nextBtn1.classList.remove("hidden"); 
      nextBtn2.classList.remove("hidden"); 
      nextBtn1.style.background="darkblue";
      nextBtn2.style.background='darkblue';
      nextBtn1.innerText="Next step";
      nextBtn2.innerText="Next step";
      break;
    case 4:
      step4.classList.remove("hidden");
      back1.classList.remove("hidden"); 
      back2.classList.remove("hidden"); 
      nextBtn1.classList.remove("hidden"); 
      nextBtn2.classList.remove("hidden"); 
      nextBtn1.innerText="Confirm";
      nextBtn2.innerText="Confirm";
      nextBtn1.style.background="skyblue";
      nextBtn2.style.background='skyblue';
      break;
    case 5:
      step5.classList.remove("hidden");
      back1.classList.add("hidden"); 
      back2.classList.add("hidden"); 
      let footer=document.querySelector(".footer");
      footer.classList.add("hidden");
      break;
  }
};

// Update the step indicators (box and text)
const updateBoxAndParaStyles = (stepNum) => {
  [box1, box2, box3, box4].forEach(
    (box) => (box.style.background = "transparent")
  );
  [para1, para2, para3, para4].forEach((para) => (para.style.color = "white"));

  switch (stepNum) {
    case 1:
      para1.style.color = "black";
      box1.style.background = "white";
      break;
    case 2:
      para2.style.color = "black";
      box2.style.background = "white";
      break;
    case 3:
      para3.style.color = "black";
      box3.style.background = "white";
      break;
    case 4:
      para4.style.color = "black";
      box4.style.background = "white";
      break;
    case 5:
      para4.style.color = "black";
      box4.style.background = "white";
      break;
    default:
      break;
  }
};

// Handle Next Button
const handleNext = () => {
  if (currentStep < totalSteps) {
    currentStep++;
    showStepAndButtons(currentStep);
    updateBoxAndParaStyles(currentStep);
    if (currentStep === 4) {
      ste4Calling();
    }
  }
};

// Handle Back Button
const handleBack = () => {
  if (currentStep > 1) {
    currentStep--;
    showStepAndButtons(currentStep);
    updateBoxAndParaStyles(currentStep);
  }
};

// Attach event listeners for Next and Back buttons
nextBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentStep === 1) validateAndGoToStep2();
  else handleNext();
});

nextBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentStep === 1) validateAndGoToStep2();
  else handleNext();
});

back2.addEventListener("click", (e) => {
  e.preventDefault();
  handleBack();
});

back1.addEventListener("click", (e) => {
  e.preventDefault();
  handleBack();
});

// Validate and move to Step 2
const validateAndGoToStep2 = () => {
  if (!nam.value) err1.classList.remove("hidden");
  if (!mail.value) err2.classList.remove("hidden");
  if (!mob.value) err3.classList.remove("hidden");
  if (nam.value && mail.value && mob.value) {
    currentStep = 2;
    showStepAndButtons(currentStep);
    updateBoxAndParaStyles(currentStep);
  }
};

// Toggle Button for Monthly/Yearly Pricing
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".togglebtn");
  const circle = document.querySelector(".circle");
  let isToggled = false;

  toggleBtn.addEventListener("click", () => {
    isToggled = !isToggled;
    if (isToggled) {
      circle.style.left = "38px";
      period = "yearly";
      price1.innerText = "$90/yr";
      price2.innerText = "$120/yr";
      price3.innerText = "$150/yr";
      offer1.innerText = "2 months free";
      offer2.innerText = "2 months free";
      offer3.innerText = "2 months free";
      serviceprice.innerText = "$10/yr";
      storageprice.innerText = "$20/yr";
      profileprice.innerText = "$20/yr";
    } else {
      circle.style.left = "0px";
      period = "monthly";
      price1.innerText = "$9/mo";
      price2.innerText = "$12/mo";
      price3.innerText = "$15/mo";
      offer1.innerText = "";
      offer2.innerText = "";
      offer3.innerText = "";
      serviceprice.innerText = "$1/mo";
      storageprice.innerText = "$2/mo";
      profileprice.innerText = "$2/mo";
    }
  });
});

// Plan Selection in Step 2
document.querySelector(".step2").addEventListener("click", (e) => {
  if (e.target.classList.contains("arcade")) {
    document.getElementById("arcade1").style.background = "skyblue";
    document.getElementById("advanced1").style.background = "white";
    document.getElementById("pro1").style.background = "white";
    planName = "Arcade";
    price = price1.innerText;
  } else if (e.target.classList.contains("advanced")) {
    document.getElementById("arcade1").style.background = "white";
    document.getElementById("advanced1").style.background = "skyblue";
    document.getElementById("pro1").style.background = "white";
    planName = "Advanced";
    price = price2.innerText;
  } else if (e.target.classList.contains("pro")) {
    document.getElementById("arcade1").style.background = "white";
    document.getElementById("advanced1").style.background = "white";
    document.getElementById("pro1").style.background = "skyblue";
    planName = "Pro";
    price = price3.innerText;
  }
  console.log(planName);
  console.log(`${planName} (${period})`);
  planNam.innerText = `${planName} (${period})`;
  PlanPrice.innerText = `${price}`;
});

function removeAllChekcedDiv() {
  console.log(clickedDivInStep3.length);
  clickedDivInStep3.forEach((clickedDiv) => {
    clickedDiv.style.background = "white";
    clickedDiv.children[0].removeAttribute("checked");
    console.log('removed')
  });
}

let change = document.querySelector("#change");
change.addEventListener("click", () => {
  currentStep = 2;
  scemeprice.splice(0, scemeprice.length);
  sceme.splice(0, sceme.length);
  removeAllChekcedDiv();
  hideAllSteps();
  showStepAndButtons(currentStep);
  console.log(sceme);
  console.log(scemeprice);
});

// Scheme Selection in Step 3
document.querySelector(".step3").addEventListener("click", (e) => {
  if (e.target.classList.contains("org")) {
    let orgi = document.getElementById("original");
    if (orgi.style.background === "skyblue") {
      orgi.style.background = "white";
      orgi.children[0].removeAttribute("checked");
      sceme.pop(orgname.innerText);
      scemeprice.pop(serviceprice.innerText);
      clickedDivInStep3.pop(orgi);
      console.log("orgi");
    } else {
      orgi.style.background = "skyblue";
      orgi.children[0].setAttribute("checked", "checked");
      sceme.push(orgname.innerText);
      scemeprice.push(serviceprice.innerText);
      clickedDivInStep3.push(orgi);
      console.log("orgi", clickedDivInStep3);
    }
  }

  if (e.target.classList.contains("str")) {
    let stor = document.getElementById("storage");
    if (stor.style.background === "skyblue") {
      stor.style.background = "white";
      stor.children[0].removeAttribute("checked");
      sceme.pop(strname.innerText);
      scemeprice.pop(storageprice.innerText);
      clickedDivInStep3.pop(stor);
    } else {
      stor.style.background = "skyblue";
      stor.children[0].setAttribute("checked", "checked");
      sceme.push(strname.innerText);
      scemeprice.push(storageprice.innerText);
      clickedDivInStep3.push(stor);
    }
  }

  if (e.target.classList.contains("prof")) {
    let pro = document.getElementById("profile");
    if (pro.style.background === "skyblue") {
      pro.style.background = "white";
      pro.children[0].removeAttribute("checked");
      sceme.pop(profname.innerText);
      scemeprice.pop(profileprice.innerText);
      clickedDivInStep3.pop(pro);
    } else {
      pro.style.background = "skyblue";
      pro.children[0].setAttribute("checked", "checked");
      sceme.push(profname.innerText);
      scemeprice.push(profileprice.innerText);
      clickedDivInStep3.push(pro);
    }
  }

});

// step4
function ste4Calling() {
  console.log(true);
  console.log("2233");
  console.log(planName);
  console.log(`${planName} (${period})`);
  planNam.innerText = `${planName} (${period})`;
  PlanPrice.innerText = `${price}`;

  let planSelected = document.querySelector(".planSelected");
  planSelected.innerHTML = '';
  let sum = parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
  for (let i = 0; i < sceme.length; i++) {
    let div = document.createElement("div");
    div.className = "flex justify-between items-center text-sm text-gray";
    div.innerHTML = `
      <p>${sceme[i]}</p>
      <p>${scemeprice[i]}</p>`;
    planSelected.appendChild(div);
    sum += parseFloat(scemeprice[i].replace(/[^0-9.]/g, "")) || 0;
  }
  console.log(true);
  console.log("2233");
  sum = sum.toString();
  if (period == "monthly") sum = `$${sum}/mo`;
  else sum = `$${sum}/yr`;
  console.log(sum);
  let total = document.querySelector("#total");
  let totalprice = document.querySelector("#totalprice");
  total.innerText = `Total(${period})`;
  totalprice.innerText = sum;
}

