const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };


  const customerInfo = (order) => {
    console.log(`Olá ${Object.values(order.order.delivery)[0]}, entrega para: ${Object.values(order)[0]}, Telefone: ${Object.values(order)[1]}, ${Object.values(order.address)[0]}, Nº: ${Object.values(order.address)[1]}, AP: ${Object.values(order.address)[2]}.`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    order.name = 'Luiz';
    order.order.pizza.marguerita[1] = 20;
    order.order.pizza.pepperoni[1] = 15;
    order.payment[0] = 60;
    console.log(`Olá ${Object.values(order)[0]}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${Object.values(order.order.drinks.coke)[0]} é R$${Object.values(order.payment)[0]},00."`);
  }
  
  orderModifier(order);