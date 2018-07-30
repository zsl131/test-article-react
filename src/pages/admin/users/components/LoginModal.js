import {Modal, Form, Input} from 'antd';

const FormItem = Form.Item;

const LoginModal = ({
  form:{
    getFieldDecorator,
    validateFields
  },
  onLogin,
  ...loginOpts
}) => {

  const handleLogin = (e) => {
    e.preventDefault();
    validateFields((errors, values) => {
      if(!errors) {
        onLogin(values);
      }
    })
  }

  return (
    <Modal {...loginOpts} onOk={handleLogin}>
      <Form>
        <FormItem>
          {getFieldDecorator("username", {rules:[{required: true, message: "用户名不能为空"}]})(<Input placeholder="输入用户名"/>)}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {rules:[{required: true, message: "密码不能为空"}]})(<Input type="password" placeholder="输入密码"/>)}
        </FormItem>
      </Form>
    </Modal>
  )
}

export default Form.create()(LoginModal);
