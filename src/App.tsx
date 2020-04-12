import React from "react";
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Typography,
} from "antd";
import logo from "./logo.svg";
import "./App.less";

const { Option } = Select;
const { Title } = Typography;

const App = () => (
  <>
    <section style={{ textAlign: "center", marginTop: 48, marginBottom: 60 }}>
      <img src={logo} className="App-logo" alt="logo" />
      <Title level={2}>
        <img
          style={{
            width: 40,
            height: 40,
            marginRight: 12,
            verticalAlign: "bottom",
          }}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="Ant Design"
        />
        Ant Design
      </Title>
    </section>
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
      <Form.Item label="InputNumber">
        <InputNumber min={1} max={10} defaultValue={3} />
        <span className="ant-form-text"> mississippi</span>
        <a className="App-link" href="https://ant.design">
          Link
        </a>
      </Form.Item>
      <Form.Item label="Switch">
        <Switch defaultChecked={true} />
      </Form.Item>
      <Form.Item label="Slider">
        <Slider defaultValue={70} />
      </Form.Item>
      <Form.Item label="Select">
        <Select defaultValue="lucy" style={{ width: 192 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" disabled={true}>
            disabled
          </Option>
          <Option value="alee">alee</Option>
        </Select>
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button style={{ marginLeft: 8 }}>Cancel</Button>
      </Form.Item>
    </Form>
  </>
);

export default App;
