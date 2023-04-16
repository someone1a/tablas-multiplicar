let tablas = () => {
    let number = document.getElementById("choose").value
    let app = document.getElementById("app")

    for (var i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        let cuenta = i*number
        li.textContent = `${number} X ${i} = ${cuenta}`
        app.appendChild(li);
    }
}