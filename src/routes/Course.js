import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { LocaleProvider } from 'antd';
import Nav2 from '../components/Nav2'
import {  Row, Col, Icon } from 'antd';
import VideoJs from '../components/VideoJs'
import CourseTab from '../components/CourseTab'


class Course extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
           
                    <div id="detail" style={{ width: '1230px', margin: 'auto', background: 'white' }}>
                        <Row style={{ marginTop: '20px' }}>
                            <Col span={19}>

                                <Row>
                                    <Col span={10}><div>


                                        <VideoJs vtt="video/demo.captions.vtt2" />
                                        <p className="tm-action tm-clear">
                                            <span id="J_EditItem"><a href="" >举报</a></span>    			<a id="J_IShare" className="iShare tm-event" href="#"><Icon type="share-alt" />分享</a>
                                            <a id="J_AddFavorite" href="javascript:;" data-aldurl="//ald.taobao.com/recommend.htm?appId=03136&amp;itemId=544913594159 " className="favorite"><Icon type="star" /><span>收藏商品</span></a>


                                            <span id="J_CollectCount">（50791人气）</span>    </p>


                                    </div>

                                    </Col>
                                    <Col span={14} style={{ minHeight: '388px' }}> <div>

                                        <h1 style={{
                                            paddingBottom: '.2em',
                                            lineHeight: '1',
                                            fontSize: '16px',
                                            fontWeight: '700',
                                            color: '#000'
                                        }}> 与Android Studio的第一次亲密接触</h1>
                                        <p style={{
                                            fontSize: '14px',
                                            color: '#FF0036'
                                        }}>

                                            Google亲儿子AndroidStudio即将上位，赶紧学习安装配置、使用技巧

			</p>

                                        <div className="tm-fcs-panel">



                                            <dl className="tm-price-panel tm-price-cur" id="J_StrPriceModBox">
                                                <dt className="tb-metatit">价格</dt>
                                                <dd><em className="tm-yen">¥</em> <span className="tm-price">499.00</span><div className="staticPromoTip">


                                                </div></dd>
                                            </dl><dl className="tm-promo-panel" id="J_PromoPrice" data-label="促销价" style={{ display: 'none' }}><dt className="tb-metatit">促销价</dt><dd></dd></dl>
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

                                        <div className="tb-action tm-clear" style={{ height: '95px' }}>
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
                                                    <em title="显示所有信息" className="pay-toggler" id="J_Toggler" style={{ display: 'inline' }}></em>
                                                    <div data-spm="1998099674" className="pay-credit J_Paylist">
                                                        <a title="支持使用信用卡支付" target="_blank" href="//payservice.alipay.com/intro/index.htm?c=xyk">信用卡<s style={{ background: 'url(//img.alicdn.com/tps/i4/TB1gNG3JpXXXXbcXVXXAz6UFXXX-16-16.png) no-repeat center center' }} ></s></a>
                                                        <a title="支持用绑定了支付宝的银行卡付款" href="//payservice.alipay.com/intro/index.htm?c=kjzf" target="_blank">快捷支付 <s style={{ background: 'url(//gtms04.alicdn.com/tps/i4/TB1fnvXJpXXXXcTXpXXAz6UFXXX-16-16.png) no-repeat center center' }}></s></a>
                                                        <a title="免费利用花呗额度支付，下月10号还款" href="//payservice.alipay.com/intro/index.htm?c=hb" target="_blank">支付宝 <s style={{ background: 'url(//gtms03.alicdn.com/tps/i3/TB1rf58JpXXXXc5XFXXAz6UFXXX-16-16.png) no-repeat center center' }}></s></a>
                                                        <a title="支持使用余额宝付款，边赚边花" href="//payservice.alipay.com/intro/index.htm?c=yeb" target="_blank">微信支付 <s style={{ background: 'url(//gtms02.alicdn.com/tps/i2/TB1HAHaJpXXXXX0XFXXAz6UFXXX-16-16.png) no-repeat center center' }}></s></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>







                                    </Col>


                                    <div style={{ marginBottom: '5px' }} className="tm-layout" data-spm="1998132085"><a href="//3c.tmall.com" target="_blank"><img style={{ width: '955px' }} src="12.jpg" /></a></div>



                                </Row>
                            </Col>
                            <Col span={5}>





                                <div id="jiangshi" className="box mb40 js-usercard-box">
                                    <h4>讲师提示</h4>
                                    <div className="teacher-info">
                                        <a href="/u/279399/courses?sort=publish" target="_blank">
                                            <img data-userid="279399" className="js-usercard-dialog" src="http://img.mukewang.com/590b09de0001503904000400-200-200.jpg" width="80" height="80" />
                                        </a>
                                        <span className="tit">
                                            <a href="/u/279399/courses?sort=publish" target="_blank">Tony</a><br />
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
                                                <Link to="School" data-spm="d4918065" className="shopLink" >四川大学</Link>
                                                {/*   <span className="ww-light ww-small" data-icon="small" data-nick="%E4%B9%9D%E7%89%A7%E5%AE%98%E6%96%B9%E6%97%97%E8%88%B0%E5%BA%97" data-tnick="%E4%B9%9D%E7%89%A7%E5%AE%98%E6%96%B9%E6%97%97%E8%88%B0%E5%BA%97" data-encode="true" data-display="inline" data-from="cntaobao" data-item="41389303364" data-items="41389303364">
                    
                    
                    <a href="https://amos.alicdn.com/getcid.aw?v=3&amp;groupid=0&amp;s=1&amp;charset=utf-8&amp;uid=%E4%B9%9D%E7%89%A7%E5%AE%98%E6%96%B9%E6%97%97%E8%88%B0%E5%BA%97&amp;site=cntaobao&amp;groupid=0&amp;s=1&amp;fromid=cntaobao" target="_blank" className="ww-inline ww-online" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。"><span>旺旺在线</span></a>
                    
                    </span>*/}
                                            </div>
                                            <i></i>
                                        </h3><div style={{ height: '0px', marginTop: '0px', marginBottom: '0px', overflow: 'hidden', width: '122px' }}></div>



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

                                            <a target="_blank" href="" style={{ zIndex: '1', display: 'block', position: 'absolute', width: '100%', height: '100%' }}></a>
                                        </div>



                                        <div className="btnArea"><Link to="School" data-spm="d4918061" href="" className="enterShop">进校逛逛</Link>

                                            <a id="xshop_collection_href" href="" className="J_PopupTrigger collection xshop_sc J_TDialogTrigger J_TokenSign favShop" data-width="440" data-height="260" data-closebtn="true">收藏学校</a></div>
                                    </div>
                                </div></div>




