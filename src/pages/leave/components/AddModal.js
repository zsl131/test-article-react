import {Modal, Form, Input} from 'antd';

const FormItem = Form.Item;

const AddModal = ({
  form:{
    getFieldDecorator,
    validateFields,
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
          {getFieldDecorator("applicant", {rules:[{required: true, message: "请输入申请人"}]})(<Input placeholder="输入申请人"/>)}
        </FormItem>
        <FormItem>
          {getFieldDecorator("reason", {rules:[{required: true, message: "请假原因"}]})(<Input placeholder="原因"/>)}
        </FormItem>
        <FormItem>
          {getFieldDecorator("fate")(<Input placeholder="输入天数"/>)}
        </FormItem>
      </Form>
    </Modal>
  );
}

export default Form.create()(AddModal);
