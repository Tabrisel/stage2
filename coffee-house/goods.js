import data from './products.json' assert { type: "json" };
let button_load = document.querySelector(".buttonLoad");
let all_is_show = "no";
let choice = "coffee";

/*create forms*/
function create_blocks (value, word) {
    for(let i = 0; i < value; i = i + 1) {
    let goods = document.querySelector(".manyChoicesDrinks");
    let div = document.createElement('div');
    div.classList.add("boxPic");
    div.classList.add(`${word}${[i]}`)
    goods.appendChild(div);
    }


    let boxPic = document.querySelectorAll(".boxPic");
    for(let i = 0; i < boxPic.length; i = i + 1) {
    let divImg = document.createElement('div');
    divImg.classList.add("boxImg");
    boxPic[i].appendChild(divImg);

    let content = document.createElement('div');
    content.classList.add("contentDrink");
    boxPic[i].appendChild(content);

    let title_and_words = document.createElement('div');
    title_and_words.classList.add("titleAndWords");
    content.appendChild(title_and_words);

    let title_for_drink = document.createElement('div');
    title_for_drink.classList.add("titleForDrink");
    title_and_words.appendChild(title_for_drink);

    let title_h3 = document.createElement('h3');
    title_h3.classList.add("titles");
    title_for_drink.appendChild(title_h3);


    let description = document.createElement('div');
    description.classList.add("wordsAboutDrink");
    title_and_words.appendChild(description);

    let description_p = document.createElement('p');
    description_p.classList.add("description");
    description.appendChild(description_p);

    let price = document.createElement('div');
    price.classList.add("price");
    content.appendChild(price);

    let value_price = document.createElement("h3");
    value_price.classList.add("value_price");
    price.appendChild(value_price);
    }
}

/* for change */

coffeeStatus();



/*coffee */

function coffeeStatus() {
    let goods = document.querySelector(".manyChoicesDrinks");
    goods.innerHTML = "";
    create_blocks(8, "coffee");
    

    let all_titles = document.querySelectorAll(".titles");
    for(let i = 0; i < all_titles.length; i = i + 1) {
        all_titles[i].textContent = `${data[i].name}`;
    }


    let all_descriptions = document.querySelectorAll(".description");
    for(let i = 0; i < all_descriptions.length; i = i + 1) {
        all_descriptions[i].textContent = `${data[i].description}`;
    }

    let all_prices = document.querySelectorAll(".value_price");
    for(let i = 0; i < all_prices.length; i = i + 1) {
        all_prices[i].textContent = `$${data[i].price}`;
    }

    const folders_images_coffee = ["url(webp/coffee-1.webp)", "url(webp/coffee-2.webp)", "url(webp/coffee-3.webp)", "url(webp/coffee-4.webp)",
    "url(webp/coffee-5.webp)", "url(webp/coffee-6.webp)", "url(webp/coffee-7.webp)", "url(webp/coffee-8.webp)"];

    let box_images = document.querySelectorAll(".boxImg");
    for(let i = 0; i < box_images.length; i = i + 1) {
        
    box_images[i].style.backgroundImage = `${folders_images_coffee[i]}`;
    }
    button_load.style.display = "flex";
}

/*tea*/


function teaStatus() {
    let goods = document.querySelector(".manyChoicesDrinks");
    goods.innerHTML = "";
    create_blocks(4, "tea");

let all_titles = document.querySelectorAll(".titles");
for(let i = 0; i < 4; i = i + 1) {
    let count = 8;
    all_titles[i].textContent = `${data[i + count].name}`;
}

let all_descriptions = document.querySelectorAll(".description");
for(let i = 0; i < 4; i = i + 1) {
    let count = 8;
    all_descriptions[i].textContent = `${data[i + count].description}`;
}

let all_prices = document.querySelectorAll(".value_price");
for(let i = 0; i < 4; i = i + 1) {
    let count = 8;
    all_prices[i].textContent = `$${data[i + count].price}`;
}

let box_images = document.querySelectorAll(".boxImg");
const folders_images_tea = ["url(webp/tea-1.webp)", "url(webp/tea-2.webp)", "url(webp/tea-3.webp)", "url(webp/tea-4.webp)"];
for(let i = 0; i < box_images.length; i = i + 1) {
    box_images[i].style.backgroundImage = `${folders_images_tea[i]}`;
    }

    button_load.style.display = "none";
}

