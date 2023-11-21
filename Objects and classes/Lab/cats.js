function getCats(arr) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }

    }

    for (let i = 0; i < arr.length; i++) {
        const currentCat = arr[i].split(" ");
        const [name, age] = currentCat;
        const newCat = new Cat(name, age);
        newCat.meow()
        cats.push(new Cat(name, age));
    }
}

getCats(['Mellow 2', 'Tom 5'])