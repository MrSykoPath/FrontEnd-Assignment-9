Items = localStorage.getItem('Items') ? JSON.parse(localStorage.getItem('Items')) : [];
var element = document.getElementById('Items');
displayItems();
function displayItems() {
    var box = ``;

    for(var i = 0; i < Items.length; i++){
        box += `<div class="col-12">
                    <div class="inner d-flex justify-content-around bg-light border-bottom">
                        <div class="index text-center">
                            <h4>${Items[i].index}</h4>
                        </div>
                        <div class="website text-center">
                            <h4>${Items[i].name}</h4>
                        </div>
                        <div class="visit text-center">
                            <a href="${Items[i].url}" target="_blank" class="btn btn-outline-dark btn-secondary">
                                <h4>Visit</h4>
                            </a>
                        </div>
                        <div class="delete text-center">
                            <button class="btn btn-danger" onclick="deleteItem(${Items[i].index})">
                                <h4>Delete</h4>
                            </button>
                        </div>
                    </div>
                </div>`
    }
    element.innerHTML = box;
}

function addItem(){

    if(validateName() && validateUrl()){
        sitename = document.getElementById("siteName").value;
        siteurl = document.getElementById("siteUrl").value;
        Item = {
        index : Items.length + 1,
        name : document.getElementById("siteName").value,
        url: document.getElementById("siteUrl").value
    }
    Items.push(Item);
    localStorage.setItem('Items', JSON.stringify(Items));
    displayItems();
    console.log(validateName());
    console.log(validateUrl());
    }
    console.log(validateName());
    console.log(validateUrl());
}

function deleteItem(index){
    Items.splice(index-1, 1);
    for(var i = 0; i < Items.length; i++){
        Items[i].index = i+1;
    }
    localStorage.setItem('Items', JSON.stringify(Items));
    displayItems();
}

function validateUrl(){
    if(document.getElementById("siteUrl").value == ""){
        document.getElementById("siteUrl").classList.remove("is-valid");
        document.getElementById("siteUrl").classList.remove("is-invalid");
        return false;
    }
    var x = new RegExp("^(http|https)://");
    if(x.test(document.getElementById("siteUrl").value)){
        document.getElementById("siteUrl").classList.add("is-valid");
        document.getElementById("siteUrl").classList.remove("is-invalid");
        return true;
    }
    else{
        document.getElementById("siteUrl").classList.add("is-invalid");
        document.getElementById("siteUrl").classList.remove("is-valid");
        return false;
    }
}

function validateName(){
    if(document.getElementById("siteName").value == ""){
        document.getElementById("siteName").classList.remove("is-valid");
        document.getElementById("siteName").classList.remove("is-invalid");
        return false;
    }
    var x = new RegExp("^[a-zA-Z0-9]{3,}$");
    if(x.test(document.getElementById("siteName").value)){
        document.getElementById("siteName").classList.add("is-valid");
        document.getElementById("siteName").classList.remove("is-invalid");
        return true;
    }
    else{
        document.getElementById("siteName").classList.add("is-invalid");
        document.getElementById("siteName").classList.remove("is-valid");
        return false;
    }
}
