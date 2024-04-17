/* modal */
const hangman = document.createElement("div");
hangman.classList.add("hangman");
document.body.appendChild(hangman);

const hangman__modal = document.createElement("div");
hangman__modal.classList.add("hangman-modal");
hangman.appendChild(hangman__modal);

const hangman__modal__result = document.createElement("div");
hangman__modal__result.classList.add("hangman-modal__result");
hangman__modal.appendChild(hangman__modal__result);

const modal_text = document.createElement("h3");
modal_text.classList.add("lose");
modal_text.innerText = "Game over!";
hangman__modal__result.appendChild(modal_text);

const emoji = document.createElement("img");
emoji.classList.add("emoji");
emoji.src = "assets/png/sad.png";
emoji.alt = "smile";
emoji.width = "20";
emoji.height = "20";

const text = document.createElement("p");
text.classList.add("text");
text.innerText = "The correct word was: ";
hangman__modal__result.appendChild(text);

const text__b = document.createElement("b");
text__b.classList.add("right-word");
text__b.innerText = "bicycle";
text.appendChild(text__b);

const button__play = document.createElement("button");
  button__play.innerText = "Play again";
  button__play.classList.add("play-again");
  hangman__modal__result.appendChild(button__play);

  /* pic and title */
const hangman__window = document.createElement("div");
hangman__window.classList.add("hangman-window");
hangman.appendChild(hangman__window);

const hangman__window__img = document.createElement("img");
hangman__window__img.classList.add("hangman-window__img");
hangman__window__img.src = "assets/doll/start.png";
hangman__window__img.alt = "hangman_start-img";
hangman__window.appendChild(hangman__window__img);

const hangman__window__title = document.createElement("h1");
hangman__window__title.classList.add("hangman-window__title");
hangman__window__title.innerText = "Hangman game";
hangman__window.appendChild(hangman__window__title);

/* question and word */
const guessing = document.createElement("div");
guessing.classList.add("guessing");
hangman.appendChild(guessing);

const guessing__word = document.createElement("ul");
guessing__word.classList.add("guessing__word");
guessing.appendChild(guessing__word);

const guessing__title__hint = document.createElement("h2");
guessing__title__hint.classList.add("guessing__title");
guessing__title__hint.innerText = "Hint: ";
const current_hint = document.createElement("b");
current_hint.innerText = "A human-powered vehicle with two wheels";
current_hint.classList.add("hint");
guessing__title__hint.appendChild(current_hint)
guessing.appendChild(guessing__title__hint);


const guessing__title__incorrect = document.createElement("h2");
guessing__title__incorrect.classList.add("guessing__title");
guessing__title__incorrect.innerText = "Incorrect guesses: ";
guessing.appendChild(guessing__title__incorrect);

const count = document.createElement("b");
count.classList.add("count");
count.innerText = "0 / 6";
guessing__title__incorrect.appendChild(count);

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
guessing.appendChild(keyboard);
