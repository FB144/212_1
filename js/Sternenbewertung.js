  // ⭐ Sternebewertung
  document.querySelectorAll('.stars').forEach(container => {
    const id = container.dataset.id;
    const stars = container.querySelectorAll('span');
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = parseInt(star.dataset.star);
        stars.forEach(s => {
          s.classList.toggle('active', s.dataset.star <= rating);
        });
        document.getElementById(`rating-count-${id}`).textContent = `Bewertung: ${rating} Sterne`;
      });
    });
  });