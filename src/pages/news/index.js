import { connect } from 'dva'
const News = ({
  news
}) => {
  return (
    <div>
      <h1>新闻：({news.totalElements})</h1>
    </div>
  );
}

export default connect(({news})=>({news}))(News);
