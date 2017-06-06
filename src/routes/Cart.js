import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import { Table, Button } from 'antd';

const columns = [{
  title: '封面',
  dataIndex: 'cover',
},{
  title: '课程',
  dataIndex: 'name',
}, {
   title: '金额',
  dataIndex: 'age',
}];

const data = [];
for (let i = 0; i < 7; i++) {
  data.push({
    key: i,
    cover:`Edwa`,
    name: `Edward King ${i}`,
    age: 32
  });
}

class Cart extends Component {
      state = {
    selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
    render(){
   const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div style={{width:'1230px',minHeight: '750px',margin:'auto'}}>
       

<div className="cart-header">
	<div className="cart-header-warp clearfix">
		<div className="cart-title left clearfix">
			<h1 className="left">我的购物车</h1>
			
	<div className="left js-number-box-cart">
		共<span className="js-coures-num">{data.length}</span>门，已选择<span className="js-choice-num"> {hasSelected ? `${selectedRowKeys.length} ` : '0'}</span>门
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
        <Table style={{paddingTop:'20px'}}rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false}/>
        <div style={{ marginBottom: 16,float:'right'}}>
         
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `总金额 ${selectedRowKeys.length} ` : ''}
          </span>
           <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
           
          >
            结算
          </Button>
        </div>
    </div>    
      </div>
    );

}
}



function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps)(Cart);