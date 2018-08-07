import React from 'react';
import {Table,Button,Popconfirm} from 'antd';
import {connect} from 'dva';
const ListMessage = ({
  loading,
  messages,
  dispatch,
  location,
   onDel,
  ...listOpts,
})=> {
  const handleDel=(record)=> {
    // console.log(record);
    // dispatch({type: 'messages/delete', payload: record.id});
    onDel(record);
  }
  const handleModify = (record) => {
    console.log(record);
    dispatch({type: 'messages/modifyState', payload: {item: record, updateVisible: true}});
  }
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
      render: (record) => {
        return (
          <div>
            <Button type="primary" icon ="edit">回复</Button>
            <Button type="primary" icon ="edit"onClick={()=>handleModify(record)} >修改</Button>
            <Popconfirm Popconfirm title={`是否删除${record.author}?`} onConfirm={()=>handleDel(record)}>
              <Button type="danger" icon="close">删除</Button>
            </Popconfirm>
          </div>
        );
      }
    }];
    return (
      <div>
        <Table {...listOpts} columns={columns}/>
      </div>
    );
}
export default connect(({messages,loading})=>({messages,loading}))(ListMessage);
