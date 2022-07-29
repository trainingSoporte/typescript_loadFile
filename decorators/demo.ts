// function f(C: any) {
//     console.log('apply decorator')
//     return C
//   }
  
//   @f
//   class A {}
  
//   // output: apply decorator

  function f(key: string): any {
    console.log("evaluate: ", key);
    return function () {
      console.log("call: ", key);
    };
  }
  
  @f("Class Decorator")
  class C {
    @f("Static Property")
    static prop?: number;
  
    @f("Static Method")
    static method(@f("Static Method Parameter") foo:any) {}
  
    constructor(@f("Constructor Parameter") foo:any) {}
  
    @f("Instance Method")
    method(@f("Instance Method Parameter") foo:any) {}
  
    @f("Instance Property")
    prop?: number;
  }

  type ClassDecorator = <TFunction extends Function>  (target: TFunction) => TFunction | void;