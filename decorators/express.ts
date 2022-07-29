// function express(constructor:Function):any {
//     console.log(constructor);

//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("first(): called");
//       console.log('target');
//       console.log(target);
//       console.log('propertyKey');
//       console.log(propertyKey);
//       console.log('descriptor');
//       console.log(descriptor);

//     };
//   }

// function Controller(target:any,route: string):Function {
//   console.log(target);
//   console.log(route);
//   const express = require("express");
//   const app = express();
//   const port = 3000;

//   return function(){}
// }

// type Consturctor = { new (...args: any[]): any };

function Controller(route: string): Function {
  console.log(route);
  const express = require("express");
  const app = express();
  const port = 3000;
  return function (target: any) {
    return class extends target {
      public _route: string = route;
      private _app: any = app;
      private _port: any = port;
    };
  };
}

function Get(): Function {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Decorador Get");
    // console.log(this._route);
    

    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(this._route);
      this._app.get(this._route, (req: any, res: any) => {
        res.send(original.call(this, ...args));
      });

      return this._app.listen(this._port, () => {
        console.log(`Example app listening on port ${this._port}`);
      });
    };
  };
}

@Controller("/saludo")
class SaludoController {
  @Get()
  mensaje(): string {
    return "Estan Ahi todavia?";
  }
}

const controller = new SaludoController();

console.log(controller.mensaje());
