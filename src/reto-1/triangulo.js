const buttonAlturaTriangulo = document.getElementById('altura-triangulo')

function alturaTrianguloIsosceles (lado, base) {
  return Math.sqrt((lado * lado) - ((base * base) / 4))
}

buttonAlturaTriangulo.addEventListener('click', () => {
  const lado1 = document.getElementById('lado-triangulo-1').value
  const lado2 = document.getElementById('lado-triangulo-2').value
  const base = document.getElementById('base-triangulo').value

  if (lado1 === lado2) {
    const altura = alturaTrianguloIsosceles(lado1, base)
    alert(`La altura del triangulo es: ${altura}`)
  } else {
    alert('No es isosceles')
  }
})
