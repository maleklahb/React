import { useState } from "react";
import styles from './Reservation.module.css'

function Reservation(){
    const[nom,setNom]=useState("");
    const[email,setEmail]=useState("");
    const[telephone,setTelephone]=useState("");
    const[destination,setDestination]=useState("");
    const[dateDepart,setDateDepart]=useState("");
    const[nbVoyageurs,setNbVoyageurs]=useState("1");
    const[typeVoyage,setTypeVoyage]=useState("");
    const[demandes,setDemandes]=useState("");
    const[reservation,setReservation]=useState(null);
    const[erreurs,setErreurs]=useState({});
    const [showPopup,setShowPopup]=useState(false);

    function effacerErreur(champ) {
        setErreurs((prev) => {
            const nouvellesErreurs = { ...prev };
            delete nouvellesErreurs[champ];
            return nouvellesErreurs;
        });
    }

    // 3. Validation du formulaire
    function validerFormulaire() {
        let erreursTemp = {};

        if (nom.trim() === "") {
            erreursTemp.nom = "Le nom est obligatoire";
        }
        if (email.trim() === "") {
            erreursTemp.email = "L'adresse email est obligatoire";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            erreursTemp.email = "L'adresse email n'est pas valide";
        }
        if (telephone.trim() === "") {
            erreursTemp.telephone = "Le téléphone est obligatoire";
        }
        if (destination === "") {
            erreursTemp.destination = "Veuillez choisir une destination";
        }
        if (dateDepart === "") {
            erreursTemp.dateDepart = "La date de départ est obligatoire";
        }
        if (Number(nbVoyageurs) < 1) {
            erreursTemp.nbVoyageurs = "Le nombre de voyageurs doit être au moins 1";
        }
        if (typeVoyage === "") {
            erreursTemp.typeVoyage = "Veuillez choisir un type de voyage";
        }

        setErreurs(erreursTemp);

        return Object.keys(erreursTemp).length === 0;
    }

    // 4. Soumission du formulaire
    function handleSubmit(e) {
        e.preventDefault();

        if (!validerFormulaire()) return;

        setReservation({
            nom,
            email,
            telephone,
            destination,
            dateDepart,
            nbVoyageurs: Number(nbVoyageurs),
            typeVoyage,
            demandes,
        });
        setShowPopup(true);
    }

    function reinitialiser() {
        setNom("");
        setEmail("");
        setTelephone("");
        setDestination("");
        setDateDepart("");
        setNbVoyageurs("1");
        setTypeVoyage("");
        setDemandes("");
        setErreurs({});
        setReservation(null);
        setShowPopup(false);
    }

    function formatDate(iso) {
        const [annee, mois, jour] = iso.split("-");
        return `${jour}/${mois}/${annee}`;
    }

return(
    <section className={styles.container}>
        <h2>Reserver votre voyage</h2>
        <form onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label>Nom et prénom : </label>
              <input 
                type="text"
                className={erreurs.nom ? styles.inputError : ""}
                value={nom}
                onChange={(e)=> {setNom(e.target.value);  effacerErreur("nom");}}
                placeholder="Votre nom et prénom "/>
              {erreurs.nom && (
                 <span className={styles.errorMessage}>
                     {erreurs.nom} </span>)}
            </div>

            <div className={styles.formGroup}>
              <label>Adresse e-mail : </label>
              <input 
                type="email"
                className={erreurs.email ? styles.inputError : ""}
                value={email}
                onChange={(e)=> {setEmail(e.target.value);  effacerErreur("email");}}
                placeholder="exemple@mail.com"/>
              {erreurs.email && (
                 <span className={styles.errorMessage}>
                     {erreurs.email} </span>)}
            </div>

            <div className={styles.formGroup}>
              <label>Téléphone : </label>
              <input 
                type="tel"
                className={erreurs.telephone ? styles.inputError : ""}
                value={telephone}
                onChange={(e)=> {setTelephone(e.target.value);  effacerErreur("telephone");}}
                placeholder="Votre numéro de téléphone"/>
              {erreurs.telephone && (
                 <span className={styles.errorMessage}>
                     {erreurs.telephone} </span>)}
            </div>

            <div className={styles.formGroup}>
              <label>Destination : </label>
              <select
                className={erreurs.destination ? styles.inputError : ""}
                value={destination}
                onChange={(e)=> {setDestination(e.target.value);  effacerErreur("destination");}}>
                <option value="">-- Choisir une destination --</option>
                <option value="Santorin">Santorin</option>
                <option value="Bali">Bali</option>
                <option value="Rome">Rome</option>
                <option value="Istanbul">Istanbul</option>
              </select>
              {erreurs.destination && (
                 <span className={styles.errorMessage}>
                     {erreurs.destination} </span>)}
            </div>

            <div className={styles.formGroup}>
              <label>Date de départ : </label>
              <input 
                type="date"
                className={erreurs.dateDepart ? styles.inputError : ""}
                value={dateDepart}
                onChange={(e)=> {setDateDepart(e.target.value);  effacerErreur("dateDepart");}}/>
              {erreurs.dateDepart && (
                 <span className={styles.errorMessage}>
                     {erreurs.dateDepart} </span>)}
            </div>

            <div className={styles.formGroup}>
              <label>Nombre de voyageurs : </label>
              <input 
                type="number"
                min="1"
                className={erreurs.nbVoyageurs ? styles.inputError : ""}
                value={nbVoyageurs}
                onChange={(e)=> {setNbVoyageurs(e.target.value);  effacerErreur("nbVoyageurs");}}/>
              {erreurs.nbVoyageurs && (
                 <span className={styles.errorMessage}>
                     {erreurs.nbVoyageurs} </span>)}
            </div>

            <div className={styles.formGroup}>
              <label>Type de voyage : </label>
              <div className={styles.radioGroup}>
                {["Économique", "Confort", "Luxe"].map((type) => (
                  <label key={type}>
                    <input
                      type="radio"
                      name="typeVoyage"
                      value={type}
                      checked={typeVoyage === type}
                      onChange={(e)=> {setTypeVoyage(e.target.value);  effacerErreur("typeVoyage");}}/>
                    {type}
                  </label>
                ))}
              </div>
              {erreurs.typeVoyage && (
                 <span className={styles.errorMessage}>
                     {erreurs.typeVoyage} </span>)}
            </div>

            <div className={styles.formGroup}>
              <label>Demandes particulières : </label>
              <textarea
                rows="4"
                value={demandes}
                onChange={(e)=> setDemandes(e.target.value)}
                placeholder="Vos demandes (facultatif)"/>
            </div>

            <div className={styles.buttons}>
              <button type="submit" className={styles.submitButton}>Réserver</button>
              <button type="button" className={styles.resetButton} onClick={reinitialiser}>
                Réinitialiser
              </button>
            </div>
        </form>

        {reservation && (
          <div className={styles.recap}>
            <h3>Récapitulatif de votre réservation :</h3>
            <p>
              {reservation.nom} – {reservation.email} – {reservation.telephone} –{" "}
              {reservation.destination} – {formatDate(reservation.dateDepart)} –{" "}
              {reservation.nbVoyageurs} voyageur
              {reservation.nbVoyageurs > 1 ? "s" : ""} – {reservation.typeVoyage}
              {reservation.demandes && ` – ${reservation.demandes}`}.
            </p>
          </div>
        )}

        {showPopup && reservation && (
          <div className={styles.overlay}>
            <div className={styles.popup}>
              <h3>Réservation enregistrée ✅</h3>
              <p>
                Merci {reservation.nom}, votre voyage à {reservation.destination} est bien enregistré.
              </p>
              <button onClick={() => setShowPopup(false)}>Fermer</button>
            </div>
          </div>
        )}
    </section>
)}
export default Reservation;