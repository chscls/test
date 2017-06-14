import React, { Component, PropTypes } from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import videojs from 'video.js';
import videojsMediaSources from 'videojs-contrib-media-sources';
import {URL} from 'videojs-contrib-media-sources';
import 'video.js/dist/video-js.css';
import VTTJS_PATH from 'file!videojs-vtt.js/dist/vtt.min.js';
import {RequestVideo} from '../utils/query';
var ms;
var video;
var isPlay=false;
class VideoJs extends Component {
   
 fetchBuffer (url, callback) {
        
        
        var xhr = new XMLHttpRequest;
     
       //xhr.setRequestHeader(header: string, value: string);
          xhr.open('get', url,true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function () {
        	
            callback(xhr.response);
        };
        xhr.send();
        
    }
 stop(){
    
    video.pause();
 }
 getCurrentTime(){
   
     return video.currentTime();
 }
 play(){
     if (isPlay) {
     video.play();
     }
 }
render() {
  return (

 <video id="example_video_1"  className="video-js vjs-default-skin"  style={{width:'100%',height:'95%'}} controls preload="auto" poster="http://video-js.zencoder.com/oceans-clip.png">
      <source src="rtmp://192.168.1.220/oflaDemo/hello" type='video/mp4"' />
     
      <object id="flash_fallback_1" className="video-js vjs-default-skin"  style={{width:'100%',height:'95%'}}  type="application/x-shockwave-flash"
        data="//vjs.zencdn.net/swf/5.3.0/video-js.swf">
        <param name="movie" value="//vjs.zencdn.net/swf/5.3.0/video-js.swf" />
        <param name="allowfullscreen" value="true" />
        <param name="flashvars" value='config={"playlist":["http://video-js.zencoder.com/oceans-clip.png", {"url": "rtmp://192.168.1.220/oflaDemo/hello","autoPlay":false,"autoBuffering":true}]}' />
        
        <img src="http://video-js.zencoder.com/oceans-clip.png" style={{width:'100%',height:'95%'}}  alt="Poster Image"
          title="No video playback capabilities." />
      </object>
    </video>
/*<video id="example_video_1" className="video-js vjs-default-skin" controls preload="none" width="640" height="264">
    <source src="" type='video/mp4' />
    <track kind="captions" src={this.props.vtt} srcLang="en" label="English"></track>
    <track kind="subtitles" src={this.props.vtt} srcLang="en" label="English"></track>
</video>*/
  );
    }
    componentDidMount(){
  var myPlayera = videojs("example_video_1",);  

        //$("#videojs_videodisplay_presentation_html5_api").attr("src", "rtmp://live.hkstv.hk.lxdns.com/live/hks")  
      //  myPlayera.src("rtmp://localhost/oflaDemo/hello"); //重新初始化视频地址  
        //myPlayera.load("rtmp://localhost/oflaDemo/hello"); //重新加载 */
  /*   var vo = document.querySelector('video');
    videojs.BYTES_PER_SECOND_GOAL = 8 * 1024 * 1024;
   ms = new MediaSource({ mode: 'html5' });
 
    vo.src = URL.createObjectURL(ms);
 //video.src ="http://vjs.zencdn.net/v/oceans.mp4";
  video=videojs(vo);
   ms.addEventListener('sourceopen', this.sourceOpen.bind(this));

 
    var newbtn = document.createElement('div');
newbtn.innerHTML = '<button class="vjs-control" id="downloadButton" style="background-color:black" onclick="alert()"></button>';
var controlBar = document.getElementsByClassName('vjs-control-bar')[0];
var insertBeforeNode = document.getElementsByClassName('vjs-fullscreen-control')[0];
controlBar.insertBefore(newbtn,insertBeforeNode);
   //video.play();

//video.currentTime(20);
video.on("pause", function(){
    
    console.log("pause");
});
video.on("play", function(){
    
    isPlay=true;
});*/



/* videojs事件
ended //播放结束
firstplay
fullscreenchange
loadedalldata
loadeddata
loadedmetadata
loadstart
pause //暂停
play  //播放
progress
seeked
seeking
timeupdate
volumechange
waiting
resize inherited
*/
     }
     
    
     sourceOpen () {
        // 这个奇怪的字符串后面再解释a
        
        var i=2;
        var mime = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
        var osourceBuffer;
        // 新建一个 sourceBuffer
        osourceBuffer = ms.addSourceBuffer(mime);

        // 加载一段 chunk，然后 append 到 sourceBuffer 中
        this.fetchBuffer('http://eas.msvtc.net:52060/567_dashinit.mp4', buffer => {
        	
        	osourceBuffer.appendBuffer(buffer)
        });
        osourceBuffer.addEventListener('updateend', () => {
            // 这个时候才能加入新 chunk
            // 先设定新chunk加入的位置，比如第20秒处
          
           if(i<5){
         osourceBuffer.timestampOffset = 160*(i-1);
            // 然后加入
            var urll;
             if(i<10){
            urll='http://eas.msvtc.net:52060/567_dashinit.mp4';
             }else{
            	 urll='http://eas.msvtc.net:52060/567_dashinit.mp4';
             }
             
             this.fetchBuffer(urll, buffer => {
            	var myBufferedRange = osourceBuffer.buffered;
            	
            	
           	 osourceBuffer.appendBuffer(buffer)
           	 i++;
      		  });
           }else{
        	   ms.endOfStream();  
           }
        
        });
       
    }
   
    
}


export default VideoJs;
