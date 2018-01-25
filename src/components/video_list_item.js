import React from 'react';

const VideoList = (props) => {
  const video = props.video;
  const onVideoChange = props.onVideoChange;
  var imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoChange(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className="media-left">
          <img className='media-object' src={imageUrl} />
        </div>
      </div>

      <div className='media-body'>
        <div className='media-heading'>{video.snippet.title}</div>
      </div>
    </li>
  );
};

export default VideoList;
