
let currentNonogramArray = dino;
let userArray = [];
let musicPlay = false;
let order = parseInt(localStorage.getItem('order')) || 0;

let rowsNumber = 5;
let tipsMaxNumber = 3;
let timerIsOn;
let minutesCounter = 0;
let secondsCounter = 0;

let canUserPlay = true;
let records = [];

function loadRecords() {
  const savedRecords = localStorage.getItem('records');
  if (savedRecords) {
      records = JSON.parse(savedRecords);
  }
}

function renderRecordsTable() {
  recordsTable.innerHTML = '';


  const headerRow = recordsTable.insertRow(0);
  const headers = ['Puzzle', 'Difficulty', 'Time'];
  headers.forEach((header, index) => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
  });


  records.forEach((record, index) => {
      const row = recordsTable.insertRow(index + 1);
      const puzzleCell = row.insertCell(0);
      const difficultyCell = row.insertCell(1);
      const timeCell = row.insertCell(2);

      puzzleCell.textContent = record.puzzle;
      difficultyCell.textContent = record.difficulty;
      timeCell.textContent = record.time;
  });
  }


/* create settings */

let settingsDiv = document.createElement("div");
settingsDiv.classList.add("settings");
document.body.appendChild(settingsDiv);

let changeThemeButton = document.createElement("button");
changeThemeButton.classList.add("changeTheme", "buttonGame");
changeThemeButton.innerText = "Dark mode ON";
settingsDiv.appendChild(changeThemeButton);

let questionMusicDiv = document.createElement("div");
questionMusicDiv.classList.add("questionMusic");
questionMusicDiv.innerText = "Music?";
settingsDiv.appendChild(questionMusicDiv);

let answersMusicDiv = document.createElement("div");
answersMusicDiv.classList.add("answersMusic");
questionMusicDiv.appendChild(answersMusicDiv);

let yesMusicDiv = document.createElement("div");
yesMusicDiv.classList.add("yes");
answersMusicDiv.appendChild(yesMusicDiv);

let yesMusicInput = document.createElement("input");
yesMusicInput.classList.add("custom-input");
yesMusicInput.id = "yesMusic";
yesMusicInput.name = "music";
yesMusicInput.type = "radio";
yesMusicDiv.appendChild(yesMusicInput);

let yesMusicLabel = document.createElement("label");
yesMusicLabel.classList.add("radioLabel");
yesMusicLabel.setAttribute("for", "yesMusic");
yesMusicLabel.innerText = "Yes";
yesMusicDiv.appendChild(yesMusicLabel);

let noMusicDiv = document.createElement("div");
noMusicDiv.classList.add("no");
answersMusicDiv.appendChild(noMusicDiv);

let noMusicInput = document.createElement("input");
noMusicInput.classList.add("custom-input");
noMusicInput.id = "noMusic";
noMusicInput.name = "music";
noMusicInput.type = "radio";
noMusicInput.checked = true;
noMusicDiv.appendChild(noMusicInput);

let noMusicLabel = document.createElement("label");
noMusicLabel.classList.add("radioLabel");
noMusicLabel.setAttribute("for", "noMusic");
noMusicLabel.innerText = "No";
noMusicDiv.appendChild(noMusicLabel);

let questionSoundDiv = document.createElement("div");
questionSoundDiv.classList.add("questionSound");
questionSoundDiv.innerText = "Sounds?";
settingsDiv.appendChild(questionSoundDiv);

let answersSoundDiv = document.createElement("div");
answersSoundDiv.classList.add("answersSound");
questionSoundDiv.appendChild(answersSoundDiv);

let yesSoundDiv = document.createElement("div");
yesSoundDiv.classList.add("yes");
answersSoundDiv.appendChild(yesSoundDiv);

let yesSoundInput = document.createElement("input");
yesSoundInput.classList.add("custom-input");
yesSoundInput.id = "yesSound";
yesSoundInput.name = "sound";
yesSoundInput.type = "radio";
yesSoundInput.checked = true;
yesSoundDiv.appendChild(yesSoundInput);

let yesSoundLabel = document.createElement("label");
yesSoundLabel.classList.add("radioLabel");
yesSoundLabel.setAttribute("for", "yesSound");
yesSoundLabel.innerText = "Yes";
yesSoundDiv.appendChild(yesSoundLabel);

let noSoundDiv = document.createElement("div");
noSoundDiv.classList.add("no");
answersSoundDiv.appendChild(noSoundDiv);

let noSoundInput = document.createElement("input");
noSoundInput.classList.add("custom-input");
noSoundInput.id = "noSound";
noSoundInput.name = "sound";
noSoundInput.type = "radio";
noSoundDiv.appendChild(noSoundInput);

let noSoundLabel = document.createElement("label");
noSoundLabel.classList.add("radioLabel");
noSoundLabel.setAttribute("for", "noSound");
noSoundLabel.innerText = "No";
noSoundDiv.appendChild(noSoundLabel);

