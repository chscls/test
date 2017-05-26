 import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import styles from '../routes/IndexPage.css';
 
 const Nav = (props) => {
  return (
  <div id="header">
           <div className="headerLayout">
             <div className="headerCon">
<h1 id="mallLogo" style={{visibility:'visible'}}>
                    <span className="mlogo">
                    
                     <a href="/" title="天猫Tmall.com"><s className={styles.mlogo}></s>天猫Tmall.com</a>
                    
                    </span>
                    
                 </h1>

                 <div className="header-extra">
                    
                        <div className="header-banner">          
<div></div>   
                        </div>
                <div id="mallSearch">

                         <form name="searchTop" action="//list.tmall.com/search_product.htm" className="mallSearch-form clearfix" target="_top" acceptCharset="gbk" acceptCharset="gbk">
            <fieldset>
                <legend>天猫搜索</legend>
                      <div className="mallSearch-input clearfix">
                          <label style={{visibility: 'visible',display:'none'}}>搜索 天猫 商品/品牌/店铺</label>
                      <div className="mallSearch-input clearfix">
                          <label  style={{visibility: 'visible',display:'none'}}>搜索 天猫 商品/品牌/店铺</label>
                          <div className="s-combobox" id="s-combobox-139">
                              <div className="s-combobox-input-wrap">
                                      <input type="text" name="q" accessKey="s" autoComplete="off"  value="" id="mq" className="s-combobox-input" role="combobox"  title="请输入搜索文字" aria-label="请输入搜索文字"/>
                              </div>
                          <label  className="s-combobox-placeholder" style={{color: 'rgb(102, 102, 102)', visibility: 'visible'}}>精品咖啡机 非买不可</label></div>
                          <button type="submit">搜索<s></s></button>
                          <input id="J_Type" type="hidden" name="type" value="p"/>
                          <input id="J_MallSearchStyle" type="hidden" name="style" value=""/>
                          <input id="J_Cat" type="hidden" name="cat" value="all"/>
                          <input type="hidden" name="vmarket" value=""/>
                    </div>
                    </div>
             </fieldset>
         </form>
                   
             
        
    <ul  className="hot-query" style={{height:'25px'}}>
      <li className="hot-query-highlight">
        <a href="//list.tmall.com/search_product.htm?from=mallfp..pc_1.0_hq&amp;click_id=t恤男&amp;q=t恤男">农业</a>
        </li>
        <li className="hot-query-highlight"><a href="//list.tmall.com/search_product.htm?from=mallfp..pc_1.1_hq&amp;click_id=连衣裙&amp;q=连衣裙">护理</a>
        </li>
        <li className="hot-query-highlight"><a href="//list.tmall.com/search_product.htm?from=mallfp..pc_1.2_hq&amp;click_id=夏凉被&amp;q=夏凉被">汽车</a>
        </li>

      </ul>
      
      
      
      </div></div>

                 
<div>
  </div>
  </div>
           </div>
           </div>);
};

Nav.propTypes = {
};

export default Nav;