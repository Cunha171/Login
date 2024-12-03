const senha = "123456"

document.getElementById("entrar").addEventListener("click",function(){
const senhainserida = document.getElementById("senha").value 
const resultado = document.getElementById("resultado")

if (senhainserida === senha){
    resultado.textContent = "Senha correta"
}
else {
    resultado.textContent = "Senha incorreta"
}})