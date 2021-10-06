// JavaScript Document
var tentativa=0;
var numero = Math.floor( (1 + 100*Math.random()) );
function sorteio() {
			var tent = document.getElementById('tentativas');
			var num1 = parseInt(document.getElementById("num").value);
			var dica = document.getElementById('dica');
			tentativa++;
			dica.innerHTML = teste(num1);
			tent.innerHTML = tentativa;
}
function teste(x){
			if(x<numero)
			return "O número sorteado é <em>maior</em> que este";
			else
			if(x>numero)
			return "O número sorteado é <em>menor</em> que este";
			else
			return ("<em>Parabéns!</em> Acertou, o número sorteado foi " + numero);
}
function converter(){
			var num = parseFloat(document.getElementById("num").value);
			var resp = document.getElementById("cxResposta");
			if(document.getElementById("inlineRadio1").checked==true){
				resp.innerHTML = (ctof(num) + "º F");
			}
			if(document.getElementById("inlineRadio2").checked==true) {
				resp.innerHTML = (ftoc(num) + "º C");
			}
}
function ctof(x){
			return(1.8*x + 32);
}
function ftoc(x){
			return((x-32)*5/9);
}
function mediaAlunos(){
			var alunos = parseInt(prompt("Número de alunos: "));
			var vetor = new Array(alunos);
			//preencher o vetor
			for(let count=0; count<alunos; count++){
				vetor[count] = parseInt(prompt("Aluno " + (count+1) + ":"));
			}
			//somar notas
			var soma = 0;
			for(let count in vetor) {
				soma += vetor[count];
			}
			var media = soma / alunos;
			document.write("Média dos alunos: " + media);
}
