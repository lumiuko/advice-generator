const adviceId = document.querySelector('#advice-id');
const adviceBody = document.querySelector('.card-body');
const randomizeBtn = document.querySelector('.randomize-advice');
const btnIcon = document.querySelector('#btn-icon');

const API_URL = 'https://api.adviceslip.com/advice';

async function getAdvice() {
  const diceIcon = btnIcon.src;
  try {
    btnIcon.src = 'images/loader.svg';
    const res = await fetch(API_URL, { cache: 'no-cache' });
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    const { id, advice } = data.slip;
    adviceId.textContent = id;
    adviceBody.textContent = `“${advice}”`;
  } catch (error) {
    console.error(`Error: ${error}`);
  } finally {
    btnIcon.src = diceIcon;
  }
}

getAdvice();
randomizeBtn.addEventListener('click', getAdvice);
