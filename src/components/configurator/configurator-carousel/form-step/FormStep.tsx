import "./FormStep.scss";
import { Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
function FormStep({ formInstance }) {
  const { TextArea } = Input;
  const [form] = useForm(formInstance);

  return (
    <>
      <Form form={form} layout="vertical">
        <Form.Item
          name="fullName"
          label="Ime i prezime"
          rules={[
            {
              required: true,
              message: "Molimo Vas da upišete svoje ime i prezime",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email adresa"
          rules={[
            {
              required: true,
              type: "email",
              message: "Molimo Vas da upišete svoju email adresu",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Broj telefona"
          rules={[
            {
              required: true,
              message: "Molimo Vas da upišete svoj broj telefona",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Napomena (opcionalno)">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item></Form.Item>
      </Form>
    </>
  );
}

export default FormStep;
