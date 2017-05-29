import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {  LocaleProvider} from 'antd';
import Nav from '../components/Nav'
import { Breadcrumb,Input,Row,Col } from 'antd';
const Search2 = Input.Search;
class Search extends Component{
   constructor(props){
    super(props)
  }
render(){
return (
<LocaleProvider >
  <div>
   <Nav/>
     <div id="main">
     
 <div className="crumbClip">
  <Breadcrumb>
    <Breadcrumb.Item>轻纺食品</Breadcrumb.Item>
    <Breadcrumb.Item><a href="">食品</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="">川菜</a></Breadcrumb.Item>
 <Breadcrumb.Item><Search2
    placeholder="回锅肉"
    style={{ width: 150 }}
    onSearch={value => console.log(value)}
  /></Breadcrumb.Item>
  </Breadcrumb>
<Row style={{bolder:'red'}}>
      <Col span={2}>学校</Col>
      <Col span={22}>

      
      <div id="attrValues" className="attrValues">
      <ul className="av-collapse row-2" style={{marginTop:'5px'}}>
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
  </div>
  </Col>
    </Row>
    <Row>
      <Col span={2}>分类</Col>
      <Col span={22}><ul className="av-expand" data-atp="{loc},{cat},,,{f},3,{c},">
<li style={{    margin: '0 5px 8px 0',
    width: '180px',
    overflow: 'hidden',float: 'left',
    height: '22px',
    lineHeight: '22px'}}>
 <a title="办公设备/办公耗材/相关服务" data-f="shop-cat-qp" data-c="cat-qp" href="" data-spm-anchor-id="a220m.1000858.1000721.1">
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

 </ul></Col>
    </Row>
    
</div>
         </div>
</div>
</LocaleProvider >
)


}


};


function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Search);