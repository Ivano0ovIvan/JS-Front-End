function solve() {

  let [addFurnitureArea, boughtArea] = document.getElementsByTagName('textarea');
  let [generateBtn, buyBtn] = document.getElementsByTagName('button');

  generateBtn.addEventListener('click', generateFurniture);
  buyBtn.addEventListener('click', buyFurniture);

  function generateFurniture() {
    let addedFurnituresArray = JSON.parse(addFurnitureArea.value);

    addedFurnituresArray.forEach(furniture => {

      let tableBody = document.querySelector('.table tbody')
      let row = document.createElement('tr');

      let imgCell = document.createElement('td');
      let imgElement = document.createElement('img');
      imgElement.src = furniture.img;
      
      imgCell.appendChild(imgElement);

      let nameCell = document.createElement('td')
      let nameElement = document.createElement('p');
      nameElement.textContent = furniture.name;
      nameCell.appendChild(nameElement);

      let priceCell = document.createElement('td');
      let priceElement = document.createElement('p');
      priceElement.textContent = furniture.price;
      priceCell.appendChild(priceElement);

      let decFactorCell = document.createElement('td');
      let decFactorElement = document.createElement('p');
      decFactorElement.textContent = furniture.decFactor;
      decFactorCell.appendChild(decFactorElement);

      let checkBoxCell = document.createElement('td');
      let checkBoxElement = document.createElement('input')
      checkBoxElement.type = 'checkbox';
      checkBoxCell.appendChild(checkBoxElement);

      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decFactorCell);
      row.appendChild(checkBoxCell);

      tableBody.appendChild(row);

    });
  };

  function buyFurniture() {
    let checkedFurnitures = [];
    let buyedFurnitures = []
    let totalPrice = 0;
    let totalDecorationFactor = 0;
    let averageDecorationFactor = 0;


    const tableRows = Array.from(document.querySelectorAll('.table tbody tr'));
    
    tableRows.forEach((row) => {
      const rowData = row.querySelectorAll('td');
      
      const imgSrc = rowData[0].querySelector('img').src;
      const name = rowData[1].querySelector('p').textContent;
      const price = rowData[2].querySelector('p').textContent;
      const decFactor = rowData[3].querySelector('p').textContent;
      const isChecked = rowData[4].querySelector('input').checked;
      
      if (isChecked) {
        const furnitureObject = {
          img: imgSrc,
          name: name,
          price: price,
          decFactor: decFactor,
          isChecked: isChecked
        };
        
        checkedFurnitures.push(furnitureObject);
      }
    });

    checkedFurnitures.forEach((furniture) => {
      buyedFurnitures.push(furniture.name);
      totalPrice += Number(furniture.price);
      totalDecorationFactor += Number(furniture.decFactor);
    })

    averageDecorationFactor = totalDecorationFactor / checkedFurnitures.length;

    boughtArea.value = `Bought furniture: ${buyedFurnitures.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecorationFactor}`
  };
}