// const data = '[{"id": 1, "mark": "Honda", "price": 300, "stock":2},{"id": 2, "mark": "Yamaha", "price": 250, "stock":1},{"id": 3, "mark": "Mercury", "price": 310, "stock":2},{"id": 4, "mark": "Suzuky", "price": 210, "stock":1},{"id": 5, "mark": "Toyota", "price": 200, "stock":1},{"id": 6, "mark": "Chino", "price": 150, "stock":3}]'


$(document).ready(function () {
    const APIURL = "http://hp-api.herokuapp.com/api/characters/students";
    
    
    
    $(".contentListHarry").prepend(`<button id="btnListaHarry">Personajes de HarryPotter</button>`);
    
    $("#btnListaHarry").click(() => {
        $.ajax({
            method: "GET",
            url: APIURL,
            success: function (res) {
                for(const {name, gender, house} of res){
                    $(".harrysList").append(`
                    <div class= "card">
                    <div class="sizeName">${name}</div>
                    <div>${gender}</div>
                    <div>${house}</div> 
                    </div>`);
                };
            }
        });
    });


    const newStudents = {
        name: 'Gonzalo', 
        gender: 'male', 
        house: 'Slytherin'};
    
    const URL = "https://jsonplaceholder.typicode.com/posts";
    
    $(".contentListHarry").prepend(`<button id="postObjet">Post new Student</button>`);
    
    $("#postObjet").click (() =>{
        $.ajax({
            method: "POST",
            url: URL,
            data: newStudents,
            success: function (res) {
                $(".postStudents").append(`
                <div class="textPost"> El estudiante ${res.name} de ${res.house} fue agregado exitosamente</div>
                `);  
            }
        })
    });
});




