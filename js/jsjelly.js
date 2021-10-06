function leoOuGi()
{
	var dateIni = new Date("2021,10,1");
	var dateNow = Date.now();
	var umDia = 1000*60*60*24;
	var diasDecorridos = (dateNow - dateIni) / umDia;
	var datas = [];
	var nomes = [];

	//Criei uma lista de Datas que já decorreram
	for (let i=0; i<diasDecorridos; i++){
		let outraData = new Date();
		outraData.setDate(dateIni.getDate() + i);
		datas.push(outraData);
	}
	
	//Criei uma lista de Nomes
	for (let i=0; i<diasDecorridos; i++){
		var nome = "Giovana";
		if(nomes[i-3]=="Giovana") {
			nome = "Leonardo";
		}
		nomes.push(nome);
	}

	//Criar uma lista de Datas relacionadas ao nome
	var vezDeQuem = new Array();
	
	for (let i=0; i<diasDecorridos; i++) {
		vezDeQuem.push(datas[i],nomes[i]);
	}
	
	/*//printar tudo
	for (let i=0; i<vezDeQuem.length; i++) {
		document.write(vezDeQuem[i]);
	}*/
	
	//printar
	var ultimo = vezDeQuem[vezDeQuem.length - 1];
	var dataHoje = new Date();
	var dataHojeFormat = ((dataHoje.getDate() )) + "/" + ((dataHoje.getMonth() + 1)) + "/" + dataHoje.getFullYear();	
	var resp = document.getElementById('resposta');
	var respData = document.getElementById('mostraData');
	resp.innerHTML = ultimo;
	respData.innerHTML = dataHojeFormat;
	
	//acessar últimos 3 nomes
	var nomesReverse = nomes.reverse();
	var ultimos3nomes = nomesReverse.slice(0, 3);
	ultimos3nomes = ultimos3nomes.reverse();
	
	//mostrar status
	var status1 = document.getElementById('mostraStatus1');
	var status2 = document.getElementById('mostraStatus2');
	var status3 = document.getElementById('mostraStatus3');
	var alerta = document.getElementById('alerta');
	
	
		if (ultimos3nomes[0] != ultimos3nomes[1]){
			status1.innerHTML = ('<i class="bi bi-check-circle-fill text-primary"></i>');
			status2.innerHTML = ('<i class="bi bi-check-circle-fill text-primary"></i>');
			status3.innerHTML = ('<i class="bi bi-check-circle text-primary"></i>');
		}else {
			if (ultimos3nomes[0] == ultimos3nomes[1] && ultimos3nomes[0] == ultimos3nomes[2]) {
			status1.innerHTML = ('<i class="bi bi-check-circle-fill text-primary"></i>');
			status2.innerHTML = ('<i class="bi bi-check-circle-fill text-primary"></i>');
			status3.innerHTML = ('<i class="bi bi-check-circle-fill text-primary"></i>');
			alerta.innerHTML = ('<div style="padding-bottom: 30px"><p id="alerta" class="display-4 form-control" style="width:250px; margin: auto;">hoje é dia de lavar tudo  <i class="bi bi-emoji-wink"></i></p></div>')
		}else {
			status1.innerHTML = ('<i class="bi bi-check-circle-fill text-primary"></i>');
			status2.innerHTML = ('<i class="bi bi-check-circle text-primary"></i>');
			status3.innerHTML = ('<i class="bi bi-check-circle text-primary"></i>');
		}
		}
		
		
	
	
}
// JavaScript Document