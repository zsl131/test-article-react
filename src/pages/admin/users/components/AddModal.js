import {Modal, Form, Input} from 'antd';

const FormItem = Form.Item;

const AddModal = ({
  form:{
    getFieldDecorator,
    validateFields
  },
  onAdd,
  ...addOpts
}) => {

  const handleOk = (e)=> {
    e.preventDefault();
    validateFields((errors, values) => {
      console.log(errors, values);
      if(!errors) {
        onAdd(values);
      }
    });
  }

  return (
    <Modal {...addOpts} onOk={handleOk}>
      <Form onSubmit={handleOk}>
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
  );
}

export default Form.create()(AddModal);
