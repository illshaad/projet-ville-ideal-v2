import React from "react";
import { Modal, Button } from "@nextui-org/react";

export default function ModalAdmin({ e }) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button auto shadow onClick={handler}>
        Traitement
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Body>
          <p>Ville : {e.nameCity}</p>
          <p>Culture : {e.culture}</p>
          <p>Education : {e.education}</p>
          <p>Environement : {e.environement}</p>
          <p>Commerce : {e.health}</p>
          <p>Securiter : {e.security}</p>
          <p>Sport et loisir : {e.sportAndLeasur}</p>
          <p>Qualiter de la vie : {e.qualityOfLife}</p>
          <p>Transport : {e.transports}</p>
          <p>Note Global : {e.totalRating}</p>
          <p>Positive : {e.remarkPositive}</p>
          <p>Negative : {e.remarkNegative}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Annuler
          </Button>
          <Button auto onClick={closeHandler}>
            Accepter
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
