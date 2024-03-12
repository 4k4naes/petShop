// LOGIN OR REGISTER

// zrob:
// aby nie dalo sie miec w koszyku wiekszej ilosci produktow niz jest na stanie

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname === "/kurwa/main_page.html") {
        checkUser();
    } else if (window.location.pathname === "/kurwa/cart.html") {
        displayCart();
    } else {
        console.log("alalala")
    }
});




let loginForm = document.getElementById("loginForm"); 
let registerForm = document.getElementById("registerForm"); 
let container = document.getElementById("container"); 


function showLogin(){
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    container.style.filter = "blur(5px)";
}

function showRegister(){
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    container.style.filter = "blur(5px)";
}


let users = ["admin", "pracownik", "uzytkownik", "uzytkownik"];
let passwords = ["admin123", "pracownik123", "uzytkownik123", "uzytkownik1123"];
let name = ["Karol", "Nikola", "Tomasz", "Marcin"];
let surname = ["Nowak", "Kowalska", "Kotłowski", "Kowalczyk"];
let adress = ["Ul. Poniatowskiego 23b Marki", "Al. Niepodległości 34 Warszawa", "Ul. Marszałkowska 22 Warszawa", "Ul. Krawczyka 23 Ząbki"];
let status = ["admin", "worker", "user", "user"];

let loginOptions = ["admin", "worker", "user"];






// SYSTEM DISPLAY ============================================================================================

function setNames(){
    var searchFor = document.getElementById("searchFor");
    var modifyItem = document.getElementById("modifyItem");
    var mainForMail = document.getElementById("mainForMail");
    var forOrders = document.getElementById("forOrders");
}

function checkAvailability(){
    searchFor.style.display = "block";
    modifyItem.style.display = "none";
    mainForMail.style.display = "none";
    forOrders.style.display = "none";
}

function modifications(){
    searchFor.style.display = "none";
    modifyItem.style.display = "block";
    mainForMail.style.display = "none";
    forOrders.style.display = "none";
}


function checkMails(){
    searchFor.style.display = "none";
    modifyItem.style.display = "none";
    mainForMail.style.display = "block";
    forOrders.style.display = "none";
}

function checkOrders(){
    searchFor.style.display = "none";
    modifyItem.style.display = "none";
    mainForMail.style.display = "none";
    forOrders.style.display = "block";
}


// PRODUKTY =============================================================================================================================



// function addProductToMainPage() {
//     fetch('download.php')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Błąd pobierania danych: ${response.status}`);
//             }
//             return response.json();
//         })
        
//         .then(products => {
//             const productsContainer = document.getElementById('products-container');
//             products.forEach(product => {
//                 // Sprawdzenie, czy cena jest liczbą
//                 const price = typeof product.cena === 'string' ? Number(product.cena) : 'N/A';



//                 // Stworzenie elementu divProduct
//                 const divProduct = document.createElement('div');
//                 divProduct.className = 'product'; // Dodanie klasy 'product'

//                 // Dodanie elementów do divProduct zgodnie z nowym formatem
//                 //<img src="photos/${product.nazwa.replace(/\s+/g, '_').toLowerCase()}.png" alt="" class="prodImg">
//                 divProduct.innerHTML = `
//                     <p class="price">${price} zł</p>
//                     <img src="photos/${product.nazwa.replace(/\s+/g, '_').toLowerCase()}.png" alt="" class="prodImg">
//                     <p class="description">${product.nazwa}</p><br>
//                     <button class="addToCartBtn" onclick="addToCart(${product.id})">Add to Cart</button>
//                     <button id="buy" onclick="showSummary()">Buy</button>
//                 `;

//                 document.querySelectorAll('.addToCartBtn').forEach(btn => {
//                     btn.addEventListener('click', function() {
//                         const productId = parseInt(this.getAttribute('data-product-id'));
//                         addToCart(productId);
//                     });
//                 });

//                 // if (typeof product.cena !== 'decimal') {
//                 //     console.error(`Nieprawidłowa cena dla produktu o nazwie: ${product.nazwa}`);
//                 //     return; // Przejdź do kolejnego produktu
//                 // }


//                 // Dodanie divProduct do productsContainer
//                 productsContainer.appendChild(divProduct);
//             });
//         })
//         .catch(error => console.error('Błąd pobierania danych:', error));
// }
// function clearProducts() {
//     const productsContainer = document.getElementById('products-container');

