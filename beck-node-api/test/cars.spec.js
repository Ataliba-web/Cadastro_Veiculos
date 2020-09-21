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
        const car = veiculos.post('1', 'gl', 'gol', 'xx', 'yy', 'zz', '2020', res);

        // Verifica se as caracteristicas do objeto car é igual ao carSchema
        chai.expect(car).to.containSubset(carSchema);
    });

    it('get', () => {

       // veiculos.post('1', 'gl', 'gol', 'xx', 'yy', 'zz', '2020');
       // veiculos.post('2', 'gl', 'gol', 'xx', 'yy', 'zz', '2020');
		
        const carros = veiculos.get();
        
        // Verifica se as caracteristicas dos objetos no array é igual ao carSchema
        chai.expect(200).to.containSubset([carros]);
    });
	
	it('put', () => {
		
		var req = 1;
		var res;
		
        var status = veiculos.put(req, res);
        
        // Verifica se as caracteristicas dos objetos no array é igual ao carSchema
        chai.expect(status).to.containSubset([201]);
    });
	
	it('delete', () => {

        var req = 1;
        var res;
		
        var status = veiculos.delete(req, res);
        
        // Verifica se as caracteristicas dos objetos no array é igual ao carSchema
        chai.expect(status).to.containSubset([204]);
    });
});