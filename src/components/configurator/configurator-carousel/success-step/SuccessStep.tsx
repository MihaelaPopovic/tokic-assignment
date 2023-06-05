import "./SuccessStep.scss";
import Success from "./../../../../assets/success-icon.svg";

function SuccessStep() {
  return (
    <div className="wrapper">
      <img src={Success} />
      <p className="h3 blue">Vaša prijava je uspješno poslana</p>
      <p className="h4">
        Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo vas u
        najkraćem mogućem roku.
      </p>
      <p className="h4">Hvala vam!</p>
    </div>
  );
}

export default SuccessStep;
