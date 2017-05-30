import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {  LocaleProvider} from 'antd';
import Nav2 from '../components/Nav2'
import { Row,Col } from 'antd';
import VideoJs from '../components/VideoJs'
class Course extends Component{
   constructor(props){
    super(props)
  }
render(){
return (
<LocaleProvider >
    <div>
   <Nav2/>
     <div id="detail" style={{width:'1230px',margin:'auto',background:'white'}}>
     <Row  style={{marginTop:'20px'}}>
      <Col span={20}>
      
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
                 
<dl className="tm-shopPromo-panel"><div className="tm-shopPromotion-title tm-gold"><dt className="tb-metatit">本校活动</dt><dd>满1元,送50元店铺优惠券；满299元,包邮,送50元店铺优…</dd><a className="more" data-spm-anchor-id="a220o.1000855.0.0">更多优惠<s></s></a></div><div className="tm-floater-Box hidden"><div className="floater fold">     <div className="hd">         <em className="title">本店活动</em>         全店299包邮返券                               到2017-06-01 09:59:59结束                  <a className="more unmore" data-spm-anchor-id="a220o.1000855.0.0">收起<s></s></a>         <a className="more">更多优惠<s></s></a>              </div>     <ul className="bd">                  <li className="noCoupon" data-index="0">             <p>                                      满<em>1</em>元                                                                                                                                  ,送50元店铺优惠券                                                                                                                                                            </p>                      </li>                  <li className="noCoupon" data-index="1">             <p>                                      满<em>299</em>元                                                                                        ,包邮                                                                                        ,送50元店铺优惠券                                                                                                                                                            </p>                      </li>              </ul>     <div className="ft">         <span className="title">不包邮地区：</span>台湾;香港;澳门;海外         <a className="all" target="_blank" href="//marketing.tmall.com/home/tsp/page.htm?id=3495470378_59357538">所有活动商品</a>     </div> </div></div></dl></div>
       
       
       
       
       
     <ul className="tm-ind-panel">
                 			<li className="tm-ind-item tm-ind-sellCount " data-label="月销量"><div className="tm-indcon"><span className="tm-label">月销量</span><span className="tm-count">19</span></div></li>
            <li className="tm-ind-item tm-ind-reviewCount canClick tm-line3" id="J_ItemRates"><div className="tm-indcon"><span className="tm-label">累计评价</span><span className="tm-count">21</span></div></li>
    	
								                <li className="tm-ind-item tm-ind-emPointCount" data-spm="1000988"><div className="tm-indcon"><a href="//vip.tmall.com/vip/index.htm" target="_blank"><span className="tm-label">送知用积分</span><span className="tm-count">249</span></a></div></li>
			</ul>  
       
       
       
        </div>







  </Col>
      </Row>
      </Col>
      <Col span={2}></Col>
推荐内容
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