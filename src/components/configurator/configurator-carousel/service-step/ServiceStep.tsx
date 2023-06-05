import "./ServiceStep.scss";
import { useEffect, useState } from "react";
import { Checkbox, Input } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import Check from "./../../../../assets/check.svg";

function ServiceStep({
  selectedServices,
  setSelectedServices,
  totalPrice,
  setTotalPrice,
  setValidPromoCode,
}) {
  const [expandPromo, setExpandPromo] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeError, setPromoCodeError] = useState("");

  const promoCodes = [
    { code: "Tokić123", percent: 30 },
    { code: "Tokić123456", percent: 20 },
    { code: "123456", percent: 15 },
  ];

  const services = [
    {
      name: "Zamjena ulja i filtera",
      price: 65,
    },
    {
      name: "Promjena pakni",
      price: 60,
    },
    {
      name: "Promjena guma",
      price: 15,
    },
    {
      name: "Servis klima uređaja",
      price: 40,
    },
    {
      name: "Balansiranje guma",
      price: 7,
    },
    {
      name: "Zamjena ulja na kočnicama",
      price: 30,
    },
  ];

  const onChange = (e: CheckboxChangeEvent, service) => {
    if (e.target.checked) {
      setSelectedServices((prevServices) => [...prevServices, service]);
    } else {
      const tempServices = selectedServices.filter((selectedService) => {
        return selectedService.name !== service.name;
      });
      setSelectedServices(tempServices);
    }
  };

  useEffect(() => {
    const newTotalPrice = selectedServices.reduce((total, service) => {
      return total + service.price;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [selectedServices, setTotalPrice]);

  //Promo code
  const handleInputChange = (e) => {
    setPromoCode(e.target.value);
  };

  const validatePromoCode = () => {
    const foundPromoCode = promoCodes.find((code) => code.code === promoCode);
    if (foundPromoCode) {
      setValidPromoCode(foundPromoCode);
      setPromoCodeError("");
    } else {
      setPromoCodeError("Kupon nije validan");
    }
  };

  return (
    <div>
      <div className="top">
        <p className="h4 blue space">Korak 2.</p>
        <p className="h4">Odaberite jednu ili više usluga koju trebate</p>
      </div>
      <div className="services">
        {services.map((service, i) => {
          return (
            <Checkbox
              key={i}
              onChange={(event) => {
                onChange(event, service);
              }}
            >
              <p className="h5">{service.name} </p>
              <p className="h5 blue s-space"> ({service.price}€)</p>
            </Checkbox>
          );
        })}
      </div>
      <div className="price-wrapper">
        <div className="side promo">
          <button
            className="link-btn link-btn-s"
            onClick={(event) => {
              event.stopPropagation();
              setExpandPromo(!expandPromo);
            }}
          >
            imam kupon
          </button>
          {expandPromo && (
            <div>
              <div className="promo-wrapper">
                <Input
                  placeholder="Upišite kupon"
                  value={promoCode}
                  onChange={handleInputChange}
                />
                <button
                  className="primary-btn primary-btn-s primary-btn-icon"
                  onClick={validatePromoCode}
                >
                  <img src={Check} />
                </button>
              </div>
              {promoCodeError && <p className="error-msg">{promoCodeError}</p>}
            </div>
          )}
        </div>
        <div className="side">
          <p className="h4 space">UKUPNO:</p>
          <p className="h4 blue">{totalPrice}€</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceStep;
