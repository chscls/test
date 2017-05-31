import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {  LocaleProvider} from 'antd';
import Nav2 from '../components/Nav2'
import { Row,Col,Icon } from 'antd';
import VideoJs from '../components/VideoJs'
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
       
       
        <VideoJs vtt="video/demo.captions.vtt2"/> </div>
        
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
    
<div className="tb-action tm-clear">
																	                <div className="tb-btn-buy tb-btn-sku">
                    <a id="J_LinkBuy" href="#" rel="nofollow" data-addfastbuy="true" title="点击此按钮，到下一步确认购买信息。" role="button">立即学习<span className="ensureText">确认</span></a>
                </div>
							      <div className="tb-btn-basket tb-btn-sku "><a href="#" rel="nofollow" id="J_LinkBasket" role="button"><Icon type="shopping-cart" />加入购物车<span className="ensureText">确认</span></a></div>
			            <div className="tb-btn-add tb-btn-sku tb-hidden"><a href="#" rel="nofollow" id="J_LinkAdd" role="button"><Icon type="shopping-cart" />加入购物车</a></div>
        			</div>

       
       
        </div>







  </Col>
      </Row>
      </Col>
      <Col span={5}>
      
      
      
      
      
      <div id="jiangshi" className="box mb40 js-usercard-box">
        <h4>讲师提示</h4>
                        <div className="teacher-info">
            <a href="/u/279399/courses?sort=publish" target="_blank">
                <img data-userid="279399" className="js-usercard-dialog" src="http://img.mukewang.com/53f5aae6000129aa01400140-80-80.jpg" width="80" height="80"/>
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