import "./ConfiguratorCarousel.scss";
import { useRef, useState } from "react";
import { Carousel, Form } from "antd";
import ManufacturerStep from "./manufacturer-step/ManufacturerStep";
import ServiceStep from "./service-step/ServiceStep";
import FormStep from "./form-step/FormStep";
import SummaryStep from "./summary-step/SummaryStep";
import SuccessStep from "./success-step/SuccessStep";

function ConfiguratorCarousel({ setIsModalOpen }) {
  const [manufacturer, setManufacturer] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [totalPrice, setTotalPrice] = useState();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [validPromoCode, setValidPromoCode] = useState("");

  const [form] = Form.useForm();
  const carouselRef = useRef();

  const isButtonDisabled = () => {
    if (currentSlideIndex == 0 && !manufacturer) {
      return true;
    } else if (currentSlideIndex == 1 && selectedServices.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  const handlePrevious = () => {
    if (currentSlideIndex === 0) {
      setIsModalOpen(false);
    } else {
      carouselRef.current.prev();
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentSlideIndex === 2) {
      setIsFormSubmitted(true);
      form.validateFields().then((values) => {
        carouselRef.current.next();
      });
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      carouselRef.current.next();
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const goToStep = (stepIndex) => {
    setCurrentSlideIndex(stepIndex);
    carouselRef.current.goTo(stepIndex);
  };

  return (
    <>
      <Carousel ref={carouselRef} adaptiveHeight={true} dots={false}>
        <ManufacturerStep setManufacturer={setManufacturer} />
        <ServiceStep
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          setValidPromoCode={setValidPromoCode}
        />
        <FormStep formInstance={form} />
        <SummaryStep
          goToStep={goToStep}
          manufacturer={manufacturer}
          selectedServices={selectedServices}
          form={form.getFieldsValue()}
          promoCode={validPromoCode}
        />
        <SuccessStep />
      </Carousel>
      <div className={`footer ${currentSlideIndex == 4 ? "center" : ""}`}>
        {currentSlideIndex !== 4 ? (
          <>
            <button
              className="default-btn default-btn-s"
              onClick={handlePrevious}
            >
              {currentSlideIndex == 0 ? "Odustani" : "Nazad"}
            </button>

            <button
              disabled={isButtonDisabled()}
              className="primary-btn primary-btn-s"
              onClick={handleNext}
            >
              {currentSlideIndex == 3 ? "Pošalji" : "Dalje"}
            </button>
          </>
        ) : (
          <button
            className="primary-btn primary-btn-s"
            onClick={(event) => {
              event.stopPropagation();
              setIsModalOpen(false);
            }}
          >
            Zatvori
          </button>
        )}
      </div>
    </>
  );
}

export default ConfiguratorCarousel;
