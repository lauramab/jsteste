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
	
	//printar a última posição de vezDeQuem
	var ultimo = vezDeQuem[vezDeQuem.length - 1];
	var dataHoje = new Date();
	var dataHojeFormat = ((dataHoje.getDate() )) + "/" + ((dataHoje.getMonth() + 1)) + "/" + dataHoje.getFullYear();	
	var resp = document.getElementById('resposta');
	var respData = document.getElementById('mostraData');
	resp.innerHTML = ultimo;
	respData.innerHTML = dataHojeFormat;
}
// JavaScript Document