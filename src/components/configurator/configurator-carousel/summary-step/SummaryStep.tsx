import "./SummaryStep.scss";
import Edit from "./../../../../assets/edit.svg";
import { useState, useEffect } from "react";

function SummaryStep({
  goToStep,
  manufacturer,
  selectedServices,
  form,
  promoCode,
}) {
  const [totalPriceWithPromo, setTotalPriceWithPromo] = useState(0);
  const [promoCodePrice, setPromoCodePrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = selectedServices.reduce((total, service) => {
      return total + service.price;
    }, 0);
    if (promoCode) {
      const percentage = promoCode.percent / 100;
      const totalSale = newTotalPrice * percentage;
      setPromoCodePrice(totalSale);
      setTotalPriceWithPromo(newTotalPrice - totalSale);
    } else {
      setTotalPriceWithPromo(newTotalPrice);
    }
  }, [selectedServices, promoCode]);

  const selectStep = (stepIndex: number) => {
    goToStep(stepIndex);
  };

  return (
    <div>
      <div className="top">
        <p className="h4 blue space">Korak 4.</p>
        <p className="h4">Pregled i potvrda vašeg odabira </p>
      </div>
      <div className="middle">
        <p className="h5 base">
          Molimo vas da još jednom pregledate i potvrdite podatke. Ukoliko
          želite promijeniti neki od podataka, možete pritisnuti gumb za
          uređivanje pored svake od kategorija. Kada ste provjerili ispravnost
          svojih podataka, za slanje upita na servis pritisnite gumb “Pošalji”
          koji se nalazi na dnu.
        </p>
      </div>
      <div className="summary-wrapper">
        <div className="details-wrapper border">
          <div className="title-wrapper">
            <p className="h4 blue">Model vozila</p>
            <button
              className="tertiary-btn tertiary-btn-s"
              onClick={(event) => {
                event.stopPropagation();
                selectStep(0);
              }}
            >
              Uredi <img src={Edit} />
            </button>
          </div>
          <div className="details">
            <p className="h5">{manufacturer}</p>
          </div>
        </div>
        <div className="details-wrapper border">
          <div className="title-wrapper">
            <p className="h4 blue">Odabrane usluge</p>
            <button
              className="tertiary-btn tertiary-btn-s"
              onClick={(event) => {
                event.stopPropagation();
                selectStep(1);
              }}
            >
              Uredi <img src={Edit} />
            </button>
          </div>
          <div className="details">
            {selectedServices.map((service, i) => {
              return (
                <div key={i} className="service-detail">
                  <p className="h5">{service.name} </p>
                  <p className="h5 "> {service.price}€</p>
                </div>
              );
            })}
          </div>
          <div className="price-details">
            {promoCode && (
              <div className="price">
                <p className="h5 base center">Popust {promoCode.percent}%:</p>
                <p className="h5 black">-{promoCodePrice} €</p>
              </div>
            )}
            <div className="price">
              <p className="h5 base center">Ukupno:</p>
              <p className="h5 blue ">{totalPriceWithPromo} €</p>
            </div>
          </div>
        </div>
        <div className="details-wrapper">
          <div className="title-wrapper">
            <p className="h4 blue">Kontakt podaci</p>
            <button
              className="tertiary-btn tertiary-btn-s"
              onClick={(event) => {
                event.stopPropagation();
                selectStep(2);
              }}
            >
              Uredi <img src={Edit} />
            </button>
          </div>
          <div className="form-details">
            <div className="input-wrapper">
              <p className="h5 base">Ime i prezime: </p>
              <p className="h5 black"> {form.fullName}</p>
            </div>
            <div className="input-wrapper">
              <p className="h5 base">Email adresa: </p>
              <p className="h5 "> {form.email}</p>
            </div>
            <div className="input-wrapper">
              <p className="h5 base">Broj telefona: </p>
              <p className="h5 "> {form.phone}</p>
            </div>
            <div className="input-wrapper">
              <p className="h5 base">Napomena: </p>
              <p className="h5 description"> {form.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryStep;
