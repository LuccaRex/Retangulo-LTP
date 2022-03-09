class Retangulo{
  
  constructor(altura, largura){
  this.altura = altura
  this.largura = largura
  }
  mostrarAtributos(){
    return "Altura: " + this.altura +" Largura: "+ this.largura
  }
  calcularArea(){
    let area = "Área do retângulo: " + this.altura * this.largura
    return area
  }
  area(){
    return this.calcularArea()
  }
}
let quadrado = new Retangulo("10", "10");
let retangulo = new Retangulo("30", "60");
//console.log(quadrado.mostrarAtributos(), quadrado.calcularArea())
//console.log(retangulo.mostrarAtributos(), retangulo.calcularArea())
console.log(quadrado.area())
console.log(retangulo.area())