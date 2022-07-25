const fs = require('fs/promises');

const leerArchivo = async() => {
    try {

        const archivo = await fs.readFile('./data.txt');
        let data = JSON.parse(archivo.toString());
        console.log("data");
        console.log(data);
        console.log('successfully read');

        return data.map((obj,index)=>{
            return Object.assign({id:index},obj);
        });
    } catch (err) {
        // handle the error
        console.error(err);
    }
}

(async ()=> {
    let arch = await leerArchivo()
    console.log(arch);
})();
