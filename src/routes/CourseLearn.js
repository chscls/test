import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Header from '../components/Header'
import VideoJs from '../components/VideoJs'
import { Row, Col,Input,Modal,Switch, Button} from 'antd';
class CourseLearn extends Component {
     state={
            show:false,
            ModalText: 'Content of the modal',
         visible: false,
         type:'note',
        
        }
    constructor(props) {
        super(props)
   
        
    }
    showModal1 = () => {
    this.setState({
      visible: true,
       type:'note'
    });
  }
   showModal2 = () => {
    this.setState({
      visible: true,
      type:'question'
    });
  }
   showModal3 = () => {
    this.setState({
      visible: true,
      type:'wiki'
    });
  }
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  getCom(){
    
      if (this.state.type == "note") {
          return  (<div><Input type="textarea" rows={4} />
        
         <Switch  checkedChildren={'截图'} unCheckedChildren={'不截图'} /></div>);
      }else if(this.state.type == "question"){
            return  ( <div><Input placeholder="请输入标题" />
            <Input type="textarea" rows={4} />
            <Switch  checkedChildren={'截图'} unCheckedChildren={'不截图'} /></div>);
      }else{

          return  (<div>暂未开放</div>);
      }

  }
  afterClose(){
      alert("关闭弹框")
  }
    getSreenWidth(){
        var x = window.innerWidth-365
        
        return x;
    }
    
    render() {
        const { show,visible, confirmLoading, ModalText,type} = this.state;
        return (<div>
        <Modal title={this.state.type=='note'?"笔记":this.state.type=='question'?"提问":"WIKI" }
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          afterClose={this.afterClose}
          maskClosable={false}
        >
         
         
        {this.getCom()}
        </Modal>
            <Header />

            <div id="studyMain">


                <div id="bgarea" className="video-con">
                    <div className="js-box-wrap" style={{width: this.state.show?this.getSreenWidth():'100%', height: '600px'}}>
                      <VideoJs/>
                     </div>
                    <div id="section-list" className="section-list" style={{right: this.state.show?'0px':'-360px'}}>
                        <div className="operator">
                            <div className={this.state.show?"op chapter light":"op chapter"} onClick={()=>this.setState({show:!this.state.show})}><em className="icon-menu"></em>章节</div>
                            <div className="op notes" onClick={this.showModal1}><em className="icon-note"></em>笔记</div>
                            <div className="op question" onClick={this.showModal2}><em className="icon-addques"></em>提问</div>
                            <div className="op wiki" onClick={this.showModal3} ><em className="icon-wiki"></em>WIKI</div>
                        </div>
                        <div className="nano has-scrollbar">
                            <div className="nano-content" tabIndex="0" style={{right: '-17px'}}>
                                <h3>Java入门第二季</h3>
                                <ul>
                                    <li className="sec-title">
                                        <span>第1章 类和对象</span>
                                    </li>
                                    <li data-id="2161">
                                        <a href="/video/2161"><i className="">正在学<em className="icon-clock"></em></i><em className="icon-video"></em>1-1 什么是类和对象(07:36)</a>
                                    </li>
                                    <li data-id="2183">
                                        <a href="/video/2183"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>1-2 如何定义 Java 中的类...(07:18)</a>
                                    </li>
                                    <li data-id="2220">
                                        <a href="/video/2220"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>1-3 如何使用 Java 中的对象...(04:45)</a>
                                    </li>
                                    <li data-id="2383">
                                        <a href="/ceping/2383"><i className=""><em className="icon-full"></em></i><em className="icon-test"></em>1-4 练习题</a>
                                    </li>
                                    <li data-id="2218">
                                        <a href="/video/2218"><i className=""><em className="icon-half"></em></i><em className="icon-video"></em>1-5 Java 中的成员变量和局部...(07:13)</a>
                                    </li>
                                    <li data-id="2247">
                                        <a href="/video/2247"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>1-6 Java 中的构造方法(11:01)</a>
                                    </li>
                                    <li data-id="1842">
                                        <a href="/code/1842"><i className=""><em className="icon-half"></em></i><em className="icon-code"></em>1-7 Java 中的 static 使用之静态...</a>
                                    </li>
                                    <li data-id="1889">
                                        <a href="/ceping/1889"><i className=""><em className="icon-nolearn"></em></i><em className="icon-test"></em>1-8 练习题</a>
                                    </li>
                                    <li data-id="1843">
                                        <a href="/code/1843"><i className=""><em className="icon-half"></em></i><em className="icon-code"></em>1-9 Java 中的 static 使用之静态...</a>
                                    </li>
                                    <li data-id="1852">
                                        <a href="/code/1852"><i className=""><em className="icon-nolearn"></em></i><em className="icon-code"></em>1-10 Java 中的 static 使用之静态...</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="sec-title">
                                        <span>第2章 封装</span>
                                    </li>
                                    <li data-id="2360">
                                        <a href="/video/2360"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>2-1 什么是 Java 中的封装...(05:53)</a>
                                    </li>
                                    <li data-id="2371">
                                        <a href="/video/2371"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>2-2 使用包管理 Java 中的类...(06:45)</a>
                                    </li>
                                    <li data-id="2385">
                                        <a href="/video/2385"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>2-3 Java 中的访问修饰符...(04:48)</a>
                                    </li>
                                    <li data-id="2397">
                                        <a href="/video/2397"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>2-4 Java 中的 this 关键字...(02:50)</a>
                                    </li>
                                    <li data-id="2090">
                                        <a href="/code/2090"><i className=""><em className="icon-nolearn"></em></i><em className="icon-code"></em>2-5 什么是 Java 中的内部类</a>
                                    </li>
                                    <li data-id="2092">
                                        <a href="/code/2092"><i className=""><em className="icon-nolearn"></em></i><em className="icon-code"></em>2-6 Java 中的成员内部类</a>
                                    </li>
                                    <li data-id="2095">
                                        <a href="/code/2095"><i className=""><em className="icon-nolearn"></em></i><em className="icon-code"></em>2-7 Java 中的静态内部类</a>
                                    </li>
                                    <li data-id="2096">
                                        <a href="/code/2096"><i className=""><em className="icon-nolearn"></em></i><em className="icon-code"></em>2-8 Java 中的方法内部类</a>
                                    </li>
                                    <li data-id="2099">
                                        <a href="/ceping/2099"><i className=""><em className="icon-nolearn"></em></i><em className="icon-test"></em>2-9 练习题</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="sec-title">
                                        <span>第3章 继承</span>
                                    </li>
                                    <li data-id="2523">
                                        <a href="/video/2523"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>3-1 Java 中的继承(06:28)</a>
                                    </li>
                                    <li data-id="2524">
                                        <a href="/video/2524"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>3-2 Java 中的方法重写(02:25)</a>
                                    </li>
                                    <li data-id="2639">
                                        <a href="/ceping/2639"><i className=""><em className="icon-nolearn"></em></i><em className="icon-test"></em>3-3 练习题</a>
                                    </li>
                                    <li data-id="2643">
                                        <a href="/video/2643"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>3-4 Java 中的继承初始化顺序...(04:45)</a>
                                    </li>
                                    <li data-id="2644">
                                        <a href="/video/2644"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>3-5 Java 中的 final 的使...(05:11)</a>
                                    </li>
                                    <li data-id="2690">
                                        <a href="/ceping/2690"><i className=""><em className="icon-half"></em></i><em className="icon-test"></em>3-6 练习题</a>
                                    </li>
                                    <li data-id="2675">
                                        <a href="/video/2675"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>3-7 Java 中的 super 的使...(07:18)</a>
                                    </li>
                                    <li data-id="2676">
                                        <a href="/video/2676"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>3-8 Java 中的 Object 类 ...(04:02)</a>
                                    </li>
                                    <li data-id="2763">
                                        <a href="/video/2763"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>3-9 Java 中的 Object 类 ...(10:46)</a>
                                    </li>
                                    <li data-id="2689">
                                        <a href="/ceping/2689"><i className=""><em className="icon-nolearn"></em></i><em className="icon-test"></em>3-10 练习题</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="sec-title">
                                        <span>第4章 多态</span>
                                    </li>
                                    <li data-id="2684">
                                        <a href="/video/2684"><i className=""><em className="icon-half"></em></i><em className="icon-video"></em>4-1 Java 中的多态(09:27)</a>
                                    </li>
                                    <li data-id="2687">
                                        <a href="/video/2687"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>4-2 多态中的引用类型转换...(08:20)</a>
                                    </li>
                                    <li data-id="2752">
                                        <a href="/video/2752"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>4-3 Java  中的抽象类(07:03)</a>
                                    </li>
                                    <li data-id="2760">
                                        <a href="/ceping/2760"><i className=""><em className="icon-nolearn"></em></i><em className="icon-test"></em>4-4 练习题</a>
                                    </li>
                                    <li data-id="2789">
                                        <a href="/video/2789"><i className=""><em className="icon-half"></em></i><em className="icon-video"></em>4-5 Java 中的接口(13:04)</a>
                                    </li>
                                    <li data-id="2790">
                                        <a href="/ceping/2790"><i className=""><em className="icon-half"></em></i><em className="icon-test"></em>4-6 练习题</a>
                                    </li>
                                    <li data-id="3029">
                                        <a href="/video/3029"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>4-7 UML 简介(15:48)</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="sec-title">
                                        <span>第5章 阶段练习</span>
                                    </li>
                                    <li data-id="6223">
                                        <a href="/video/6223"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>5-1 阶段练习(02:17)</a>
                                    </li>
                                    <li data-id="6224">
                                        <a href="/video/6224"><i className=""><em className="icon-half"></em></i><em className="icon-video"></em>5-2 代码实现(08:20)</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="sec-title">
                                        <span>第6章 项目实战</span>
                                    </li>
                                    <li data-id="3334">
                                        <a href="/video/3334"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>6-1 综合练习(09:07)</a>
                                    </li>
                                    <li data-id="5114">
                                        <a href="/video/5114"><i className=""><em className="icon-nolearn"></em></i><em className="icon-video"></em>6-2 项目问题解析 1(03:01)</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="nano-pane"><div className="nano-slider" style={{height: '212px',transform: 'translate(0px, 0px)'}}></div></div></div>
                    </div></div>

                <div className="maybe-wenda" id="maybe-wenda" style={{display: 'none'}}>
                    <i className="icon-chat"></i>
                    <p className="text">你发的评论可能会是问题？<br />是否将他发到问答中</p>
                    <input className="btn ok" type="button" value="好的" id="wenda-ok" />
                    <input className="btn no" type="button" value="不用" id="wenda-no" />
                </div>
            </div>


        </div>);
    }
}



function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps)(CourseLearn);