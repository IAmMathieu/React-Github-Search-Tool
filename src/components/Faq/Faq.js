import styles from './styles.scss';

function Faq() {
  return (
    <>
      <p className={styles.question}>
        A quoi ça sert ?
      </p>
      <p className={styles.answer}>
        Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.
      </p>
      <p className={styles.question}>
        Comment faire une recherche ?
      </p>
      <p className={styles.answer}>
        Sur la page recherche, complétez le champ de recherche et valider la recherche.
      </p>
      <p className={styles.question}>
        Puis-je chercher n'importe quel terme ?
      </p>
      <p className={styles.answer}>
        Oui, c'est fou.
      </p>
    </>
  );
}

export default Faq;
