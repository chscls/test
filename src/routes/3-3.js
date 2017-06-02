import React from 'react';
import { connect } from 'dva';
import AceEditor from 'react-ace';
import brace from 'brace';

 
import 'brace/mode/java';
import 'brace/theme/tomorrow_night';
class Option extends React.Component{
  constructor(props){
    super(props)
  }
 onChange(newValue) {
  console.log('change',newValue);
}
  render(){
    var value="  public class HelloWorld { \r\n// 定义静态变量score1 \r\nstatic int score1 = 86; \r\n// 定义静态变量score2 \r\nint score2 = 92; \r\n// 定义静态方法sum，计算成绩总分，并返回总分 \r\npublic int sum() {\r\n } \r\npublic static void main(String[] args) { // 调用静态方法sum并接收返回值 \r\nint allScore = 100; \r\nSystem.out.println(\"总分：\" + allScore); \r\n} \r\n}"
    return ( <AceEditor style={{width:'100%',minHeight:'800px'}}
    mode="java"
    fontSize='20px'
    theme="tomorrow_night"
    onChange={this.onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
    value={value}

  /> )
  }
  componentDidMount(){
    const breadcrumbData = {
      breadcrumb:[
        {
          name:'首页',
          path:'/'
        },{
          name:'菜单三3'
        }
      ]
    };
    this.props.dispatch({
      type:'common/changeBreadcrumb',
      payload:breadcrumbData
    })
  }
}
function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Option);
