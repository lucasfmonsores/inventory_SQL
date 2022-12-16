function fetchApiData() {
  fetch("http://localhost:3000/person")
    .then((response) => response.json())
    .then((data) => {
      const list = document.querySelector("#fill_list");

      data.map((item) => {

        const li = document.createElement("li");
    
        li.setAttribute("id", item.id);
        li.innerHTML = `NOME : ${item.name}  <br> CIDADE : ${item.city} <br>`;
        list.appendChild(li);
      });
    });
}


