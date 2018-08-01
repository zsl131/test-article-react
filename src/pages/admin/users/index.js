import {connect} from 'dva';
import {Table, Button, Popconfirm} from 'antd';
import AddModal from './components/AddModal';
import UpdateModal from './components/UpdateModal';
import LoginModal from './components/LoginModal';
import { routerRedux } from 'dva/router'

const User = ({
  loading,
  user,
  dispatch,
  location,
}) => {

  const { query, pathname } = location;

  const handleRefresh = (newQuery) => {
    dispatch(routerRedux.push({
      pathname,
      query: {
        ...query,
        ...newQuery,
      },
    }));
  }

  const columns = [{
    title: '用户名',
    dataIndex: 'username'
  }, {
    title: '昵称',
    dataIndex: 'nickname'
  }, {
    title: "操作",
    render: (record) => {
      return (
        <div>
          <Button icon="edit" onClick={()=>handleModify(record)} type="primary">修改</Button>
          <Popconfirm title={`是否删除${record.nickname}?`} onConfirm={()=>handleDel(record)}>
            <Button icon="close" type="danger">删除</Button>
          </Popconfirm>
        </div>
      );
    }
  }];

  const handleModify = (record) => {
    console.log(record);
    dispatch({type:'user/onUpdate', payload: record});
  }

  const handleDel =(record) => {
    console.log(record);
    dispatch({type:'user/deleteObj', payload: record.id}).then(()=>{
      handleRefresh();
    });
  }

  const handleAdd = () => {
    dispatch({type:'user/modifyState', payload: {addVisible: true}});
  }

  const handleLogin = () => {
    dispatch({type:'user/modifyState', payload: {loginVisible: true}});
  }

  const addOpts = {
    visible: user.addVisible,
    title:"添加用户",
    onCancel: () => {
      dispatch({type:'user/modifyState', payload: {addVisible: false}});
    },
    onAdd: (values) => {
      console.log(values);
      dispatch({type:'user/saveOrUpdate', payload: values}).then(()=> {handleRefresh();});
    }
  }

  const updateOpts = {
    visible: user.updateVisible,
    title:"修改用户["+user.item.nickname+"]",
    user: user.item,
    onCancel: () => {
      dispatch({type:'user/modifyState', payload: {updateVisible: false}});
    },
    onUpdate: (values) => {
      console.log(values);
      dispatch({type:'user/saveOrUpdate', payload: values}).then(()=> {
        dispatch({type:'user/modifyState', payload: {updateVisible: false}});
        handleRefresh();
      });
    }
  }

  const loginOpts = {
    visible: user.loginVisible,
    title:"登陆验证",
    okText: '验证',
    onCancel: () => {
      dispatch({type:'user/modifyState', payload: {loginVisible: false}});
    },
    onLogin: (values) => {
      console.log(values);
      dispatch({type:'user/login', payload: values});
    }
  }

  return (
    <div style={{"padding":"20px 100px"}}>
      <Button type="primary" icon="plus" onClick={handleAdd}> 添加用户</Button>
      <Button type="danger" icon="check" onClick={handleLogin}> 登陆验证</Button>

      <p>用户管理：({user.totalElements})</p>
      <Table columns={columns} dataSource={user.datas} rowKey="id"/>

      {user.addVisible && <AddModal {...addOpts}/>}
      {user.loginVisible && <LoginModal {...loginOpts}/>}
      {user.updateVisible && <UpdateModal {...updateOpts}/>}
    </div>
  );
}

export default connect(({loading, user})=>({loading, user}))(User);
