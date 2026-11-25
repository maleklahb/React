import { useState } from "react";
import styles from "./Reservation.module.css";

function Reservation() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");  
  const [telephone, setTelephone] = useState("");

  return (
    <section className={styles.container}>
      <h2>Réservez votre voyage</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label>Nom et prénom :</label>
          <input
            type="text"
            className={erreurs.nom ? styles.inputError : ""}
            value={nom}
            onChange={(e) => {
              setNom(e.target.value);
              effacerErreur("nom");
            }}
            placeholder="Votre nom et prénom"
          />
          (erreurs.nom && (
            <span className={styles.errorMessage}>
                {erreurs.nom}
                </span>
          ))
        </div>
      </form>
    </section>
  );
}