//     while (productsContainer.firstChild) {
//         productsContainer.removeChild(productsContainer.firstChild);
//     }
// }

addProductToMainPage()
function addProductToMainPage() {
    // fetch('download.php')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(`Błąd pobierania danych: ${response.status}`);
    //         }
    //         return response.json();
    //     })
    //     .then(products => {
    //         const productsContainer = document.getElementById('products-container');
    //         products.forEach(product => {
    //             const price = typeof product.cena === 'string' ? Number(product.cena) : 'N/A';

    //             const divProduct = document.createElement('div');
    //             divProduct.className = 'product';

    //             divProduct.innerHTML = `
    //                 <p class="price">${price} zł</p>
    //                 <img src="photos/${product.nazwa.replace(/\s+/g, '_').toLowerCase()}.png" alt="" class="prodImg">
    //                 <p class="description">${product.nazwa}</p><br>
    //                 <button class="addToCartBtn" onclick="addToCart(${product.id}, '${product.nazwa}', ${price})">Add to Cart</button>
    //                 <button id="buy" onclick="showSummary()">Buy</button>
    //             `;

    //             productsContainer.appendChild(divProduct);
    //         });
    //     })
    //     .catch(error => console.error('Błąd pobierania danych:', error));

    fetch('download.php')
   .then(response => response.json())
   .then(data => {
    const productsContainer = document.querySelector('.productsInNew');

    data.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.id = `product${product.id}`;

      const productImage = document.createElement('img');
      productImage.src = product.photo;
      productImage.alt = '';

      const productName = document.createElement('p');
      productName.className = 'productName';
      productName.textContent = product.productName;

      const price = document.createElement('p');
      price.className = 'price';
      price.textContent = `Cena: ${product.price}`;

      const pricePerKg = document.createElement('p');
      pricePerKg.className = 'pricePerKg';
      pricePerKg.textContent = `Cena za kilogram: ${product.pricePerKg}`;

      productDiv.appendChild(productImage);
      productDiv.appendChild(productName);
      productDiv.appendChild(price);
      productDiv.appendChild(pricePerKg);

      productsContainer.appendChild(productDiv);
    });
  })
  .catch(error => console.error("Error: ", error));
}

function addToCart(productId, productName, productPrice) {
    if (isLogged == "no") {
        showLogin();
    } else {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === productId);
    
        if (existingProduct) {
            existingProduct.quantity += 1;
            console.log("Kolejny produkt zostal dodany do koszyka!");
            alert("Produkt zostal dodany do koszyka!");

        } else {
            const newProduct = {
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            };
            cart.push(newProduct);
            console.log("Produkt zostal dodany do koszyka!");
            alert("Produkt zostal dodany do koszyka!");
        }
            localStorage.setItem('cart', JSON.stringify(cart));
    }
}

function clearProducts() {
    const productsContainer = document.getElementById('products-container');
    while (productsContainer.firstChild) {
        productsContainer.removeChild(productsContainer.firstChild);
    }
}










// LOGOWANIE ========================================================================================================


function logout(){
    localStorage.clear();
    checkUser();
}

let loginButt = document.getElementById("login");
let registerButt = document.getElementById("registerButt");
let cartButt = document.getElementById("cart");
let logoutButt = document.getElementById("logout");
let workspaceButt = document.getElementById("workspace");

let isLogged;
// checkUser();
function checkUser(){
    // clearProducts();
    // addProductToMainPage();
    let loginInfoProfil = localStorage.getItem("loginInfoProfil", "");
    console.log(loginInfoProfil);

    switch(loginInfoProfil){
        case null:
            loginButt.style.display = "block";
            cartButt.style.display = "none";
            logoutButt.style.display = "none";
            workspaceButt.style.display = "none";
            console.log("not logged in")
            isLogged = "no";
            break;
        case "userlogin":
            loginButt.style.display = "none";
            cartButt.style.display = "block";
            logoutButt.style.display = "block";
            workspaceButt.style.display = "none";
            console.log("logged as user")
            isLogged = "yes";
            break;
        case "workerlogin":
            loginButt.style.display = "none";
            cartButt.style.display = "block";
            logoutButt.style.display = "block";
            workspaceButt.style.display = "block";
            console.log("logged as worker")
            isLogged = "yes";
            break;
        case "adminlogin":
            loginButt.style.display = "none";
            cartButt.style.display = "block";
            logoutButt.style.display = "block";
            workspaceButt.style.display = "block";
            console.log("logged as admin")
            isLogged = "yes";
            break;
        default:
            loginButt.style.display = "block";
            cartButt.style.display = "none";
            logoutButt.style.display = "none";
            workspaceButt.style.display = "none";
            console.log("not logged in")
            isLogged = "no";
    }    
}


 

