let current_word;
let current_index;
let current_count;
let right_letters;
let gameFinished = false;
let original_vocabulary = vocabulary.slice();

let images_url = ["assets/doll/start.png", "assets/doll/head.png", "assets/doll/body.png", "assets/doll/left-hand.png",
 "assets/doll/right-hand.png", "assets/doll/left-leg.png", "assets/doll/right-leg.png"];
/* generate buttons for keybord */
for (let i = 0; i <= 25; i++) {
  const keyboard__button = document.createElement("button");
  const letter = String.fromCharCode(i+97);

  keyboard__button.innerHTML = letter;

  keyboard__button.classList.add("keyboard__btn");
  keyboard__button.setAttribute("data-letter", letter)
  keyboard.appendChild(keyboard__button);
  keyboard__button.addEventListener("click", function(e) {
    if (!gameFinished) {
    const clickedButton = e.target;
    const clickedLetter = clickedButton.getAttribute("data-letter");
    findLetter(clickedButton, clickedLetter);
    }
  });
}

document.addEventListener('keydown', function(event) {
  const key = event.key;

  const russianLetters = /[А-ЯЁа-яё]/;

  if (russianLetters.test(key)) {
    alert('Загаданное слово на английском языке. Пожалуйста, поменяйте раскладку клавиатуры с русской на английскую');
  }
});

document.addEventListener("keydown", e => {
  if (!gameFinished) {
  const pressedKey = e.key.toLowerCase();
  const virtualButton = document.querySelector(`.keyboard__btn[data-letter="${pressedKey}"]`);

  if (virtualButton && !virtualButton.disabled) {
    findLetter(virtualButton, pressedKey);
  }
  }
});

function resetGame() {
  vocabulary = original_vocabulary.slice();
}

function resetAll() {
  gameFinished = false;
  vocabulary.splice(current_index, 1);
  right_letters = [];
  current_count = 0;
  hangman__window__img.src = `${images_url[current_count]}`;
  count.innerText = `${current_count} / 6`;
  keyboard.querySelectorAll("button").forEach(value => value.disabled = false);
  guessing__word.innerHTML = current_word.split("").map(()=> `<li class="guessing__word-part"></li>`).join("");
  hangman__modal.classList.remove("visible");
}

/* get random word and description for him */

function randomize() {
  if (vocabulary.length === 0) {
    resetGame();
    alert("Поздравляю! Вы прошли всю игру! Но можете продолжить играть дальше :)");
  } else {
    let index = Math.floor(Math.random() * vocabulary.length);
    current_index = index;
    let word = vocabulary[index].word;
    current_word = word;
    let hint = vocabulary[index].hint;
    current_hint.innerText = hint;
    resetAll();
    console.log(word);
  }
}

function findLetter(button, letter) {
  if (!gameFinished) {
  if (current_word.includes(letter)) {
    for (let i = 0; i < current_word.length; i ++) {
      if (current_word[i] === letter) {
        right_letters.push(current_word[i]);
        guessing__word.querySelectorAll("li")[i].innerText = letter;
        guessing__word.querySelectorAll("li")[i].classList.add("guessing__word-part_guessed");
        button.disabled = true;
      }
    }
  } else {
    current_count = current_count + 1;
    if (current_count <= 6) {
      hangman__window__img.src = `${images_url[current_count]}`;
      count.innerText = `${current_count} / 6`;
    }
    button.disabled = true;
  }

  if (right_letters.length === current_word.length) {
    gameFinish(true);
  }

  if (current_count === 6) {
    gameFinish(false);
  }
}
}

function gameFinish (result) {
  gameFinished = true;
  setTimeout(() => {
    hangman__modal.classList.add("visible");
    if (result === true) {
      modal_text.classList.add("win");
      modal_text.innerText = "Congratulations!";
      emoji.src = "assets/png/smile.png";
      modal_text.appendChild(emoji);

      text.innerHTML = `You find the word: <b>${current_word}</b>`;
      let text__b = document.getElementsByTagName("b")[0];
      text__b.classList.add("right-word");
      playButton = document.querySelector(".play-again");
    }
    else {
      modal_text.classList.add("lose");
      modal_text.innerText = "Game over!";
      emoji.src = "assets/png/sad.png";
      modal_text.appendChild(emoji);

      text.innerHTML = `The correct word was: <b>${current_word}</b>`;
      let text__b = document.getElementsByTagName("b")[0];
      text__b.classList.add("right-word");
      playButton = document.querySelector(".play-again");
    }
  },300)
}

randomize();
button__play.addEventListener("click", randomize)