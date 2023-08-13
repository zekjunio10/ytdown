function criaelementoresult(formats, detalhes){
	
	/*
	//exibo o formato
	console.log(formats.container);
	console.log(formats.hasAudio);
	console.log(formats.hasVideo);
	console.log(formats.qualityLabel);
	console.log(formats.url);
	console.log("------------------------");
	////////////////////////////////////////////
	
	*/
	
	let item = document.createElement("div");
	item.style.backgroundColor ="red";
	item.className = "item-result";
	
	let formato = document.createElement("div");
	formato.textContent = "Formato : " + formats.container ;
	formato.style.color = "white";
	
	let qualidade = document.createElement("div");
	qualidade.style.color = "yellow";
	if(formats.qualityLabel == null){
		qualidade.textContent = "weba";
	}else{
		qualidade.textContent = "" + formats.qualityLabel;
	}
	
	
	let url = document.createElement("a");
	url.textContent = "Baixar";
	url.target = "_blank";
	url.href = formats.url;
	

	
	let audioevideo = document.createElement("div");
	audioevideo.style.color = "yellow";
	let categoria;
	
	if((formats.hasAudio == true && formats.hasVideo == false) ){
		audioevideo.textContent = "Apenas Audio";
		item.style.backgroundColor ="darkred";
		categoria = document.getElementById("somenteaudio");
		
	} else if((formats.hasAudio == false && formats.hasVideo == true) ){
		//return;
	audioevideo.textContent = "Apenas Video";
	item.style.backgroundColor ="darkblue";
		categoria = document.getElementById("somentevideo");
	
		
	} else {
		audioevideo.textContent = "Audio e Video";
		item.style.backgroundColor ="darkgreen";
		categoria = document.getElementById("comaudioevideo");
	}
	
	
	
	item.appendChild(formato);
	item.appendChild(qualidade);
	item.appendChild(audioevideo);
	item.appendChild(url);
	

	
	categoria.appendChild(item);
	/*let root = document.getElementById("root-elemento-result");
	root.appendChild(categoria);*/
}

function contaresults(data){
	//console.log(data);
	
		
	let num = data.formats.length;
	
	for(i=0; i < num; i++){
		criaelementoresult(data.formats[i],);
	}
	
	

	
}

function pegardadosvideo(url){
	
	let msg = document.getElementById("msg");
	
	 
	let dados;
	let site = "/ytdown/api/vtdown.php?url="+url;

	$.ajax({

	
		
		
		method: "GET",
	//	url: "https://radiant-rugelach-646559.netlify.app/ytdl/info?video_url=" + url,
		//url: "http://devappsgp.zya.me/ytdown/controller/vtdown.php?url=" + url,
		url: site,
		//url: "http://192.168.0.103/estudos/ytdown/controller/vtdown.php?url=" + url,
		accept: "Application/json",
		async: false,
		beforeSend: function(){
			alert("buscando");
		
		},
		
	}).done(function(data){
		
		try{
			//msg.textContent = "Resultados";
			//dados = JSON.parse(data);
			dados = data;
			
				msg.textContent = "Resultados";
			
		}catch{
			let root_elemento =  document.getElementById("root-elemento-result");
			
		}
		
		
		});
		
	
	if(dados == undefined){
		msg.textContent = "Nenhum Resultado Encontrado";
		return;
	}else{
		contaresults(dados);
	}
	
	
}

function pegaurl(){
	let input_url = document.getElementById("inputbuscador").value;
	pegardadosvideo(input_url);
	
}




  function verificaeesvaziacategorias(){
	let quantidadedeelementos = document.getElementsByClassName("item-result");
	
	let categoriacomaudioevideo = document.getElementById("comaudioevideo");
	let categoriacomaudio = document.getElementById("somenteaudio");
	let categoriacomvideo = document.getElementById("somentevideo");
	
	if(quantidadedeelementos.length > 1){
		categoriacomaudioevideo.innerHTML = "";
		categoriacomaudio.innerHTML = "";
		categoriacomvideo.innerHTML = "";
	}
	
}
	
	
let btbuscar = document.getElementById("btbuscar");

btbuscar.addEventListener('click',function(){
	
	
	verificaeesvaziacategorias();
	pegaurl();
});