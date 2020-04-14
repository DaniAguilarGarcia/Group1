const Review = require('../../../../services/purchase');

module.exports = async (req, res) => {

  const { id } = req.params;

  let orders = await orders.findByPurchaseId(id);

  return res.status(200)
    .send(purchase);
}