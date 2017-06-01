 import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {  LocaleProvider} from 'antd';
import Nav from '../components/Nav'
import { Breadcrumb,Input,Row,Col,Pagination,Icon  } from 'antd';
const Search2 = Input.Search;

class SearchCom extends Component{
   constructor(props){
    super(props)
  }
componentDidMount() {
   window.scrollTo(0,0);
  }
render(){
return (
<div id="main">
     
 <div className="crumbClip">
  <Breadcrumb style={{height:'30px'}}>
    <Breadcrumb.Item>轻纺食品</Breadcrumb.Item>
    <Breadcrumb.Item><a href="">食品</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="">川菜</a></Breadcrumb.Item>
 <Breadcrumb.Item><Search2
    placeholder="回锅肉"
    style={{ width: 150 }}
    onSearch={value => console.log(value)}
  /></Breadcrumb.Item>
  </Breadcrumb>
<Row style={{border: '1px solid #ccc',backgroundColor:'#F7F5F5'}}>
      <Col span={2}>学校</Col>
      <Col span={22} style={{backgroundColor:'white'}}>

      
     
      <ul className="av-collapse row-2" style={{marginTop:'0px'}}>
  <li style={{    border:'1px solid #e1e1e1',
    width: '70px',
    textAlign: 'center',
    height: '70px',
    float:'left',
    lineHeight: '52px',
    overflow: 'hidden',
    margin: '-1px -1px 0 0'}}>
 <a data-f="shop-brand" data-c="brand" href="?brand=10446017&amp;q=12&amp;sort=s&amp;style=w&amp;from=sn_1_brand&amp;spm=a220m.1000858.1000724.7.OQ8CMT&amp;smAreaId=510100#J_crumbs" title="Deli/得力">
 <img style={{   display: 'inline', width: '60px',height: '60px', margin: '5px 0px'}} src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg" alt="Deli/得力"/>
 
 </a>
 </li>
  <li style={{    border:'1px solid #e1e1e1',
    width: '70px',
    textAlign: 'center',
    height: '70px',
    float:'left',
    lineHeight: '52px',
    overflow: 'hidden',
    margin: '-1px -1px 0 0'}}>
 <a data-f="shop-brand" data-c="brand" href="?brand=14479366&amp;q=12&amp;sort=s&amp;style=w&amp;from=sn_1_brand&amp;spm=a220m.1000858.1000724.7.OQ8CMT&amp;smAreaId=510100#J_crumbs" title="徽派" >
 <img style={{  display: 'inline', width: '60px',height: '60px', margin: '5px 0px'}} src="http://eas.msvtc.net:52060/u/cms/www/201704/28232811wxtk.jpg" alt="Deli/得力"/>
 </a>
 </li>

  </ul>
 
  </Col>
    </Row>
    <Row style={{border: '1px solid #ccc',backgroundColor:'#F7F5F5',marginTop: '-1px'}}>
      <Col span={2} >分类</Col>
      <Col span={22} style={{backgroundColor:'white'}}>
     <div > 
      <ul className="av-expand" data-atp="{loc},{cat},,,{f},3,{c},">
<li style={{    margin: '0 5px 8px 0',
    width: '180px',
    overflow: 'hidden',float: 'left',
    height: '22px',
    lineHeight: '22px'}}>
 <a title="" data-f="shop-cat-qp" data-c="cat-qp" href="" data-spm-anchor-id="a220m.1000858.1000721.1">
 <b>蒜苗回锅肉</b> 
 </a>
 </li>
<li style={{    margin: '0 5px 8px 0',
    width: '180px',
    overflow: 'hidden',float: 'left',
    height: '22px',
    lineHeight: '22px'}}>
 <a title="电子词典/电纸书/文化用品" data-f="shop-cat-qp" data-c="cat-qp" href=""  data-spm-anchor-id="a220m.1000858.1000721.2">
 <b>土豆回锅肉</b>
 </a>
 </li>
<li style={{    margin: '0 5px 8px 0',
    width: '180px',
    overflow: 'hidden',float: 'left',
    height: '22px',
    lineHeight: '22px'}}>
 <a title="网店/网络服务/软件" data-f="shop-cat-qp" data-c="cat-qp" href=""  data-spm-anchor-id="a220m.1000858.1000721.3">
 <b>青椒回锅肉</b>
 </a>
 </li>

 </ul></div></Col>
    </Row>
    
</div>






<div id="page">
<div id="pageTool" >
  <div id="pageSort" style={{float:'left',marginTop:'5px',height:'25px'}}>
<a style={{float:'left',border: '1px solid #ccc',padding:'0 15px 0 5px',    position: 'relative'}}>综合<Icon type="arrow-down" /></a>
<a style={{float:'left',border: '1px solid #ccc',padding:'0 15px 0 5px' ,   position: 'relative'}}>人气<Icon type="arrow-down" /></a>
<a style={{float:'left',border: '1px solid #ccc',padding:'0 15px 0 5px' ,  position: 'relative'}}>价格<Icon type="arrow-down" /></a>
<a style={{float:'left',border: '1px solid #ccc',padding:'0 15px 0 5px' ,  position: 'relative'}}>销量<Icon type="arrow-down" /></a>
  </div>
  <div id="pageBar" style={{float:'right'}}>
  <Pagination  simple defaultCurrent={2} total={50} />
  </div>
  <div id="list">

<div className="moco-course-list">
                    <ul className="clearfix">
                                            
                            
    
                
	
							<div className="path-card-container">
			<img src="http://climg.mukewang.com/585243df00014f2406000338.jpg"/>
			<Link to="School/Course"  href="http://class.imooc.com/sc/6" style={{background: 'linear-gradient(-145deg, rgba(255,115,155,1), rgba(255,115,155,0.6))'}}>
				<div className="path-cart-p1 clearfix">
				<Icon style={{float:'left',fontSize:'20px',color:'white'}} type="retweet" />
					<span>职业路径</span>
				</div>
				
				<div className="path-cart-p2">Android攻城狮培养计划</div>
				<div className="path-cart-p3">零基础入门Android语法与界面</div>
				<div className="path-cart-p4">此次推出的专题为Android攻城狮培养计划的第一部分语法与界面基础篇，将带大家从0开始学习Android开发。</div>
				<div className="path-cart-bottom clearfix">
					<span className="l">588人在学</span>
					<span className="r">￥399.00</span>
				</div>
			</Link>
		</div>
					
	
													
						<div className="index-card-container course-card-container container ">
			
			<Link to="School/Course"  className="course-card" >
			
				<div className="course-card-top cart-color green">
					<i className="imv2-war"></i>
															<span>Android</span>
														</div>
				
				<div className="course-card-content">
					<h3 className="course-card-name">Android攻城狮的第一门课（入门篇）</h3>
										<p title="想快速掌握Android应用开发基础，选择学习这门课程就对了。">想快速掌握Android应用开发基础，选择学习这门课程就对了。</p>
										<div className="clearfix course-card-bottom">
						<div className="course-card-info">
														初级<span>·</span>
							246682人在学
						</div>
						
											</div>
				</div>
			</Link>
			<img src="/static/img/index/new/new.png" className="course-cart-new"/>
			
				
											<div className="course-card-bk">
					<img src="http://www.imooc.com/courseimg/s/cover017_s.jpg"/>
				</div>
									</div>
	
    
													
						<div className="index-card-container course-card-container container ">
			
			<Link to="School/Course"  className="course-card" >
			
				<div className="course-card-top cart-color green">
					<i className="imv2-war"></i>
															<span>Android</span>
														</div>
				
				<div className="course-card-content">
					<h3 className="course-card-name">Android攻城狮的第二门课（第1季）</h3>
										<p title="本课程由浅入深地带您学会Android的常用控件的开发和使用">本课程由浅入深地带您学会Android的常用控件的开发和使用</p>
										<div className="clearfix course-card-bottom">
						<div className="course-card-info">
														初级<span>·</span>
							93424人在学
						</div>
						
											</div>
				</div>
			</Link>
			<img src="/static/img/index/new/new.png" className="course-cart-new"/>
			
				
											<div className="course-card-bk">
					<img src="http://www.imooc.com/courseimg/s/cover026_s.jpg"/>
				</div>
									</div>
	
    
													
						<div className="index-card-container course-card-container container ">
			
			<Link to="School/Course"  className="course-card" href="/learn/206">
			
				<div className="course-card-top cart-color green">
					<i className="imv2-war"></i>
															<span>Android</span>
														</div>
				
				<div className="course-card-content">
					<h3 className="course-card-name">与Android Studio的第一次亲密接触</h3>
										<p title="Google亲儿子AndroidStudio即将上位，赶紧学习安装配置、使用技巧">Google亲儿子AndroidStudio即将上位，赶紧学习安装配置、使用技巧</p>
										<div className="clearfix course-card-bottom">
						<div className="course-card-info">
														初级<span>·</span>
							83822人在学
						</div>
						
											</div>
				</div>
			</Link>
			<img src="/static/img/index/new/new.png" className="course-cart-new"/>
			
				
											<div className="course-card-bk">
					<img src="http://www.imooc.com/courseimg/s/cover004_s.jpg"/>
				</div>
									</div>
	
    
													
						<div className="index-card-container course-card-container container ">
			
			<Link to="School/Course"  className="course-card" >
			
				<div className="course-card-top cart-color green">
					<i className="imv2-war"></i>
															<span>Android</span>
														</div>
				
				<div className="course-card-content">
					<h3 className="course-card-name">Android攻城狮的第二门课（第3季）</h3>
										<p title="手势识别、数据存储和4大组件，让你牢牢掌握之前的基础知识点">手势识别、数据存储和4大组件，让你牢牢掌握之前的基础知识点</p>
										<div className="clearfix course-card-bottom">
						<div className="course-card-info">
														初级<span>·</span>
							63523人在学
						</div>
						
											</div>
				</div>
			</Link>
			<img src="/static/img/index/new/new.png" className="course-cart-new"/>
			
				
											<div className="course-card-bk">
					<img src="http://www.imooc.com/courseimg/s/cover007_s.jpg"/>
				</div>
									</div>
	
    
																		<div className="moco-course-wrap szcoursewrap">
																					<Link to="School/Course" href="http://coding.imooc.com/class/101.html"  className="szcourse-cart active">
								<div className="szcourse-cart-A">
									<div className="szcourse-cart-b">
										<div className="szcourse-p1 clearfix">
											<i className="imv2-war"></i>
											<span>实战课程</span>
										</div>
										<div className="szcourse-p2">BAT大牛经验之谈 揭秘Android面试技巧</div>
										<div className="szcourse-p3">让你不再害怕Android面试，从技术深度掌握回答技巧赢取称心offer</div>
										<div className="szcourse-bottom clearfix">
											<span className="l">302人在学</span>
											<span className="r">￥168.00</span>
										</div>
									</div>
									<div className="szcourse-cart-o"></div>
									<div className="shizhanpic" style={{backgroundImage: 'url(http://szimg.mukewang.com/5909a1250001197e05400300-360-202.jpg)'}}></div>
								</div>
								
								<div className="szcourse-cart-B">
									<div>
										<div className="szcourse-name clearfix">BAT大牛经验之谈 揭秘Android面试技巧</div>
										<div className="szcourse-bottom clearfix">
											<span className="l">302人在学</span>
											<span className="r">￥168.00</span>
										</div>
									</div>
								</div>
							</Link>
																												<Link to="School/Course" href="http://coding.imooc.com/class/100.html" className="szcourse-cart ">
								<div className="szcourse-cart-A">
									<div className="szcourse-cart-b">
										<div className="szcourse-p1 clearfix">
											<i className="imv2-war"></i>
											<span>实战课程</span>
										</div>
										<div className="szcourse-p2">带后台的IM即时通讯App 全程MVP手把手打造</div>
										<div className="szcourse-p3">采用Android最热门MVP设计模式，完成一整套IM即时通讯APP实现前后台技术</div>
										<div className="szcourse-bottom clearfix">
											<span className="l">96人在学</span>
											<span className="r">￥466.00</span>
										</div>
									</div>
									<div className="szcourse-cart-o"></div>
									<div className="shizhanpic" style={{backgroundImage: 'url(http://szimg.mukewang.com/59118b92000147bf05400300-360-202.jpg)'}}></div>
								</div>
								
								<div className="szcourse-cart-B">
									<div>
										<div className="szcourse-name clearfix">带后台的IM即时通讯App 全程MVP手把手打造</div>
										<div className="szcourse-bottom clearfix">
											<span className="l">96人在学</span>
											<span className="r">￥466.00</span>
										</div>
									</div>
								</div>
							</Link>
																												<Link to="School/Course" href="http://coding.imooc.com/class/89.html"  className="szcourse-cart ">
								<div className="szcourse-cart-A">
									<div className="szcourse-cart-b">
										<div className="szcourse-p1 clearfix">
											<i className="imv2-war"></i>
											<span>实战课程</span>
										</div>
										<div className="szcourse-p2">React Native开发双平台GitHub App </div>
										<div className="szcourse-p3">不模拟，不仿站，就是最真实的RN 跨平台上线项目实战(Android,IOS双平台APP)</div>
										<div className="szcourse-bottom clearfix">
											<span className="l">244人在学</span>
											<span className="r">￥399.00</span>
										</div>
									</div>
									<div className="szcourse-cart-o"></div>
									<div className="shizhanpic" style={{backgroundImage: 'url(http://szimg.mukewang.com/58b7d4d90001e3a705400300-360-202.jpg)'}}></div>
								</div>
								
								<div className="szcourse-cart-B">
									<div>
										<div className="szcourse-name clearfix">React Native开发双平台GitHub App </div>
										<div className="szcourse-bottom clearfix">
											<span className="l">244人在学</span>
											<span className="r">￥399.00</span>
										</div>
									</div>
								</div>
							</Link>
																											<Link to="School/Course" href="http://coding.imooc.com/class/84.html"  className="szcourse-cart ">
								<div className="szcourse-cart-A">
									<div className="szcourse-cart-b">
										<div className="szcourse-p1 clearfix">
											<i className="imv2-war"></i>
											<span>实战课程</span>
										</div>
										<div className="szcourse-p2">组件化封装思想实战Android App</div>
										<div className="szcourse-p3">以组件化方式打造一个完整的Android App，封装优化思想与实战</div>
										<div className="szcourse-bottom clearfix">
											<span className="l">574人在学</span>
											<span className="r">￥269.00</span>
										</div>
									</div>
									<div className="szcourse-cart-o"></div>
									<div className="shizhanpic" style={{backgroundImage: 'url(http://szimg.mukewang.com/589c0e990001ac9505400300-360-202.jpg)'}}></div>
								</div>
								
								<div className="szcourse-cart-B">
									<div>
										<div className="szcourse-name clearfix">组件化封装思想实战Android App</div>
										<div className="szcourse-bottom clearfix">
											<span className="l">574人在学</span>
											<span className="r">￥269.00</span>
										</div>
									</div>
								</div>
							</Link>
																				</div>





<div className="index-card-container course-card-container container ">
			
			<Link to="School/Course"  className="course-card" href="/learn/96">
			
				<div className="course-card-top cart-color green">
					<i className="imv2-war"></i>
															<span>Android</span>
														</div>
				
				<div className="course-card-content">
					<h3 className="course-card-name">Android攻城狮的第一门课（入门篇）</h3>
										<p title="想快速掌握Android应用开发基础，选择学习这门课程就对了。">想快速掌握Android应用开发基础，选择学习这门课程就对了。</p>
										<div className="clearfix course-card-bottom">
						<div className="course-card-info">
														初级<span>·</span>
							246682人在学
						</div>
						
											</div>
				</div>
			</Link>
			<img src="/static/img/index/new/new.png" className="course-cart-new"/>
			
				
											<div className="course-card-bk">
					<img src="http://www.imooc.com/courseimg/s/cover017_s.jpg"/>
				</div>
									</div>
	
	<div className="index-card-container course-card-container container ">
			
			<Link to="School/Course" className="course-card" href="/learn/96">
			
				<div className="course-card-top cart-color green">
					<i className="imv2-war"></i>
															<span>Android</span>
														</div>
				
				<div className="course-card-content">
					<h3 className="course-card-name">Android攻城狮的第一门课（入门篇）</h3>
										<p title="想快速掌握Android应用开发基础，选择学习这门课程就对了。">想快速掌握Android应用开发基础，选择学习这门课程就对了。</p>
										<div className="clearfix course-card-bottom">
						<div className="course-card-info">
														初级<span>·</span>
							246682人在学
						</div>
						
											</div>
				</div>
			</Link>
			<img src="/static/img/index/new/new.png" className="course-cart-new"/>
			
				
											<div className="course-card-bk">
					<img src="http://www.imooc.com/courseimg/s/cover017_s.jpg"/>
				</div>
									</div>
	
	<div className="index-card-container course-card-container container ">
			
			<Link to="School/Course" className="course-card" href="/learn/96">
			
				<div className="course-card-top cart-color green">
					<i className="imv2-war"></i>
															<span>Android</span>
														</div>
				
				<div className="course-card-content">
					<h3 className="course-card-name">Android攻城狮的第一门课（入门篇）</h3>
										<p title="想快速掌握Android应用开发基础，选择学习这门课程就对了。">想快速掌握Android应用开发基础，选择学习这门课程就对了。</p>
										<div className="clearfix course-card-bottom">
						<div className="course-card-info">
														初级<span>·</span>
							246682人在学
						</div>
						
											</div>
				</div>
			</Link>
			<img src="/static/img/index/new/new.png" className="course-cart-new"/>
			
				
											<div className="course-card-bk">
					<img src="http://www.imooc.com/courseimg/s/cover017_s.jpg"/>
				</div>
									</div>
	
	<div className="index-card-container course-card-container container ">
			
			<Link to="School/Course"  className="course-card" href="/learn/96">
			
				<div className="course-card-top cart-color green">
					<i className="imv2-war"></i>
															<span>Android</span>
														</div>
				
				<div className="course-card-content">
					<h3 className="course-card-name">Android攻城狮的第一门课（入门篇）</h3>
										<p title="想快速掌握Android应用开发基础，选择学习这门课程就对了。">想快速掌握Android应用开发基础，选择学习这门课程就对了。</p>
										<div className="clearfix course-card-bottom">
						<div className="course-card-info">
														初级<span>·</span>
							246682人在学
						</div>
						
											</div>
				</div>
			</Link>
			<img src="/static/img/index/new/new.png" className="course-cart-new"/>
			
				
											<div className="course-card-bk">
					<img src="http://www.imooc.com/courseimg/s/cover017_s.jpg"/>
				</div>
									</div>
	<div className="index-card-container course-card-container container ">
			
			<Link to="School/Course"  className="course-card" href="/learn/96">
			
				<div className="course-card-top cart-color green">
					<i className="imv2-war"></i>
															<span>Android</span>
														</div>
				
				<div className="course-card-content">
					<h3 className="course-card-name">Android攻城狮的第一门课（入门篇）</h3>
										<p title="想快速掌握Android应用开发基础，选择学习这门课程就对了。">想快速掌握Android应用开发基础，选择学习这门课程就对了。</p>
										<div className="clearfix course-card-bottom">
						<div className="course-card-info">
														初级<span>·</span>
							246682人在学
						</div>
						
											</div>
				</div>
			</Link>
			<img src="/static/img/index/new/new.png" className="course-cart-new"/>
			
				
											<div className="course-card-bk">
					<img src="http://www.imooc.com/courseimg/s/cover017_s.jpg"/>
				</div>
									</div>
	<div className="index-card-container course-card-container container ">
			
			<Link to="School/Course"  className="course-card" href="/learn/96">
			
				<div className="course-card-top cart-color green">
					<i className="imv2-war"></i>
															<span>Android</span>
														</div>
				
				<div className="course-card-content">
					<h3 className="course-card-name">Android攻城狮的第一门课（入门篇）</h3>
										<p title="想快速掌握Android应用开发基础，选择学习这门课程就对了。">想快速掌握Android应用开发基础，选择学习这门课程就对了。</p>
										<div className="clearfix course-card-bottom">
						<div className="course-card-info">
														初级<span>·</span>
							246682人在学
						</div>
						
											</div>
				</div>
			</Link>
			<img src="/static/img/index/new/new.png" className="course-cart-new"/>
			
				
											<div className="course-card-bk">
					<img src="http://www.imooc.com/courseimg/s/cover017_s.jpg"/>
				</div>
									</div>
	<div className="index-card-container course-card-container container ">
			
			<Link to="School/Course"  className="course-card" href="/learn/96">
			
				<div className="course-card-top cart-color green">
					<i className="imv2-war"></i>
															<span>Android</span>
														</div>
				
				<div className="course-card-content">
					<h3 className="course-card-name">Android攻城狮的第一门课（入门篇）</h3>
										<p title="想快速掌握Android应用开发基础，选择学习这门课程就对了。">想快速掌握Android应用开发基础，选择学习这门课程就对了。</p>
										<div className="clearfix course-card-bottom">
						<div className="course-card-info">
														初级<span>·</span>
							246682人在学
						</div>
						
											</div>
				</div>
			</Link>
			<img src="/static/img/index/new/new.png" className="course-cart-new"/>
			
				
											<div className="course-card-bk">
					<img src="http://www.imooc.com/courseimg/s/cover017_s.jpg"/>
				</div>
									</div>
	




		
						<div className="index-card-container course-card-container container ">
			
			<Link to="School/Course" className="course-card" href="/learn/484">
			
				<div className="course-card-top cart-color green">
					<i className="imv2-war"></i>
															<span>Android</span>
														</div>
				
				<div className="course-card-content">
					<h3 className="course-card-name">Android-屏幕适配全攻略</h3>
										<p title="重点概念、常见问题及解决方案，赶快进来学习解决疑惑">重点概念、常见问题及解决方案，赶快进来学习解决疑惑

</p>
										<div className="clearfix course-card-bottom">
						<div className="course-card-info">
														高级<span>·</span>
							40529人在学
						</div>
						
											</div>
				</div>
			</Link>
			<img src="/static/img/index/new/new.png" className="course-cart-new"/>
			
				
											<div className="course-card-bk">
					<img src="http://www.imooc.com/courseimg/s/cover018_s.jpg"/>
				</div>
									</div>
	
                                            </ul>
                </div>
    </div>
</div>
  </div>




<div style={{float:'right',marginBottom:'10px'}}>
 <Pagination  showQuickJumper defaultCurrent={2} total={500} />
</div>
<div className="btmSearch-loading" id="J_BtmSearch">
   <div className="btmSearch" data-spm="a220m.1000858.1000729">
<div className="btmSearch-main">
<form className="btmSearch-form clearfix" action="" target="_top" name="searchTop">
<fieldset>
<div className="btmSearch-input clearfix">
<input type="text" value="" autoComplete="off" tabIndex="9" accessKey="s" className="btmSearch-mq" id="btm-mq" data-bts="0" name="q" aria-label="搜索关键词"/>
<button type="submit" className="ui-btn-search-l" aria-label="搜索">搜索<s></s></button>
<input type="hidden" name="type" value="p"/>
<input type="hidden" name="redirect" value="notRedirect"/>
</div>
</fieldset>
</form>
</div>
</div>  </div>


         </div>
)


}

         };


function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(SearchCom);