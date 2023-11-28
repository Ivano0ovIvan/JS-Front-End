function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
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
               averageSalary: 0
            };
         }
      });
      
      let restaurantsArray = Object.values(restaurantsMap);

      for (const restaurant of restaurantsArray) {
         console.log(Math.max(restaurant.workers.map(worker => worker.salary)));
         //restaurant.bestSalary = Math.max(restaurant.workers.map(worker => worker.salary));
         //restaurant.averageSalary = (restaurant.workers.reduce((acc, worker) => acc + worker.salary, 0) / workers.length).toFixed(2);
      }
      
      let bestRestaurant = restaurantsArray[0];

      restaurantsArray.forEach(restaurant => {
         if (restaurant.averageSalary > bestRestaurant.averageSalary) {
            bestRestaurant = restaurant;
         }
      }) 

      let bestRestaurantResult = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      let bestRestaurantWorkers = ''
      for (const worker of bestRestaurant.workers) {
         bestRestaurantWorkers += `Name: ${worker.name} With Salary: ${worker.salary} `
      }

      document.querySelector('#bestRestaurant p').textContent = bestRestaurantResult;
      document.querySelector('#workers p').textContent = bestRestaurantWorkers;
   }
}