// LOGOWANIE ================================================================================================







function login(){
    let inputLogin = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;


    let correctLogin = true;

    for (let i = 0; i < users.length; i++) {
        if (inputLogin == users[i]) {
            correctLogin = false;
            let correctPassword = true;
            if(inputPassword == passwords[i]){
                correctPassword = false;
                let position = status[i];
                switch(position){
                    case "user":
                        localStorage.setItem("loginInfoProfil", "userlogin");
                        break;
                    case "worker":
                        localStorage.setItem("loginInfoProfil", "workerlogin");
                        break;
                    case "admin":
                        localStorage.setItem("loginInfoProfil", "adminlogin");
                        break;
                }
                exitLogin();
                checkUser();
                location.reload();
            }
            if(correctPassword){
                document.getElementById("passwordError").innerHTML = "Niepoprawne hasło";
            } else {
                document.getElementById("passwordError").innerHTML = "";
            }
        }
    };
    if(correctLogin){
        document.getElementById("loginError").innerHTML = "Podany login nie istnieje";
    } else {
        document.getElementById("loginError").innerHTML = "";
    }
    // window.location.replace("main_page.html");
    // checkUser();
}

function register(){
    let regName = document.getElementById("regName").value;
    let regSurname = document.getElementById("regSurname").value;
    let regLogin = document.getElementById("regLogin").value;
    let regAdress = document.getElementById("regAdress").value;
    let regPassword = document.getElementById("regPassword").value;
    let regRepeatedPassword = document.getElementById("regRepeatedPassword").value;

    let nameError = document.getElementById("nameError");
    let surnameError = document.getElementById("surnameError");
    let regLoginError = document.getElementById("regLoginError");
    let adressError = document.getElementById("adressError");
    let regPasswordError = document.getElementById("regPasswordError");
    let regRepeatedPasswordError = document.getElementById("regRepeatedPasswordError");

    let one, two, three, four, five, six = false;
    let errors = 0;
    let height = 740;

    if(regName.length > 20){
        nameError.innerHTML = "Max 20 znaków";
        errors++;
    } else if (regName.length < 5) {
        nameError.innerHTML = "Min 5 znaków";
        errors++;
    } else {
        nameError.innerHTML = "";
        one = true;
    }

    if(regSurname.length > 20){
        surnameError.innerHTML = "Max 20 znaków";
        errors++;
    } else if (regSurname.length < 5) {
        surnameError.innerHTML = "Min 5 znaków";
        errors++;
    } else {
        surnameError.innerHTML = "";
        two = true;
    }

    if(regLogin.length > 20){
        regLoginError.innerHTML = "Max 20 znaków";
        errors++;
    } else if (regLogin.length < 5) {
        regLoginError.innerHTML = "Min 5 znaków";
        errors++;
    } else {
        regLoginError.innerHTML = "";
        three = true;
    }

    if(regAdress == ""){
        adressError.innerHTML = "Pole nie może być puste";
        errors++;
    } else {
        adressError.innerHTML = "";
        four = true;
    }

    if(regPassword.length > 30){
        regPasswordError.innerHTML = "Zadługie hasło";
        errors++;
    } else if (regPassword.length < 8) {
        regPasswordError.innerHTML = "Hasło zakrótkie, min 8 znaków";
        errors++;
    } else {
        regPasswordError.innerHTML = "";
        five = true;
    }

    if(regPassword != regRepeatedPassword){
        regRepeatedPasswordError.innerHTML = "Złe hasło";
        errors++;
    } else {
        regRepeatedPasswordError.innerHTML = "";
        six = true;
    }

    switch(errors){
        case 1: 
            height = 750;
            break;
        case 2:
            height = 762;
            break;
        case 3: 
            height = 774;
            break;
        case 4: 
            height = 786;
            break;
        case 5:
            height = 798;
            break;
        case 6:
            height = 810;
            break;
        default:
            console.log("DVSDVSDVDSV" + errors)
    }

    document.getElementById("registerForm").style.height = height + "px";


    if(one && two && three && four && five && six){
        users.push(regLogin);
        passwords.push(regPassword);
        name.push(regName);
        surname.push(regSurname);
        adress.push(regAdress);
        status.push("user");

        localStorage.setItem("loginInfoProfil", "userlogin");

        exitLogin();
        // loginInfoProfil = "userlogin";
        checkUser();
    }




    // loginInfoProfil = "workerlogin";
    // // window.location.replace("main_page.html");
    // container.style.filter = "blur(0px)";
    // registerForm.style.display = "none";
    // loginForm.style.display = "none";
    // checkUser();
}

