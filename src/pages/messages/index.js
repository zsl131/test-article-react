import React from 'react';
import {connect} from 'dva';
import {Icon,Button,Table,Popconfirm} from 'antd';
import AddModal from './components/AddModal';
import ListMessage from './components/ListMessage';
import styles from './messages.css';
import {routerRedux} from 'dva/router'
const Messages = ({
  loading,
  messages,
  dispatch,
  location,
})=>{
  const {query,pathname} = location;
  const handleRefresh = (newQuery) => {
    dispatch(routerRedux.push({
      pathname,
      query: {
        ...query,
        ...newQuery,
      },
    }));
  }
  const listOpts = {
    dataSource:messages.datas,
  }
  const handleAdd =()=>{
    dispatch({type:'messages/modifyState',payload:{addVisible:true}});
  }
  const handleDel=(record)=> {
    console.log(record);
    dispatch({type: 'messages/delete', payload: record.id}).then(() => {
      handleRefresh();
    });
  }
  const addOpts={
    visible:messages.addVisible,
    title:"留言",
    onCancel:()=>{
      dispatch({type:'messages/modifyState',payload:{addVisible:false}});
    },
    onAdd: (values)=>{
      console.log(values);
      dispatch({type:'messages/saveOrUpdate', payload: values}).then(()=> {
        handleRefresh();
      });
    }
  }
  return(
    <div style={{"padding":"30px"}}>
      <div className={styles.listHeader}>
        <h3 className={styles.title}><Icon type="list"/>留言管理：({messages.totalElements})</h3>
      </div>
      <Button type="primary" icon="plus"onClick={handleAdd}>留言</Button>
      <ListMessage {...listOpts}/>
      {messages.addVisible && <AddModal{...addOpts} rowKey="id"/>}
    </div>
  );
}
export default connect(({messages,loading})=>({messages,loading}))(Messages);
