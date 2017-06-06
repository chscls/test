import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';


class Cart extends Component {
    
    render(){
    return(<div className="body-main">


<div className="cart-header">
	<div className="cart-header-warp clearfix">
		<div className="cart-title left clearfix">
			<h1 className="left">我的购物车</h1>
			
	<div className="left js-number-box-cart">
		共<span className="js-coures-num">1</span>门，已选择<span className="js-choice-num">1</span>门
	</div>

		</div>
		<div className="right">
			
	<div className="clearfix">
		<span className="left"><a className="js-myorderbtn" href="/myorder">我的订单历史</a></span>
		<span className="left num js-order-num" style={{display: 'none'}}></span>
	</div>

		</div>
	</div>
</div>


<div className="cart-body" id="cartBody">
		<div className="cart-body-title clearfix">
		<div className="item-1 l">
			<i className="js-check-all check imv2-checkbox"></i>
			<span className="c-93999f">全选</span>
		</div>
		
		<div className="item-2 l">
			<span className="c-4d555d">课程</span>
		</div>
		
		<div className="item-3 l">
			<span className="c-4d555d">金额</span>
		</div>
		
		<div className="item-4 l">
			<span className="c-4d555d">操作</span>
		</div>
	</div>
{/*	<textarea className="storageCart" style="display:none">		[
					{"goods_id":"204","type":"1","type_id":"109","status":"1","price":"299.00","ios_price":"348.00","service_lifetime":0,"open_discount":"0","discount_start_time":"1495555200","discount_end_time":"1495555200","discount_price":"0.00","code_white_list":10001,"code":0,"pay_price":"299.00"}
						
				]
	</textarea>*/}
	<div id="js-cart-body-table" className="cart-body-table">
				<div className="item clearfix js-item-cart js-each-109" data-type="1" data-typeid="109" data-goodsid="204" data-price="299.00">
			<div className="item-1">
				<i className="js-check check imv2-checkbox" data-price="299.00"></i>
			</div>
			
			<div className="item-2">
				<a href="http://coding.imooc.com/class/109.html" target="_blank">
					<img src="http://szimg.mukewang.com/5931273d0001289a05400300-160-90.jpg" width="160" height="90" className="left"/>
				</a>
				<dl className="left">
					<a href="http://coding.imooc.com/class/109.html" target="_blank"><dt>手把手从0打造电商平台-前端开发</dt></a>
									</dl>
			</div>
			
			<div className="item-3">
				<div className="price clearfix">
					<em>￥</em>
					<span>299.00</span>
				</div>
			</div>
			
			<div className="item-4">
				<i className="imv2-close js-close-cart close"></i>
			</div>
		</div>
				<div id="Anchor"></div>
		<div className="cart-body-bot js-cart-body-bot">
			<div className="clearfix cart-body-bot-box">
				
				
				<div className="right">
					<ul className="clearfix">
						<li className="li-2">
							<div className="topdiv">总计金额：</div>
							<div className="price price-red clearfix">
								<em>￥</em>
								<span className="jsAltogether">299.00</span>
							</div>
						</li>
						
						<li className="li-3">
							<span className="btn js-go-confrim">去结算</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	</div>




</div>)


}
}



function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps)(Cart);