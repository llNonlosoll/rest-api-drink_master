const { RecipesModel } = require('../../models/RecipesModel');
const HttpError = require('../../helpers/HttpError');

const getFavoriteRecipes = async (req, res) => {
    const userId = req.user.id;
    const recipes = await RecipesModel.find({ favorites: userId }, 
        {drink:1, alcoholic:1, description:1, drinkThumb:1 });
    if (!recipes) {
        throw HttpError(404, "User haven't favorite recipes yet");
    }
    res.status(200).json({
        code: 200,
        message: 'Success operation',
        data: recipes,
    });
}

module.exports = getFavoriteRecipes;