/*desserts*/

function dessertStatus() {
    let goods = document.querySelector(".manyChoicesDrinks");
    goods.innerHTML = "";
    create_blocks(8, "dessert");

    let all_titles = document.querySelectorAll(".titles");
    for(let i = 0; i < 8; i = i + 1) {
        let count = 12;
        all_titles[i].textContent = `${data[i + count].name}`;
    }

    let all_descriptions = document.querySelectorAll(".description");
    for(let i = 0; i < all_descriptions.length; i = i + 1) {
        let count = 12;
        all_descriptions[i].textContent = `${data[i + count].description}`;
    }

    let all_prices = document.querySelectorAll(".value_price");
    for(let i = 0; i < all_prices.length; i = i + 1) {
        let count = 12;
        all_prices[i].textContent = `$${data[i + count].price}`;
    }

    const folders_images_desserts = ["url(webp/dessert-1.webp)", "url(webp/dessert-2.webp)", "url(webp/dessert-3.webp)", 
    "url(webp/dessert-4.webp)", "url(webp/dessert-5.webp)", "url(webp/dessert-6.webp)", "url(webp/dessert-7.webp)", "url(webp/dessert-8.webp)"]

    let box_images = document.querySelectorAll(".boxImg");
    for(let i = 0; i < box_images.length; i = i + 1) {
        
        box_images[i].style.backgroundImage = `${folders_images_desserts[i]}`;
    }

    button_load.style.display = "flex";

}

button_load.addEventListener("click", () => {
    (all_is_show === "no") ? all_is_show = "yes" : all_is_show = "no";
    if (all_is_show === "yes") {
        let boxPic = document.querySelectorAll(".boxPic");
        for(let i = 0; i < boxPic.length; i = i + 1) {
        boxPic[i].style.display = "flex";
        }
        button_load.style.display = "none";
    }
})

let boxPic = document.querySelectorAll(".boxPic");
let menu_modal = document.querySelector(".modal_window");
let background_modal = document.querySelector(".background_modal");
let close_button = document.querySelector(".button_close");


background_modal.addEventListener("click", event => {
    if (event.target !== menu_modal && event.target === background_modal) {
    menu_modal.classList.remove("menu_visible");
    background_modal.classList.remove("menu_visible_back");
    document.body.style.overflowY = 'visible';
    }
})

close_button.addEventListener("click", () => {
    menu_modal.classList.remove("menu_visible");
    background_modal.classList.remove("menu_visible_back");
    document.body.style.overflowY = 'visible';
})


/* for first modal card on coffee */

    for(let i = 0; i < boxPic.length; i = i + 1) {
        boxPic[i].addEventListener("click", () => {
            let image = document.querySelector(".img_modal");
            let title = document.querySelector(".sp_title");
            let definition = document.querySelector(".sp_definition");
            let price = document.querySelector(".price");

            let s_base = document.getElementById("size_S_choice");
            s_base.checked = true;

            menu_modal.classList.add("menu_visible");
            background_modal.classList.add("menu_visible_back");
            document.body.style.overflowY = "hidden";

        if (choice === "coffee") {
            let count_price = `${data[i].price}`;
            const folders_images_coffee = ["url(webp/coffee-1.webp)", "url(webp/coffee-2.webp)", "url(webp/coffee-3.webp)", "url(webp/coffee-4.webp)",
        "url(webp/coffee-5.webp)", "url(webp/coffee-6.webp)", "url(webp/coffee-7.webp)", "url(webp/coffee-8.webp)"];

            image.style.backgroundImage = `${folders_images_coffee[i]}`;
            title.innerHTML = `${data[i].name}`;
            definition.innerHTML = `${data[i].description}`;
            price.innerHTML = `$${data[i].price}`;

            const checkbox = document.getElementsByName('additives');
                    checkbox.forEach(function(check_value){
                        check_value.checked = false});


            document.body.addEventListener("change", function (event) {
                let price = document.querySelector(".price");
                let target = event.target;
                switch (target.id) {
                    case "size_S_choice":
                                price.innerHTML = `$${data[i].price}`;
                                count_price = `${data[i].price}`;
                                count_checkbox = 0;
                                checkbox.forEach(function(check_value){
                                check_value.checked = false});
                                break;
                        
                    case "size_M_choice":
                                price.innerHTML = `$${(Number(data[i].price) + 0.50).toFixed(2)}`;
                                count_price = `${(Number(data[i].price) + 0.50).toFixed(2)}`;
                                count_checkbox = 0;
                                checkbox.forEach(function(check_value){
                                check_value.checked = false});
                                break;
                    
                    case "size_L_choice":
                                price.innerHTML = `$${(Number(data[i].price) + 1).toFixed(2)}`;
                                count_price = `${(Number(data[i].price) + 1).toFixed(2)}`;
                                count_checkbox = 0;
                                checkbox.forEach(function(check_value){
                                check_value.checked = false});
                                break;
                        
                }})
                let count_checkbox = 0;

                        checkbox.forEach(function(check_value){
                        check_value.addEventListener('change', (event) => {

                            if (check_value.checked == true) {
                                count_checkbox = Number(count_checkbox) + 0.50;
                            } else { 
                                count_checkbox = Number(count_checkbox) - 0.50;
                            }
                            price.innerHTML = `$${(Number(count_price) + count_checkbox).toFixed(2)}`;
                            })})
        }
    })

    }

