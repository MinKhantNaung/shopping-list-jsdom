const input = document.querySelector("input");
const shoppingListTag = document.querySelectorAll(".shoppingListContainer")[0];

// for id 
let productId = 1;
const handleInput = () => {
    let inputValue = event.target.value;
    let spanTag = document.createElement("span");
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");

    parentDiv.addEventListener("click", () => {
        const classExist = parentDiv.classList.contains("purchased");
        if (classExist) {
            parentDiv.classList.remove("purchased");
        } else {
            parentDiv.classList.add("purchased");
        }

    })
    // <i i class="fa-solid fa-trash-can" ></i>
    // for trash icon 
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash-can");
    const iconDiv = document.createElement("div");
    iconDiv.append(trashIcon);
    iconDiv.classList.add("iconDiv");
    iconDiv.addEventListener("click", (event) => {
        productContainer.remove();
    });

    spanTag.id = productId;
    let product = productId.toString() + ". " + inputValue;

    spanTag.append(product);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv, iconDiv);
    shoppingListTag.append(productContainer);

    input.value = "";
    productId++;
}
input.addEventListener("change", handleInput);

