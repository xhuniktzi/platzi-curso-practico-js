const buttonCalcularDescuentos = document.getElementById('calcular-descuentos')

const calcularDescuento = (precio, descuento) => (precio * (100 - descuento)) / 100

buttonCalcularDescuentos.addEventListener('click', () => {
  const descuento = document.getElementById('descuento').value
  const cantidad = document.getElementById('cantidad').value

  const precioFinal = calcularDescuento(cantidad, descuento)

  const output = document.getElementById('output')
  output.innerText = `Q. ${precioFinal}`
})
