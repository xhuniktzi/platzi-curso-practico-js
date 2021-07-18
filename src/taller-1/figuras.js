// Elementos HTML
const buttonPerimetroCuadrado = document.getElementById('perimetro-cuadrado')
const buttonAreaCuadrado = document.getElementById('area-cuadrado')
const buttonPerimetroTriangulo = document.getElementById('perimetro-triangulo')
const buttonAreaTriangulo = document.getElementById('area-triangulo')
const buttonPerimetroCirculo = document.getElementById('perimetro-circulo')
const buttonAreaCirculo = document.getElementById('area-circulo')

// Código del cuadrado
const perimetroCuadrado = lado => lado * 4
const areaCuadrado = lado => lado * lado

// Código del triangulo
const perimetroTriangulo = lado => lado * 3
const areaTriangulo = lado => (Math.sqrt(3) * lado * lado) / 4

// Código del circulo
const perimetroCirculo = radio => 2 * Math.PI * radio
const areaCirculo = radio => Math.PI * radio * radio

// Calcular Cuadrado
buttonPerimetroCuadrado.addEventListener('click', () => {
  const inputLadoCuadrado = document.getElementById('lado-cuadrado')
  const ladoCuadrado = inputLadoCuadrado.value

  alert(`El perimetro del cuadrado es ${perimetroCuadrado(ladoCuadrado)}`)
})

buttonAreaCuadrado.addEventListener('click', () => {
  const inputLadoCuadrado = document.getElementById('lado-cuadrado')
  const ladoCuadrado = inputLadoCuadrado.value

  alert(`El area del cuadrado es ${areaCuadrado(ladoCuadrado)}`)
})

// Calcular Triangulo
buttonPerimetroTriangulo.addEventListener('click', () => {
  const inputLadoTriangulo = document.getElementById('lado-triangulo')
  const ladoTriangulo = inputLadoTriangulo.value

  alert(`El perimetro del triangulo es ${perimetroTriangulo(ladoTriangulo)}`)
})

buttonAreaTriangulo.addEventListener('click', () => {
  const inputLadoTriangulo = document.getElementById('lado-triangulo')
  const ladoTriangulo = inputLadoTriangulo.value

  alert(`El area del triangulo es ${areaTriangulo(ladoTriangulo)}`)
})

// Calcular Circulo
buttonPerimetroCirculo.addEventListener('click', () => {
  const inputLadoCirculo = document.getElementById('radio-circulo')
  const ladoCirculo = inputLadoCirculo.value

  alert(`El perimetro del circulo es ${perimetroCirculo(ladoCirculo)}`)
})

buttonAreaCirculo.addEventListener('click', () => {
  const inputLadoCirculo = document.getElementById('radio-circulo')
  const ladoCirculo = inputLadoCirculo.value

  alert(`El area del circulo es ${areaCirculo(ladoCirculo)}`)
})
