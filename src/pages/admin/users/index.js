import {connect} from 'dva';
import {Table, Button} from 'antd';
import AddModal from './components/AddModal';
import LoginModal from './components/LoginModal';

const User = ({
  loading,
  user,
  dispatch
}) => {

  const columns = [{
    title: '用户名',
    dataIndex: 'username'
  }, {
    title: '昵称',
    dataIndex: 'nickname'
  }];

  const handleAdd = () => {
    dispatch({type:'user/modifyState', payload: {addVisible: true}});
  }

  const handleLogin = () => {
    dispatch({type:'user/modifyState', payload: {loginVisible: true}});
  }

  const addOpts = {
    visible: user.addVisible,
    title:"添加用户",
    cancelText: "取消",
    okText: '确定',
    onCancel: () => {
      dispatch({type:'user/modifyState', payload: {addVisible: false}});
    },
    onAdd: (values) => {
      console.log(values);
      dispatch({type:'user/saveOrUpdate', payload: values});
    }
  }

  const loginOpts = {
    visible: user.loginVisible,
    title:"登陆验证",
    cancelText: "取消",
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
    </div>
  );
}

export default connect(({loading, user})=>({loading, user}))(User);
