import React from 'react';
import {Table,Button,Icon,Popconfirm} from 'antd';
import {connect} from 'dva';

const ListLeave = ({
  loading,
  location,
  leave,
  dispatch,
  ...listOpts
}) => {

  const columns = [{
    title: '请假人',
    dataIndex: 'applicant'
  }, {
    title: '请假原因',
    dataIndex: 'reason'
  }, {
    title: '请假天数',
    dataIndex: 'fate'
  }, {
    title: '请假时间',
    dataIndex: 'time'
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
    title:'申请审批',
    render: (cord) => {
      return (
        <div>
          <Button icon="edit" onClick={()=>hand(cord)} type="primary">回复</Button>
        </div>
      );
    }
  }];
  const hand = (cord) => {
    console.log(cord);
    dispatch({type:'leave/modifyState',payload:{it:cord,update:true}});
  }
  const handle = (record) => {
    console.log(record);
    dispatch({type:'leave/modifyState',payload:{item:record,updateVisible:true}});
  }
  const handlerDel= (record) => {
    console.log(record);
    dispatch({type:'leave/deleteObj',payload:record.id});
  }
  return (
    <Table {...listOpts} columns={columns}/>
  );
}

export default connect(({ListLeave, loading}) => ({ListLeave, loading}))(ListLeave);
