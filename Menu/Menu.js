/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
window.addEventListener("load", function(event) {
    function createMenu(items) {
        let div = document.createElement("div");
        div.style.left = "-350px";
        div.classList.add("menu");
        let ul = document.createElement("ul");
        ul.classList.add("bar-out");
        let elements = items.map((item) => {
            let li = document.createElement("li");
            li.classList.add("bar-out");
            li.append(document.createTextNode(item));
            return li
        });
        elements.forEach((element) => {
            ul.append(element);
        });
        div.classList.add("bar-out");
        div.append(ul);
        div.addEventListener("click", (e) => {
          e.stopPropagation();
        })
        let menuBtn = document.querySelector(".menu-button");
        menuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (div.style.left == "-350px") {
                TweenLite.to(div, .5, { left: 0 });
            } else {
                TweenLite.to(div, .5, { left: -350 });
            }
        });
        return div
    }

    let navBar = createMenu(menuItems);
    let menu = document.querySelector(".header");
    menu.append(navBar);
    let everythingButMenu = document.querySelectorAll("*:not(.bar-out)");
    this.console.log(everythingButMenu);
    everythingButMenu.forEach((el) => {
        el.addEventListener("click", (e) => {
            if (navBar.style.left == "0px") {
                TweenLite.to(navBar, .5, { left: -350 });
            }
        });
    })
});