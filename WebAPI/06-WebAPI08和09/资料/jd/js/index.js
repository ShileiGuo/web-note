var newsT = document.getElementById('newsT');
var flag = document.getElementById('flag');
var newsContainer = document.getElementById('newsContainer');
for (var i = 0, len = newsT.children.length; i < len; i++) {
  var link = newsT.children[i];
  link.setAttribute('index', i);
  if (i === 0 || i ===1) {
    link.onmouseover = linkMouseOver;
  }
}

function linkMouseOver() {
  animate(flag, this.offsetLeft - 3);

  for (var i = 0, len = newsContainer.children.length; i < len; i++) {
    var div = newsContainer.children[i];
    div.style.display = 'none';
  }
  var index = parseInt(this.getAttribute('index'));
  newsContainer.children[index].style.display = 'block';
}

