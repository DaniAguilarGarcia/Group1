module.exports = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401)
      .send('you need to log in');
  }

  // address id
  const { _id } = req.params;

  const address = req.user.shipping_addresses.id(_id);
  address.set(req.body);
  await req.user.save();

  return res.status(200)
    .send(address);
}