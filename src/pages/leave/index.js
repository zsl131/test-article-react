import React from 'react';
import {connect} from 'dva';
import {Icon, Button} from 'antd';
import styles from "./leave.css";
import ListLeave from './components/ListLeave';
import ListVerify from './components/ListVerify';
import AddModal from './components/AddModal';
import UpdateModal from './components/UpdateModal';
import Update from './components/Update';
import { routerRedux } from 'dva/router';
const Leave = ({
                    loading,
                    leave,
                    dispatch,
                    location,
                  }) => {
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
    dataSource: leave.leaveList,
  }
  const listOptss = {
    dataSource: leave.verifyList,
  }
  const addOpts = {
    visible:leave.addLeaveVisible,
    title:"请假申请",
    onCancel: () => {
      dispatch({type:'leave/modifyState',payload:{addLeaveVisible:false}});
    },
    onAdd: (values) => {
      console.log(values);
      dispatch({type:'leave/addOrUpdate',payload:values}).then(()=> {handleRefresh();});
    }
  }
  const handler = () => {
    dispatch({type:'leave/modifyState',payload:{addLeaveVisible:true}});
  }
  const updateOpts = {
    visible:leave.updateVisible,
    title:"修改["+leave.item.applicant+"]",
    leave:leave.item,
    onCancel: () => {
      dispatch({type:'leave/modifyState',payload:{updateVisible:false}});
    },
    onUpdate:(values) => {
      console.log(values);
      dispatch({type:'leave/addOrUpdate', payload: values}).then(()=> {
        dispatch({type:'leave/modifyState', payload: {updateVisible: false}}).then(()=> {handleRefresh();});
      });
    }
  }
  const updateOptss = {
    visible:leave.update,
    title:"审批["+leave.it.applicant+"]",
    leave:leave.it,
    onCancel: () => {
      dispatch({type:'leave/modifyState',payload:{update:false}});
    },
    onUpdate:(values) => {
      console.log(values);
      dispatch({type:'leave/addOrUpdateVerify', payload: values}).then(()=> {
        dispatch({type:'leave/modifyState', payload: {update: false}});
        handleRefresh();
      });
    }
  }


  return (
    <div style={{"padding": "30px"}}>
      <Button type="primary" icon="plus" onClick={handler}> 请假</Button>
      <div className={styles.listHeader}>
        <h3 className={styles.title}><Icon type="list"/> 请假管理（{leave.totalElements}）</h3>
      </div>
      <div className={styles.listTable}>
        <ListLeave {...listOpts}/>
        <ListVerify {...listOptss}/>
        {leave.addLeaveVisible && <AddModal {...addOpts}/>}
        {leave.updateVisible && <UpdateModal {...updateOpts}/>}
        {leave.update && <Update {...updateOptss}/>}
      </div>
    </div>
  );
}

export default connect(({leave, loading}) => ({leave, loading}))(Leave);
