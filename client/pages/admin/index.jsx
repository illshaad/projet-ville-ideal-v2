import React, { useState, useEffect } from "react";
import Admin from "../../composants/admin/Admin";
import { getInformationRatingsPending } from "../../service/api";

export default function AdminPage() {
  const [dataInformation, setDataInformation] = useState(null);

  useEffect(() => {
    getInformationRatingsPending().then((res) =>
      setDataInformation(res?.data.ratings)
    );
  }, []);

  return <Admin dataInformation={dataInformation} />;
}