let resetButton = document.createElement("button");
resetButton.classList.add("resetGame", "buttonGame");
resetButton.innerText = "Reset game";
settingsDiv.appendChild(resetButton);

let saveButton = document.createElement("button");
saveButton.classList.add("saveGame", "buttonGame");
saveButton.innerText = "Save game";
settingsDiv.appendChild(saveButton);

let continueButton = document.createElement("button");
continueButton.classList.add("continueGame", "buttonGame");
continueButton.innerText = "Continue last game";
settingsDiv.appendChild(continueButton);

let solveGameButton = document.createElement("button");
solveGameButton.classList.add("solveGame", "buttonGame");
solveGameButton.innerText = "Show solution";
settingsDiv.appendChild(solveGameButton);

let randomGameButton = document.createElement("button");
randomGameButton.classList.add("randomGame", "buttonGame");
randomGameButton.innerText = "Random game";
settingsDiv.appendChild(randomGameButton);

let scoreButton = document.createElement("button");
scoreButton.classList.add("scoreButton", "buttonGame");
scoreButton.innerText = "Score table";
settingsDiv.appendChild(scoreButton);

let chooseBlockDiv = document.createElement("div");
chooseBlockDiv.classList.add("chooseBlock");
settingsDiv.appendChild(chooseBlockDiv);

let sizeForm = document.createElement("form");
sizeForm.classList.add("sizeForm");
chooseBlockDiv.appendChild(sizeForm);

let sizeLabel = document.createElement("label");
sizeLabel.classList.add("sizeLabel");
sizeLabel.setAttribute("for", "sizeLevel");
sizeLabel.innerText = "Select size:";
sizeForm.appendChild(sizeLabel);

let sizeSelect = document.createElement("select");
sizeSelect.classList.add("sizeSelect");
sizeSelect.id = "sizeLevel";
sizeSelect.name = "sizeLevel";
sizeSelect.setAttribute("onchange", "handleSizeChange()");
sizeForm.appendChild(sizeSelect);

let sizeOption1 = document.createElement("option");
sizeOption1.classList.add("sizeOption");
sizeOption1.value = "5x5";
sizeOption1.innerText = "5x5(easy)";
sizeSelect.appendChild(sizeOption1);

let sizeOption2 = document.createElement("option");
sizeOption2.classList.add("sizeOption");
sizeOption2.value = "10x10";
sizeOption2.innerText = "10x10(medium)";
sizeSelect.appendChild(sizeOption2);

let sizeOption3 = document.createElement("option");
sizeOption3.classList.add("sizeOption");
sizeOption3.value = "15x15";
sizeOption3.innerText = "15x15(hard)";
sizeSelect.appendChild(sizeOption3);

let easyForm = document.createElement("form");
easyForm.classList.add("easyForm", "show");
easyForm.id = "easyLevelForm";
chooseBlockDiv.appendChild(easyForm);

let easyLabel = document.createElement("label");
easyLabel.classList.add("label");
easyLabel.setAttribute("for", "easyLevel");
easyLabel.innerText = "Select form:";
easyForm.appendChild(easyLabel);

let easySelect = document.createElement("select");
easySelect.classList.add("select");
easySelect.id = "easyLevel";
easySelect.name = "easyLevel";
easySelect.setAttribute("onchange", "handleNonogramEasyChange()");
easyForm.appendChild(easySelect);

let easyOptionDino = document.createElement("option");
easyOptionDino.classList.add("option");
easyOptionDino.value = "dino";
easyOptionDino.innerText = "Dino";
easySelect.appendChild(easyOptionDino);

let easyOptionTower = document.createElement("option");
easyOptionTower.classList.add("option");
easyOptionTower.value = "tower";
easyOptionTower.innerText = "Tower";
easySelect.appendChild(easyOptionTower);

let easyOptionMushroom = document.createElement("option");
easyOptionMushroom.classList.add("option");
easyOptionMushroom.value = "mushroom";
easyOptionMushroom.innerText = "Mushroom";
easySelect.appendChild(easyOptionMushroom);

let easyOptionCat = document.createElement("option");
easyOptionCat.classList.add("option");
easyOptionCat.value = "cat";
easyOptionCat.innerText = "Cat";
easySelect.appendChild(easyOptionCat);

let easyOptionSkull = document.createElement("option");
easyOptionSkull.classList.add("option");
easyOptionSkull.value = "skull";
easyOptionSkull.innerText = "Skull";
easySelect.appendChild(easyOptionSkull);

let mediumForm = document.createElement("form");
mediumForm.classList.add("mediumForm", "hide");
mediumForm.id = "mediumLevelForm";
chooseBlockDiv.appendChild(mediumForm);

let mediumLabel = document.createElement("label");
mediumLabel.classList.add("label");
mediumLabel.setAttribute("for", "mediumLevel");
mediumLabel.innerText = "Select form:";
mediumForm.appendChild(mediumLabel);

