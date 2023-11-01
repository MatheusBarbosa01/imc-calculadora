const form = document.querySelector('#formulario')

function substituirEvento(event){
  event.preventDefault();
  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');
  const pesoValue = Number(inputPeso.value);
  const alturaValue = Number(inputAltura.value);

  if(!pesoValue){
    setResultado('Peso Inválido!');
    return;
  }
  if(!alturaValue){
    setResultado('Altura Inválida!');
    return;
  }
  const imc = getIMC(pesoValue, alturaValue)
  const nivelimc = getNivelIMC(imc)

  setResultado(imc, nivelimc, pesoValue, alturaValue)

}
function getIMC(peso, altura){
  const imc = peso/altura**2
  return imc.toFixed(2)
}
function getNivelIMC(imc){
  const nivel = ['	Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau I','Obesidade Grau II','Obesidade Grau III']
  if(imc >= 39.9){
    return nivel[5]
  }
  if(imc >= 34.9){
    return nivel[4]
  }
  if(imc >= 29.9){
    return nivel[3]
  }
  if(imc >= 24.9){
    return nivel[2]
  }
  if(imc >= 18.5){
    return nivel[1]
  }
  if(imc < 18.5){
    return nivel[0]
  }
};

form.addEventListener('submit', substituirEvento )

function createParagrafos(){
 const paragrafo = document.createElement('p');
 return paragrafo;
}

function setResultado(nivelImc, imc, pesoValue, alturaValue){
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = '';
  const paragrafo = createParagrafos()
  resultado.appendChild(paragrafo);

  paragrafo.innerHTML = `${nivelImc} ---> ${imc}`;
  if(!pesoValue){
    paragrafo.classList.add('bad')
    console.log("entrou1")
    return
  }
  if(!alturaValue){
    paragrafo.classList.add('bad')
    console.log("entrou2")
    return
  }
  else{
    paragrafo.classList.add('good')
    console.log("entrou3")
    return
  }
}
