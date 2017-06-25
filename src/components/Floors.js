import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import styles from '../routes/IndexPage.css';
import { connect } from 'dva'
import LazyLoad from 'react-lazyload';
import { getImgUrl } from '../utils/query';
class Floors extends React.Component {
	constructor(props) {
		super(props)
	}

	getIndexFloorList(count) {
		this.props.dispatch({
			type: 'CatalogGroup/getIndexFloorList',
			payload: {
				count: count
			}

		});

	}
	componentDidMount() {

		this.getIndexFloorList();
	}
	render() {
		var content = this.props.CatalogGroup.indexFloorList.map(function (floor, index) {
			var y=parseInt(index/2)+1 ;
			
			var ctgs=floor.items.ctgIds.map(function (ctg, index) {
						return(<Link key={ctg.id} to="Search" className="hot-word" href="">{ctg.name}</Link>);
			});
			var courses = floor.items.courses.map(function (c, index) {
				return (	<Link key={c.id} to="School/Course" className="grid one-grid" >
									<div className="title">{c.title}</div>
									<div className="sub-title">{c.subTitle}</div>
									<LazyLoad height={200} once>
										<img src={c.cover}/>
									</LazyLoad>
								</Link>)
			});
			var smallCourses = floor.items.smallCourses.map(function (c, index) {
				return (	<Link key={c.id}to="School/Course" className="grid second-grid" >
									<div className="title">{c.title}</div>
									<div className="sub-title">{c.subTitle}</div>
									
									<LazyLoad height={200} once>
										<img src={c.cover}/>
									</LazyLoad>
								</Link>)
			});
			return (<div key={floor.id}><div  className="j_floor floor-con" >
				<div className={'floor-line-con color-type-'+floor.color} id="J_FloorMLRS" style={{ width: '1230px' }}>
					<i className="color-mark"></i><div className="floor-name">{floor.name}</div><div className="floor-sub-name">{floor.enName}</div>
					<div className="j_lineBody line-body fp-content-loading" data-goldlog="/tmallfp.5108.1" data-appid="201603202,09051,201603211" style={{ opacity: '1' }}>
						<div className="hot-word-con" data-spm="2016076">
							{ctgs}
						</div>
						<div data-spm="2016077">
							<Link to="Search" className="big-banner-con" href="">
								<img src={floor.items.cover} />
								<div className="act-title-ctn">
									<div className="slide-item" style={{ marginTop: '0px', display: 'block' }}>{floor.items.topicId.name} &gt;</div><div className="slide-item" style={{ marginTop: '0px', display: 'block' }}>内衣外穿新时尚 &gt;</div><div className="slide-item" style={{ marginTop: '0px', display: 'block' }}>大牌超值满减 &gt;</div></div>
								<div className="title-con">
									<div className="title">{floor.items.title}</div>
									<div className="sub-title">{floor.items.subTitle}</div>
									{/*<div className="decoration"></div>*/}
								</div>
							</Link>
							<div className="middle-column-con">
								{courses}
							</div>
							<div className="right-column-con">
								{smallCourses}
							</div>
						</div>
					</div>
				</div>
			</div>
			{index%2==0?"":<div data-spm="2016901" style={{ marginTop: '10px' }} className="tanx-con-mm_12852562_1778064_37802121 full-banner clearfix j_tanxBanner j_LazyloadCon fp-content-loading j_exposureCon" data-inited="1"><a href="">
					<img src={getImgUrl(this.props.Poster.advertiseList[y].img)} width="1620" height="90" /></a>
					
				</div>}
				</div>
			
			
			);

		}.bind(this))

		return (

			<div>

{content}
				

				<div className="j_wonderful wonderful-con mui-lift-cur-pannel" id="J_FloorCNXH" style={{ width: '1230px' }}>

					<h2 className="wonderful-title">
						<span className="text-ctn">
							<i className="fp-iconfont nav-item-icon icon"></i>猜你喜欢
        </span>
					</h2>
					<div className="module-content j_wonderfulList" style={{ width: '1230px' }}>

						<div data-spm="20161011">


							<ul className="wonderful-line  j_exposureExtra1 ">


								<li className="wonderful-item ">
									<Link to="School/Course" className="card-item  ">
										<span className="item-pic">
											<img src="//img.alicdn.com/bao/uploaded/i3/2616970884/TB2PLT.khxmpuFjSZFNXXXrRXXa_!!2616970884.jpg_400x400q60.jpg" width="100%" />
										</span>
										<span className="item-info">
											<span className="item-desc">
												<em className="item-name" title="手机微信">手机维修</em>
											</span>
											<span className="item-detail">
												<span className="item-price">



													<span className="mui-price  ">
														<i className="mui-price-rmb">¥</i>
														<span className="mui-price-integer">免费</span>

														<span className="mui-price-decimal"></span>

													</span>

												</span>

											</span>
										</span>
									</Link>
								</li>





								<li className="wonderful-item ">
									<Link to="School/Course" className="card-item  " href="">
										<span className="item-pic">
											<img src="//img.alicdn.com/bao/uploaded/bao/upload/TB1jGI6RXXXXXbaaXXXwu0bFXXX.png_400x400q60.jpg" width="100%" />
										</span>
										<span className="item-info">
											<span className="item-desc">
												<em className="item-name" title="机械制图">机械制图</em>
											</span>
											<span className="item-detail">
												<span className="item-price">



													<span className="mui-price  ">
														<i className="mui-price-rmb">¥</i>
														<span className="mui-price-integer">10</span>

														<span className="mui-price-decimal">.0</span>

													</span>

												</span>

											</span>
										</span>
									</Link>
								</li>





								<li className="wonderful-item ">
									<Link to="School/Course" className="card-item  " href="">
										<span className="item-pic">
											<img src="//img.alicdn.com/bao/uploaded/i1/430490406/TB2bKD2f_cCL1FjSZFPXXXZgpXa_!!430490406.jpg_400x400q60.jpg" width="100%" />
										</span>
										<span className="item-info">
											<span className="item-desc">
												<em className="item-name" title="造纸工艺">造纸工艺</em>
											</span>
											<span className="item-detail">
												<span className="item-price">



													<span className="mui-price  ">
														<i className="mui-price-rmb">¥</i>
														<span className="mui-price-integer">10</span>

														<span className="mui-price-decimal">.0</span>

													</span>

												</span>

											</span>
										</span>
									</Link>
								</li>





								<li className="shop-in-wonder">

									<Link to="School" className="img-ctn" href="">
										<img className="shop-item-pic" src="//gw.alicdn.com/bao/uploaded/TB1j2yfOFXXXXaEaXXXXXXXXXXX_!!0-item_pic.jpg" />
										<div className="black-mask"></div>

									</Link>

									<Link to="School" className="meow-head" href="">


										<div className="shop-logo-wrapper">
											<img className="shop-logo" src="//gw.alicdn.com/bao/uploaded/i1/TB16dcWMpXXXXcPXXXXSutbFXXX.jpg" />
										</div>
									</Link>
									<a className="shop-name" href="">奥迪4S维修培训机构</a>
									<p className="shop-fans">1.9 万粉丝</p>
								</li>






								<li className="wonderful-item  last">
									<Link to="School/Course" className="card-item   last-1920" href="">
										<span className="item-pic">
											<img src="//img.alicdn.com/bao/uploaded/bao/upload/TB1iRV1OVXXXXXLXpXXwu0bFXXX.png_400x400q60.jpg" width="100%" />
										</span>
										<span className="item-info">
											<span className="item-desc">
												<em className="item-name" title="小说编写">小说编写</em>
											</span>
											<span className="item-detail">
												<span className="item-price">



													<span className="mui-price  ">
														<i className="mui-price-rmb">¥</i>
														<span className="mui-price-integer">5</span>

														<span className="mui-price-decimal">.0</span>

													</span>

												</span>

											</span>
										</span>
									</Link>
								</li>


							</ul>







						</div>

					</div>



					<div className="tm-end show"></div>
					<div className="j_end"></div>

				</div>



			</div>











		);
	};
}

function mapStateToProps({ Poster, CatalogGroup }) {
	return { Poster, CatalogGroup };
}
export default connect(mapStateToProps)(Floors);