<div id="J_DcLeft" className="J_DcAsyn tb-shop"  >


<div className="col-sub J_TRegion" style={{overflow:'visible',width: '190px'}}>

<div className="J_TModule" data-widgetid="15160518949" id="shop15160518949" data-componentid="4073" data-spm="110.0.4073-15160518949"  data-title="客服中心"><div className="skin-box tb-module tshop-pbsm tshop-pbsm-other-customer-service">
    <s className="skin-box-tp"><b></b></s>
            <div className="skin-box-hd">
                <i className="hd-icon"></i>
                                            <h3>
                            <span>
                                                                                                            客服中心
                                                                                                </span>
                       </h3>
                            </div>
	    <div className="skin-box-bd">
    <ul>
                        <li className="service-block">
                <h4>工作时间</h4>
                <ul className="service-content">
                                        <li>周一至周五：9:00-22:00</li>
                                                            <li>周六至周日：9:00-22:00</li>
                                    </ul>
            </li>
                        <li className="service-block">
                <h4>在线咨询</h4>
                <ul data-url="//osdsc.alicdn.com//taesite/TB1bAnIRpXXXXcYapXXUxnn4FXX.groupmember|var^groupMember;sign^4b20f82893c0d0fdf036956117dd8858;lang^gb18030;t^1496301197000" data-group-filter="158578140@_@157685941" data-nick="%E8%8B%8F%E5%AE%81%E6%98%93%E8%B4%AD%E5%AE%98%E6%96%B9%E6%97%97%E8%88%B0%E5%BA%97" data-gnick="%CB%D5%C4%FE%D2%D7%B9%BA%B9%D9%B7%BD%C6%EC%BD%A2%B5%EA" className="service-content service-group">
                <li className="group">
                <Icon type="phone" />:{"    "}028-1232131313<br/>
                qq:{"    "} 808080031
                
                </li></ul>
            </li>
                   </ul>
    </div>
    <s className="skin-box-bt"><b></b></s>
     	
    </div>
</div>



<div className="J_TModule" data-widgetid="16173239884" id="shop16173239884" data-componentid="5003" data-spm="110.0.5003-16173239884"  data-title="自定义内容区">	        <div className="skin-box tb-module tshop-pbsm tshop-pbsm-shop-self-defined">
	
        <s className="skin-box-tp"><b></b></s>
		        <div className="skin-box-bd clear-fix">
            <span>
								    <p><img src="//gdp.alicdn.com/imgextra/i2/2616970884/TB2XdmEl4hmpuFjSZFyXXcLdFXa-2616970884.jpg" alt=""/> </p>
							</span>
        </div>
        <s className="skin-box-bt"><b></b></s>
		
	</div>
</div>





</div>


</div>









                            </Col>
                            <Col span={15}>
<CourseTab/>
                            </Col>
                            <Col span={5}>

                            <div className="box mb40 recom-course-list-box">
                                <h4>推荐课程</h4>
                                <ul className="js-recom-course recom-course-list clearfix">
                                    <li className="clearfix">
                                        <Link to="School/Course"  className="clearfix" ><div className="l course-img" style={{backgroundImage: 'url(http://szimg.mukewang.com/58b7d4d90001e3a705400300-360-202.jpg)'}}><div className="cart-color cyan"></div>
                                        </div><div className="l content-box">
                                                <p className="smalle-title">React Native开发双平台GitHub App </p>
                                                <p className="content-text" title=""></p>
                                                <div className="clearfix learn-detail">中级<span>·</span>249人在学</div>
                                            </div>                    </Link>
                                    </li>
                                    <li className="clearfix">
                                       <Link to="School/Course"  className="clearfix" ><div className="l course-img" style={{backgroundImage: 'url(http://www.imooc.com/courseimg/s/cover016_s.jpg)'}}>
                                        <div className="cart-color cyan"></div>
                                    </div><div className="l content-box">
                                            <p className="smalle-title">iOS基础之UIImageView知识拓展(下)</p>
                                            <p className="content-text" title="本课程将学习如何让图片任意角度旋转、图片任意位置的裁剪、图片的圆角剪切、图片任意位置拉伸、屏幕截屏以及图片水印的添加，让我们掌握更多对UIImage的处理。">本课程将学习如何让图片任意角度旋转、图片任意位置的裁剪、图片的圆角剪切、图片任意位置拉伸、屏幕截屏以及图片水印的添加，让我们掌握更多对UIImage的处理。</p>                            <div className="clearfix learn-detail">初级<span>·</span>3885人在学</div>
                                        </div>                    </Link>            
                                            </li>

                                </ul>
                                </div>
                            </Col>
                        </Row >


                    </div>
             
        )


    }


};


function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps)(Course);