let mediumSelect = document.createElement("select");
mediumSelect.classList.add("select");
mediumSelect.id = "mediumLevel";
mediumSelect.name = "mediumLevel";
mediumSelect.setAttribute("onchange", "handleNonogramMeadiumChange()");
mediumForm.appendChild(mediumSelect);

let mediumOptionHamster = document.createElement("option");
mediumOptionHamster.classList.add("option");
mediumOptionHamster.value = "hamster";
mediumOptionHamster.innerText = "Hamster";
mediumSelect.appendChild(mediumOptionHamster);

let mediumOptionCup = document.createElement("option");
mediumOptionCup.classList.add("option");
mediumOptionCup.value = "cup";
mediumOptionCup.innerText = "Cup";
mediumSelect.appendChild(mediumOptionCup);

let mediumOptionCamera = document.createElement("option");
mediumOptionCamera.classList.add("option");
mediumOptionCamera.value = "camera";
mediumOptionCamera.innerText = "Camera";
mediumSelect.appendChild(mediumOptionCamera);

let mediumOptionGhost = document.createElement("option");
mediumOptionGhost.classList.add("option");
mediumOptionGhost.value = "ghost";
mediumOptionGhost.innerText = "Ghost";
mediumSelect.appendChild(mediumOptionGhost);

let mediumOptionYinAndYang = document.createElement("option");
mediumOptionYinAndYang.classList.add("option");
mediumOptionYinAndYang.value = "yinAndYang";
mediumOptionYinAndYang.innerText = "Yin and Yang";
mediumSelect.appendChild(mediumOptionYinAndYang);

let hardForm = document.createElement("form");
hardForm.classList.add("hardForm", "hide");
hardForm.id = "hardLevelForm";
chooseBlockDiv.appendChild(hardForm);

let hardLabel = document.createElement("label");
hardLabel.classList.add("label");
hardLabel.setAttribute("for", "hardLevel");
hardLabel.innerText = "Select form:";
hardForm.appendChild(hardLabel);

let hardSelect = document.createElement("select");
hardSelect.classList.add("select");
hardSelect.id = "hardLevel";
hardSelect.name = "hardLevel";
hardSelect.setAttribute("onchange", "handleNonogramHardChange()");
hardForm.appendChild(hardSelect);

let hardOptionPaw = document.createElement("option");
hardOptionPaw.classList.add("option");
hardOptionPaw.value = "paw";
hardOptionPaw.innerText = "Paw";
hardSelect.appendChild(hardOptionPaw);

let hardOptionJellyfish = document.createElement("option");
hardOptionJellyfish.classList.add("option");
hardOptionJellyfish.value = "jellyfish";
hardOptionJellyfish.innerText = "Jellyfish";
hardSelect.appendChild(hardOptionJellyfish);

let hardOptionCow = document.createElement("option");
hardOptionCow.classList.add("option");
hardOptionCow.value = "cow";
hardOptionCow.innerText = "Cow";
hardSelect.appendChild(hardOptionCow);

let hardOptionChameleon = document.createElement("option");
hardOptionChameleon.classList.add("option");
hardOptionChameleon.value = "chameleon";
hardOptionChameleon.innerText = "Chameleon";
hardSelect.appendChild(hardOptionChameleon);

let hardOptionWhales = document.createElement("option");
hardOptionWhales.classList.add("option");
hardOptionWhales.value = "whales";
hardOptionWhales.innerText = "Whales";
hardSelect.appendChild(hardOptionWhales);

/* create table */

const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.id = 'overlay';

  const recordsContainer = document.createElement('div');
  recordsContainer.classList.add('records-container');

  const titleTable = document.createElement('div');
  titleTable.classList.add('title-table');
  const titleHeading = document.createElement('h2');
  titleHeading.textContent = 'Nonogram Records Table';
  titleTable.appendChild(titleHeading);

  const recordsTable = document.createElement('table');
  recordsTable.id = 'recordsTable';

  const thead = document.createElement('thead');
  const theadRow = document.createElement('tr');
  ['Puzzle', 'Difficulty', 'Time'].forEach(columnTitle => {
    const th = document.createElement('th');
    th.textContent = columnTitle;
    theadRow.appendChild(th);
  });
  thead.appendChild(theadRow);

  const tbody = document.createElement('tbody');
  tbody.id = 'recordsTableBody';

  recordsTable.appendChild(thead);
  recordsTable.appendChild(tbody);

  const bottomContainer = document.createElement('div');
  bottomContainer.classList.add('bottomContainer');

  const closeButton = document.createElement('div');
  closeButton.id = 'closeButton';
  closeButton.textContent = 'Close';

  bottomContainer.appendChild(closeButton);

  recordsContainer.appendChild(titleTable);
  recordsContainer.appendChild(recordsTable);
  recordsContainer.appendChild(bottomContainer);

  overlay.appendChild(recordsContainer);

  document.body.appendChild(overlay);

/* create modal window */

