let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['milk', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanut'],
};

const order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
    call_production();
  }, 2000);
};

// callback hell
const production = () => {
  setTimeout(() => {
    console.log('production has started');
    setTimeout(() => {
      console.log('the fruit has been chopped');
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`);
        setTimeout(() => {
          console.log('machine has been started');
          setTimeout(() => {
            console.log(`${stocks.holder[0]} has been selected`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} has been added`);
              setTimeout(() => {
                console.log('Finally the ice cream has been served');
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);
