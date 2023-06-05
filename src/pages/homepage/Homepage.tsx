import "./Homepage.scss";
import { useState } from "react";
import Tools from "./../../assets/tools-icon.svg";
import ConfiguratorModal from "../../components/configurator/configurator-modal/ConfiguratorModal";

function Homepage() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="wrapper">
      <img src={Tools} />
      <h4 className="blue">Pritisnite gumb niže kako biste pokrenuli</h4>
      <button
        className="primary-btn primary-btn-s"
        onClick={(event) => {
          event.stopPropagation();
          setIsModalOpen(true);
        }}
      >
        Pokreni konfigurator
      </button>
      {isModalOpen && (
        <ConfiguratorModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}

export default Homepage;
