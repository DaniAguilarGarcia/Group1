const zxcvbn = require('zxcvbn');
const Bcrypt = require('bcryptjs');

const validate = (value, min_score) => {
    const result = zxcvbn(value);
    return result.score >= min_score;
};

const hash = (value) => {
    const salt = Bcrypt.genSaltSync(10);
    return Bcrypt.hashSync(value, salt);
};

const compare = (value, hash) => {
    return Bcrypt.compareSync(value, hash);
}

module.exports = {
    validate,
    hash,
    compare,
};
