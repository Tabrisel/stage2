/*values*/

const burger_button = document.querySelector(".burger");
const navigation = document.querySelector(".navigationList");
const menu_button = document.querySelector(".beforeBurger");
const menu_link = document.querySelector(".link_work");
const background_menu = document.querySelector(".background_menu");
const anchors = document.querySelectorAll(".anchors");
let menu_state = "close";


/*burger for no touch devices */


burger_button.addEventListener("click", () => {

    if (burger_button.classList.contains("burger_cross")) {
        burger_button.classList.remove("burger_cross");
        background_menu.classList.remove("menu_ON");
        menu_button.classList.remove("menu_ON");
        navigation.classList.remove("menu_ON");
        document.body.style.overflow = 'visible';
    } else {
        burger_button.classList.add("burger_cross");
        background_menu.classList.add("menu_ON");
        menu_button.classList.add("menu_ON");
        navigation.classList.add("menu_ON");
        document.body.style.overflowY = 'hidden';
    }
});



    for(let i = 0; i < anchors.length; i += 1) {
        anchors[i].addEventListener("click", (e) => {
            e.preventDefault();
            setTimeout(() => window.location.replace(e.target.href), 1000);
            if (burger_button.classList.contains("burger_cross")) {
                background_menu.classList.remove("menu_ON");
                menu_button.classList.remove("menu_ON");
                navigation.classList.remove("menu_ON");
                document.body.style.overflow = 'visible';
            }
            burger_button.classList.remove("burger_cross");
                })
        }

    menu_button.addEventListener("click", () => {
            burger_button.classList.remove("burger_cross");
            background_menu.classList.remove("menu_ON");
            menu_button.classList.remove("menu_ON");
            navigation.classList.remove("menu_ON");
            document.body.style.overflowY = 'visible';
        });

    menu_link.addEventListener("click", (e) => {
            e.preventDefault();
            setTimeout(() => window.location.replace(e.target.href), 300);
            burger_button.classList.remove("burger_cross");
            background_menu.classList.remove("menu_ON");
            menu_button.classList.remove("menu_ON");
            navigation.classList.remove("menu_ON");
            document.body.style.overflowY = 'visible';
        });






