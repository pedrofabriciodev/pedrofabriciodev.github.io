function toggleMode() {
    var body = document.body;
    var icon = document.getElementById("mode-icon");
    var github = document.getElementById("github");
    var linkedin = document.getElementById("linkedin");
    var curriculo = document.getElementById("curriculo");
    var email = document.getElementById("email");

    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        icon.src = "./icons/forma-de-meia-lua.png";
        icon.alt = "Modo Escuro";
        github.src="icons/github-white.png";
        email.src= "icons/o-email-white.png";
        curriculo.src= "icons/curriculo-white.png";

    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        icon.src = "./icons/brilho-do-sol.png";
        icon.alt = "Modo Claro";
        github.src="icons/github-black.png";
        email.src= "icons/o-email-black.png";
        curriculo.src= "icons/curriculo-black.png";
    }
}