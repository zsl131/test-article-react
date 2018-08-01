import React from 'react';
import {Form, Modal, Input} from 'antd';

const FormItem = Form.Item;

@Form.create()
export default class UpdateModal extends React.Component {

  state = {
    user: this.props.user
  }

  componentDidMount() {
    const {setFieldsValue} = this.props.form;
    setFieldsValue(this.state.user);
    setFieldsValue({password: ""});
    console.log(this.props);
    console.log(this.state.user);
  }

  render() {

    const {getFieldDecorator, validateFields} = this.props.form;

    const handleOk = (e) => {
      e.preventDefault();
      validateFields((errors, values) => {
        console.log(errors, values);
        if(!errors) {
          this.props.onUpdate(values);
        }
      });
    }

    return (
      <div>
        <Modal {...this.props} onOk={handleOk}>
          <Form >
            {getFieldDecorator("id")(<Input type="hidden"/>)}
            <FormItem>
              {getFieldDecorator("username", {rules:[{required: true, message: "请输入用户名"}]})(<Input placeholder="输入用户名"/>)}
            </FormItem>
            <FormItem>
              {getFieldDecorator("nickname", {rules:[{required: true, message: "请输入昵称"}]})(<Input placeholder="输入用户昵称"/>)}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {rules:[{required: true, message: "请输入密码"}]})(<Input type="password" placeholder="输入密码"/>)}
            </FormItem>
            <FormItem>
              {getFieldDecorator("email")(<Input placeholder="输入用户邮箱"/>)}
            </FormItem>
            <FormItem>
              {getFieldDecorator("phone")(<Input placeholder="输入用户电话"/>)}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
