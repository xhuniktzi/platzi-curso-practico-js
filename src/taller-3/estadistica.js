
const buttonAgregarNumero = document.getElementById('agregar-numero')
const buttonCalcular = document.getElementById('calcular')
const arrayCantidades = []

// Función calcular promedio
const calcularPromedio = cantidades => {
  return cantidades.reduce((acumulado = 0, nuevo) => {
    return acumulado + nuevo
  }) / cantidades.length
}

// Función calcular mediana
const calcularMediana = cantidades => {
  const mitadLista = cantidades.length / 2
  cantidades.sort((anterior, siguiente) => {
    return anterior - siguiente
  })
  if (cantidades.length % 2 === 0) {
    return calcularPromedio([cantidades[mitadLista - 1], cantidades[mitadLista]])
  } else {
    return cantidades[parseInt(mitadLista)]
  }
}

// Función calcular moda
const calcularModa = cantidades => {
  const listaValores = {}

  cantidades.forEach((elemento) => {
    if (listaValores[elemento]) {
      listaValores[elemento] += 1
    } else {
      listaValores[elemento] = 1
    }
  })

  const valoresOrdenados = Object.entries(listaValores).sort(
    (anterior, siguiente) => {
      return anterior[1] - siguiente[1]
    })

  return valoresOrdenados[valoresOrdenados.length - 1]
}

buttonAgregarNumero.addEventListener('click', () => {
  const listaNumeros = document.getElementById('lista-numeros')
  const inputNumero = document.getElementById('numero')

  const elemento = document.createElement('p')
  elemento.innerText = inputNumero.value
  listaNumeros.appendChild(elemento)
  arrayCantidades.push(parseInt(inputNumero.value))
})

buttonCalcular.addEventListener('click', () => {
  const promedio = calcularPromedio(arrayCantidades)
  const mediana = calcularMediana(arrayCantidades)
  const moda = calcularModa(arrayCantidades)

  const outputResultados = document.getElementById('resultados')
  outputResultados.innerText = `Promedio: ${promedio}, Mediana: ${mediana}, Moda: ${moda}`
})
