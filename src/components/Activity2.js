 import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import styles from '../routes/IndexPage.css';
 import Category from '../components/Category'
 const Activity2 = (props) => {
  return (
 
 <div className="activity-bg">
    <div className="activity-area"></div>
    <div className="j_area area-con" data-spm="2016007">
	    <div className="module-body j_areaBody clearfix"></div>
    </div>

<div className="j_newHotBrand new-hot-brand-con j_exposureCon">
<div className="module-body j_newHotBrandBody" style={{width:'1230px'}}>

<div className="live-con data-loaded">



<div className="live-play-ctn">
    
    <div id="J_live-cover">

    <img src="https://img.alicdn.com/imgextra/i3/1712212133/TB2fsgtqW8lpuFjy0FpXXaGrpXa_!!0-tmallfun.jpg_2200x2200Q80S0.jpg_.webp" className="big-live-cover"/>
    <div className="above-cover">
        <div className="status-ind"><span className="red-dot"></span>直播中</div>
        
        <a href="#" className="big-play-btn">
            <img src="//gw.alicdn.com/tps/TB1v5fhLpXXXXX2XFXXXXXXXXXX-144-118.png" style={{width: '100%',height: 'auto'}}/>
        </a>
        <p className="big-live-title">带您去看智慧农场</p>
        
        
            <p className="live-time">
                <span className="live-clock"></span>
                <span className="live-time-item">09 : 00</span>
                <span style={{margin: '0 0.5em'}}>-</span>
                <span className="live-time-item">15 : 00</span>
            </p>
        
    </div>
</div>
    
    <div className="live-error" style={{display: 'none'}}>
        <img src="//img.alicdn.com/tps/TB1twunMVXXXXXSXVXXXXXXXXXX-487-273.png" className="error-tip-img"/>
        <p className="live-error-tip">主播在赶来的路上了<br/>先去看看别的直播吧~</p>
    </div>
    
    <div id="J_prismPlayer"></div>
</div>

<div className="live-slide-list show-prev">
    <div className="items-ctn" style={{width: '980px'}}>
        
            <div className="live-slide-item" data-videoindex="0">
                <img className="slide-cover" src="https://img.alicdn.com/imgextra/i4/2260313241/TB2O90nurBmpuFjSZFAXXaQ0pXa_!!0-tmallfun.jpg_400x400Q80S0.jpg_.webp"/>
                <div className="bottom-gradin-mask"></div>
                
                <div className="above-cover">
                    <a href="#" className="slide-item-play-btn">
                        <img className="wait-play-img" src="//gw.alicdn.com/tps/TB1v5fhLpXXXXX2XFXXXXXXXXXX-144-118.png"/>
                        <img className="is-playing-img" src="//img.alicdn.com/tps/TB1xHzfLpXXXXbSapXXXXXXXXXX-74-62.png"/>
                    </a>
                    <p className="live-title"># 挑选一双完美的高跟鞋</p>
                </div>
            </div>
        
            <div className="live-slide-item" data-videoindex="1">
                <img className="slide-cover" src="https://img.alicdn.com/imgextra/i2/2890584587/TB2XmaSq9xjpuFjSszeXXaeMVXa_!!0-tmallfun.jpg_400x400Q80S0.jpg_.webp"/>
                <div className="bottom-gradin-mask"></div>
                
                <div className="above-cover">
                    <a href="#" className="slide-item-play-btn">
                        <img className="wait-play-img" src="//gw.alicdn.com/tps/TB1v5fhLpXXXXX2XFXXXXXXXXXX-144-118.png"/>
                        <img className="is-playing-img" src="//img.alicdn.com/tps/TB1xHzfLpXXXXbSapXXXXXXXXXX-74-62.png"/>
                    </a>
                    <p className="live-title"># 【智能家居】拯救不起床的赖床君</p>
                </div>
            </div>
        
            <div className="live-slide-item" data-videoindex="2">
                <img className="slide-cover" src="https://img.alicdn.com/imgextra/i2/851999160/TB2Vcubub4npuFjSZFmXXXl4FXa_!!0-tmallfun.jpg_400x400Q80S0.jpg_.webp"/>
                <div className="bottom-gradin-mask"></div>
                
                <div className="above-cover">
                    <a href="#" className="slide-item-play-btn">
                        <img className="wait-play-img" src="//gw.alicdn.com/tps/TB1v5fhLpXXXXX2XFXXXXXXXXXX-144-118.png"/>
                        <img className="is-playing-img" src="//img.alicdn.com/tps/TB1xHzfLpXXXXbSapXXXXXXXXXX-74-62.png"/>
                    </a>
                    <p className="live-title"># 银饰专场 - 欢迎来看</p>
                </div>
            </div>
        
            <div className="live-slide-item" data-videoindex="3">
                <img className="slide-cover" src="https://img.alicdn.com/imgextra/i2/1675711085/TB2XHkRtUhnpuFjSZFpXXcpuXXa_!!0-tmallfun.jpg_400x400Q80S0.jpg_.webp"/>
                <div className="bottom-gradin-mask"></div>
                
                <div className="above-cover">
                    <a href="#" className="slide-item-play-btn">
                        <img className="wait-play-img" src="//gw.alicdn.com/tps/TB1v5fhLpXXXXX2XFXXXXXXXXXX-144-118.png"/>
                        <img className="is-playing-img" src="//img.alicdn.com/tps/TB1xHzfLpXXXXbSapXXXXXXXXXX-74-62.png"/>
                    </a>
                    <p className="live-title"># 如何选配装饰画？</p>
                </div>
            </div>
        
            <div className="live-slide-item" data-videoindex="4">
                <img className="slide-cover" src="https://img.alicdn.com/imgextra/i1/358462928/TB2S6K3q9xjpuFjSszeXXaeMVXa_!!0-tmallfun.jpg_400x400Q80S0.jpg_.webp"/>
                <div className="bottom-gradin-mask"></div>
                
                <div className="above-cover">
                    <a href="#" className="slide-item-play-btn">
                        <img className="wait-play-img" src="//gw.alicdn.com/tps/TB1v5fhLpXXXXX2XFXXXXXXXXXX-144-118.png"/>
                        <img className="is-playing-img" src="//img.alicdn.com/tps/TB1xHzfLpXXXXbSapXXXXXXXXXX-74-62.png"/>
                    </a>
                    <p className="live-title"># 川菜大师带你(｡･∀･)ﾉﾞ嗨！</p>
                </div>
            </div>
        
            <div className="live-slide-item expand-ani show-play" data-videoindex="5">
                <img className="slide-cover" src="https://img.alicdn.com/imgextra/i3/1712212133/TB2fsgtqW8lpuFjy0FpXXaGrpXa_!!0-tmallfun.jpg_400x400Q80S0.jpg_.webp"/>
                <div className="bottom-gradin-mask"></div>
                
                <div className="above-cover">
                    <a href="#" className="slide-item-play-btn">
                        <img className="wait-play-img" src="//gw.alicdn.com/tps/TB1v5fhLpXXXXX2XFXXXXXXXXXX-144-118.png"/>
                        <img className="is-playing-img" src="//img.alicdn.com/tps/TB1xHzfLpXXXXbSapXXXXXXXXXX-74-62.png"/>
                    </a>
                    <p className="live-title"># 带您去看智慧农场</p>
                </div>
            </div>
        
    </div>
    
    
        <a href="#" className="slide-page-next"></a>
        <a href="#" className="slide-page-prev"></a>
    
</div>

<div className="live-forecast">
    <div className="forecast-logo"></div>
    <div className="forecast-list-ctn">
        <ul className="fc-item-list">
            
                <li className="fc-item" style={{marginTop: '-40px'}}>
                    <p className="fc-text">看直播互动赢红包！</p>
                    <p className="fc-time"></p>
                </li>
            
                <li className="fc-item">
                    <p className="fc-text">学校直播边看边学！</p>
                    <p className="fc-time"></p>
                </li>
            
        </ul>
    </div>
</div></div>





<div className="brand-list">
  <ul className="init j_newHotBrandItemBody" data-spm="2016073">

  
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  

  
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/282323599yrn.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="4536165" data-spm-click="gostr=/tmallfp;locaid=d11;"></i>
        <div className="coupon">
          
            <span>优惠券 ￥50</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  

  
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28232526gzep.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="3506680" data-spm-click="gostr=/tmallfp;locaid=d12;"></i>
        <div className="coupon">
          
            <span>优惠券 ￥50</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  

  
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28232811wxtk.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="31128" data-spm-click="gostr=/tmallfp;locaid=d13;"></i>
        <div className="coupon">
          
            <span>关注人数 15.3万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  

  
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201705/03141510maet.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="21944" data-spm-click="gostr=/tmallfp;locaid=d14;"></i>
        <div className="coupon">
          
            <span>优惠券 ￥10</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  
<li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  <li className="brand-item">
  
      <div className="brand-img">
        <img src="http://eas.msvtc.net:52060/u/cms/www/201704/28231225mrae.jpg"/>
      </div>
      <div className="brand-mask">
        <i className="fp-iconfont brand-status j_BrandStatus " data-collected="false" data-id="590022244" data-spm-click="gostr=/tmallfp;locaid=d10;"></i>
        <div className="coupon">
          
            <span>关注人数 345.6万</span>
          
        </div>
        <div className="enter">
          <a href="#">点击进入</a>
        </div>
      </div>
  
  </li>
  
  

  
 

  

  

</ul>
  <div data-spm="fpBrandFresh">
    <a href="#" className="refresh-btn" data-spm-click="gostr=/tmallfp;locaid=d99;">
      <i className="rotate-icon fp-iconfont"></i>
      <span className="btn-text">换一批</span>
    </a>
  </div>
</div>





</div>


</div>
<Category/>
</div>);
};

Activity2.propTypes = {
};

export default Activity2;