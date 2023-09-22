const { recipesModel } = require('../../models/recipesModel');

const getMainPage = async (req, res) => {
   // const { adult } = req.user;
    const adult = false;
    console.log('controll Mainpage', adult);
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    let getByCondition = { alcoholic: "Non alcoholic" };
    if (adult) { getByCondition = {} };
    
  //  console.log('controll Mainpage', req.query);
 const drinks = await recipesModel.find(getByCondition,"",{skip,limit});
 res.status(200).json({
    code: 200,
    quantity: drinks.length,
    data: drinks
 });
}

module.exports = getMainPage;