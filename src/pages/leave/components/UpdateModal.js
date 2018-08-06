import React from 'react';
import {Form, Modal, Input} from 'antd';

const FormItem = Form.Item;

@Form.create()
export default class UpdateModal extends React.Component {

  state = {
    leave: this.props.leave
  }

  componentDidMount() {
    const {setFieldsValue} = this.props.form;
    setFieldsValue(this.state.leave);
    console.log(this.props);
    console.log(this.state.leave);
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
      </div>
    );
  }
}

