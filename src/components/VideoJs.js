import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import videojs from 'video.js';
import videojsMediaSources from 'videojs-contrib-media-sources';
import {URL} from 'videojs-contrib-media-sources';
import 'video.js/dist/video-js.css';
import VTTJS_PATH from 'file!videojs-vtt.js/dist/vtt.min.js';
import {RequestVideo} from '../utils/query';
var ms;
const VideoJs = React.createClass({
 
render() {
  return (
<video id="example_video_1" className="video-js vjs-default-skin"  controls  width="800" height="600"> 

    
</video> 
/*<video id="example_video_1" className="video-js vjs-default-skin" controls preload="none" width="640" height="264">
    <source src="" type='video/mp4' />
    <track kind="captions" src={this.props.vtt} srcLang="en" label="English"></track>
    <track kind="subtitles" src={this.props.vtt} srcLang="en" label="English"></track>
</video>*/
  );
    },componentDidMount(){
    
     var vo = document.querySelector('video');
    videojs.BYTES_PER_SECOND_GOAL = 8 * 1024 * 1024;
   ms = new MediaSource({ mode: 'html5' });
 
    vo.src = URL.createObjectURL(ms);
 //video.src ="http://vjs.zencdn.net/v/oceans.mp4";
  var video=videojs(vo);
   ms.addEventListener('sourceopen', this.sourceOpen);


    var newbtn = document.createElement('div');
newbtn.innerHTML = '<button class="vjs-control" id="downloadButton" style="background-color:red" onclick="alert()"></button>';
var controlBar = document.getElementsByClassName('vjs-control-bar')[0];
var insertBeforeNode = document.getElementsByClassName('vjs-fullscreen-control')[0];
controlBar.insertBefore(newbtn,insertBeforeNode);
   //video.play();

//video.currentTime(20);
video.on("pause", function(){
    console.log("pause");
});



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
     }, sourceOpen () {
        // 这个奇怪的字符串后面再解释a
        
        var i=2;
        var mime = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
        var osourceBuffer;
        // 新建一个 sourceBuffer
        osourceBuffer = ms.addSourceBuffer(mime);

        // 加载一段 chunk，然后 append 到 sourceBuffer 中
        this.fetchBuffer('http://192.168.1.220:8080/567_dashinit.mp4', buffer => {
        	
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
            urll='http://192.168.1.220:8080/567_dashinit.mp4';
             }else{
            	 urll='http://192.168.1.220:8080/567_dashinit.mp4';
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
       
    },fetchBuffer (url, callback) {
        
        
        var xhr = new XMLHttpRequest;
     
       //xhr.setRequestHeader(header: string, value: string);
          xhr.open('get', url,true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function () {
        	
            callback(xhr.response);
        };
        xhr.send();
        
    }
    
    });



export default VideoJs;
