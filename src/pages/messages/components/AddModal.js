import {Modal, Form, Input} from 'antd';
const FormItem = Form.Item;
const AddModal=({
  form:{
    getFieldDecorator,
    validateFields
  },
  onAdd,
  ...addOpts
})=>{
  const handleOk = (e)=>{
    e.preventDefault();
    validateFields((errors,values)=>{
      console.log(errors,values);
      if(!errors){
        onAdd(values);
      }
    })
  }
  return(
    <Modal{...addOpts} onOk={handleOk}>
      <Form onSubmit={handleOk}>
        <FormItem>
          {getFieldDecorator("author",{rules:[{required:true,message:"请输入作者"}]})(<Input placeholder="请输入作者"/> )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("content",{rules:[{required:true,message:"请输入内容"}]})(<Input placeholder="请输入内容"/> )}
        </FormItem>
      </Form>
    </Modal>
  );
}
export default Form.create()(AddModal);
