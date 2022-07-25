import * as fs from 'fs/promises';
import { Medallas, MedallasObject } from '../interfaces/medallas';


export type objMedallas = {
    path:string,
    data:MedallasObject[]
};

export class LoadFile {

    private d:MedallasObject[] = [];

    constructor(
        private path:string
    ){}

    get dat():objMedallas{
        return {path:this.path,data:this.d};
    }

    set dat(obj:objMedallas){
        this.path= obj.path;
        this.d = obj.data;

    }
    
    static leerArchivo = async(path:string):Promise<objMedallas> => {
        try {
    
            const archivo = await fs.readFile(path);
            let data = JSON.parse(archivo.toString());
            console.log('->successfully read');
            const newData:MedallasObject[] = data.map((obj:Medallas,index:number)=>{
                        // return Object.assign({id:index},obj);
                        return {...{id:index},...obj};
                    });
            return {path:path,data:newData};
        } catch (err) {
            // handle the error
            console.error(err);
            return {path:'',data:[]}
        }
    }
}
