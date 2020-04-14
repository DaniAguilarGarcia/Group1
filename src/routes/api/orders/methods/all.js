const Review = require('../../../../services/orders');

module.exports = async (req, res) => {

  const { id } = req.params;

  let orders = await orders.findByPurchaseId(id);

  return res.status(200)
    .send(orders);
}