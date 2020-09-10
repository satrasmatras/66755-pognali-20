const likeButtons = document.querySelectorAll('.card__like');

if (likeButtons) {
  likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('card__like--checked')
    });
  });
}
