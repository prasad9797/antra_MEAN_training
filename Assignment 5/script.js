document.addEventListener("DOMContentLoaded", (event) => {
  getTodo("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((json) => {
      json.slice(0, 10).forEach((element) => addToList(element.title));
    })
    .catch((e) => console.error("Something went wrong with the API:", e));
});

function getTodo(url) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve({
          json: () => JSON.parse(xhttp.response),
        });
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });
}

function addToList(item) {
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  const task = document.createTextNode(item);
  li.appendChild(task);
  ul.appendChild(li);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    addToList(inputValue);
  }
  document.getElementById("myInput").value = "";
}
