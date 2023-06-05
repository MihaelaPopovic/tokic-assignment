import "./ManufacturerStep.scss";
import { Radio, RadioChangeEvent } from "antd";

function ManufacturerStep({ setManufacturer }) {
  const manufacturers = [
    "Peugeot",
    "Volkswagen",
    "Citroen",
    "Audi",
    "BMW",
    "Seat",
    "Alfa Romeo",
    "Kia",
    "Hyundai",
    "Honda",
    "Toyota",
  ];

  const onChange = (e: RadioChangeEvent) => {
    setManufacturer(e.target.value);
  };

  return (
    <div>
      <div className="top">
        <p className="h4 blue space">Korak 1.</p>
        <p className="h4">Odaberite proizvođača vašeg vozila </p>
      </div>
      <div className="bottom">
        <Radio.Group onChange={onChange}>
          {manufacturers.map((manufacturer, i) => {
            return (
              <Radio value={manufacturer} key={i}>
                <p className="text">{manufacturer}</p>
              </Radio>
            );
          })}
        </Radio.Group>
      </div>
    </div>
  );
}

export default ManufacturerStep;
