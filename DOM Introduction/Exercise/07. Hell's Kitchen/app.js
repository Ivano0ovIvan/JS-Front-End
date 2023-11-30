function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputArray = JSON.parse(document.querySelector('#inputs textarea').value);

      let restaurantsMap = {};

      inputArray.forEach(entry => {
         const [restaurantName, data] = entry.split(' - ');
         const workerData = data.split(', ');

         const workers = workerData.map(worker => {
            const [name, salary] = worker.split(' ');
            return { name, salary: parseInt(salary) };
         });

         if (restaurantsMap[restaurantName]) {
            restaurantsMap[restaurantName].workers.push(...workers);
         } else {
            restaurantsMap[restaurantName] = {
               name: restaurantName,
               workers: workers.sort((a, b) => b.salary - a.salary),
               bestSalary: 0,
               averageSalary: 0,
            };
         }
      });

      let restaurantsArray = Object.values(restaurantsMap);

      for (const restaurant of restaurantsArray) {

         let totalSalary = 0;

         for (const worker of restaurant.workers) {
            totalSalary += worker.salary

            if (worker.salary > restaurant.bestSalary) {
               restaurant.bestSalary = worker.salary
            }
         }

         restaurant.averageSalary = (totalSalary / restaurant.workers.length).toFixed(2);

      }

      let bestRestaurant = restaurantsArray.reduce((prev, current) => {
         return parseFloat(prev.averageSalary) > parseFloat(current.averageSalary) ? prev : current;
      }, {});

      let bestRestaurantResult = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      let bestRestaurantWorkers = '';

      for (const worker of bestRestaurant.workers) {
         bestRestaurantWorkers += `Name: ${worker.name} With Salary: ${worker.salary} `
      };

      document.querySelector('#bestRestaurant p').textContent = bestRestaurantResult;
      document.querySelector('#workers p').textContent = bestRestaurantWorkers;
   }
}