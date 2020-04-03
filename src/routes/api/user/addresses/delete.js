module.exports = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401)
      .send('you need to log in');
  }

  // address id
  const { _id } = req.params;

  req.user.shipping_addresses.pull(_id)
  req.user.save();

  return res.status(204)
    .send();
}