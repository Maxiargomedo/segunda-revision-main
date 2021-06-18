function ajax(){
    const http = new XMLHttpRequest();
    const url = 'http://127.0.0.1:5502/historiaZa.html'

    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById("response").innerHTML = this.responseText;
        }
    }
    http.open("GET", url);
    http.send();
}

    document.getElementById("boton").addEventListener("click", function(){
        ajax();
    });
