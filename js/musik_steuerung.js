  // 🎵 Musiksteuerung
  const music = document.getElementById('bg-music');
  const btn = document.getElementById('music-btn');
  let playing = false;

  btn.addEventListener('click', () => {
    if (!playing) {
      music.play();
      btn.textContent = "⏸️ Musik pausieren";
      playing = true;
    } else {
      music.pause();
      btn.textContent = "🎵 Musik starten";
      playing = false;
    }
  });