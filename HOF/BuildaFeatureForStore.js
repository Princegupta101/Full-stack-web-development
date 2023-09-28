const inventory = {
    item1: 10, 
    item2: 20, 
    item3: 30, 
  };
  
  function convertToINR(usdPrice) {
    const exchangeRate = 80; 
    return usdPrice * exchangeRate;
  }
  
  const inventoryInINR = Object.keys(inventory).reduce((acc, item) => {
    acc[item] = convertToINR(inventory[item]);
    return acc;
  }, {});
  
  console.log("Inventory in INR:", inventoryInINR);
  