import React from 'react';
import {Table} from 'antd';

const ListMessage = ({
  ...listOpts
}) => {

  const columns = [{
    title: '作者',
    dataIndex: 'author'
  }, {
    title: '时间',
    dataIndex: 'createTime'
  }, {
    title: '内容',
    dataIndex: 'content'
  }, {
    title: '操作',
    render:(record) => {
      return (
        <div>操作{record.id}</div>
      );
    }
  }];

  return (
    <Table {...listOpts} columns={columns}/>
  );
}

export default ListMessage;
