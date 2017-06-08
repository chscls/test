 import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import styles from '../routes/IndexPage.css';
  import LazyLoad from 'react-lazyload';
 const Nav = (props) => {
   
  return (
  <div id="header">
           <div className="headerLayout">
             <div className="headerCon">
<h1 id="mallLogo" style={{visibility:'visible'}}>
                    <span className="mlogo">
                    
                     <Link to="/"><s className={styles.mlogo}></s></Link>
                    
                    </span>
                    
                 </h1>

                 <div className="header-extra">
                    
                        <div className="header-banner">          
<div></div>   
                        </div>
                <div id="mallSearch">

                         <form name="searchTop" action="" className="mallSearch-form clearfix" target="_top" acceptCharset="gbk" acceptCharset="gbk">
            <fieldset>
               
                <legend>天猫搜索</legend>
                      <div className="mallSearch-input clearfix">
                          
                     
                       
                          <label  style={{visibility: 'visible',display:'none'}}>搜索 天猫 商品/品牌/店铺</label>
                            
                          <div className="s-combobox s-combobox-focused s-combobox-hover" id="s-combobox-139">
                              <div className="s-combobox-input-wrap">
                                   
                                      <input type="text" name="q"    accessKey="s" autoComplete="off"  id="mq" className="s-combobox-input" role="combobox"  title="请输入搜索文字" aria-label="请输入搜索文字"/>
                              </div>
                          <label  className="s-combobox-placeholder" style={{color: 'rgb(204, 204, 204)', visibility: 'hidden',display:'none'}}>精品课程 非学不可</label>
                          
                          
                          </div>
                           <Link to="Search"><button type="button">搜索<s></s></button></Link>
                        
                         
                          <input id="J_Type" type="hidden" name="type" value="p"/>
                          <input id="J_MallSearchStyle" type="hidden" name="style" value=""/>
                          <input id="J_Cat" type="hidden" name="cat" value="all"/>
                          <input type="hidden" name="vmarket" value=""/>
                    
                    </div>
             </fieldset>
         </form>
                   
             
        
    <ul  className="hot-query" style={{height:'25px'}}>
      <li className="hot-query-highlight">
        <Link to="Search" href="">农业</Link>
        </li>
        <li className="hot-query-highlight"><Link to="Search">护理</Link>
        </li>
        <li className="hot-query-highlight"><Link to="Search">汽车</Link>
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