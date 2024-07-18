function store() {
    car = {
        brand: cbrand.value,
        price: price.value,
        key: key.value
    }
    if (car.brand === "" || car.price === "" || car.key === "") {
        alert("Please Fill The Missing Fields");
    } else {
        if (car.key in localStorage) {
            alert("Your Entry Already Exists");
        } else {
            localStorage.setItem(car.key, JSON.stringify(car));
            alert("Card Details Added");
        }
    }
}
function results() {
    let key = semp.value;
    let car = JSON.parse(localStorage.getItem(key));
    if (key == "") {
        alert("Please Fill Field")
    }
    else {
        result.innerHTML = ` <h6 class="fw-bold">Brand:&nbsp;&nbsp;&nbsp;&nbsp;${car.brand}</h6>
 <h6 class="fw-bold">Price:&nbsp;&nbsp;&nbsp;&nbsp;${car.price}</h6>
  <h6 class="fw-bold">Key:&nbsp;&nbsp;&nbsp;&nbsp;${car.key}</h6>`
    }
}

function remove() {
    let key = remp.value;
    if (localStorage.getItem(key) !== null) {
        localStorage.removeItem(key);
        alert(`The Data of the Key ${key} Removed`);
    } else {
        alert(`No data found for the key ${key}`);
    }
    window.location.reload();
}
function clearall() {
    localStorage.clear()
    alert("All Data is Cleared");
    window.location.reload();
}
