function addData() {
    sessionStorage.setItem("name", "abhi");
    console.log("Data added");
}

function getData() {
    let data = sessionStorage.getItem("name");
    console.log(data);
}

function removeData() {
    sessionStorage.removeItem("name");
    console.log("Data removed");
}

function clearData() {
    sessionStorage.clear();
    console.log("All data cleared");
}