import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Tabs,Pagination, Collapse,Icon,Radio, Input,Modal,Switch, Button} from 'antd';
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
class CourseTab extends Component {

     constructor(props) {
        super(props)
   
        
    }
    render(){


   return ( <div>
   
       <Tabs defaultActiveKey={this.props.isLearn?"3":"1"} animated={false} tabPosition="top">
                                {this.props.isLearn?"":<TabPane tab={<span><Icon type="bars" />章节</span>} key="1">
                                        <Collapse bordered={false} defaultActiveKey={['1']}>
                                            <Panel header="第1章 概述" key="1" >
                                                <ul><li>1-1 Linux软件安装管理概述 (02:37) </li>

                                                </ul>

                                            </Panel>
                                            <Panel header="第2章 软件包管理简介" key="2">
                                                <ul><li>2-1 Linux软件包管理之源码包 (12:49)</li>
                                                    <li> 2-2 Linux软件包管理之RPM包和脚本安装包 (09:35)</li></ul>
                                            </Panel>

                                        </Collapse>
                                    </TabPane> }
                               
                                    {this.props.isLearn?"": <TabPane tab={<span><Icon type="file-text" />详细介绍</span>} key="2">
                                        架构组成编辑
在IDEA的基础上，Android Studio 提供[2]  ：
基于Gradle的构建支持
Android 专属的重构和快速修复
提示工具以捕获性能、可用性、版本兼容性等问题
支持ProGuard 和应用签名
基于模板的向导来生成常用的 Android 应用设计和组件
功能强大的布局编辑器，可以让你拖拉 UI 控件并进行效果预览
主要功能编辑
2013年
2013年5月16日，在I/O大会上，谷歌推出新的Android开发环境——Android Studio，并对开发者控制台进行了改进，增加了五个新的功能[3]  。
Android Studio是谷歌推出了新的Android开发环境，开发者可以在编写程序的同时看到自己的应用在不同尺寸屏幕中的样子。
谷歌对开发者控制台进行了改进，增加了五个新的功能，包括优化小贴士、应用翻译服务、推荐跟踪、营收曲线图、用版测试和阶段性展示。
1、优化小贴士：在主体中打开你的应用，点击小贴士，会得到这样的建议：为你的应用开发平板电脑版本。
2、应用翻译服务：允许开发者直接在开发主体中获得专业的翻译。上传你的需求，选择翻译，其会显示翻译方和价格，并在一周内发回译本。
3、推荐跟踪：允许开发者找出最有效的广告
4、营收曲线图：向开发者展示其应用营收，以国家进行划分
5、试用版测试和阶段性展示：开发者可以对应用进行测试，然后向测试用户推出，测试结果不会对外公布。当一个版本的测试结束，开发者可以向特定比例用户推出[4]  。
Android Studio这款开发工具被首次公布，这也是为了方便开发者基于Android开发。
首先解决的一个问题是多分辨率。Android设备拥有大量不同尺寸的屏幕和分辨率，根据新的Studio，开发者可以很方便的调整在各个分辨率设备上的应用。
同时Studio还解决语言问题，多语言版本（但是没有中文版本）、支持翻译都让开发者更适应全球开发环境。Studio还提供收入记录功能。
最大的改变在于Beta测试的功能。Studio提供了Beta Testing，可以让开发者很方便试运行[2]  。
2015年
2015年5月29日，在谷歌I/O开发者大会上，谷歌发布AndroidStudio 1.3版，支持C++编辑和查错功能。Android Studio 1.3版开发码代码变得更加容易，速度提升，而且支持C++编辑和查错功能[5]  。

    </TabPane>}
                                    <TabPane tab={<span><Icon type="like-o" />评论</span>} key="3">
                                        <ul className="mod-post" id="comment-list">

{this.props.isLearn?<li className="post-row" id="94098">
                                                <div className="media">
                                                    <a href="/u/1187337/courses" target="_blank"><img src="http://img.mukewang.com/56a1d0f1000105a801000100-40-40.jpg" width="40" height="40" /></a>
                                                </div>
 <div className="bd">
<Input type="textarea" rows={4} />
 <Button type="primary">发表评论</Button>
</div>
</li>:""}

                                            <li className="post-row" id="94098">
                                                <div className="media">
                                                    <a href="/u/1187337/courses" target="_blank"><img src="http://img.mukewang.com/56a1d0f1000105a801000100-40-40.jpg" width="40" height="40" /></a>
                                                </div>
                                                <div className="bd">
                                                    <div className="tit">
                                                        <a href="/u/1187337/courses" target="_blank">Php小剑客</a>
                                                    </div>
                                                    <p className="cnt">或许在工作中我们会遇到能让你请教的同事，但是毕竟不是每个人都是无私的，慕课的教程帮助了千千万万求学的程序员，非常感谢。</p>
                                                    <div className="footer clearfix">
                                                        <span title="创建时间" className="l timeago">时间：2015-08-05</span>
                                                        <a href="/video/8940" className="from">源自：4-1 yum源文件</a>
                                                        <div className="actions r">
                                                            <a title="赞" href="javascript:;" className="js-pl-praise list-praise post-action" data-id="94098">
                                                                <Icon type="like-o" />
                                                                <em>56</em>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="post-row" id="425825">
                                                <div className="media">
                                                    <a href="/u/3098766/courses" target="_blank"><img src="http://img.mukewang.com/533e4c640001354402000200-40-40.jpg" width="40" height="40" /></a>
                                                </div>
                                                <div className="bd">
                                                    <div className="tit">
                                                        <a href="/u/3098766/courses" target="_blank">闲人度假</a>
                                                    </div>
                                                    <p className="cnt">在这里感谢Tony老师。讲得通俗易懂。学起来非常轻松愉快。节约很多时间就明白了很多知识点。</p>
                                                    <div className="footer clearfix">
                                                        <span title="创建时间" className="l timeago">时间：2017-05-02</span>
                                                        <a href="/video/8925" className="from">源自：3-2 Linux中rpm命令管理之安装命令</a>
                                                        <div className="actions r">
                                                            <a title="赞" href="javascript:;" className="js-pl-praise list-praise post-action" data-id="425825">
                                                                <Icon type="like-o" />
                                                                <em>1</em>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="post-row" id="424907">
                                                <div className="media">
                                                    <a href="/u/4894830/courses" target="_blank"><img src="http://img.mukewang.com/533e4c700001c60f02200220-40-40.jpg" width="40" height="40" /></a>
                                                </div>
                                                <div className="bd">
                                                    <div className="tit">
                                                        <a href="/u/4894830/courses" target="_blank">慕粉2204247843</a>
                                                    </div>
                                                    <p className="cnt">骑驴找驴  这个比喻太形象了</p>
                                                    <div className="footer clearfix">
                                                        <span title="创建时间" className="l timeago">时间：2017-04-30</span>
                                                        <a href="/video/8942" className="from">源自：4-3 yum命令(上)</a>
                                                        <div className="actions r">
                                                            <a title="赞" href="javascript:;" className="js-pl-praise list-praise post-action" data-id="424907">
                                                                <Icon type="like-o" />
                                                                <em>1</em>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="post-row" id="421928">
                                                <div className="media">
                                                    <a href="/u/1355608/courses" target="_blank"><img src="http://img.mukewang.com/577ba9a70001591803610350-40-40.jpg" width="40" height="40" /></a>
                                                </div>
                                                <div className="bd">
                                                    <div className="tit">
                                                        <a href="/u/1355608/courses" target="_blank">粗鲁的男人</a>
                                                    </div>
                                                    <p className="cnt">看了半天才发现这个源文件并不是yum软件的源码............应该是yum指定下载的来源的"源",我说怎么听得莫名其妙</p>
                                                    <div className="footer clearfix">
                                                        <span title="创建时间" className="l timeago">时间：2017-04-24</span>
                                                        <a href="/video/8940" className="from">源自：4-1 yum源文件</a>
                                                        <div className="actions r">
                                                            <a title="赞" href="javascript:;" className="js-pl-praise list-praise post-action" data-id="421928">
                                                                <Icon type="like-o" />
                                                                <em>0</em>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="post-row" id="419785">
                                                <div className="media">
                                                    <a href="/u/228492/courses" target="_blank"><img src="http://img.mukewang.com/53bfc99e0001050f01000100-40-40.jpg" width="40" height="40" /></a>
                                                </div>
                                                <div className="bd">
                                                    <div className="tit">
                                                        <a href="/u/228492/courses" target="_blank">從鈊開始</a>
                                                    </div>
                                                    <p className="cnt">握草//、。苍天啊 。。。。</p>
                                                    <div className="footer clearfix">
                                                        <span title="创建时间" className="l timeago">时间：2017-04-20</span>
                                                        <a href="/video/8925" className="from">源自：3-2 Linux中rpm命令管理之安装命令</a>
                                                        <div className="actions r">
                                                            <a title="赞" href="javascript:;" className="js-pl-praise list-praise post-action" data-id="419785">
                                                                <Icon type="like" />
                                                                <em>0</em>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="post-row" id="419006">
                                                <div className="media">
                                                    <a href="/u/1139813/courses" target="_blank"><img src="http://img.mukewang.com/545850a00001fdd002200220-40-40.jpg" width="40" height="40" /></a>
                                                </div>
                                                <div className="bd">
                                                    <div className="tit">
                                                        <a href="/u/1139813/courses" target="_blank">蹇飞</a>
                                                    </div>
                                                    <p className="cnt">JAVA是可以反编译的哟，！！！！！！！</p>
                                                    <div className="footer clearfix">
                                                        <span title="创建时间" className="l timeago">时间：2017-04-19</span>
                                                        <a href="/video/8746" className="from">源自：2-1 Linux软件包管理之源码包</a>
                                                        <div className="actions r">
                                                            <a title="赞" href="javascript:;" className="js-pl-praise list-praise post-action" data-id="419006">
                                                                <Icon type="like" />
                                                                <em>0</em>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="post-row" id="417069">
                                                <div className="media">
                                                    <a href="/u/3348078/courses" target="_blank"><img src="http://img.mukewang.com/54584e120001811202200220-40-40.jpg" width="40" height="40" /></a>
                                                </div>
                                                <div className="bd">
                                                    <div className="tit">
                                                        <a href="/u/3348078/courses" target="_blank">小山坳</a>
                                                    </div>
                                                    <p className="cnt">更正：systemctl start httpd.service</p>
                                                    <div className="footer clearfix">
                                                        <span title="创建时间" className="l timeago">时间：2017-04-16</span>
                                                        <a href="/video/8935" className="from">源自：5-1 Linux中源码包与RPM包区别</a>
                                                        <div className="actions r">
                                                            <a title="赞" href="javascript:;" className="js-pl-praise list-praise post-action" data-id="417069">
                                                                <Icon type="like" />
                                                                <em>0</em>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <Pagination showQuickJumper defaultCurrent={2} total={500} style={{ float: 'right', marginTop: '20px', marginBottom: '20px' }} />
                                    </TabPane>
                                    <TabPane tab={<span><Icon type="message" />问题</span>} key="4">
                                        <RadioGroup  >
                                            <Radio value={1} checked={true}>全部</Radio>
                                            <Radio value={2}>精华</Radio>
                                        </RadioGroup>


                                        <div className='course_quescon'>

                                            <div className="wenda-listcon mod-qa-list clearfix">
                                                <div className="headslider qa-medias l">
                                                    <a href="/u/5377561/courses" className="media" target="_blank" title="qq_少年何愁__0"><img src="http://img.mukewang.com/user/592d7b1c000191d701000100-40-40.jpg" width="40" height="40" />
                                                        <Icon type="question" className='icon-ques-revert nofinish' />
                                                    </a>
                                                </div>
                                                <div className="wendaslider qa-content">
                                                    <h2 className="wendaquetitle qa-header">
                                                        <a href="/u/5377561/courses" className="name" target="_blank" title="qq_少年何愁__0">
                                                            qq_少年何愁__0
                    </a>
                                                        <div className="wendatitlecon qa-header-cnt clearfix">
                                                            <a href="/qadetail/219612" target="_blank" className="qa-tit">
                                                                <i>phpmyadmin</i>
                                                            </a>
                                                        </div>
                                                    </h2>
                                                    <div className="replycont qa-body clearfix">

                                                        <div className="replydes">
                                                            <span className="wait-answer">快来回答问题，最佳答案可 +<strong>3积分</strong></span>
                                                            <a href="/qadetail/219612" className="myanswer" target="_blank">我来回答</a>
                                                            <a href="/about/faq?t=3" target="_blank" className="what-credit">什么是积分</a>
                                                        </div>

                                                    </div>
                                                    <div className="replymegfooter qa-footer clearfix">
                                                        <div className="wenda-time">
                                                            <div className="l-box l">
                                                                <em>时间：1天前</em>
                                                                <a href="/video/13417" target="_blank">源自：1-1 http协议概述</a>
                                                            </div>
                                                            <a href="/qadetail/219612" target="_blank" className="replynumber static-count r">
                                                                <span className="static-item answer">
                                                                    <b className="val">0</b>
                                                                    <span className="key">回答</span>
                                                                </span>
                                                                <span className="static-item">
                                                                    <b className="val">9</b>
                                                                    <span className="key">浏览</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="wenda-listcon mod-qa-list clearfix">
                                                <div className="headslider qa-medias l">
                                                    <a href="/u/4839885/courses" className="media" target="_blank" title="慕粉1001376443"><img src="http://img.mukewang.com/user/533e4c420001b2e502000200-40-40.jpg" width="40" height="40" />
                                                        <Icon type="check" className="icon-tick-revert isfinish" />
                                                    </a>
                                                </div>
                                                <div className="wendaslider qa-content">
                                                    <h2 className="wendaquetitle qa-header">
                                                        <a href="/u/4839885/courses" className="name" target="_blank" title="慕粉1001376443">
                                                            慕粉1001376443
                    </a>
                                                        <div className="wendatitlecon qa-header-cnt clearfix">
                                                            <a href="/qadetail/217679" target="_blank" className="qa-tit">
                                                                <i>怎么提取源代码</i>
                                                            </a>
                                                        </div>
                                                    </h2>
                                                    <div className="replycont qa-body clearfix">
                                                        <div className="l replydes">
                                                            <span className="replysign adopt">[已采纳
                                    <a href="/u/5324685/courses" target="_blank" title="亦平凡" className="nickname">亦平凡</a>
                                                                的回答]</span>
                                                            <span className="replydet">file_get_contents</span>
                                                        </div>
                                                    </div>
                                                    <div className="replymegfooter qa-footer clearfix">
                                                        <div className="wenda-time">
                                                            <div className="l-box l">
                                                                <em>时间：2017-05-18</em>
                                                                <a href="/video/13416" target="_blank">源自：3-3 用户向客服发送信息界面实现</a>
                                                            </div>
                                                            <a href="/qadetail/217679" target="_blank" className="replynumber static-count r">
                                                                <span className="static-item answer">
                                                                    <b className="val">1</b>
                                                                    <span className="key">回答</span>
                                                                </span>
                                                                <span className="static-item">
                                                                    <b className="val">19</b>
                                                                    <span className="key">浏览</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>






                                        </div>














                                        <Pagination showQuickJumper defaultCurrent={2} total={500} style={{ float: 'right', marginTop: '20px', marginBottom: '20px' }} />


                                    </TabPane>
                                    <TabPane tab={<span><Icon type="book" />笔记</span>} key="5">

                                        <RadioGroup  >
                                            <Radio value={1} checked={true}>最新</Radio>
                                            <Radio value={2}>点赞</Radio>
                                        </RadioGroup>


                                        <ul id="js-note-container" className="mod-post">

                                            <li id="1744789" className="post-row js-find-txt" >
                                                <div className="media">
                                                    <a href="/u/2715652/courses" target="_blank"><img src="http://img.mukewang.com/54584f240001db0a02200220-40-40.jpg" width="40" height="40" /></a>
                                                </div>
                                                <div className="bd">
                                                    <div className="tit">
                                                        <a href="/u/2715652/courses" target="_blank">随浪aiq飞儿</a>
                                                    </div>
                                                    <div className="js-notelist-content notelist-content mynote">
                                                        <pre className="autowrap">反向ajax原理</pre>
                                                        <div className="notelist-content-more">
                                                            <a href="javascript:;" className="js-toggle-content">[ 查看全文 ]</a>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix">
                                                        <input className="moco-btn moco-btn-green sava_btn" type="button" value="保存" />
                                                    </div>
                                                    <div className="answercon">
                                                        <div className="js-toggle-notelist answerImg">
                                                            <img src="//img.mukewang.com/592d787900013b5e12800720-156-88.jpg" data-src="//img.mukewang.com/592d787900013b5e12800720.jpg" width="156" height="88" />
                                                            <i className="had-ptime">03:33</i>

                                                            <div className="hover-area">
                                                                <a className="js-catch-pic slider-door catch-pic" href="javascript:;" style={{ margin: '0px 0px 0px -50%' }}><span>看截图</span></a>
                                                                <a className="slider-door catch-video" href="/video/13415/213" target="_blank" style={{ margin: ' 0px -50% 0px 0px' }}><span className="">看视频</span></a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="footer clearfix">
                                                        <span title="1天前" className="l timeago">时间：1天前</span>
                                                        <a href="/video/13415" className="from l">源自：3-2 用户向客服发送信息原理</a>
                                                        <div className="actions r">
                                                            <textarea style={{ display: 'none' }} defaultValue={'反向ajax原理'}></textarea>
                                                            <a title="采集" href="javascript:;" className="Jcollect post-action " data-mid="13415|2715652" style={{ display: 'none' }}>
                                                                <i>采集</i>
                                                                <em>0</em>
                                                            </a>
                                                            <a title="赞" href="javascript:;" className="Jpraise post-action " data-mid="13415">
                                                                <Icon type="like" />
                                                                <em>0</em>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <Pagination showQuickJumper defaultCurrent={2} total={500} style={{ float: 'right', marginTop: '20px', marginBottom: '20px' }} />

                                    </TabPane>
                                </Tabs></div>

    ) }
}

function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps)(CourseTab);