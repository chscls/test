 import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import styles from '../routes/IndexPage.css';
import { connect } from 'dva'
class Category extends React.Component {
  constructor(props) {
    super(props)
  }
  getTopicGroupList = (count) => {

    this.props.dispatch({
      type: 'TopicGroup/getTopicGroupList',
      payload: {
        count: count
      }

    });
  }
  componentDidMount() {

     this.getTopicGroupList(5);
  }
  render(){
		
	   var content = this.props.TopicGroup.topicGroupList.map(function (f, index) {
		var last = (index<3?'':(index==3?'last-990':'last-1230'));
		var topic = f.items.map(function(t, index){
			if(index==0){
			return(<Link key={index} to="Good" data-spm-anchor-id="875.7931836/B.2015039.1">
				<div className="item-title">{t.name}</div>
			<div className="item-sub-title">{t.tips}</div>
			<div className="img-con">
				<div className="img-mask"></div>
				<img alt={t.name} src={t.cover}/>
			</div>
			</Link>)
			}else{
				return(<div key={index}><div className="seprate"></div><Link to="Good" data-spm-anchor-id="875.7931836/B.2015039.1">
				<div className="item-title">{t.name}</div>
			<div className="item-sub-title">{t.tips}</div>
			<div className="img-con">
				<div className="img-mask"></div>
				<img alt={t.name} src={t.cover} width="100%"/>
			</div>
			</Link></div>)
			}

		});
        return (<div key={f.id} className={'channel-column color-type-'+f.color + ' '+last}>
	<div className="column-title">
		 <Icon type={f.icon} />
		<span className="text">{f.name}</span>
	</div>
	
		{topic}
		</div>);
      });
  return (
    <div className="j_channel channel-con j_exposureCon fp-floor" data-floorname="Channel" data-spm="2015039" data-spm-max-idx="10">
	<div className="module-body j_channelBody clearfix" style={{opacity: '1',width:'1230px'}}>
{content}
</div>
	<div data-spm="2016901" style={{marginTop: '10px'}} className="tanx-con-mm_12852562_1778064_37802121 full-banner clearfix j_tanxBanner j_LazyloadCon fp-content-loading j_exposureCon" data-inited="1"><a href="">
    <img src="12.jpg" width="1620" height="90"/></a><a href="">
    <img src="12.jpg" width="1620" height="90"/></a>
		<ins style={{display:'inline-block',padding:'0',margin:'0',width:'1620px',height:'90px',zoom:'1',position:'relative'}} id="tanxssp-outer-conmm_12852562_1778064_37802121">
            <div id="tanxssp_con_mm_12852562_1778064_37802121" style={{overflow:'hidden',display:'inline-block',position:'relative',width:'1620px',height:'90px',zoom:'1',font:"12px/1.5 tahoma,'Hiragino Sans GB','microsoft yahei',sans-serif"}}>
        <a href="" target="_blank">
        <img  src="12.jpg" width="1620px" height="90px"/></a>
        </div>
        </ins>
        <a className="j_tanxItem" id="tanx-a-mm_12852562_1778064_37802121" style={{display: 'none'}}>
		</a>
	</div>
</div>
  );
};
}
Category.propTypes = {
};
function mapStateToProps({TopicGroup }) {
  return {TopicGroup };
}
export default connect(mapStateToProps)(Category);

