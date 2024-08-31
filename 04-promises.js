let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['milk', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanut'],
};

let isShopOpen = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log('Our shop is closed!'));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log('production started'));
  })
  .then(() => {
    return order(2000, () => console.log('fruit has been cut'));
  })
  .then(() =>
    order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`)
    )
  )
  .then(() => order(1000, () => console.log('machine has been started')))
  .then(() =>
    order(2000, () =>
      console.log(`ice cream has been put on ${stocks.holder[0]}`)
    )
  )
  .then(() =>
    order(3000, () => console.log(`${stocks.toppings[0]} has been added`))
  )
  .then(() => order(2000, () => console.log('ice cream has been served')))
  .catch(() => console.log('Customer left'))
  .finally(() => console.log('day ended. shop is now closed'));
