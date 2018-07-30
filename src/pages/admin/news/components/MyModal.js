import React from 'react';
import {Modal} from 'antd';

const MyModal = ({
  item,
  ...showOpts
}) => {
  return (
    <Modal {...showOpts}>
      <h3>{item.title}</h3>
      <span>{item.author}</span>
    </Modal>
  );
}

export default MyModal;
