import { LoadFile, objMedallas } from './classes/loadFile';


(async ()=> {
    
    //*Creo objeto de la clase
    const loadFile = new LoadFile('./data.txt');
    
    console.log('->loadFile:');
    console.log(loadFile);
    console.log('-------------------------------------------------');

    console.log('->loadFile.dat:');
    console.log(loadFile.dat);
    console.log('-------------------------------------------------');


    //*obtengo datos haciendo uso del metodo Static
    loadFile.dat = await LoadFile.leerArchivo(loadFile.dat.path);

    console.log('->loadFile.dat:');
    console.log(loadFile.dat);
    console.log('-------------------------------------------------');
    
})();