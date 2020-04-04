module.exports = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401)
      .send('you need to log in');
  }

  req.user.shipping_addresses.push(req.body)
  req.user.save();

  return res.status(201)
    .send(req.user.shipping_addresses[req.user.shipping_addresses.length - 1]);
}