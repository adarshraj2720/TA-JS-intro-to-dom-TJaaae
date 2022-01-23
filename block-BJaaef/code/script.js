let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
  }, []);
  
  let dataUl = document.querySelector(".list");
  
  allPeople.forEach((person) => {
    let dataLi = document.createElement("li");
    dataLi.classList.add("liClass");
  
    let pics = document.createElement("img");
    pics.src = person.image;
  
    let dataName = document.createElement("h5");
    dataName.innerText = person.name;
  
    let dataDescri = document.createElement("p");
    dataDescri.innerText = person.description;
    
    let button = document.createElement("a");
    button.classList.add("btn");
    button.innerText = "Learn More!"
    button.href = person.wikiLink;
  
    let div = document.createElement("div");
    div.classList.add("divClass");
    div.append(pics,dataName)
    dataLi.append(div, dataDescri, button);
    dataUl.append(dataLi);
    })
  