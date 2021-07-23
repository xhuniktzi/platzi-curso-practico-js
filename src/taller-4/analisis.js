// Utils
const calcularPromedio = salarios => {
  return salarios.reduce((acumulado = 0, nuevo) => {
    return acumulado + nuevo
  }) / salarios.length
}

// Calcular mediana de salarios
const calcularMediana = salarios => {
  const mitadLista = salarios.length / 2
  salarios.sort((anterior, siguiente) => {
    return anterior - siguiente
  })
  if (salarios.length % 2 === 0) {
    return calcularPromedio([salarios[mitadLista - 1], salarios[mitadLista]])
  } else {
    return salarios[parseInt(mitadLista)]
  }
}

// Calcular mediana del 10% mas grande
// eslint-disable-next-line no-unused-vars
const calcularMedianaTop10PorCiento = salarios => {
  salarios.sort((anterior, siguiente) => {
    return anterior - siguiente
  })

  const spliceInicio = (salarios.length * 90) / 100
  const spliceCantidad = salarios.length - spliceInicio
  const salariosTop10 = salarios.splice(spliceInicio, spliceCantidad)
  return calcularMediana(salariosTop10)
}

// extraer salarios
// eslint-disable-next-line no-unused-vars
const extraerSalarios = personas => personas.map(persona => persona.salary)
