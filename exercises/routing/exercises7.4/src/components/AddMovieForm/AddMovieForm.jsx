import { Form, Input, InputNumber, Button } from "antd";
import { UserOutlined, VideoCameraOutlined, DollarOutlined, PictureOutlined, FileTextOutlined } from '@ant-design/icons';

const AddMovieForm = ({ onMovieAdded }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const newMovie = { ...values };
    onMovieAdded(newMovie);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: 'Please input the title!' }]}
      >
        <Input prefix={<VideoCameraOutlined />} />
      </Form.Item>
      <Form.Item
        name="director"
        label="Director"
        rules={[{ required: true, message: 'Please input the director!' }]}
      >
        <Input prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name="duration"
        label="Duration"
        rules={[{ required: true, message: 'Please input the duration!' }]}
      >
        <InputNumber min={0} prefix={<VideoCameraOutlined />} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="imageUrl"
        label="Image URL"
        rules={[{ required: true, message: 'Please input the image URL!' }]}
      >
        <Input prefix={<PictureOutlined />} />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input.TextArea prefix={<FileTextOutlined />} />
      </Form.Item>
      <Form.Item
        name="budget"
        label="Budget"
        rules={[{ required: true, message: 'Please input the budget!' }]}
      >
        <InputNumber min={0} prefix={<DollarOutlined />} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Movie
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddMovieForm;