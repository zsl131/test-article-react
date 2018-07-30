import React from 'react';
import { Layout,Affix,Menu, Icon } from 'antd';
import Link from 'umi/link';
// import {Link} from 'react-router-dom';

const { Content } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MainLayout extends React.Component {

  state = {
    current: 'mail',
  }

  render() {

    console.log("routerBase::", window.routerBase);
    window.routerBase = this.props.location.pathname.split('/').slice(0, -1).concat('').join('/');
    console.log("routerBase2::", window.routerBase);

    const thisUrl = encodeURIComponent(window.location.href);
    console.log("thisUrl::::", thisUrl);

    const props = this.props;

    const pathname = props.location.pathname;

    const handleClick = (e) => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    }

    return (
      <Layout >
        <Affix>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <Link to="/"><Icon type="mail" />首页</Link>
            </Menu.Item>
            <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1"><Link to="/admin/news">新闻</Link></Menu.Item>
                <Menu.Item key="setting:2"><Link to="/admin/article">文章</Link></Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">
                  <Link to="/admin/users">用户管理</Link>
                </Menu.Item>
                <Menu.Item key="setting:4">
                  <Link to="/admin/login">登陆验证</Link>
                </Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>
        </Affix>
        <Content style={{"background": "#f0f2f5"}}>{props.children}
        </Content>

      </Layout>
    );
  }
}

export default MainLayout;
