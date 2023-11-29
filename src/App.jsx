import { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";

export default function App(){
  const[content, setContent]=useState([]);
  const[artist, setArtist]=useState('');
  const[video, setVideo]=useState('');
  const[title, setTitle]=useState('');

async function getSavedVideos(evt){
  const response = await axios.get('/api/music');
  setContent(response.data);
console.log(response);
};
useEffect(()=>{getSavedVideos()}, [])


const addContent=()=>{
const newContent = [...content,{video: video, artist: artist, title: title }];
setContent(newContent);
setArtist('');
setVideo('');
setTitle('');
console.log(newContent);
};

const artistInfo = content.map((music)=>
{return (<div key={music.artist}>
  <iframe width="560" height="315" src={music.video}></iframe>
  <span>{music.artist}</span>
  <span>{music.title}</span>
  </div>)});

return (<div className="music">
<label htmlFor="video">Video Link</label>
<input id="video" type="text" value={video} onChange={(e)=>setVideo(e.target.value)}/>

<label htmlFor="artist">Artist</label>
<input id="artist" type="text" value={artist} onChange={(e)=>setArtist(e.target.value)}/>

<label htmlFor="title">Song Title</label>
<input id="title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>

<button type="button" onClick={addContent}>Add Artist</button>
{artistInfo}
</div>)
}


