const express = require('express');
const router = express.Router();
const jwt = require('njwt');

const claims ={ iss: 'test-jwts', sub: 'AzureDiamond' };
const token = jwt.create(claims, 'test-phase');

/* Base route */
router.get('/', (req, res) => res.send('TODO: use Okta for auth'));

/* GET create token endpoint */
router.get('/create', function(req, res, next) {
  if (req.headers.authorization !== 'Basic QXp1cmVEaWFtb25kOmh1bnRlcjI=') {
    res.set('WWW-Authenticate', 'Basic realm="401"')
    res.status(401).send('Try user: AzureDiamond, password: hunter2')
    return;
  }

	token.setExpiration(new Date().getTime() + 60*1000);
  res.send(token.compact());
});

/* GET verify token endpoint */
router.get('/verify/:token', (req, res) => {
	// console.log(req.params.token);
	jwt.verify(req.params.token, 'test-phase', (err, verifiedJwt) => {
    if(err){
      res.send(err.message);
    }else{
      res.send(verifiedJwt);
    }
  });
});

module.exports = router;
