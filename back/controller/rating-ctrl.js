const Rating = require("../model/rating");
const Opinion = require("../model/opinions");
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
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("oups erreur");
  }
};

const getRatings = async (req, res) => {
  try {
    const ratings = await Rating.find({ status: "valide" });
    res.status(200).json({ ratings });
  } catch (error) {
    console.log(error.message);
    res.status(400).send("oups erreur");
  }
};

const addOpinion = async (req, res) => {
  // Recois l'opinion avec id de la ville noté
  //Recois l'opinion sous obj
  // Recuperer la donnée de la ville en bdd/
  // Ajouter  a la donnée de la ville un obj avec le nom de l utilisateur et lopinion

  try {
    const getRatingsById = await Rating.find({ _id: id });
    const addOpinion = Rating.create({
      ...getRatingsById,
      Opinion,
    });
    res.status(200).json({ addOpinion });
  } catch (error) {
    console.log(error.message);
    res.status(400).send("oups erreur");
  }
};

const getTotalRatingsByCity = async (req, res) => {
  try {
    const ratingsByCity = await Rating.aggregate([
      {
        $group: {
          _id: "$nameCity",
          totalRating: { $avg: "$totalRating" },
          nameDepartement: { $first: "$nameDepartement" },
        },
      },
    ]);
    res.status(200).json(ratingsByCity);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("oups erreur");
  }
};

const getRatingsPending = async (req, res) => {
  try {
    const ratings = await Rating.find({ status: "pending" });
    res.status(200).json({ ratings });
  } catch (error) {
    console.log(error.message);
    res.status(400).send("oups erreur");
  }
};

const updateStatus = async (req, res) => {
  try {
    const id = req.body._id;
    await Rating.findOneAndUpdate({ _id: id }, { status: "valide" });
    res.status(200).send("Modification ok");
  } catch (error) {
    console.log(error.message);
    res.status(400).send("oups erreur");
  }
};

module.exports = {
  createRating,
  getRatings,
  updateStatus,
  getRatingsPending,
  getTotalRatingsByCity,
};
