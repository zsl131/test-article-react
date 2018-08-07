import React from 'react';
import {Form, Modal, Input} from 'antd';

const FormItem = Form.Item;

@Form.create()
export default class UpdateModal extends React.Component {



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
              {getFieldDecorator("approval", {rules:[{required: true, message: "请输入审批人"}]})(<Input placeholder="输入审批人"/>)}
            </FormItem>
            <FormItem>
              {getFieldDecorator("result", {rules:[{required: true, message: "同意与否"}]})(<Input placeholder="是否同意"/>)}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

