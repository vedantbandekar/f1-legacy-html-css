const cars = {


2024:[

{
name:"Ferrari SF-24",
team:"Ferrari",
driver:"Charles Leclerc / Carlos Sainz",
engine:"Ferrari 066/12",
livery:"Red carbon design"
},


{
name:"RB20",
team:"Red Bull Racing",
driver:"Max Verstappen / Sergio Perez",
engine:"Honda RBPT",
livery:"Dark blue aerodynamic livery"
},


{
name:"Mercedes W15",
team:"Mercedes AMG",
driver:"Lewis Hamilton / George Russell",
engine:"Mercedes PU106",
livery:"Black silver performance design"
}


],



2023:[

{
name:"RB19",
team:"Red Bull Racing",
driver:"Max Verstappen",
engine:"Honda RBPT",
livery:"Classic Red Bull blue"
}

]

};

function showYear(year){


let display =
document.getElementById("car-display");


display.innerHTML = "";


cars[year].forEach(car => {


display.innerHTML += `


<div class="car-card" onclick="showCar('${car.name}')">


<h2>
${car.name}
</h2>


<p>
${car.team}
</p>


</div>


`;


});


}

function showCar(name){


let preview =
document.getElementById("preview");



for(let year in cars){


for(let car of cars[year]){


if(car.name === name){


preview.innerHTML = `


<h2>
${car.name}
</h2>


<h3>
${car.team}
</h3>


<p>
Driver:
${car.driver}
</p>


<p>
Engine:
${car.engine}
</p>


<p>
Livery:
${car.livery}
</p>



`;


}

}

}

}