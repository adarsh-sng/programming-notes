
*AntiPattern* - Practically may seem useful at first, but leads to issues in the long run.They are counterproductive and should be avoided.

- Classic Patterns
   - Typically around OOPS solution.
   - Creational
   - Structural
    - Behavioral.
- Creational Design Patterns
    They aim to solve the problems associated with creating objects in a way that enhances flexibility and reuse of existing code. The primary purpose of creational patterns is to separate the logic of object creation from the rest of the code


    1. **Singleton** - Ensures a class has only one instance and provides a global point of access to it.   
    ```ts
    class Singleton {
        private static instance: Singleton;

        private constructor() {}

        public static getInstance(): Singleton {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }
            return Singleton.instance;
        }
    }
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();
    console.log(singleton1 === singleton2); // true
    ```
    2. **Factory Method** - Defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.
    ```ts
    interface Product {
        operation(): string;
    }           
    class ConcreteProductA implements Product {
        public operation(): string {
            return 'Result of ConcreteProductA';
        }
    }
    class ConcreteProductB implements Product {
        public operation(): string {
            return 'Result of ConcreteProductB';
        }
    }
    abstract class Creator {
        public abstract factoryMethod(): Product; 
        public someOperation(): string {
            const product = this.factoryMethod();
            return `Creator: The same creator's code has just worked with ${product.operation()}`;
        }
    
    }
    class ConcreteCreatorA extends Creator {
        public factoryMethod(): Product {       
            return new ConcreteProductA();
        }
    }
    class ConcreteCreatorB extends Creator {
        public factoryMethod(): Product {       
            return new ConcreteProductB();
        }
    }
    // Usage
    const creatorA = new ConcreteCreatorA();
    console.log(creatorA.someOperation());  
    const creatorB = new ConcreteCreatorB();
    console.log(creatorB.someOperation());  
    ```