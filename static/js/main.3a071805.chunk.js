(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/loading.3aaaadcf.gif"},46:function(e,t,a){e.exports=a.p+"static/media/spotify_logo.31bad8d4.png"},47:function(e,t,a){e.exports=a.p+"static/media/spotify.276f273d.gif"},48:function(e,t,a){e.exports=a.p+"static/media/loadingNes.ce275db8.gif"},49:function(e,t,a){e.exports=a(91)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(30),r=a.n(s),l=(a(54),a(2)),i=a(3),o=a(5),m=a(4),u=a(6),p=(a(55),a(40)),h=a.n(p),d=a(99),g=a(100),E=a(98),y=(a(56),a(57),a(11)),v=a(8);var f=function(e){return c.a.createElement("div",{className:"oneSong ".concat(e.active)},c.a.createElement("div",{className:"iconOneSong"},c.a.createElement(y.a,{icon:v.f})),c.a.createElement("div",{className:"songName"},e.track.name),c.a.createElement("div",{className:"songTime"},e.time))};a(61);var b=function(){return c.a.createElement("div",{className:"copyRight"},c.a.createElement(y.a,{icon:v.d})," 1999 ACT Music + Vison GmbH + Co.KG",c.a.createElement("br",null),c.a.createElement(y.a,{icon:v.d})," 1999 ACT Music + Vison GmbH + Co.KG")},k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).millisecToMinutes=function(e){var t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(0);return t+":"+(a<10?"0":"")+a},a.state={activeIndex:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.all_data,a=this.props,n=a.playingTrack,s=a.playingData;return c.a.createElement(c.a.Fragment,null,t.status?c.a.createElement("div",{className:"playlistComponent"},c.a.createElement("div",{className:"listSong"},n.map(function(t,a){return c.a.createElement("div",{key:t.id,onClick:function(){return e.props.chooseSong(t)}},c.a.createElement(f,{active:s.playingTrackId===t.id?"active":"",track:t,time:e.millisecToMinutes(parseInt(t.duration_ms))}))})),c.a.createElement("div",{className:"copyRight"},c.a.createElement(b,null))):null)}}]),t}(n.Component),O=(a(62),a(93)),N=function(e){function t(e){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.playingData,a=e.playingTrack,n=this.props.all_data;return c.a.createElement(c.a.Fragment,null,n.status?c.a.createElement("div",{className:"detailsComponent"},c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:t.image,alt:"Loading Cover"})),c.a.createElement("div",{className:"titleCover"},t.name),c.a.createElement("div",{className:"singer"},t.artist),!n.playing&&n.stopping?c.a.createElement(O.a,{color:"success",onClick:this.props.control_start},"PLAY"):c.a.createElement(O.a,{color:"danger",onClick:this.props.control_stop},"STOP"),c.a.createElement("div",{className:"totalSong"},"".concat(t.releaseDate," . ").concat(a.length," SONG")),c.a.createElement("div",{className:"controlCover"},c.a.createElement("div",{className:"controlType"},"REMOVE FROM YOUR LIBRARY"),c.a.createElement("div",{className:"moreControl"},"..."))):null)}}]),t}(n.Component),j=a(94);var S=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,{xs:"6",sm:"4",className:"loading"},c.a.createElement(N,e)),c.a.createElement(j.a,{xs:"6",sm:"6",className:"loading"},c.a.createElement(k,e)))},A=(a(63),a(10)),C=a.n(A),T=a(17),_=a.n(T),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).changeClamp=function(){a.setState({clamp:3})},a.defaultClamp=function(){a.setState({clamp:1})},a.state={artist:"",clamp:1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.album?this.props.album.artists[0].name:"",a={backgroundImage:"url(".concat(this.props.album.images[0].url,")"),backgroundSize:"cover",backgroundPosition:"center center",width:"100%",height:"250px",borderRadius:"5px",boxShadow:"5px 5px 20px rgb(48, 48, 48)"};return c.a.createElement(j.a,{xs:"4",sm:"3"},c.a.createElement("div",{className:"oneAlbum",onMouseOver:this.changeClamp,onMouseOut:this.defaultClamp,onClick:function(){e.props.chooseAlbum(e.props.album),e.props.history.push("/nhothspotify/albumdetails")}},c.a.createElement("div",{style:a}),c.a.createElement("div",{className:"albumTitle"},c.a.createElement(_.a,{clamp:this.state.clamp,className:"albumName"},this.props.album.name),c.a.createElement("em",null,t))))}}]),t}(n.Component),x=a(95),P=(a(85),a(101)),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={status:void 0,data:[],headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(a.props.token)}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://api.spotify.com/v1/search?q=top&type=track,album&limit=6",{headers:this.state.headers}).then(function(t){e.setState({status:!0,data:t.data.albums.items})}).catch(function(t){e.setState({tokenExpired:!0})})}},{key:"render",value:function(){var e=this,t=this.props.all_data,a=(t.all_data,t.status);return c.a.createElement(c.a.Fragment,null,a?c.a.createElement(j.a,{sm:"10",className:"libContent"},c.a.createElement("div",{className:"category"},"Album"),c.a.createElement(x.a,null,this.state.data.map(function(t){return c.a.createElement(w,{key:t.id,album:t,chooseAlbum:e.props.chooseAlbum,history:e.props.history})}))):c.a.createElement("div",null,"Loading..."))}}]),t}(n.Component),D=Object(P.a)(F),M=a(31),I=a(14),L=a(45),R=a.n(L),B=void 0,H=function(e){var t=new R.a;return function(a){function n(e){var a;Object(l.a)(this,n),(a=Object(o.a)(this,Object(m.a)(n).call(this,e))).playAudio=function(e){try{B.pause(),B.currentTime=0}catch(t){}(B=new Audio(e)).play()},a.chooseAlbum=function(e){a.state.recentPlay.unshift({id:e.id,album:e}),a.state.recentPlay.length>4&&a.state.recentPlay.splice(-1,1);var t={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(a.state.TOKEN)};C.a.get("https://api.spotify.com/v1/albums/".concat(e.id,"/tracks"),{headers:t}).then(function(t){a.setState(Object(I.a)({},a.state,{playingData:{image:e.images[0].url,playingTrackName:t.data.items[0].name,playingTrackId:t.data.items[0].id,artist:e.artists[0].name,name:e.name,releaseDate:e.release_date},playingTrack:t.data.items,recentPlay:Object(M.a)(a.state.recentPlay),playing:!0,stopping:!1}),function(){a.playAudio(t.data.items[0].preview_url)})})},a.chooseSong=function(e){a.playAudio(e.preview_url),a.setState(function(t){return Object(I.a)({},a.state,{playingData:Object(I.a)({},a.state.playingData,{playingTrackId:e.id,image:e.album?e.album.images[0].url:t.playingData.image,playingTrackName:e.name,artist:e.artists[0].name}),recentPlay:Object(M.a)(a.state.recentPlay),playing:!0,stopping:!1})})},a.control_play=function(){B.play(),a.setState(Object(I.a)({},a.state,{playing:!0,stopping:!1}))},a.control_pause=function(){B.pause(),a.setState(Object(I.a)({},a.state,{playing:!1,stopping:!1}))},a.control_stop=function(){B.pause(),B.currentTime=0,a.setState(function(e){return Object(I.a)({},a.state,{playing:!1,stopping:!0})})},a.control_start=function(){B.play(),a.setState(function(e){return Object(I.a)({},a.state,{playing:!0,stopping:!1})})},a.choose_song=function(e){a.setState(Object(I.a)({},a.state,{all_data:Object(I.a)({},a.state.all_data,{user:Object(I.a)({},a.state.all_data.user,{playing:e})}),playing:!0,stopping:!1}))},a.control_repeat=function(){a.setState(function(e){return Object(I.a)({},a.state,{repeat:!e.repeat})}),console.log(a.state)};var c=a.getHashParams().access_token;return t.setAccessToken(c),void 0===c&&(window.location="https://accounts.spotify.com/authorize?client_id=08dfa6ac8c444d0198d37efb64b182ef&response_type=token&Foauth_callback%2F&scope=streaming user-read-playback-state user-read-currently-playing user-modify-playback-state&redirect_uri=https:%2F%2Feinstruong.github.io/nhothspotify"),a.state={all_data:{},status:!1,album:[],playing:!1,stopping:!0,recentPlay:[],repeat:!1,TOKEN:c||"",playingData:{},playingTrack:[],preview_url:""},a}return Object(u.a)(n,a),Object(i.a)(n,[{key:"getHashParams",value:function(){var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);for(e=a.exec(n);e;)t[e[1]]=decodeURIComponent(e[2]),e=a.exec(n);return t}},{key:"componentDidMount",value:function(){var e=this,t=C.a.get("https://raw.githubusercontent.com/hailduong/lyduong/master/react-assignment/spotify/apis/userInfo.json").then(function(e){return e.data}).catch(function(e){return console.log("Error User",e)}),a=C.a.get("https://hailduong.github.io/lyduong/react-assignment/spotify-2/apis/yourLibrary.json").then(function(e){return e.data}).catch(function(e){return console.log("Error All Album",e)}),n=C.a.get("https://hailduong.github.io/lyduong/react-assignment/spotify-2/apis/album/1.json").then(function(e){return e.data}).catch(function(e){return console.log("Error First Album",e)});C.a.all([t,a,n]).then(function(t){e.setState({all_data:{user:t[0],all_album:t[1]},album:t[2],status:!0})}).catch(function(e){console.log("Promise All Error",e)})}},{key:"render",value:function(){return c.a.createElement(e,{all_data:this.state,playing:this.state.playing,stopping:this.state.stopping,updateAlbum:this.updateAlbum,control_play:this.control_play,control_pause:this.control_pause,control_stop:this.control_stop,control_start:this.control_start,recentPlay:this.state.recentPlay,token:this.state.TOKEN,chooseAlbum:this.chooseAlbum,playingData:this.state.playingData,playingTrack:this.state.playingTrack,chooseSong:this.chooseSong})}}]),n}(c.a.Component)};a(22).b.add(v.e,v.i,v.c,v.a);a(39);var K=a(46),U=a.n(K),W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={active:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.index&&this.setState({active:"activeMenu"})}},{key:"render",value:function(){var e=this.props.recent;return c.a.createElement(c.a.Fragment,null,e?c.a.createElement("div",{className:"recentList ".concat(this.state.active)},c.a.createElement("div",{className:"details"},e.album.name?c.a.createElement("div",{className:"title"},c.a.createElement(_.a,{clamp:1},e.album.name)):null,c.a.createElement("div",{className:"type"},e.album.artist))):null)}}]),t}(n.Component),Y=a(96),z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).changeSong=function(e,t){0!==t?C.a.get("https://hailduong.github.io/lyduong/react-assignment/spotify-2/apis/album/".concat(e,".json")).then(function(t){a.props.updateAlbum(t.data,e),a.setState({active:3})}).catch(function(e){console.log("Error",e)}):(a.props.startPlay(),a.setState({active:3}))},a.sendActive=function(e){a.setState({activeIndex:e})},a.changeActive=function(e){a.setState({active:parseInt(e)})},a.state={activeIndex:0,active:1,isPlaying:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){!0!==e.playing&&e.stopping?this.setState({isPlaying:""}):this.setState({isPlaying:"playing"})}},{key:"componentDidMount",value:function(){"/nhothspotify/albumdetails"===window.location.pathname||"/nhothspotify/library"===window.location.pathname?this.changeActive("3"):"/nhothspotify/search"===window.location.pathname&&this.changeActive("2"),this.props.playing||!this.props.stopping?this.setState({isPlaying:"playing"}):this.setState({isPlaying:""})}},{key:"render",value:function(){var e=this,t=this.props.all_data.all_data;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"menuComponent"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:U.a,id:"logo",alt:"Loading Logo"})),c.a.createElement("div",{className:"menu"},c.a.createElement("ul",null,c.a.createElement(Y.a,{to:"/nhothspotify"},c.a.createElement("li",{className:1===this.state.active?"activeMenu":null,onClick:function(){e.changeActive("1")}},c.a.createElement(y.a,{icon:"home"}),"Home")),c.a.createElement(Y.a,{to:"/nhothspotify/search"},c.a.createElement("li",{className:2===this.state.active?"activeMenu":null,onClick:function(){e.changeActive("2")}},c.a.createElement(y.a,{icon:"search"}),"Search")),c.a.createElement(Y.a,{to:"/nhothspotify/library"},c.a.createElement("li",{className:3===this.state.active?"activeMenu":null,onClick:function(){e.changeActive("3")}},c.a.createElement(y.a,{icon:"braille"}),"Your Library")))),c.a.createElement("br",null),c.a.createElement("div",{className:"recent"},"RECENTLY PLAYED"),c.a.createElement("div",{className:"sumList"},this.props.recentPlay.map(function(a,n){return c.a.createElement("div",{id:"recent",onClick:function(){e.changeSong(a.id,n)},key:n},c.a.createElement(Y.a,{to:"/nhothspotify/albumdetails"},c.a.createElement(W,{index:n,recent:a,type:t.user.recentlyPlayedType[a.type]})))})),c.a.createElement("div",{className:"install ".concat(this.state.isPlaying)},c.a.createElement("a",{href:"https://www.spotify.com/vn-en/download/windows/"},c.a.createElement("div",{className:"installIcon"},c.a.createElement(y.a,{icon:v.b})),c.a.createElement("div",{className:"installWord"},"Install App")),c.a.createElement("hr",null),c.a.createElement("div",{className:"account"},c.a.createElement("div",{className:"avatar"},c.a.createElement("img",{src:t.user.avatar,alt:"userAvatar"})),c.a.createElement("div",{className:"userName"},t.user.name)))))}}]),t}(n.Component),G=(a(87),a(24)),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).play=function(){a.props.playing?a.props.control_pause():a.props.control_play()},a.state={interval:null,startSeconds:0,startMinute:0,totalTime:"",percent:0,endTime:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){this.props.all_data,this.props.all_data.all_data.user;var e=this.props,t=e.playingData;e.playingTrack;console.log(this.props),console.log(this.props);c.a.createElement(x.a,null,c.a.createElement("div",{className:"controlComponent"},c.a.createElement(j.a,{xs:"2",sm:"1"},c.a.createElement("div",{className:"imageControl"},c.a.createElement("img",{src:t.image,alt:"Loading"}))),c.a.createElement(j.a,{xs:"2",sm:"2"},c.a.createElement("div",{className:"detailsControl"},c.a.createElement(_.a,{clamp:2},t.playingTrackName),c.a.createElement("div",{className:"singer"},t.artist))),c.a.createElement(y.a,{icon:this.props.playing?v.g:v.h,onClick:this.play,id:"playButton"})));return c.a.createElement(x.a,null,c.a.createElement("div",{className:"controlComponent"},c.a.createElement(j.a,{xs:"2",sm:"1"},c.a.createElement("div",{className:"imageControl"},c.a.createElement("img",{src:t.image,alt:"Loading"}))),c.a.createElement(j.a,{xs:"2",sm:"2"},c.a.createElement("div",{className:"detailsControl"},c.a.createElement(_.a,{clamp:2},t.playingTrackName),c.a.createElement("div",{className:"singer"},t.artist))),c.a.createElement("div",{className:"flowControl"},c.a.createElement(y.a,{icon:this.props.playing?v.g:v.h,onClick:this.play,id:"playButton"}))))}}]),t}(n.Component),q=a(47),J=a.n(q);a(88);var $=function(e){return c.a.createElement(j.a,{xs:"6",sm:"10",className:"loadingHome"},c.a.createElement("img",{src:J.a,width:"80%",alt:"Waitting for Data"}))},Q=a(97),X=(a(89),a(48)),Z=a.n(X);var ee=function(e){return c.a.createElement("div",{className:"oneAlbumSearch",onClick:function(){e.chooseAlbum(e.album),e.history.push("/nhothspotify/albumdetails")}},c.a.createElement("img",{src:e.album.images[1].url,alt:"albumImage"}),c.a.createElement(_.a,{clamp:2},c.a.createElement("div",null,e.album.name)))};var te=function(e){return c.a.createElement("div",{className:"oneTrackSearch oneAlbumSearch",onClick:function(){e.chooseSong(e.track)}},c.a.createElement("div",null,e.track.name),c.a.createElement("div",null,e.track.artists[0].name))},ae=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data,a=t.albums,n=t.tracks;return a.items.length>0||n.items.length>0?c.a.createElement(x.a,null,c.a.createElement(j.a,{sm:"7",xs:"main"},c.a.createElement("div",{className:"searchTitle"},"TOP 5 ALBUMS"),c.a.createElement(x.a,null,a.items.length>0&&a.items.slice(0,5).map(function(t){return c.a.createElement(c.a.Fragment,{key:t.id},c.a.createElement(j.a,{sm:"4"},c.a.createElement(ee,{album:t,chooseAlbum:e.props.chooseAlbum,history:e.props.history})))}))),c.a.createElement(j.a,{sm:"5"},c.a.createElement("div",{className:"searchTitle"},"TOP 5 TRACKS"),c.a.createElement(x.a,null,n.items.length>0?n.items.slice(0,5).map(function(t){return c.a.createElement(c.a.Fragment,{key:t.id},c.a.createElement(j.a,{sm:"12"},c.a.createElement(te,{track:t,chooseSong:e.props.chooseSong})))}):c.a.createElement("div",{className:"Error"},"No Any Track")))):c.a.createElement("div",{className:"Error"},"No Anything Found")}}]),t}(n.Component);var ne=function(e){var t=e.data.items;return t.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"searchTitle"},"TRACKS"),c.a.createElement(x.a,null,c.a.createElement(j.a,{sm:"6",xs:"main"},c.a.createElement(x.a,null,t.length>0?t.slice(0,9).map(function(t){return c.a.createElement(c.a.Fragment,{key:t.id},c.a.createElement(j.a,{sm:"12"},c.a.createElement(te,{track:t,chooseSong:e.chooseSong})))}):c.a.createElement("div",{className:"Error"},"No Any Track"))),c.a.createElement(j.a,{sm:"6"},c.a.createElement(x.a,null,t.length>0?t.slice(10,19).map(function(t){return c.a.createElement(c.a.Fragment,{key:t.id},c.a.createElement(j.a,{sm:"12"},c.a.createElement(te,{track:t,chooseSong:e.chooseSong})))}):c.a.createElement("div",{className:"Error"},"No Any Track")))))};var ce=function(e){var t=e.data.items;return t.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"searchTitle"},"ALBUMS"),c.a.createElement(x.a,null,c.a.createElement(j.a,{sm:"12",xs:"main"},c.a.createElement(x.a,null,t.length>0?t.map(function(t){return c.a.createElement(c.a.Fragment,{key:t.id},c.a.createElement(j.a,{sm:"2"},c.a.createElement(ee,{album:t,chooseAlbum:e.chooseAlbum,chooseSong:e.chooseSong,history:e.history})))}):c.a.createElement("div",{className:"Error"},"No Any Album")))))},se=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).searchHandler=function(e){""===e.target.value?a.setState({typing:!1,status:!1}):a.setState({typing:!0});var t=e.target.value.replace(/ /g,"+");clearTimeout(a.state.getSong),a.state.getSong=setTimeout(function(){C.a.get("https://api.spotify.com/v1/search?q=".concat(t,"&type=track,album&limit=20"),{headers:a.state.headers}).then(function(e){console.log(e.data),a.setState({status:!0,data:e.data})}).catch(function(e){a.setState({tokenExpired:!0}),a.props.history.push("/error")})},1e3)},a.state={result:[],getSong:null,headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(a.props.token)},status:!1,typing:!1,data:[],tokenExpired:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=c.a.createElement("div",{className:"content"},c.a.createElement(ae,{data:this.state.data,chooseAlbum:this.props.chooseAlbum,chooseSong:this.props.chooseSong,history:this.props.history}),c.a.createElement(ne,{data:this.state.data.tracks,chooseSong:this.props.chooseSong}),c.a.createElement(ce,{data:this.state.data.albums,chooseAlbum:this.props.chooseAlbum,chooseSong:this.props.chooseSong,history:this.props.history}));return!this.state.tokenExpired&&c.a.createElement(j.a,{sm:"10",id:"searchBox"},c.a.createElement("div",{className:"search"},c.a.createElement(Q.a,{id:"SearchInput",autoFocus:!0,placeholder:"Start typing...",onChange:this.searchHandler})),this.state.typing?this.state.status?this.state.data.length>0?c.a.createElement("div",null,"No any data"):c.a.createElement(c.a.Fragment,null,e):c.a.createElement("div",{className:"loadingSearch"},c.a.createElement("img",{src:Z.a,alt:"loading"})):c.a.createElement("div",{className:"result"},c.a.createElement("h4",null,"Search Spotify"),c.a.createElement("p",null,"Find your favorite songs,album, podcasts and playlists.")))}}]),t}(n.Component),re=Object(P.a)(se),le=H(function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={timeOut:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){!0===this.props.userStatus&&!0===this.props.allAlbumStatus&&Object(G.clearTimeout)(this.state.timeOut)}},{key:"render",value:function(){var e=this,t=this.props.all_data.status;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,null,c.a.createElement(d.a,{basename:"/nhothspotify"},c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,{xs:"6",sm:"2"},c.a.createElement(z,this.props)),c.a.createElement(g.a,null,c.a.createElement(E.a,{exact:!0,path:"/nhothspotify/",component:$}),c.a.createElement(E.a,{path:"/nhothspotify/library",render:function(t){return c.a.createElement(D,Object.assign({},e.props,{urlData:t}))}}),c.a.createElement(E.a,{path:"/nhothspotify/search",render:function(t){return c.a.createElement(re,e.props)}}),c.a.createElement(E.a,{path:"/nhothspotify/albumdetails",render:function(){return c.a.createElement(S,e.props)}}))))),(this.props.playing||!this.props.stopping)&&c.a.createElement(V,this.props)):c.a.createElement("div",{className:"loading"},c.a.createElement("img",{src:h.a,width:"20%",alt:"Waitting for Data"})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(90);r.a.render(c.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,1,2]]]);
//# sourceMappingURL=main.3a071805.chunk.js.map