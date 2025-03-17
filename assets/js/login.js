function login() {
    this.window.location.href = "index.html";
}
Document.onload = function() {
    this.document.getElementById("loginButton").onclick = login;
    this.document.getElementById("loginButton").style.display = "block";
    this.document.getElementById("loginButton").style.margin = "0 auto";
    this.document.getElementById("loginButton").style.width = "100px";
    this.document.getElementById("loginButton").style.height = "50px";
    this.document.getElementById("loginButton").style.backgroundColor = "blue";
    this.document.getElementById("loginButton").style.color = "white";
    this.document.getElementById("loginButton").style.border = "none";
    this.document.getElementById("loginButton").style.borderRadius = "5px";
    this.document.getElementById("loginButton").style.cursor = "pointer";
    this.document.getElementById("loginButton").style.fontSize = "16px";
    this.document.getElementById("loginButton").style.fontWeight = "bold";
    this.document.getElementById("loginButton").style.textAlign = "center";
}
function quit() {
    window.close();
}