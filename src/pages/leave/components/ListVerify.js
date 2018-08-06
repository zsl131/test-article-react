import React from 'react';
import {Table,Button,Icon,Popconfirm} from 'antd';
import {connect} from 'dva';

const ListVerify = ({
  loading,
  location,
  dispatch,
  ...listOpts
}) => {

  const columns = [{
    title: '审批人',
    dataIndex: 'approval'
  }, {
    title: '请假时间',
    dataIndex: 'time'
  }, {
    title: '审批结果',
    dataIndex: 'result'
  },{
    title:'id',
    dataIndex:'id'
  }, {
    title: '操作',
    render: (record) => {
      return (
        <span>
        <Button icon="edit" onClick={() => handle(record)} type="primary">修改</Button>
        <Popconfirm title={`是否删除${record.nickname}?`} onConfirm={() => handlerDel(record)}>
    <Button icon="close" type="danger">删除</Button>
    </Popconfirm>
        </span>
      );
    }
  },{
  }];
  const handle = (record) => {
    console.log(record);
    dispatch({type:'leave/modifyState',payload:{item:record,updateVisibleVerify:true}});
  }
  const handlerDel= (record) => {
    console.log(record);
    dispatch({type:'leave/deleteObjVerify',payload:record.id});
  }
  return (
    <Table {...listOpts} columns={columns}/>
  );
}

export default connect(({ListVerify, loading}) => ({ListVerify, loading}))(ListVerify);
