const Orders = require('../../../../services/orders');

module.exports = async (req, res) => {
 /* if (!req.isAuthenticated()) {
      return res.status(401)
          .send('you need to log in');
  } */
  let orders;
  
  try {
    orders = await Orders.create(req.body);
  } catch (error) {
    return res.status(422)
        .send(error);
  }

  return res.status(201)
    .send(Orders);
}