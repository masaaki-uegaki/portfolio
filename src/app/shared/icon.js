module.exports = {
  exec: () => {
    let e = document.getElementById('icon');
    if (e) e.setAttribute('src', `assets/icon/icon-${Math.floor(Math.random() * (11 + 1 - 1)) + 1}.png`);
  }
};
