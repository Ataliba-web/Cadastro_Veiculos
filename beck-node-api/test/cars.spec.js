const chai = require('chai');
const http = require('chai-http'); // Extensão da lib chai p/ simular requisições http
const subSet = require('chai-subset'); // Extensao da lib chai p/ verificar objetos

const veiculos = require('C:/Veiculos/beck-node-api/routes/cars'); // Arquivo a ser testado

chai.use(http);
chai.use(subSet);

// O atributo do objeto será testado para verificar se ele existe
// O atributo recebe uma função, e ela deve retornar true para o teste passar
const carSchema = {
    id: id => id,
    modelo: modelo => modelo,
	marca: marca => marca,
	placa: placa => placa,
	renavam: renavam => renavam,
	chassi: chassi => chassi,
	ano: ano => ano
};

describe('Teste das funcoes', () => {

    it('post', () => {
		var req = 1;
		var res;
        const car = veiculos.post(req, res);

        // Verifica se as caracteristicas do objeto car é igual ao carSchema
        chai.expect(car).to.containSubset(carSchema);
    });

    it('get', () => {

       // veiculos.post('1', 'gl', 'gol', 'xx', 'yy', 'zz', '2020');
       // veiculos.post('2', 'gl', 'gol', 'xx', 'yy', 'zz', '2020');
		
        const carros = veiculos.get();
        
        chai.expect(carros.length).to.be.equals(3);
        // Primeiro se verifica se está retornando um array
        // Verifica se as caracteristicas dos objetos no array é igual ao carSchema
        chai.expect(carros).to.containSubset([carSchema]);
    });
	
	it('put', () => {
		
		var req = 1;
		var res;
		
        veiculos.put(req, res);
        
   //     chai.expect(carros.length).to.be.equals(3);
        // Primeiro se verifica se está retornando um array
        // Verifica se as caracteristicas dos objetos no array é igual ao carSchema
    //    chai.expect(carros).to.containSubset([carSchema]);
    });
	
	it('delete', () => {

        var req = 1;
        var res;
		
        const carros = veiculos.delete(req, res);
        
   //     chai.expect(carros.length).to.be.equals(3);
        // Primeiro se verifica se está retornando um array
        // Verifica se as caracteristicas dos objetos no array é igual ao carSchema
     //   chai.expect(carros).to.containSubset([carSchema]);
    });
});