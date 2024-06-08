function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            displayMenuDetails(this.responseXML);
        }
    };
    xhr.open("GET", "menu.xml", true);
    xhr.send();
    function displayMenuDetails(xml) {
        var menuTableBody = document.getElementById("menuTableBody");
        var dishes = xml.getElementsByTagName("dish");
        for (var i = 0; i < dishes.length; i++) {
            var menuId = dishes[i].getElementsByTagName("Menuid")[0].textContent;
            var foodCategory =
                dishes[i].getElementsByTagName("FoodCategory")[0].textContent;
            var foodItemName =
                dishes[i].getElementsByTagName("FoodItemName")[0].textContent;
            var foodIngredient =
                dishes[i].getElementsByTagName("FoodIngredient")[0].textContent;
            var price = dishes[i].getElementsByTagName("Price")[0].textContent;
            var qty = dishes[i].getElementsByTagName("Qty")[0].textContent;
            menuTableBody.innerHTML += `
    <tr>
    <td>${menuId}</td>
    <td>${foodCategory}</td>
    <td>${foodItemName}</td>
    <td>${foodIngredient}</td>
    <td>${price}</td>
    <td>${qty}</td>
    </tr>`;
        }
    }
}