// chowanie gowna
exitLogin();
function exitLogin(){
    container.style.filter = "blur(0px)";
    registerForm.style.display = "none";
    loginForm.style.display = "none";
}















const cart = JSON.parse(localStorage.getItem('cart')) || [];


function displayCart() {
    const cartContainer = document.querySelector('.cartInventory');
    cartContainer.innerHTML = '';

    
    cart.forEach(product => {
        const divProduct = document.createElement('div');
        divProduct.className = 'cartProduct';

        divProduct.innerHTML = `
            <p class="price">${product.price} zł</p>
            <img src="photos/${product.name.replace(/\s+/g, '_').toLowerCase()}.png" alt="" class="prodImg">
            <p class="description">${product.name}</p><br>
            <p class="quantityInCart">Ilość w koszyku: ${getQuantityInCart(product.id)}</p>
            <button id="delete" onclick="deleteFromCart(${product.id})">Usuń</button>
        `;

        cartContainer.appendChild(divProduct);
        const hr = document.createElement('hr');
        cartContainer.appendChild(hr);
    });

    if (cart.length==0) {
        cartContainer.innerHTML = `
        <p id="cartIsEmpty">Koszyk jest pusty.</p>
        `;
    }

    const lowBar = document.createElement('div');
    lowBar.className = 'lowBar';

    const buyAllButton = document.createElement('button');
    buyAllButton.className = 'buyAll';
    buyAllButton.textContent = 'Kup wszystko';
    buyAllButton.onclick = showSummary;
    lowBar.appendChild(buyAllButton);

    const clearButton = document.createElement('button');
    clearButton.className = 'clear';
    clearButton.textContent = 'Wyczyść';
    clearButton.onclick = clearCart;
    lowBar.appendChild(clearButton);

    cartContainer.appendChild(lowBar);
}


function getQuantityInCart(productId) {
    const productInCart = cart.find(product => product.id === productId);

    return productInCart ? productInCart.quantity : 0;
}

function deleteFromCart(productId) {
    const productIndex = cart.findIndex(product => product.id === productId);
    cart.splice(productIndex, 1);
    localStorage.setItem('cart', JSON.stringify(cart));

    displayCart();
}


function clearCart() {
    cart.length = 0
    console.log(cart)
    localStorage.removeItem('cart');
    console.log(cart)
    displayCart();
}





// SUMMARY =====================================================================================

let summary = document.getElementById("summary"); 


function closeSummary() {
    const summary = document.getElementById('summary');
    summary.style.display = 'none';
    container.style.filter = "blur(0px)";
}
closeSummary();

function hideSummary() {
    localStorage.removeItem('cart');
    displayCart();
    clearCart()
    const summary = document.getElementById('summary');
    summary.style.display = 'none';
    container.style.filter = "blur(0px)";
    alert("Zakup udany")
}

function showSummary() {
    if (isLogged == "no") {
        showLogin();
    } else {
        const summaryDiv = document.getElementById('summary');
        const totalAmount = calculateTotalAmount();
    
        summaryDiv.style.display = 'block';
        container.style.filter = "blur(5px)";
        const payButton = document.querySelector('.pay');
        payButton.textContent = `Zapłać: ${calculateTotalPrice()} zł`;
    }
}

function calculateTotalAmount() {
    let total = 0;

    cart.forEach(product => {
        total += product.price * product.quantity;
    });

    return total;
}

function calculateTotalPrice() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    return totalPrice.toFixed(2);
}






// BANER ============================================================================================


/* banners */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}