import React from 'react';
import {connect} from 'dva';
import {Icon, Button} from 'antd';
import styles from "./messages.css";
import ListMessage from './components/ListMessage';

const Messages = ({
  loading,
  messages,
  dispatch,
  location,
}) => {

  const listOpts = {
    dataSource: messages.messageList,
  }

  return (
    <div style={{"padding": "30px"}}>
      <div className={styles.listHeader}>
        <h3 className={styles.title}><Icon type="list"/> 留言管理（{messages.totalElements}）</h3>
        <span className={styles.operatorBtn}>
          <Button type="primary" icon="plus"> 留言</Button>
        </span>
      </div>
      <div className={styles.listTable}>
        <ListMessage {...listOpts}/>
      </div>
    </div>
  );
}

export default connect(({messages, loading}) => ({messages, loading}))(Messages);
