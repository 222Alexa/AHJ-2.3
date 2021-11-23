/* function sortValues(value) {
  let movie = document.querySelectorAll(".movie");
  let sort;
  value = value.substr(5);
  if (value === "title") {
    sort = [...movie].sort((prev, next) => {
      if (next.dataset.title > prev.dataset.title) return 1;
      if (next.dataset.title < prev.dataset.title) return -1;
    });
  } else {
    sort = [...movie].sort((prev, next) => {
      return Number(next.dataset[value]) - Number(prev.dataset[value]);
    });
  }

  return sort;
}
const data = 
[
    {
      "id": 26,
      "title": "Побег из Шоушенка",
      "imdb": 9.30,
      "year": 1994
    },
    {
      "id": 25,
      "title": "Крёстный отец",
      "imdb": 9.20,
      "year": 1972
    },
    {
      "id": 27,
      "title": "Крёстный отец 2",
      "imdb": 9.00,
      "year": 1974
    },
    {
      "id": 1047,
      "title": "Тёмный рыцарь",
      "imdb": 9.00,
      "year": 2008
    },
    {
      "id": 223,
      "title": "Криминальное чтиво",
      "imdb": 8.90,
      "year": 1994
    }
  ]
function sortValues(value) {// value брать из массива  tHeader.forEach(elem => arr.push(elem.textContent)) -> ['id', 'title', 'year', 'imdb']
  let sort;
  if (value === "title") {
  sort = [...data].sort((prev, next) => {
    if (next.title > prev.title) return 1;
    if (next.title < prev.title) return -1;
  });
} else {
  sort = [...data].sort((prev, next) => {
    return Number(next[value]) - Number(prev[value]);
  });
}

return sort;
}

function redrawTable(data) {
  data.forEach((elem) => {
    const template = `
<tr class="movie">
      <td>${elem.id}</td>
      <td>${elem.title}</td>
      <td>(${elem.year})</td>
      <td>imdb: ${elem.imdb.toFixed(2)}</td>
    </tr>`;
   document.querySelector('tbody').insertAdjacentHTML("beforeend", template);
  });
}

function   redrawList(sortArr) { //Перерисовка таблицы в соответствии с сортировкой
  let movie = document.querySelectorAll('.movie');
  
  movie.forEach((elem) => {
    document.querySelector("tbody").removeChild(elem);
  });
  redrawTable(sortArr);
  let rotateTriangle = [...document.querySelectorAll("th")].find((elem) =>
    elem.firstElementChild.classList.contains("triangle-up")
  );
  if (rotateTriangle) {
    rotateTriangle.firstElementChild.style.transform = "rotate(180deg)"; // добавить условие ротации, тк норм проходит только один раз
  }
}

function refresh() {//перерисовка с учетом задержки 2 сек
  let sort = sortValues(value) 
  redrawList(sort);

  sort = sort.reverse();
  setTimeout(() => {
    redrawList(sort);
  }, 2000);
}

function displayValue(arr, i) {
  if (i < arr.length) {
   let sort = sortValues(arr[i]);
   let movie = document.querySelectorAll(".movie");

   setTimeout(() => {
     sortValues(arr[i]);
     refresh();
     //triangle(arr[i].substr(5));
     displayValue(arr, [++i]);
   }, 4000);
 }


function triangle(itemName) {
  //добавляет треугольник

  let tHeader = document.querySelectorAll("th");
  
  [...tHeader].forEach((elem) => {
    elem.firstElementChild.classList.remove("triangle-up");
  });

  [...tHeader].forEach((elem) => {
    elem.firstElementChild.style.transform = "";
  });
  let findItem = [...tHeader].find((elem) => elem.textContent === itemName);

  findItem.firstElementChild.classList.add("triangle-up");

  return findItem;
}
/*function refresh(movie, sort) {
  ref(movie, sort);

  sort = sort.reverse();
  setTimeout(() => {
    ref(movie, sort);
  }, 2000);
}

let attrs = [...document.querySelector(".movie").getAttributeNames()];
*/
/* function ref(movie, sort) {
  let rotateTriangle = [...document.querySelectorAll("th")].find((elem) =>
    elem.firstElementChild.classList.contains("triangle-up")
  );
  if (rotateTriangle) {
    rotateTriangle.firstElementChild.style.transform = "rotate(180deg)"; // добавить условие ротации, тк норм проходит только один раз
  }

  movie.forEach((elem) => {
    document.querySelector("tbody").removeChild(elem);
  });
  sort.forEach((elem) => {
    document.querySelector("tbody").append(elem);
  });
}



function triangle(itemName) {
  //добавляет треугольник

  let tHeader = document.querySelectorAll("th");
  
  [...tHeader].forEach((elem) => {
    elem.firstElementChild.classList.remove("triangle-up");
  });

  [...tHeader].forEach((elem) => {
    elem.firstElementChild.style.transform = "";
  });
  let findItem = [...tHeader].find((elem) => elem.textContent === itemName);

  findItem.firstElementChild.classList.add("triangle-up");

  //console.log(findItem, 'элемент');
  return findItem;
}

function displayValue(arr, i) {
  //работает!!!
  //потому что в атрибутах еще и 'class', а он не нужен при сортировке

  if (i < arr.length) {
    let sort = sortValues(arr[i]);
    let movie = document.querySelectorAll(".movie");

    let timerId = setTimeout(() => {
      if (i < arr.length) {
        sortValues(arr[i]);
        refresh(movie, sort);
        triangle(arr[i].substr(5));
        displayValue(arr, [++i]);
        if (i === arr.length) {
          clearTimeout(timerId);
          i = 0;

          displayValue(attrs, 1);
        }
      }
    }, 4000);
  }
}

displayValue(attrs, 1);


function displayValue(arr, i) {
  //потому что в атрибутах еще и 'class', а он не нужен при сортировке

  if (i < arr.length) {
    let sort = sortValues(arr[i]);
    let movie = document.querySelectorAll(".movie");

    setTimeout(() => {
      sortValues(arr[i]);
      refresh(movie, sort);
      triangle(arr[i].substr(5));
      displayValue(arr, [++i]);
    }, 4000);
  }
}
*/