const overlayModal = document.createElement('div');
  overlayModal.classList.add('overlayModal');
  overlayModal.id = 'overlay';

  const winContainer = document.createElement('div');
  winContainer.classList.add('win-container');

  const textWin = document.createElement('div');
  textWin.classList.add('text-win');
  textWin.textContent = `Отлично! Вы решили нонограмму за ${minutesCounter*60 + secondsCounter} секунд!`;

  const bottomContainerWin = document.createElement('div');
  bottomContainerWin.classList.add('bottomContainer');

  const okButton = document.createElement('div');
  okButton.id = 'okButton';
  okButton.textContent = 'Ok!';

  bottomContainerWin.appendChild(okButton);

  winContainer.appendChild(textWin);
  winContainer.appendChild(bottomContainerWin);

  overlayModal.appendChild(winContainer);

  document.body.appendChild(overlayModal);

/* create basic template*/ 
let wrapperTitleTimer = document.createElement("div");
wrapperTitleTimer.classList.add("wrapperTitleTimer");
document.body.appendChild(wrapperTitleTimer);

let titleAndTimer = document.createElement("div");
titleAndTimer.classList.add("title-timer");
wrapperTitleTimer.appendChild(titleAndTimer);


let title = document.createElement("h1");
title.innerText = "Nonograms";
titleAndTimer.appendChild(title);

let timer = document.createElement("div");
timer.classList.add("timer");
timer.innerText = `0${minutesCounter}:${secondsCounter}0`;
titleAndTimer.appendChild(timer);

let wrapper = document.createElement("div");
let topPart = document.createElement("div");
let bottomPart = document.createElement("div");

wrapper.classList.add("wrapperGame");
topPart.classList.add("topPart");
bottomPart.classList.add("bottomPart");

document.body.appendChild(wrapper);
wrapper.appendChild(topPart);
wrapper.appendChild(bottomPart);

let empty = document.createElement("div");
let tipsX = document.createElement("div");

empty.classList.add("empty");
tipsX.classList.add("tipsX");

topPart.appendChild(empty);
topPart.appendChild(tipsX);

let field = document.createElement("div");
let tipsY = document.createElement("div");

field.classList.add("fieldGame");
tipsY.classList.add("tipsY");

bottomPart.appendChild(tipsY);
bottomPart.appendChild(field);


/* sound */

const yesAnswerMusic = document.getElementById("yesMusic");
const noAnswerMusic = document.getElementById("noMusic");
const yesAnswerSound = document.getElementById("yesSound");
const noAnswerSound = document.getElementById("noSound");


let audioMain = new Audio("sounds/dreamland.mp3");

yesAnswerMusic.addEventListener("change", () => {
  if (!musicPlay) {
    audioMain.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    });
    audioMain.play();
    musicPlay = true;
  }
  audioMain.muted = false;
});
noAnswerMusic.addEventListener("change", e => {
  if (e.target.checked) {
  audioMain.muted = true;
  }
});


const audioWin = new Audio("sounds/win.mp3");
const audioBlack = new Audio("sounds/black_cell.mp3");
const audioCross = new Audio("sounds/cross_cell.mp3");
const audioCancel = new Audio("sounds/cancel_cell.mp3");

yesAnswerSound.addEventListener("change", () => {
  audioWin.muted = false;
  audioBlack.muted = false;
  audioCross.muted = false;
  audioCancel.muted = false;
});
noAnswerSound.addEventListener("change", e => {
  if (e.target.checked) {
    audioWin.muted = true;
    audioBlack.muted = true;
    audioCross.muted = true;
    audioCancel.muted = true;
  }
});

/*reset game*/
resetButton.addEventListener("click", resetGame);

function resetGame() {
  userArray = [];
  minutesCounter = 0;
  secondsCounter = 0;
  
  clearInterval(timerIsOn);
  timerIsOn = null;
  timer.innerText = `0${minutesCounter}:${secondsCounter}0`;
  clearField();
  canUserPlay = true;

  if (resetButton.classList.contains("canOnlyReset")) {
    resetButton.classList.remove("canOnlyReset");
    solutionButton.disabled = false;
    saveButton.disabled = false;
    continueButton.disabled = false;
  }
}

/*records table */

scoreButton.addEventListener('click', function() {
    overlay.style.display = 'flex';
    setTimeout(function() {
        recordsContainer.style.opacity = '1';
    }, 50);
    loadRecords();
    renderRecordsTable();
 
});

document.getElementById('closeButton').addEventListener('click', function() {
    recordsContainer.style.opacity = '0';
    setTimeout(function() {
        overlay.style.display = 'none';
    }, 300);
});

