document.body.innerHTML = `<div class = "heading-container">
<h1><u>Cat Info</u></h1>
<img class = "icon" src ="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg" width = "60px" height = "70px">
</div>
<div id = "mainContainer" class = "main-container"></div>`

async function getData(){
    try {
        const data = await fetch("https://cat-fact.herokuapp.com/facts");
        const cats = await data.json();
        mainContainer.innerHTML = "";
        cats.forEach(myFunc)
        
        function myFunc(cat){
            displayData(cat)
        } 

    } catch (error) {
        console.log("ERR");
    }
}

getData();

const displayData=(obj) =>{
    mainContainer.innerHTML += 
    `<div class = "container"
    <h3 class="blue">Cat type:<span>${obj.type}</span></h3>
    <h3 class="para blue">Cat createdAt:<span>${obj.createdAt}</span></h3>
    <h3 class="para blue">Cat ID:<span>${obj._id}</span></h3>
    <h3 class ="para blue">Cat text:<span>${obj.text}</span></h3>
    </div>`
}