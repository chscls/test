import React, { Component, PropTypes }from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import { Modal, Button } from 'antd';
import { Form,  Input,  Checkbox } from 'antd';
import styles from '../routes/IndexPage.css';
import NormalLoginForm from '../components/NormalLoginForm'
import RegistrationForm from '../components/RegistrationForm'
import { getLocalStorage, setLocalStorage } from '../utils/helper';
import { connect } from 'dva'
import { browserHistory } from 'react-router'
class Header extends React.Component {
     constructor(props){
            super(props)
           
        } 
     showModal = () => {
       this.props.dispatch({
            type: 'LoginUser/showModal',
            payload: {
                visible: true,
                reg:false,
            }

        });
     }
    closeModal =() =>{
        this.props.dispatch({
            type: 'LoginUser/closeModal',
            payload: {
                visible: false
            }

        });
       
  }
    showRegModal = () => {
      
        this.props.dispatch({
            type: 'LoginUser/showModal',
            payload: {
                visible: true,
                reg:true,
            }

        });
  }
 handleOk = () => {
 /*   this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);*/
  }
  handleCancel = () => {
   /* console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });*/
  }
  logout = () =>{
        localStorage.removeItem('user');
        this.setState({user:null});

   
  }
 
    render() {
   
        
  return (
     <div id="site-nav" className={styles.siteNav}>



<div id="sn-bg">
        <div className="sn-bg-right">
        </div>
    </div>
<div id="sn-bd">
        <b className="sn-edge"></b>
        <div className="sn-container">

        {this.props.LoginUser.user!=null?<p id="login-info" className="sn-login-info">
         <em>喵，欢迎{this.props.LoginUser.user.username}来到知用慕课</em>
         <a className="sn-login"  onClick={this.logout}>退出</a>
         </p>: 
            <p id="login-info" className="sn-login-info"><em>喵，欢迎来到知用慕课</em>
             <a className="sn-login"  onClick={this.showModal}>请登录</a> 
             <a onClick={this.showRegModal} className="sn-register">免费注册</a>
             </p>
             }

            <ul className="sn-quick-menu">
                <li className="sn-mytaobao menu-item j_MyTaobao">
                    <div className="sn-menu">
                         {this.props.LoginUser.user!=null?
                        <Link to="Member/34" className="menu-hd" target="_top" rel="nofollow" tabIndex="0" aria-haspopup="true" aria-expanded="false">个人中心<b></b></Link>
                        :<a onClick={this.showModal} className="menu-hd" target="_top" rel="nofollow" tabIndex="0" aria-haspopup="true" aria-expanded="false">个人中心<b></b></a>}
                        <div className="menu-bd" role="menu" aria-hidden="true" id="menu-20">
                            <div className="menu-bd-panel" id="myTaobaoPanel">
                                 <Link to="Member/22"  target="_top" rel="nofollow">已学课程</Link>
                                <a href="" target="_top" rel="nofollow">已教课程</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="sn-seller-center hidden j_SellerCenter">
                    <a target="_top" href="">商家中心</a>
                </li>
               {/* <li className="sn-mybrand"><i className="mui-global-iconfont">㑉</i>
                    <a target="_top" id="J_SnMyBrand" className="sn-mybrand-link" href="">我关注的学校</a>
                </li>*/}
                <li className="sn-cart mini-cart menu"><i className="mui-global-iconfont">󰅈</i>
                    <Link to="Cart" className="sn-cart-link"  target="_top" rel="nofollow" id="mc-menu-hd">购物车<span className="mc-count mc-pt3">0</span>件</Link>
                </li>
                <li className="sn-favorite menu-item">
                    <div className="sn-menu">
                        <a className="menu-hd" href="" target="_top" rel="nofollow" tabIndex="0" aria-haspopup="true" aria-expanded="false">收藏夹<b></b></a>

                        <div className="menu-bd" role="menu" aria-hidden="true" id="menu-22">
                            <div className="menu-bd-panel">
                                <a href="" target="_top" rel="nofollow">收藏的课程</a>
                                <a href="" target="_top" rel="nofollow">收藏的学校</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="sn-separator"></li>
                <li className="sn-mobile">
                    <i className="mui-global-iconfont">㑈</i>
                    <a title="知用移动" target="_top" className="sn-mobile-link" href="">手机版</a>
                </li>
                
              
               
            </ul>
        </div>
    </div>






<Modal title={this.props.LoginUser.reg ? "注册" : "登录"} 
          visible={this.props.LoginUser.visible}
          onOk={this.handleOk}
          confirmLoading={this.props.LoginUser.confirmLoading}
          onCancel={this.handleCancel}
          footer={null}
          width={this.props.LoginUser.reg ? "500px" : "332px"}
        >
          {this.props.LoginUser.reg ?<RegistrationForm/>:<NormalLoginForm loginSuc={this.closeModal}/>}
        </Modal>

     
          
     </div>
  );
}

};

Header.propTypes = {
};

function mapStateToProps({ LoginUser }) {
  return { LoginUser};
}
export default connect(mapStateToProps)(Header);