function saveRecord(puzzle, difficulty, time) {
  order++;

  const record = {
      puzzle: puzzle,
      difficulty: getDifficultyLabel(difficulty),
      time: formatTime(time),
      order: order
  };


  function getDifficultyLabel(difficulty) {
    switch (difficulty) {
      case '5x5':
        return 'Easy(5x5)';
      case '10x10':
        return 'Medium(10x10)';
      case '15x15':
        return 'Hard(15x15)';
      default:
        return difficulty;
    }
  }

 
  records.push(record);

  records.sort((a, b) => a.order - b.order);
  if (records.length > 5) {
    records.shift();
  }


  records.sort((a, b) => compareTimes(a.time, b.time));


 
  saveRecords();


  renderRecordsTable();


    function saveRecords() {
      localStorage.setItem('records', JSON.stringify(records));
    }
   

  function compareTimes(timeA, timeB) {
    const totalSecondsA = parseTimeToSeconds(timeA);
    const totalSecondsB = parseTimeToSeconds(timeB);
    return totalSecondsA - totalSecondsB;
  }


  function formatTime(timeString) {
    const totalSeconds = parseTimeToSeconds(timeString);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${padZero(minutes)}:${padZero(seconds)}`;
  }

   function parseTimeToSeconds(timeString) {
    const [minutes, seconds] = timeString.split(":").map(Number);
    return minutes * 60 + seconds;
  }


  function padZero(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

}


/*save game*/

saveButton.addEventListener("click", saveGame);

function saveGame() {
  const gameState = {
    selectedSize: sizeSelect.value,
    selectedPic: getSelectedPic(),
    timer: {
      minutes: minutesCounter,
      seconds: secondsCounter
    },
    userArray: getUserArray()
  };

  localStorage.setItem("nonogramGameState", JSON.stringify(gameState));
}
function getSelectedPic() {
  const selectedSize = sizeSelect.value;
  const form = getForm(selectedSize);
  const selectedPicInput = form.querySelector(".option:checked");
  return selectedPicInput ? selectedPicInput.value : null;
}

function getUserArray() {
  const userArray = [];
  for (let i = 0; i < rowsNumber; i++) {
    userArray[i] = [];
    for (let j = 0; j < rowsNumber; j++) {
      const cell = field.children[i].children[j];
      userArray[i][j] = cell.classList.contains("item__sp") ? 1 : 0;
    }
  }
  return userArray;
}

/* continue game */ 

continueButton.addEventListener("click", loadGame);

const arrayMap = {
  "dino": dino,
  "tower": tower,
  "mushroom": mushroom,
  "cat": cat,
  "skull": skull,
  "hamster": hamster,
  "cup": cup,
  "camera": camera,
  "ghost": ghost,
  "yinAndYang": yinAndYang,
  "paw": paw,
  "jellyfish": jellyfish,
  "cow": cow,
  "chameleon": chameleon,
  "whales": whales
};

function loadGame() {
  const savedGameState = localStorage.getItem("nonogramGameState");

  if (savedGameState) {
    const gameState = JSON.parse(savedGameState);

    // set size game
    sizeSelect.value = gameState.selectedSize;
    handleSizeChange();

    // set saved pic
    const selectedArray = arrayMap[gameState.selectedPic];
    if (selectedArray) {
      currentNonogramArray = selectedArray;
    }

    const form = getForm(gameState.selectedSize);
    const picSaved = form.querySelector(`option[value="${gameState.selectedPic}"]`);
    picSaved.selected = true;
    console.log(picSaved.value)
    currentNonogramArray = arrayMap[picSaved.value];
    addNumbers();


    // set timer
    minutesCounter = gameState.timer.minutes;
    secondsCounter = gameState.timer.seconds;
    timer.innerText = `${minutesCounter < 10 ? '0' : ''}${minutesCounter}:${secondsCounter < 10 ? '0' : ''}${secondsCounter}`;
    startTimeCounter();

    // set cells
    setUserArray(gameState.userArray);
  }
}

function setUserArray(savedUserArray) {
  for (let i = 0; i < rowsNumber; i++) {
    for (let j = 0; j < rowsNumber; j++) {
      const cell = field.children[i].children[j];
      if (savedUserArray[i][j] === 1) {
        cell.classList.add("item__sp");
      } else {
        cell.classList.remove("item__sp");
      }
    }
  }
}


/* random game */
randomGameButton.addEventListener("click", randomGame);

function randomGame() {
  simulateRandomClicksSize();
  handleSizeChange();
  simulateRandomClickPic();
  handleNonogramChange(); 
}

function simulateRandomClicksSize() {
  const options = sizeForm.querySelectorAll(".sizeOption");

  for (let i = 0; i < 1; i++) {
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex];
    selectedOption.selected = true;
    console.log(selectedOption);
  }
}

function simulateRandomClickPic() {
  const selectedSize = sizeSelect.value;
  console.log(selectedSize);
  const form = getForm(selectedSize);
  simulateRandomFormClick(form);

  const selectedOption = form.querySelector(".option:checked");
  if (selectedOption) {
    currentNonogramArray = selectedOption.value;
    console.log(currentNonogramArray);
  }
}

function getForm(selectedSize) {
  switch (selectedSize) {
    case "5x5":
      return easyForm;
    case "10x10":
      return mediumForm;
    case "15x15":
      return hardForm;
    default:
      return null;
  }
}

function simulateRandomFormClick(form) {
  if (form) {
    const options = form.querySelectorAll(".option");

    if (options.length > 0) {
      const randomIndex = Math.floor(Math.random() * options.length);
      const selectedOption = options[randomIndex];
      selectedOption.selected = true;
    }
  }
}

function handleNonogramChange() {
  const selectedSize = sizeSelect.value;
  switch (selectedSize) {
    case "5x5":
      handleNonogramEasyChange();
      break;
    case "10x10":
      handleNonogramMeadiumChange();
      break;
    case "15x15":
      handleNonogramHardChange();
      break;
    default:
      break;
  }
}



function createAllFields() {
  /*create Field */
  for (let i = 0; i < rowsNumber; i++) {
    let row = document.createElement("div");
    row.classList.add("rows");

    if ((i + 1) % 5 === 0 && i + 1 !== rowsNumber) {
      row.classList.add("border-bottom");
    }


    field.appendChild(row);
    for (let j = 0; j < rowsNumber; j++) {
      let itemField = document.createElement("div");
      itemField.classList.add("item");

      if ((j + 1) % 5 === 0 && j + 1 !== rowsNumber) {
        itemField.classList.add("border-right");
      }

      itemField.addEventListener("click", handleCellClick);
      itemField.addEventListener("click", startTimeCounter);
      itemField.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        startTimeCounter();
        if (this.classList.contains("item__sp")) {
          this.classList.remove("item__sp");
        }
        this.classList.toggle("item__cross");
        if (this.classList.contains("item__cross")) {
          resetAndPauseAudio(audioCross);
        } else {
          resetAndPauseAudio(audioCancel);
        }
      });
      row.appendChild(itemField);
    }
  }

  /*create tipsX */
  for (let i = 0; i < tipsMaxNumber; i++) {
    let row = document.createElement("div");
    row.classList.add("rows");
    tipsX.appendChild(row);
    for (let j = 0; j < rowsNumber; j++) {
      let itemTip = document.createElement("div");
      itemTip.classList.add("item");
      row.appendChild(itemTip);
    }
  }

  /*create tipsY */
  for (let i = 0; i < rowsNumber; i++) {
    let row = document.createElement("div");
    row.classList.add("rows");
    tipsY.appendChild(row);
    for (let j = 0; j < tipsMaxNumber; j++) {
      let itemTip = document.createElement("div");
      itemTip.classList.add("item");
      row.appendChild(itemTip);
    }
  }
}

/*Change Theme*/
const buttonChangeTheme = document.querySelector(".changeTheme");
const theme = document.getElementById("theme");
buttonChangeTheme.addEventListener('click', function () {
  if (theme.getAttribute('href') === 'stylesLightMode.css') {
    buttonChangeTheme.innerText = "Light mode ON";
    theme.setAttribute('href', 'stylesDarkMode.css');
    addNumbers();
  } else {
    theme.setAttribute('href', 'stylesLightMode.css');
    buttonChangeTheme.innerText = "Dark mode ON";
    addNumbers();
  }
})


createAllFields();
addNumbers();

let lastClickTime = 0;

function handleCellClick(event) {
  if (!canUserPlay) {
    return;
  }
  const currentTime = Date.now();
  if (currentTime - lastClickTime < 300) {
    // If less than 300 milliseconds have passed since the previous click, ignore the current one -_-
    return;
  }
  lastClickTime = currentTime;
  

  if (this.classList.contains("item__cross")) {
    this.classList.remove("item__cross");
    resetAndPauseAudio(audioBlack);
    this.classList.toggle("item__sp");
  } else {
    if (this.classList.contains("item__sp")) {
      resetAndPauseAudio(audioCancel)
    } else {
      resetAndPauseAudio(audioBlack)
    }
    this.classList.toggle("item__sp");
  }

    checkResult();
    startTimeCounter();
}

function resetAndPauseAudio(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}


function checkResult() {
  for(let i = 0; i < rowsNumber; i++) {
    userArray[i] = [];
    for (let j = 0; j < rowsNumber; j++) {
      let cell = field.children[i].children[j];
      userArray[i][j] = cell.classList.contains("item__sp") ? 1 : 0;
    }
  }

  if (arraysTheSame(userArray, currentNonogramArray)) {
    clearInterval(timerIsOn);
    setTimeout(() => {
      audioWin.play();
      textWin.textContent = `Отлично! Вы решили нонограмму за ${minutesCounter*60 + secondsCounter} секунд!`;
      canUserPlay = false;
        overlayModal.style.display = 'flex';
        setTimeout(function() {
            winContainer.style.opacity = '1';
        }, 50);
     
    
    document.getElementById('okButton').addEventListener('click', function() {
        winContainer.style.opacity = '0';
        setTimeout(function() {
            overlayModal.style.display = 'none';
        }, 300);
    });



        saveRecord(getSelectedPic(), sizeSelect.value, `${minutesCounter}:${secondsCounter}`);

        renderRecordsTable();
    }, 500)
    
  }
}


/*show solution */

const solutionButton = document.querySelector(".solveGame");
solutionButton.addEventListener("click", showSolution);

function showSolution() {
  resetGame();
  clearInterval(timerIsOn);
  canUserPlay = false;
  for(let i = 0; i < rowsNumber; i++) {
    for(let j = 0; j < rowsNumber; j++) {
      let cell = field.children[i].children[j];
      if (currentNonogramArray[i][j] === 1) {
        cell.classList.add("item__sp")
      }
    }
  }
  resetButton.classList.add("canOnlyReset");
  if (canUserPlay === false) {
    solutionButton.disabled = true;
    saveButton.disabled = true;
    continueButton.disabled = true;
  }
}

function arraysTheSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!arr1[i].every((val, index) => val === arr2[i][index])) {
      return false;
    }
  }

  return true;
}


function startTimeCounter() {
  if ((!timerIsOn)&&(canUserPlay)) {
      timerIsOn = setInterval(function () {
        secondsCounter = secondsCounter + 1; 
        if (secondsCounter === 60) {
          secondsCounter = 0;
          minutesCounter = minutesCounter + 1;
        }
        const formattedMinutes = minutesCounter < 10 ? `0${minutesCounter}` : `${minutesCounter}`;
        const formattedSeconds = secondsCounter < 10 ? `0${secondsCounter}` : `${secondsCounter}`;
  
        timer.innerText = `${formattedMinutes}:${formattedSeconds}`;
      }, 1000); 
  }
}

function clearField() {
  for (let i = 0; i < rowsNumber; i++) {
    for (let j = 0; j < rowsNumber; j++) {
      let cell = field.children[i].children[j];
      cell.classList.remove("item__sp", "item__cross");
    }
  }
}

function clearTips() {
  let topTips = document.querySelector(".tipsX");
  let topRows = topTips.childNodes;

  for (let i = 0; i < topRows.length; i++) {
    let columns = topRows[i].childNodes;
    for (let j = 0; j < columns.length; j++) {
      columns[j].innerText = '';
    }
  }

  let leftTips = document.querySelector(".tipsY");
  let leftRows = leftTips.childNodes;

  for (let i = 0; i < leftRows.length; i++) {
    let columns = leftRows[i].childNodes;
    for (let j = 0; j < columns.length; j++) {
      columns[j].innerText = '';
    }
  }

}

function handleNonogramEasyChange() {
  const select = document.getElementById("easyLevel");
  const selectedValue = select.value;
  switch (selectedValue) {
    case "dino":
      currentNonogramArray = dino;
      break;
    case "tower":
      currentNonogramArray = tower;
      break;
    case "mushroom":
      currentNonogramArray = mushroom;
      break;
    case "cat":
      currentNonogramArray = cat;
      break;
    case "skull":
      currentNonogramArray = skull;
      break;
    default:
      currentNonogramArray = dino; 
  }
  resetGame();
  clearTips();
  addNumbers();
}

function handleNonogramMeadiumChange() {
  const select = document.getElementById("mediumLevel");
  const selectedValue = select.value;
  switch (selectedValue) {
    case "hamster":
      currentNonogramArray = hamster;
      break;
    case "cup":
      currentNonogramArray = cup;
      break;
    case "camera":
      currentNonogramArray = camera;
      break;
    case "ghost":
      currentNonogramArray = ghost;
      break;
    case "yinAndYang":
      currentNonogramArray = yinAndYang;
      break;
    default:
      currentNonogramArray = hamster; 
  }
  resetGame();
  clearTips();
  addNumbers();
}

function handleNonogramHardChange() {
  const select = document.getElementById("hardLevel");
  const selectedValue = select.value;
  switch (selectedValue) {
    case "paw":
      currentNonogramArray = paw;
      break;
    case "jellyfish":
      currentNonogramArray = jellyfish;
      break;
    case "cow":
      currentNonogramArray = cow;
      break;
    case "chameleon":
      currentNonogramArray = chameleon;
      break;
    case "whales":
      currentNonogramArray = whales;
      break;
    default:
      currentNonogramArray = paw;
  }
  resetGame();
  clearTips();
  addNumbers();
}

function handleSizeChange() {
  const select = document.getElementById("sizeLevel");
  const easyForm = document.querySelector(".easyForm");
  const mediumForm = document.querySelector(".mediumForm");
  const hardForm = document.querySelector(".hardForm");

  const selectedValue = select.value;

  easyForm.classList.add("hide");
  mediumForm.classList.add("hide");
  hardForm.classList.add("hide");
  easyForm.classList.remove("show");
  mediumForm.classList.remove("show");
  hardForm.classList.remove("show");


  switch (selectedValue) {
    case "5x5":
      easyForm.classList.add("show");
      currentNonogramArray = dino;
      resetGame();
      clearInterval(timerIsOn);
      rowsNumber = 5;
      tipsMaxNumber = 3;
      setFormOption("easyLevel", currentNonogramArray);
      break;
    case "10x10":
      mediumForm.classList.add("show");
      currentNonogramArray = hamster;
      resetGame();
      clearInterval(timerIsOn);
      rowsNumber = 10;
      tipsMaxNumber = 4;
      setFormOption("mediumLevel", currentNonogramArray);
      break;
    case "15x15":
      hardForm.classList.add("show");
      currentNonogramArray = paw;
      resetGame();
      clearInterval(timerIsOn);
      rowsNumber = 15;
      tipsMaxNumber = 6;
      setFormOption("hardLevel", currentNonogramArray);
      break;
    default:
      easyForm.classList.add("show");
      rowsNumber = 5;
      tipsMaxNumber = 3;
      setFormOption("easyLevel", currentNonogramArray);
  }

  field.innerHTML = "";
  topTips.innerHTML = "";
  leftTips.innerHTML = "";
  createAllFields();
  addNumbers();

  function setFormOption(formId, value) {
    const form = document.getElementById(formId);
    const options = form.querySelectorAll(".option");
  
    options.forEach(option => option.removeAttribute("selected"));
  
    for (let i = 0; i < options.length; i++) {
      const optionValue = options[i].value;
      if (arrayMap[optionValue] === value) {
        options[i].setAttribute("selected", "selected");
        break;
      }
    }
  }


}




function addNumbers() {

    let topTips = document.querySelector(".tipsX");
    let topRows = topTips.childNodes;
  

    for (let i = 0; i < topRows.length; i++) {
      let columns = topRows[i].childNodes;
      for (let j = 0; j < columns.length; j++) {
        columns[j].innerText = '';

      }
    }

  /*create tips at the top*/
  let columns = topRows[0].childNodes.length;

  for (let j = 0; j < columns; j++) {
    let result = [];
    let count = 0;
    for (let i = 0; i < currentNonogramArray.length; i++) {
      if (currentNonogramArray[i][j] === 1) {
        count = count + 1;
      }
      if (count !== 0 && currentNonogramArray[i][j] === 0) {
        result.push(count);
        count = 0;
      }
      if (i === currentNonogramArray.length - 1) {
        if (count !== 0) result.push(count);
      }
    }

    result.reverse().forEach((value, index) => {
      topRows[topRows.length - 1 - index].childNodes[j].innerText = value;
    });
  }

  let leftTips = document.querySelector(".tipsY");
  let leftRows = leftTips.childNodes;


  for (let i = 0; i < leftRows.length; i++) {
    let columns = leftRows[i].childNodes;
    for (let j = 0; j < columns.length; j++) {
      columns[j].innerText = '';
    }
  }


  /*create tooltips on the left*/
  let columnsLeft = leftRows[0].childNodes.length;

  for (let j = 0; j < currentNonogramArray.length; j++) {
    let result = [];
    let count = 0;

    for (let i = 0; i < currentNonogramArray[j].length; i++) {
      if (currentNonogramArray[j][i] === 1) {
        count = count + 1;
      }
      if (count !== 0 && currentNonogramArray[j][i] === 0) {
        result.push(count);
        count = 0;
      }
      if (i === currentNonogramArray[j].length - 1 && count !== 0) {
        result.push(count);
      }
    }

    result.reverse().forEach((value, index) => {
      leftRows[j].childNodes[columnsLeft - index - 1].innerText = value;
    });
  }

  checkValues();

  function checkValues() {

    let themeLink = document.querySelector("#theme");
    let currentTheme = themeLink.href.includes("stylesDarkMode.css") ? "dark" : "light";

    
    let leftTips = document.querySelector(".tipsY");
    let leftRows = leftTips.childNodes;

    for (let i = 0; i < leftRows.length; i++) {
        let columns = leftRows[i].childNodes;

        for (let j = 0; j < columns.length; j++) {
 
            columns[j].removeAttribute("style");

            if (/^[1-9]|1[0-5]$/.test(columns[j].innerText.trim()) && columns[j].offsetWidth > 0) {
           
                columns[j].style.backgroundColor = (currentTheme === "dark") ? 'rgb(120, 95, 136)' : 'rgba(197, 255, 80, 0.621)';
            }
        }
    }

  
    let topTips = document.querySelector(".tipsX");
    let topRows = topTips.childNodes;

    for (let i = 0; i < topRows.length; i++) {
        let columns = topRows[i].childNodes;

        for (let j = 0; j < columns.length; j++) {
           
            columns[j].removeAttribute("style");

            
            if (/^[1-9]|1[0-5]$/.test(columns[j].innerText.trim()) && columns[j].offsetWidth > 0) {
              
                columns[j].style.backgroundColor = (currentTheme === "dark") ? 'rgb(120, 95, 136)' : 'rgba(197, 255, 80, 0.621)';
            }
        }
    }
}


}



