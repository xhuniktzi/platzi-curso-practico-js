const buttonCalcularDescuentos = document.getElementById('calcular-descuentos')

const calcularDescuento = (precio, descuento) => (precio * (100 - descuento)) / 100

const cupones = [
  {
    nombre: 'CUPON15',
    descuento: 15
  },
  {
    nombre: 'CUPON20',
    descuento: 20
  },
  {
    nombre: 'CUPON35',
    descuento: 35
  }
]

buttonCalcularDescuentos.addEventListener('click', () => {
  const couponValue = document.getElementById('coupon').value
  const cantidad = document.getElementById('cantidad').value

  const selectedCoupon = cupones.find(coupon => coupon.nombre === couponValue)

  if (!selectedCoupon) {
    alert('Cupón invalido')
  } else {
    const descuento = selectedCoupon.descuento
    const precioFinal = calcularDescuento(cantidad, descuento)
    alert('Precio original: ' + cantidad + '\n' +
    'Descuento aplicado: ' + descuento + '\n' +
    'Precio Final: ' + precioFinal)
  }
})
