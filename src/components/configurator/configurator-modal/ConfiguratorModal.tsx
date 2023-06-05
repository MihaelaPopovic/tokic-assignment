import { Modal } from "antd";
import ConfiguratorCarousel from "../configurator-carousel/ConfiguratorCarousel";

function ConfiguratorModal({ isModalOpen, setIsModalOpen }) {
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Konfigurator Servisa"
      open={isModalOpen}
      footer={null}
      width={600}
      onCancel={handleCancel}
    >
      <ConfiguratorCarousel setIsModalOpen={setIsModalOpen} />
    </Modal>
  );
}

export default ConfiguratorModal;