/* for changin cards */

document.body.addEventListener("change", function (event) {
        let target = event.target;
        switch (target.id) {
            case "coffee_choice":
                choice = "coffee";

                coffeeStatus();
                break;
                
            case "tea_choice":
                choice = "tea";

                teaStatus();
                break;
            
            case "dessert_choice":
                choice = "dessert";

                dessertStatus();
                break;
                
        }

        boxPic = document.querySelectorAll(".boxPic");
        for(let i = 0; i < boxPic.length; i = i + 1) {
                boxPic[i].addEventListener("click", () => {
                    let image = document.querySelector(".img_modal");
                    let title = document.querySelector(".sp_title");
                    let definition = document.querySelector(".sp_definition");
                    let price = document.querySelector(".price");
                    let s_base = document.getElementById("size_S_choice");
                    s_base.checked = true;

                    menu_modal.classList.add("menu_visible");
                    background_modal.classList.add("menu_visible_back");
                    document.body.style.overflowY = "hidden";
            
                    
                    if (choice === "coffee") {
                    let count_price = `${data[i].price}`;
                    
                    const folders_images_coffee = ["url(webp/coffee-1.webp)", "url(webp/coffee-2.webp)", "url(webp/coffee-3.webp)", "url(webp/coffee-4.webp)",
                "url(webp/coffee-5.webp)", "url(webp/coffee-6.webp)", "url(webp/coffee-7.webp)", "url(webp/coffee-8.webp)"];
            
                    image.style.backgroundImage = `${folders_images_coffee[i]}`;
                    title.innerHTML = `${data[i].name}`;
                    definition.innerHTML = `${data[i].description}`;
                    price.innerHTML = `$${data[i].price}`;

                    let grams_for_dessert = document.querySelectorAll(".grams_dessert");
                        grams_for_dessert[0].innerHTML = "200 ml";
                        grams_for_dessert[1].innerHTML = "300 ml";
                        grams_for_dessert[2].innerHTML = "400 ml";

                    let add_for_dessert = document.querySelectorAll(".dessert_add_special");
                    add_for_dessert[0].innerHTML = "Sugar";
                    add_for_dessert[1].innerHTML = "Cinnamon";
                    add_for_dessert[2].innerHTML = "Syrup";

                    document.querySelector(".additives_buttons .circle2").style.marginLeft = "";

                    let all_circles = document.querySelectorAll(".change");
                    for(let i = 0; i < all_circles.length; i = i + 1) {
                        all_circles[i].classList.remove("forCake");
                    }

                    document.querySelector(".modal_window").classList.remove("tea_modal_mobile");
                    document.querySelector(".modal_window").classList.remove("tea_modal_tablet");

                    document.querySelector(".modal_window").classList.remove("dessert_modal_mobile");
                    document.querySelector(".modal_window").classList.remove("dessert_modal_tablet");
                    document.querySelector(".sizes_buttons").classList.remove("dessert_sizes_buttons");
                    document.querySelector(".sizes").classList.remove("dessert_tablet_sizes");

                    const checkbox = document.getElementsByName('additives');
                    checkbox.forEach(function(check_value){
                        check_value.checked = false});

                    document.body.addEventListener("change", function (event) {
                        let price = document.querySelector(".price");
                        let target = event.target;
                        switch (target.id) {
                            case "size_S_choice":
                                price.innerHTML = `$${data[i].price}`;
                                count_price = `${data[i].price}`;
                                count_checkbox = 0;
                                checkbox.forEach(function(check_value){
                                    check_value.checked = false});
                                break;
                                
                            case "size_M_choice":
                                price.innerHTML = `$${(Number(data[i].price) + 0.50).toFixed(2)}`;
                                count_price = `${(Number(data[i].price) + 0.50).toFixed(2)}`;
                                count_checkbox = 0;
                                checkbox.forEach(function(check_value){
                                    check_value.checked = false});
                                break;
                            
                            case "size_L_choice":
                                price.innerHTML = `$${(Number(data[i].price) + 1).toFixed(2)}`;
                                count_price = `${(Number(data[i].price) + 1).toFixed(2)}`;
                                count_checkbox = 0;
                                checkbox.forEach(function(check_value){
                                    check_value.checked = false});
                                break;
                                
                        }})
                        let count_checkbox = 0;

                        checkbox.forEach(function(check_value){
                        check_value.addEventListener('change', (event) => {

                            if (check_value.checked == true) {
                                count_checkbox = Number(count_checkbox) + 0.50;
                            } else { 
                                count_checkbox = Number(count_checkbox) - 0.50;
                            }
                            price.innerHTML = `$${(Number(count_price) + count_checkbox).toFixed(2)}`;
                            })})
                    
                }

                if (choice === "tea") {
                    let count = 8;
                    let count_price = `${data[i + count].price}`;
                    const folders_images_tea = ["url(webp/tea-1.webp)", "url(webp/tea-2.webp)", "url(webp/tea-3.webp)", "url(webp/tea-4.webp)"];
                    image.style.backgroundImage = `${folders_images_tea[i]}`;
                    title.innerHTML = `${data[i + count].name}`;
                    definition.innerHTML = `${data[i + count].description}`;
                    price.innerHTML = `$${data[i + count].price}`;

                    let grams_for_dessert = document.querySelectorAll(".grams_dessert");
                    grams_for_dessert[0].innerHTML = "200 ml";
                    grams_for_dessert[1].innerHTML = "300 ml";
                    grams_for_dessert[2].innerHTML = "400 ml";


                    let add_for_dessert = document.querySelectorAll(".dessert_add_special");
                    add_for_dessert[0].innerHTML = "Sugar";
                    add_for_dessert[1].innerHTML = "Lemon";
                    add_for_dessert[2].innerHTML = "Syrup";

                    let all_circles = document.querySelectorAll(".change");
                    for(let i = 0; i < all_circles.length; i = i + 1) {
                        all_circles[i].classList.remove("forCake");
                    }


                    document.querySelector(".additives_buttons .circle2").style.marginLeft = "-36px";

                    document.querySelector(".modal_window").classList.add("tea_modal_mobile");
                    document.querySelector(".modal_window").classList.add("tea_modal_tablet");

                    document.querySelector(".modal_window").classList.remove("dessert_modal_mobile");
                    document.querySelector(".modal_window").classList.remove("dessert_modal_tablet");
                    document.querySelector(".sizes_buttons").classList.remove("dessert_sizes_buttons");
                    document.querySelector(".sizes").classList.remove("dessert_tablet_sizes");



                    const checkbox = document.getElementsByName('additives');
                    checkbox.forEach(function(check_value){
                        check_value.checked = false});

                    document.body.addEventListener("change", function (event) {
                        let price = document.querySelector(".price");
                        let target = event.target;
                        switch (target.id) {
                            case "size_S_choice":
                                price.innerHTML = `$${data[i + count].price}`;
                                count_price = `${data[i + count].price}`;
                                count_checkbox = 0;
                                checkbox.forEach(function(check_value){
                                    check_value.checked = false});
                                break;
                                
                            case "size_M_choice":
                                price.innerHTML = `$${(Number(data[i + count].price) + 0.50).toFixed(2)}`;
                                count_price = `${(Number(data[i + count].price) + 0.50).toFixed(2)}`;
                                count_checkbox = 0;
                                checkbox.forEach(function(check_value){
                                    check_value.checked = false});
                                break;
                            
                            case "size_L_choice":
                                price.innerHTML = `$${(Number(data[i + count].price) + 1).toFixed(2)}`;
                                count_price = `${(Number(data[i + count].price) + 1).toFixed(2)}`;
                                count_checkbox = 0;
                                checkbox.forEach(function(check_value){
                                    check_value.checked = false});
                                break;
                                
                        }})
                        let count_checkbox = 0;

                    
                        checkbox.forEach(function(check_value){
                        check_value.addEventListener('change', (event) => {

                            if (check_value.checked == true) {
                                count_checkbox = Number(count_checkbox) + 0.50;
                            } else { 
                                count_checkbox = Number(count_checkbox) - 0.50;
                            }
                            price.innerHTML = `$${(Number(count_price) + count_checkbox).toFixed(2)}`;
                            })})
                }

                if (choice === "dessert") {
                    let count = 12;
                    let count_price = `${data[i + count].price}`;
                    const folders_images_desserts = ["url(webp/dessert-1.webp)", "url(webp/dessert-2.webp)", "url(webp/dessert-3.webp)", 
            "url(webp/dessert-4.webp)", "url(webp/dessert-5.webp)", "url(webp/dessert-6.webp)", "url(webp/dessert-7.webp)", "url(webp/dessert-8.webp)"];
                    image.style.backgroundImage = `${folders_images_desserts[i]}`;
                    title.innerHTML = `${data[i + count].name}`;
                    definition.innerHTML = `${data[i + count].description}`;
                    price.innerHTML = `$${data[i + count].price}`;

                    let grams_for_dessert = document.querySelectorAll(".grams_dessert");

                        grams_for_dessert[0].textContent = "50 g";
                        grams_for_dessert[1].innerHTML = "100 g";
                        grams_for_dessert[2].innerHTML = "200 g";

                    let add_for_dessert = document.querySelectorAll(".dessert_add_special");
                    add_for_dessert[0].innerHTML = "Berries";
                    add_for_dessert[1].innerHTML = "Nuts";
                    add_for_dessert[2].innerHTML = "Jam";

                    document.querySelector(".additives_buttons .circle2").style.marginLeft = "";

                    let all_circles = document.querySelectorAll(".change");
                    for(let i = 0; i < all_circles.length; i = i + 1) {
                        all_circles[i].classList.add("forCake");
                    }

                    document.querySelector(".modal_window").classList.add("dessert_modal_mobile");
                    document.querySelector(".modal_window").classList.add("dessert_modal_tablet");
                    document.querySelector(".sizes_buttons").classList.add("dessert_sizes_buttons");
                    document.querySelector(".sizes").classList.add("dessert_tablet_sizes");

                    document.querySelector(".modal_window").classList.remove("tea_modal_mobile");
                    document.querySelector(".modal_window").classList.remove("tea_modal_tablet");


                    const checkbox = document.getElementsByName('additives');
                    checkbox.forEach(function(check_value){
                        check_value.checked = false});

                    document.body.addEventListener("change", function (event) {
                        let price = document.querySelector(".price");
                        let target = event.target;
                        switch (target.id) {
                            case "size_S_choice":
                                price.innerHTML = `$${data[i + count].price}`;
                                count_price = `${data[i + count].price}`;
                                count_checkbox = 0;
                                checkbox.forEach(function(check_value){
                                    check_value.checked = false});
                                break;
                                
                            case "size_M_choice":
                                price.innerHTML = `$${(Number(data[i + count].price) + 0.50).toFixed(2)}`;
                                count_price = `${(Number(data[i + count].price) + 0.50).toFixed(2)}`;
                                count_checkbox = 0;
                                checkbox.forEach(function(check_value){
                                    check_value.checked = false});
                                break;
                            
                            case "size_L_choice":
                                price.innerHTML = `$${(Number(data[i + count].price) + 1).toFixed(2)}`;
                                count_price = `${(Number(data[i + count].price) + 1).toFixed(2)}`;
                                count_checkbox = 0;
                                checkbox.forEach(function(check_value){
                                    check_value.checked = false});
                                break;
                                
                        }

                    })

                    let count_checkbox = 0;

                        checkbox.forEach(function(check_value){
                        check_value.addEventListener('change', (event) => {

                            if (check_value.checked == true) {
                                count_checkbox = Number(count_checkbox) + 0.50;
                            } else { 
                                count_checkbox = Number(count_checkbox) - 0.50;
                            }
                            price.innerHTML = `$${(Number(count_price) + count_checkbox).toFixed(2)}`;
                            })})
                }

        })
    }

})