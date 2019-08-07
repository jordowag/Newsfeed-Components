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
window.addEventListener("load",function(){
  function createMenu(items){
    let div = document.createElement("div");
    div.classList.add("menu");
    let ul = document.createElement("ul");
    let elements = items.map((item) => {
      let li = document.createElement("li");
      let textNode = document.createTextNode(item);
      li.append(textNode);
      return li
    });
    elements.forEach((element) => {
      ul.append(element);
    });
    div.append(ul);
    return div
  }

  let navBar = createMenu(menuItems);
  let menu = document.querySelector(".header");
  menu.append(navBar);
  let menuBtn = document.querySelector(".menu-button");
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
  })
});