
const text = document.querySelector('.loading-text');
text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
