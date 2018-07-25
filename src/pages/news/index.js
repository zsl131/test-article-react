import { connect } from 'dva'
// import queryString from 'query-string'
import { routerRedux } from 'dva/router'
const News = ({
  news,
  loading,location,
  dispatch
}) => {

  // location.query = JSON.parse(location.search);

  console.log("----", location.query);

  const {query, pathname } = location;

  const operatorOpts = {
    onAdd() {
      // console.log("UserIndex operator");
      dispatch({ type: 'role/setModalVisible', payload: {addVisible: true}});
    }
  }

  const handleRefresh = (newQuery) => {
    dispatch(routerRedux.push({
      pathname,
      search: JSON.stringify({
        ...query,
        ...newQuery,
      }),
    }));
  }

  const listOpts = {
    dataSource: news.datas,
    loading: loading.models.role,
    location,
    totalElement: news.totalElements,
    onDelConfirm: (id) => {
      dispatch({ type: 'role/deleteObj', payload: id });
    },
    onPageChange: (page) => {
    },
    onUpdate: (id) => {
      // console.log("update::", id);
      dispatch({ type: 'role/update', payload: id });
    },
  }

  return (
    <div>
      <h1>新闻:::：({news.totalElements})</h1>
    </div>
  );
}

export default connect(({news, loading})=>({news, loading}))(News);
