import {connect} from 'dva'
import {Button, Table, Icon} from 'antd';
import MyModal from './components/MyModal';

const News = ({
  news,
  loading,
  location,
  dispatch
}) => {

  const columns = [{
    title: '标题',
    dataIndex: 'title'
  }, {
    title: "操作",
    render: (text, record) => {
      return (
        <span><Button icon="edit" onClick={()=>handlerClick(record)} type="primary">点击</Button></span>
      );
    }
  }]

  const handlerClick = (record) => {
    console.log("record:",record);
    dispatch({ type: 'news/modifyState', payload: {item: record, showVisible: true}});
  }

  const showOpts = {
    visible: news.showVisible,
    title: '查看新闻',
    cancelText: '取消',
    okText:'确定',
    okType:'danger',
    onCancel: ()=>{
      dispatch({type:'news/modifyState', payload:{showVisible: false}})
    },
    onOk: ()=> {
      alert("----");
    }
  }

  return (
    <div>
      <h1>新闻:::：({news.totalElements})</h1>
      <Table dataSource={news.datas}  rowKey="id" columns={columns} />
      {news.showVisible && <MyModal item={news.item} {...showOpts}/>}
    </div>
  );
}

export default connect(({news, loading})=>({news, loading}))(News);
