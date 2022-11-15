const Rating = require("../model/rating");

const createRating = async (req, res) => {
  try {
    const dataToFront = req.body;

    const formatAverageNumber = () => {
      let array = [];
      for (let number in dataToFront) {
        array.push(parseInt(dataToFront[number]));
      }
      const removeNaN = array.filter((e) => Boolean(e));
      const some = removeNaN.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );
      const moyenne = some / removeNaN.length;
      const round = moyenne.toFixed(2);
      return parseInt(round);
    };

    const totalRating = formatAverageNumber(dataToFront);

    const saveRating = new Rating({
      ...req.body,
      totalRating: totalRating,
    });

    saveRating.save();

    res.status(201).json({
      message:
        "Votre avis est bien enregistré nous allons effectuer un contrôle",
      someRating: totalRating,
      ...dataToFront,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("oups erreur");
  }
};

const getRatings = async (req, res) => {
  try {
    const ratings = await Rating.find({});
    res.status(200).json({ ratings });
  } catch (error) {
    console.log(error.message);
    res.status(400).send("oups erreur");
  }
};

module.exports = { createRating, getRatings };
