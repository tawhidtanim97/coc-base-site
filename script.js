// Go to TH page
function goTH(type){
  localStorage.setItem("type", type);
  window.location.href = "th.html";
}

// Open image preview (ZOOM)
function openPreview(src){
  let modal = document.createElement("div");
  modal.className = "img-modal";

  modal.innerHTML = `
    <img src="${src}">
  `;

  modal.onclick = () => modal.remove();

  document.body.appendChild(modal);
}