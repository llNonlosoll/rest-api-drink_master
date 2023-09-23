const { recipesModel } = require('../../models/recipesModel');
const  HttpError = require('../../helpers/HttpError');

const getOwnRecipes = async (req, res) => {
    const { _id } = req.user;
 const recipes = await recipesModel.find({owner: _id});
 if (!recipes) {
    throw HttpError(404, "User haven't recipes yet");
 }
 res.status(200).json({
    code: 200,
    message: 'Success operation',
    data: recipes,
 });
}

module.exports = getOwnRecipes;