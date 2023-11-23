function inventory(inputArr) {
    let heroes = [];

    for (const heroData of inputArr) {
        let [name, level, items] = heroData.split(" / ");
        let hero = {
            name,
            level: Number(level),
            items: items
        };
        heroes.push(hero);
    }

    let sortedHeroes = heroes.sort((a, b)=>a.level - b.level);

    for (const hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )