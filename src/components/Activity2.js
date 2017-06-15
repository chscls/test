import React from 'react';
import { Icon, Carousel } from 'antd';
import { Link } from 'dva/router';
import styles from '../routes/IndexPage.css';
import Category from '../components/Category';
import VideoJs from '../components/VideoJs';
import { connect } from 'dva';
import Floors from '../components/Floors'
import LazyLoad from 'react-lazyload';
import QueueAnim from 'rc-queue-anim';
class Activity2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({ 
            next: true,
            current:null
        } )

    }
    getRandOrgList = (count) => {

        this.props.dispatch({
            type: 'RandOrg/getRandOrgList',
            payload: {
                count: count
            }

        });
    }
    getLiveList = (count) => {
        this.props.dispatch({
            type: 'Live/getLiveList',
            payload: {
                count: count
            }

        });
    }
    getLiveAnnounceList = (count) => {
        this.props.dispatch({
            type: 'Live/getLiveAnnounceList',
            payload: {
                count: count
            }

        });
    }
    changeNext() {

        this.setState({ next: true })
    }
    changePrev() {

        this.setState({ next: false })
    }
    componentDidMount() {

        this.getRandOrgList(23);
        this.getLiveList(6);
        this.getLiveAnnounceList(6);
    }
    handleMouseOver(e) {
        
        e.currentTarget.className = "live-slide-item expand-ani show-play";
    }
    handleMouseLeave(e) {
        e.currentTarget.className = "live-slide-item expand-ani";
    }
    handleClick(e) {
        
        var index=  e.currentTarget.dataset.index 
       var obj= this.props.Live.liveList[index];
      
        this.setState({current:obj})
    }
    render() {
    var cur = this.state.current!=null?this.state.current:(this.props.Live.liveList.length>0?this.props.Live.liveList[0]:null)
        var orgNodes = this.props.RandOrg.orgList.map(function (org) {
            return (

                <li key={org.id} className="brand-item">
                    <QueueAnim duration='1000' delay='100' animConfig={[{ scaleX: [1, 0] }, { scaleX: [0, 1] }]} >
                        <div key={org.id} className="brand-img">
                            <img src={org.logo} />
                        </div>
                        <div className="brand-mask">
                            <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
                            <div className="coupon">

                                <span> 关注数量 {org.concernedNum < 10000 ? org.concernedNum : (org.concernedNum / 10000).toFixed(2) + "万"}</span>

                            </div>
                            <div className="enter">
                                <Link to="School" title={org.name}>点击进入</Link>
                            </div>
                        </div>
                    </QueueAnim>
                </li>


            );
        });
        var announces = this.props.Live.liveAnnounceList.map(function (la, Index) {

            return (<li key={la.id} className="fc-item">
                <p className="fc-text">{la.title}</p>
                <p className="fc-time"></p>
            </li>);
        })

        var lives = this.props.Live.liveList.map(function (live, index) {

            return (<div data-index={index} key={live.id} onClick={this.handleClick.bind(this)} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} className="live-slide-item expand-ani" data-videoindex="0" >
                <img className="slide-cover" src={live.cover} />
                <div className="bottom-gradin-mask"></div>

                <div className="above-cover">
                    <a  className="slide-item-play-btn">
                        <img className="wait-play-img" src="//gw.alicdn.com/tps/TB1v5fhLpXXXXX2XFXXXXXXXXXX-144-118.png" />
                        <img className="is-playing-img" src="//img.alicdn.com/tps/TB1xHzfLpXXXXbSapXXXXXXXXXX-74-62.png" />
                    </a>
                    <p className="live-title"># {live.name}</p>
                </div>
            </div>);

        }.bind(this))
        return (



            <div className="activity-bg">
                <div className="activity-area"></div>
                <div className="j_area area-con" data-spm="2016007">
                    <div className="module-body j_areaBody clearfix"></div>
                </div>

                <div className="j_newHotBrand new-hot-brand-con j_exposureCon">
                    <div className="module-body j_newHotBrandBody" style={{ width: '1230px' }}>

                        <div className="live-con data-loaded">



                            <div className="live-play-ctn">
{cur!=null?<div id="J_live-cover" >

                                    <img src={cur.cover} className="big-live-cover" />
                                    <div className="above-cover">
                                        <div className="status-ind"><span className="red-dot"></span>直播中</div>

                                        <a className="big-play-btn">
                                            <img src="//gw.alicdn.com/tps/TB1v5fhLpXXXXX2XFXXXXXXXXXX-144-118.png" style={{ width: '100%', height: 'auto' }} />
                                        </a>
                                        <p className="big-live-title">{cur.name}</p>


                                        <p className="live-time">
                                            <span className="live-clock"></span>
                                            <span className="live-time-item">09 : 00</span>
                                            <span style={{ margin: '0 0.5em' }}>-</span>
                                            <span className="live-time-item">15 : 00</span>
                                        </p>

                                    </div>
                                </div>:""}

                                <div className="live-error" style={{ display: 'none' }}>
                                    <img src="//img.alicdn.com/tps/TB1twunMVXXXXXSXVXXXXXXXXXX-487-273.png" className="error-tip-img" />
                                    <p className="live-error-tip">主播在赶来的路上了<br />先去看看别的直播吧~</p>
                                </div>

                                <div id="J_prismPlayer" style={{
                                    position: 'absolute', width: '488px',
                                    height: '275px'
                                }}>

                                    <VideoJs />

                                </div>
                            </div>

                            <div className={this.state.next ? "live-slide-list show-next" : "live-slide-list show-prev"}>
                                <div className="items-ctn" style={{ width: '980px' }}>
                                    {lives}
                                </div>


                                <a onClick={this.changePrev.bind(this)} className="slide-page-next"></a>
                                <a onClick={this.changeNext.bind(this)} className="slide-page-prev"></a>

                            </div>

                            <div className="live-forecast">
                                <div className="forecast-logo"></div>
                                <div className="forecast-list-ctn">
                                    <ul className="fc-item-list">

                                        {this.props.Live.liveAnnounceList.length > 0 ?
                                            <Carousel vertical="true" dots="false" autoplay="true">
                                                {announces}
                                            </Carousel> : ""
                                        }


                                    </ul>
                                </div>
                            </div></div>





                        <div className="brand-list">
                            <ul className="init j_newHotBrandItemBody" data-spm="2016073">

                                {orgNodes}

                            </ul>
                            <div data-spm="fpBrandFresh">
                                <a onClick={this.getRandOrgList} className="refresh-btn" data-spm-click="gostr=/tmallfp;locaid=d99;">
                                    <i className="rotate-icon fp-iconfont"></i>
                                    <span className="btn-text">换一批</span>
                                </a>
                            </div>
                        </div>





                    </div>


                </div>
                <LazyLoad height={200} once>
                    <div>
                        <Category />
                        <Floors />
                    </div>
                </LazyLoad>
            </div>


        )
    }
}
Activity2.propTypes = {
};

function mapStateToProps({ RandOrg, Live }) {
    return { RandOrg, Live };
}
export default connect(mapStateToProps)(Activity2);