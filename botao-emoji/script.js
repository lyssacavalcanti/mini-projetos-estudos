const emojiStatus = document.getElementById("emojiStatus");
const emoji = document.getElementById("emoji");
emojiStatus.addEventListener('click', () => {
  console.log(emojiStatus.checked);
  if (emojiStatus.checked == true) {
    emoji.innerHTML = '😊';
  } else {
    emoji.innerHTML = '😣';
  }
});