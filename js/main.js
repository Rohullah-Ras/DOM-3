var text = document.getElementById("js--text");

text.onkeyup = function (event) {
    if (event.key === "Enter") {
        var original = event.target.value;
        var reversed = original.split("").reverse().join("");
        var alert = document.getElementById("js--alert");


        alert.style.display = "block";
        event.target.value = reversed;



        if (reversed === original) {

            alert.innerText = "Het is palindroom\n\n" + reversed;

        }

        else {
            alert.innerText = "Het is geen palindroom\n\n" + reversed;
        }

    };
}
