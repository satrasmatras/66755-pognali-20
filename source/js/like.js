const likeButtons = document.querySelectorAll('.card__like');

likeButtons.forEach(likeButton => {
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like--checked')
  })
});
