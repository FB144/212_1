// Kommentar-System
document.querySelectorAll('.comment-section').forEach(section => {
  const textarea = section.querySelector('textarea');
  const button = section.querySelector('.submit-comment');
  const list = section.querySelector('.comments-list');

  button.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (text !== '') {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment', 'p-2', 'bg-light', 'rounded', 'mt-2');
      commentDiv.textContent = text;
      list.appendChild(commentDiv);
      textarea.value = '';
    }
  });
});
