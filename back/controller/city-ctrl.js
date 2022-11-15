const Axios = require("axios");

const getDataIleDeFrance = async (req, res) => {
  try {
    const [dataCommune, dataDepartement] = await Axios.all([
      Axios.get(
        `${process.env.API_GOUV}communes?codeRegion=11&fields=nom,code,codesPostaux,population,centre&format=json&geometry=centre`
      ),
      Axios.get(
        `${process.env.API_GOUV}regions/11/departements?fields=nom,code`
      ),
    ]);

    const recoveryPostalCode = dataCommune.data.map((e) => {
      const departement = dataDepartement.data.find(
        (f) => f.code === e.code.split("", 2).join("")
      );
      return {
        ...e,
        departement,
      };
    });

    res.status(200).json(recoveryPostalCode);
  } catch (error) {
    console.log(error);
    res.status(400).send("oups erreur");
  }
};

module.exports = { getDataIleDeFrance };
