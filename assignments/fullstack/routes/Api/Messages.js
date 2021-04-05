var router = require('express').Router();
try
{
router.post('/echomessage', function(req, res, next){
 console.log(req.body);
res.send(req.body.MessageBody);
});
}
catch(e)
{
    console.log(e);
}
module.exports = router;
