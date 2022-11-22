import React, { useEffect, useState } from "react";
import { getTotalRatingsByCity } from "../../service/api";
import ViewAllCitys from "../../composants/city/ViewAllCitys";

export default function City() {
  const [averageCity, setAverageCity] = useState(null);
  useEffect(async () => {
    const response = await getTotalRatingsByCity();
    setAverageCity(response);
  }, []);

  return (
    <ViewAllCitys averageCity={averageCity} setAverageCity={setAverageCity} />
  );
}
