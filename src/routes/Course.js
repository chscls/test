import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {  LocaleProvider} from 'antd';
import Nav2 from '../components/Nav2'
import {Tabs,Row,Col,Icon,Collapse } from 'antd';
import VideoJs from '../components/VideoJs'
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;
class Course extends Component{
   constructor(props){
    super(props)
  }
  componentDidMount() {
   window.scrollTo(0,0);
  }
render(){
return (
<LocaleProvider >
    <div>
   <Nav2/>
     <div id="detail" style={{width:'1230px',margin:'auto',background:'white'}}>
     <Row  style={{marginTop:'20px'}}>
      <Col span={19}>
      
       <Row>
          <Col span={10}><div>
       
       
        <VideoJs vtt="video/demo.captions.vtt2"/> 
        <p className="tm-action tm-clear">
    <span id="J_EditItem"><a href="" target="_blank">举报</a></span>    			<a id="J_IShare" className="iShare tm-event" href="#"><Icon type="share-alt" />分享</a>
				        <a id="J_AddFavorite" href="javascript:;" data-aldurl="//ald.taobao.com/recommend.htm?appId=03136&amp;itemId=544913594159 " className="favorite"><Icon type="star" /><span>收藏商品</span></a>
		
		
				<span id="J_CollectCount">（50791人气）</span>    </p>
        
        
        </div>
        
         </Col>
      <Col span={14}> <div>
        
       <h1 style={{paddingBottom: '.2em',
    lineHeight: '1',
    fontSize: '16px',
    fontWeight: '700',
    color: '#000'}}> 与Android Studio的第一次亲密接触</h1>
    <p style={{fontSize: '14px',
    color: '#FF0036'}}>
		        					
Google亲儿子AndroidStudio即将上位，赶紧学习安装配置、使用技巧
						
			</p>

      <div className="tm-fcs-panel">
    		
                 
                 
                 <dl className="tm-price-panel tm-price-cur" id="J_StrPriceModBox">
        <dt className="tb-metatit">价格</dt>
        <dd><em className="tm-yen">¥</em> <span className="tm-price">499.00</span><div className="staticPromoTip">
				

			</div></dd>
    </dl><dl className="tm-promo-panel" id="J_PromoPrice" data-label="促销价" style={{display: 'none'}}><dt className="tb-metatit">促销价</dt><dd></dd></dl>
	<script type="data/tpl" id="J_PromoHintText">
				

			</script> 
                 
<dl className="tm-shopPromo-panel"><div className="tm-shopPromotion-title tm-gold"><dt className="tb-metatit">本校活动</dt><dd>满1元,送50元学校优惠券；满299元,送50元学校优惠券</dd><a className="more" data-spm-anchor-id="a220o.1000855.0.0">更多优惠<s></s></a></div><div className="tm-floater-Box hidden"><div className="floater fold">     <div className="hd">         <em className="title">本店活动</em>         全店299包邮返券                               到2017-06-01 09:59:59结束                  <a className="more unmore" data-spm-anchor-id="a220o.1000855.0.0">收起<s></s></a>         <a className="more">更多优惠<s></s></a>              </div>     <ul className="bd">                  <li className="noCoupon" data-index="0">             <p>                                      满<em>1</em>元                                                                                                                                  ,送50元店铺优惠券                                                                                                                                                            </p>                      </li>                  <li className="noCoupon" data-index="1">             <p>                                      满<em>299</em>元                                                                                        ,包邮                                                                                        ,送50元店铺优惠券                                                                                                                                                            </p>                      </li>              </ul>     <div className="ft">         <span className="title">不包邮地区：</span>台湾;香港;澳门;海外         <a className="all" target="_blank" href="//marketing.tmall.com/home/tsp/page.htm?id=3495470378_59357538">所有活动商品</a>     </div> </div></div></dl></div>
       
       
       
       
       
     <ul className="tm-ind-panel">
       	 <li className="tm-ind-item tm-ind-reviewCount canClick tm-line3" ><div className="tm-indcon"><span className="tm-label">综合评分</span><span className="tm-count">9.8</span></div></li>
    	
                 			<li className="tm-ind-item tm-ind-sellCount " data-label="月销量"><div className="tm-indcon"><span className="tm-label">学习人数</span><span className="tm-count">19121</span></div></li>
            <li className="tm-ind-item tm-ind-reviewCount canClick tm-line3" id="J_ItemRates"><div className="tm-indcon"><span className="tm-label">难度级别</span><span className="tm-count">中级</span></div></li>
    
			<li className="tm-ind-item tm-ind-emPointCount" data-spm="1000988"><div className="tm-indcon"><a href="" target="_blank"><span className="tm-label">送知用积分</span><span className="tm-count">249</span></a></div></li>
		
    
    	</ul>  
       
			<dl className="tm-shopPromo-panel"><div className="tm-shopPromotion-title tm-gold">简介：Android Studio是Google在I/O大会上发布的一个新的集成开发环境，可以让Android开发变的更简单。本课程会详细的向您介绍Android Studio的安装配置、使用技巧以及相对于Eclipse开发的优势，并通过实际的操作让大家快速熟悉Android Studio的使用，让您体验更强大的开发工具</div></dl>
    
<div className="tb-action tm-clear" style={{height:'95px'}}>
																	                <div className="tb-btn-buy tb-btn-sku">
                    <a id="J_LinkBuy" href="#" rel="nofollow" data-addfastbuy="true" title="点击此按钮，到下一步确认购买信息。" role="button">立即学习<span className="ensureText">确认</span></a>
                </div>
							      <div className="tb-btn-basket tb-btn-sku "><a href="#" rel="nofollow" id="J_LinkBasket" role="button"><Icon type="shopping-cart" />加入购物车<span className="ensureText">确认</span></a></div>
			            <div className="tb-btn-add tb-btn-sku tb-hidden"><a href="#" rel="nofollow" id="J_LinkAdd" role="button"><Icon type="shopping-cart" />加入购物车</a></div>
        			</div>

       
       <div className="tm-ser tm-clear">
                                                        	            <dl className="tm-clear">
                                    <dt className="tb-metatit">服务承诺</dt>
                                <dd className="tm-laysku-dd">
                    <ul className="tb-serPromise"><li><a href="" title="七天无理由退换" target="_blank">七天无理由退换</a></li></ul>
                </dd>
            </dl>
                                						            	<div className="tm-pay-box">
                <div className="tm-pay">
                    <em className="pay-title">支付方式</em>
				                    <em title="显示所有信息" className="pay-toggler" id="J_Toggler" style={{display:'inline'}}></em>
				                    <div data-spm="1998099674" className="pay-credit J_Paylist">
																			                                <a title="支持使用信用卡支付" target="_blank" href="//payservice.alipay.com/intro/index.htm?c=xyk">信用卡<s style={{background:'url(//img.alicdn.com/tps/i4/TB1gNG3JpXXXXbcXVXXAz6UFXXX-16-16.png) no-repeat center center'}} ></s></a>
														                                <a title="支持用绑定了支付宝的银行卡付款" href="//payservice.alipay.com/intro/index.htm?c=kjzf" target="_blank">快捷支付 <s style={{background:'url(//gtms04.alicdn.com/tps/i4/TB1fnvXJpXXXXcTXpXXAz6UFXXX-16-16.png) no-repeat center center'}}></s></a>
														                                <a title="免费利用花呗额度支付，下月10号还款" href="//payservice.alipay.com/intro/index.htm?c=hb" target="_blank">支付宝 <s style={{background:'url(//gtms03.alicdn.com/tps/i3/TB1rf58JpXXXXc5XFXXAz6UFXXX-16-16.png) no-repeat center center'}}></s></a>
																																										                                <a title="支持使用余额宝付款，边赚边花" href="//payservice.alipay.com/intro/index.htm?c=yeb" target="_blank">微信支付 <s style={{background:'url(//gtms02.alicdn.com/tps/i2/TB1HAHaJpXXXXX0XFXXAz6UFXXX-16-16.png) no-repeat center center'}}></s></a>
													                    </div>
                </div>
            </div>
						    </div>
        </div>







  </Col>
<Col>

<div className="tm-layout"  data-spm="1998132085"><a href="//3c.tmall.com" target="_blank"><img style={{width:'955px'}} src="12.jpg"/></a></div>

</Col>
  
      </Row>
      </Col>
      <Col span={5}>
      
      
      
      
      
      <div id="jiangshi" className="box mb40 js-usercard-box">
        <h4>讲师提示</h4>
                        <div className="teacher-info">
            <a href="/u/279399/courses?sort=publish" target="_blank">
                <img data-userid="279399" className="js-usercard-dialog" src="http://img.mukewang.com/590b09de0001503904000400-200-200.jpg" width="80" height="80"/>
            </a>
            <span className="tit">
                <a href="/u/279399/courses?sort=publish" target="_blank">Tony</a><br/>
            </span>
            <span className="job">资深Android工程师</span>
        </div>
                                <div className="course-info-tip">
                        <dl className="first">
                <dt>课程须知</dt>
                <dd className="autowrap">学习本课程前，需要熟悉Linux的常用命令，可参见课程《Linux达人养成计划I》。</dd>
            </dl>
                                    <dl>
                <dt>老师告诉你能学到什么？</dt>
                <dd className="autowrap">1、了解软件包管理的基本概念
2、能够使用rpm命令对软件进行安装、卸载等操作
3、能够使用yum对软件进行在线管理
4、能够安装源码包
5、能够使用脚本安装包</dd>
            </dl>
                    </div>
              </div> 
      
      
      
      
      </Col>

      </Row>


<Row>
  <Col span={4}>

<div id="J_DcShopArchive" className="J_DcAsyn" role="complementary"><div id="side-shop-info" data-spm="1997427133">
    <div className="shop-intro">
        

        <h3 className="hd">
            <div className="name">
                <a data-spm="d4918065" className="shopLink" href="//jomoo.tmall.com">四川大学</a>
             {/*   <span className="ww-light ww-small" data-icon="small" data-nick="%E4%B9%9D%E7%89%A7%E5%AE%98%E6%96%B9%E6%97%97%E8%88%B0%E5%BA%97" data-tnick="%E4%B9%9D%E7%89%A7%E5%AE%98%E6%96%B9%E6%97%97%E8%88%B0%E5%BA%97" data-encode="true" data-display="inline" data-from="cntaobao" data-item="41389303364" data-items="41389303364">
                    
                    
                    <a href="https://amos.alicdn.com/getcid.aw?v=3&amp;groupid=0&amp;s=1&amp;charset=utf-8&amp;uid=%E4%B9%9D%E7%89%A7%E5%AE%98%E6%96%B9%E6%97%97%E8%88%B0%E5%BA%97&amp;site=cntaobao&amp;groupid=0&amp;s=1&amp;fromid=cntaobao" target="_blank" className="ww-inline ww-online" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。"><span>旺旺在线</span></a>
                    
                    </span>*/}
            </div>
            <i></i>
        </h3><div style={{height: '0px',marginTop: '0px', marginBottom: '0px',overflow:'hidden', width: '122px'}}></div>

        
        
       {/* <div className="shop-cert shop-house"><a className="icon" target="_blank" href="//jia.tmall.com/"></a>
            <div className="text" target="_blank">已加入知用</div>
        </div>*/}
        
        
        
        <div className="shop-cert shop-ages">
            <span className="icon">100</span>
            <div className="text">百年学府</div>
        </div>
        
        
        <div className="main-info">
            
            <div className="shopdsr-item">
                <div className="shopdsr-title">口碑</div>
                <div className="shopdsr-score shopdsr-score-up-ctrl">
                    <span className="shopdsr-score-con">9.8</span>
                    <s className="shopdsr-score-up"></s>
                </div>
            </div>
            
            <div className="shopdsr-item">
                <div className="shopdsr-title">课程</div>
                <div className="shopdsr-score shopdsr-score-up-ctrl">
                    <span className="shopdsr-score-con">9.8</span>
                    <s className="shopdsr-score-up"></s>
                </div>
            </div>
            
            <div className="shopdsr-item">
                <div className="shopdsr-title">师资</div>
                <div className="shopdsr-score shopdsr-score-up-ctrl">
                    <span className="shopdsr-score-con">9.8</span>
                    <s className="shopdsr-score-up"></s>
                </div>
            </div>
            
            <a target="_blank" href="//rate.taobao.com/user-rate-UMCxuvCgLMFIG.htm" style={{zIndex: '1',display: 'block',position: 'absolute', width: '100%',height: '100%'}}></a>
        </div>
        

        
        <div className="btnArea"><a data-spm="d4918061" href="//jomoo.tmall.com" target="_blank" className="enterShop">进校逛逛</a><a id="xshop_collection_href" href="//favorite.taobao.com/popup/add_collection.htm?id=64652363&amp;itemid=64652363&amp;itemtype=0&amp;ownerid=f13336a619c718746f38c7076641b8e5&amp;scjjc=2"  className="J_PopupTrigger collection xshop_sc J_TDialogTrigger J_TokenSign favShop" data-width="440" data-height="260" data-closebtn="true">收藏学校</a></div>
    </div>
</div></div>
  </Col>
   <Col span={15}>

<Tabs defaultActiveKey="1" animated='false' tabPosition="top">
    <TabPane tab={<span><Icon type="bars" />章节</span>} key="1">
      <Collapse bordered={false} >
    <Panel header="第1章 概述" key="1">
      <ul><li>1-1 Linux软件安装管理概述 (02:37) </li>
          
          </ul>
     
    </Panel>
    <Panel header="第2章 软件包管理简介" key="2">
       <ul><li>2-1 Linux软件包管理之源码包 (12:49)</li>
      <li> 2-2 Linux软件包管理之RPM包和脚本安装包 (09:35)</li></ul>
    </Panel>
  
  </Collapse>
    </TabPane>
    <TabPane tab={<span><Icon type="file-text" />详细介绍</span>} key="2">
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

    </TabPane>
      <TabPane tab={<span><Icon type="like-o" />评论</span>} key="3">
     评论
    </TabPane>
    <TabPane tab={<span><Icon type="message" />问题</span>} key="4">
     问题
    </TabPane>
     <TabPane tab={<span><Icon type="book" />笔记</span>} key="5">
     笔记
    </TabPane>
  </Tabs>
  </Col>
   <Col span={5}>
推荐课程

  </Col>
    </Row >


         </div>
</div>
</LocaleProvider >
)


}


};


function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Course);