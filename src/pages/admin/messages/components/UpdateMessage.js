import React from 'react';
import {Form,Input,Modal} from 'antd';
const FormItem = Form.Item;
@Form.create()
export default class UpdateMessage extends React.Component{
  state = {
    messages: this.props.messages
  }
  componentDidMount(){
    const{setFieldsValue}=this.props.form;
    setFieldsValue(this.state.messages);
    console.log(this.props);
    console.log(this.state.messages);
  }
  render(){
    const {getFieldDecorator,validateFields}= this.props.form;
    const handleOk=(e)=>{
      e.preventDefault();
      validateFields((errors,values)=>{
        if(!errors){
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
              {getFieldDecorator("author", {rules:[{required: true, message: "请输入作者"}]})(<Input placeholder="输入作者"/>)}
            </FormItem>
            <FormItem>
              {getFieldDecorator("content", {rules:[{required: true, message: "请输入内容"}]})(<Input placeholder="输入内容"/>)}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
