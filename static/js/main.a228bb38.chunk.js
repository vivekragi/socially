(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){e.exports=a.p+"static/media/edit.97e966b0.svg"},129:function(e,t,a){e.exports=a.p+"static/media/delete.5866c2c6.svg"},130:function(e,t,a){e.exports=a.p+"static/media/email.4d9e5a20.svg"},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),o=a.n(r),l=a(8),c=a(23),i=a(35),u=a(20),d=Object(c.b)({loginSuccessful:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"LOGIN_SUCCESSFUL":return!0;case"LOGIN_UNSUCCESSFUL":case"LOGOUT":return!1;default:return e}},postsArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_POSTS_ARRAY":return t.posts;default:return e}},deletedPostsArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=e.slice();switch(t.type){case"UPDATE_DELETED_POSTS_ARRAY":return a.push(t.post),a;case"REMOVE_POST_FROM_DELETED_POSTS":return a.filter(function(e){return e.id!==t.postId});default:return e}}}),m=a(55),p=Object(l.b)(function(e){return{loginSuccessful:e.loginSuccessful}},null,null,{pure:!1})(function(e){var t=e.component,a=e.loginSuccessful,n=Object(m.a)(e,["component","loginSuccessful"]);return s.a.createElement(u.b,Object.assign({},n,{render:function(){return a?s.a.createElement(t,null):s.a.createElement(u.a,{to:{pathname:"/login"}})}}))}),h=function(e){return{type:"UPDATE_POSTS_ARRAY",posts:e}},f=a(5),b=a(6),v=a(10),E=a(7),y=a(3),P=a(9),g="https://jsonplaceholder.typicode.com/posts",O=g,w=(a(72),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).state={validUsername:!0,validPassword:!0,loginAttempt:0},a.validateUsername=a.validateUsername.bind(Object(y.a)(a)),a.validatePassword=a.validatePassword.bind(Object(y.a)(a)),a.resestValidUsernameAndPassword=a.resestValidUsernameAndPassword.bind(Object(y.a)(a)),a.loginMethod=a.loginMethod.bind(Object(y.a)(a)),a}return Object(P.a)(t,e),Object(b.a)(t,[{key:"validateUsername",value:function(e){this.setState({validUsername:e.length>0})}},{key:"validatePassword",value:function(e){this.setState({validPassword:e.length>0})}},{key:"resestValidUsernameAndPassword",value:function(){this.setState({validPassword:!0,validUsername:!0}),this.props.reset()}},{key:"loginMethod",value:function(e,t){this.resestValidUsernameAndPassword(),"sarthakagarwal22"===e&&"infeedo"===t?this.props.successfulLogin():this.props.unsuccessfulLogin()}},{key:"render",value:function(){var e,t,a=this,n=this.props.loginSuccessful;return s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"left"},s.a.createElement("div",{className:"heading"},s.a.createElement("h2",null,"Login to Socially"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",{className:"sub-heading"},"Please enter your credentials"),s.a.createElement("br",null),s.a.createElement("label",{className:"email_label"},"USERNAME ",s.a.createElement("span",{style:{color:"red"}}," *"),s.a.createElement("br",null),s.a.createElement("input",{autoComplete:"off",autoFocus:!0,ref:function(t){e=t},type:"text",name:"user",className:"email_input",onKeyPress:function(n){13===n.which&&(a.validateUsername(e.value),t.focus())},onBlur:function(t){a.validateUsername(e.value)},style:{borderColor:!this.state.validUsername&&this.state.loginAttempt>0?"red":"var(--light-grey)"}})," ",s.a.createElement("br",null)),s.a.createElement("br",null),s.a.createElement("label",{className:"email_label"},"PASSWORD ",s.a.createElement("span",{style:{color:"red"}}," *"),s.a.createElement("br",null),s.a.createElement("input",{autoComplete:"off",ref:function(e){t=e},type:"password",name:"pass",className:"pass_input",onKeyPress:function(n){13===n.which&&(a.validatePassword(t.value),a.state.validUsername&&a.state.validPassword&&a.loginMethod(e.value,t.value))},onBlur:function(e){a.validatePassword(t.value)},style:{borderColor:this.state.loginAttempt>0&&!this.state.validPassword?"red":"var(--light-grey)"}})," ",s.a.createElement("br",null)),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(){a.setState({loginAttempt:a.state.loginAttempt+1}),a.validateUsername(e.value),a.validatePassword(t.value),a.state.validUsername&&a.state.validPassword&&a.loginMethod(e.value,t.value)},style:{background:!n&&this.state.loginAttempt>0?"red":"var(--blue)"}},"Login"),!n&&this.state.loginAttempt>0&&s.a.createElement("p",{className:"small red"},"Password or User combination is wrong"),!this.state.validUsername&&this.state.loginAttempt>0&&s.a.createElement("p",{className:"small red"},"Empty Username field"),!this.state.validPassword&&this.state.loginAttempt>0&&s.a.createElement("p",{className:"small red"},"Empty Password field"))),s.a.createElement("div",{className:"right"}))}}]),t}(s.a.Component)),S=Object(l.b)(function(e){return{loginSuccessful:e.loginSuccessful}},function(e){return{successfulLogin:function(){e({type:"LOGIN_SUCCESSFUL"}),window.location="/#/home"},unsuccessfulLogin:function(){e({type:"LOGIN_UNSUCCESSFUL"})},reset:function(){e({type:"LOGIN_SUCCESSFUL"})}}})(w),A=a(2),j=a.n(A),k=a(15),N=a(30),C=a.n(N),U=a(27),L=a.n(U);function x(e){return I.apply(this,arguments)}function I(){return(I=Object(k.a)(j.a.mark(function e(t){var a,n,s;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=L.a.create({headers:{"Content-Type":"application/json"}}),e.prev=1,e.next=4,a.get(t);case 4:return n=e.sent,e.next=7,n.data;case 7:return s=e.sent,e.abrupt("return",s);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 14:case"end":return e.stop()}},e,null,[[1,11]])}))).apply(this,arguments)}function _(e){return D.apply(this,arguments)}function D(){return(D=Object(k.a)(j.a.mark(function e(t){var a,n,s;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=L.a.create({headers:{"Content-Type":"application/json"}}),e.prev=1,e.next=4,a.delete(t);case 4:return n=e.sent,e.next=7,n.data;case 7:return s=e.sent,e.abrupt("return",s);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 14:case"end":return e.stop()}},e,null,[[1,11]])}))).apply(this,arguments)}function T(e,t){return F.apply(this,arguments)}function F(){return(F=Object(k.a)(j.a.mark(function e(t,a){var n,s,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=L.a.create({headers:{"Content-Type":"application/json"}}),e.prev=1,e.next=4,n.put(t,a);case 4:return s=e.sent,e.next=7,s.data;case 7:return r=e.sent,e.abrupt("return",r);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 14:case"end":return e.stop()}},e,null,[[1,11]])}))).apply(this,arguments)}a(126),a(127);var M=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).state={commentsOpen:!1,showLoader:!1,comments:[],post:{},showEditModal:!1,showSaveChangesButton:!1,disableSaveChangesButton:!1},a.postId="",a.post={},a.editedTitle=null,a.editedBody=null,a.fetchPostFromGlobalState=a.fetchPostFromGlobalState.bind(Object(y.a)(a)),a.fetchComments=a.fetchComments.bind(Object(y.a)(a)),a.saveEditedPost=a.saveEditedPost.bind(Object(y.a)(a)),a.closeModal=a.closeModal.bind(Object(y.a)(a)),a.fetchPostsFromApi=a.fetchPostsFromApi.bind(Object(y.a)(a)),a.setPostIdFromUrl=a.setPostIdFromUrl.bind(Object(y.a)(a)),a}return Object(P.a)(t,e),Object(b.a)(t,[{key:"fetchComments",value:function(){var e=Object(k.a)(j.a.mark(function e(){var t,a,n=this;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({showLoader:!0,commentsOpen:!this.state.commentsOpen}),e.next=3,x(g+"/".concat(this.postId,"/comments"));case 3:t=e.sent,a=t.filter(function(e){return e.postId===+n.postId}),this.setState({comments:a,showLoader:!1});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"closeModal",value:function(){this.setState({showEditModal:!1})}},{key:"deletePost",value:function(){var e=Object(k.a)(j.a.mark(function e(){var t,a=this;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this post")){e.next=5;break}return e.next=3,_(g+"/".concat(this.postId));case 3:e.sent&&(t=this.props.postsArray.filter(function(e){return e.id!==+a.postId}),this.props.setPostsArray(t),this.props.setDeletedPostsArray(this.state.post),window.location="/#/home");case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchPostFromGlobalState",value:function(){var e=this;this.post=this.props.postsArray.find(function(t){return t.id===+e.postId}),this.setState({post:this.post})}},{key:"saveEditedPost",value:function(){var e=Object(k.a)(j.a.mark(function e(t,a){var n,s,r=this;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:this.state.post.id,userId:this.state.post.userId,title:t,body:a},this.setState({disableSaveChangesButton:!0}),e.next=4,T(g+"/".concat(this.postId),n);case 4:e.sent&&(this.setState({post:n,disableSaveChangesButton:!1}),s=this.props.postsArray.map(function(e){return e.id===r.state.post.id?n:e}),this.props.setPostsArray(s),this.closeModal());case 6:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"setPostIdFromUrl",value:function(){this.postId=window.location.hash.split("#/posts/")[1]}},{key:"fetchPostsFromApi",value:function(){var e=Object(k.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(O);case 2:t=e.sent,this.props.setPostsArray(t),this.fetchPostFromGlobalState();case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.setPostIdFromUrl(),this.props.postsArray.length>0&&this.fetchPostFromGlobalState()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"post-detail-main"},s.a.createElement("center",null,s.a.createElement("h1",{className:"padding-Xlarge white"}," Details of Post ",this.postId),s.a.createElement("div",{className:"post-detail-card rounded-corner padding-Xlarge"},s.a.createElement("br",null),s.a.createElement("div",{className:"post-detail-post-header"},s.a.createElement("span",{className:"post-detail-user-badge"},this.state.post.userId),s.a.createElement("div",{className:"post-detail-edit-delete"},s.a.createElement("span",{className:"clickable",onClick:function(){e.setState({showEditModal:!0,showSaveChangesButton:!1})}},s.a.createElement("img",{src:a(128),height:"20px",alt:"edit icon"})," Edit Post ")," \xa0\xa0",s.a.createElement("span",{className:"red clickable",onClick:function(){e.deletePost()}},s.a.createElement("img",{src:a(129),height:"20px",alt:"delete icon"})," Delete Post "))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,s.a.createElement("h2",null,this.state.post.title)),s.a.createElement("br",null),s.a.createElement("p",null,this.state.post.body),s.a.createElement("br",null),s.a.createElement("div",{className:"post-detail-comments-outer-container"},s.a.createElement("p",{className:"grey clickable",onClick:function(){e.fetchComments()}},this.state.commentsOpen?"Hide":"Show"," comments"),s.a.createElement("br",null),this.state.showLoader&&this.state.commentsOpen&&s.a.createElement("p",null,"Loading comments for the post..."),this.state.commentsOpen&&!this.state.showLoader&&s.a.createElement("div",{className:"post-detail-comments-inner-container"},this.state.comments.map(function(e){return s.a.createElement("div",{className:"padding-medium margin-medium post-detail-comment-container",key:e.id},s.a.createElement("div",{className:"post-detail-comment-name-outer"},s.a.createElement("span",{className:"padding-medium post-detail-commenter-name"},e.name)," ",s.a.createElement("a",{href:"mailto:".concat(e.email)},s.a.createElement("img",{src:a(130),height:"30px",alt:"email icon"}))),s.a.createElement("br",null),s.a.createElement("p",{className:"post-detail-comment-body"},e.body),s.a.createElement("br",null))}))))),s.a.createElement(C.a,{show:this.state.showEditModal,onHide:this.closeModal,"aria-labelledby":"ModalHeader"},s.a.createElement(C.a.Header,{closeButton:!0},s.a.createElement("h4",null,"Edit the post")),s.a.createElement(C.a.Body,null,s.a.createElement("div",null,s.a.createElement("label",null," Edit Title ",s.a.createElement("br",null),s.a.createElement("input",{ref:function(t){e.editedTitle=t},autoFocus:!0,type:"text",defaultValue:this.state.post.title,onChange:function(){e.setState({showSaveChangesButton:!0})}})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("label",null," Edit Body ",s.a.createElement("br",null),s.a.createElement("textarea",{ref:function(t){e.editedBody=t},className:"post-details-edit-body",defaultValue:this.state.post.body,onChange:function(){e.setState({showSaveChangesButton:!0})}})),this.state.showSaveChangesButton&&s.a.createElement("center",null,s.a.createElement("br",null),s.a.createElement("button",{className:"post-detail-save-changes-button",onClick:function(){e.saveEditedPost(e.editedTitle.value,e.editedBody.value)},disabled:this.state.disableSaveChangesButton},this.state.disableSaveChangesButton?"Saving...":"Save Changes"))))))}}]),t}(s.a.Component),B=Object(l.b)(function(e){return{postsArray:e.postsArray}},function(e){return{setPostsArray:function(t){e(h(t))},setDeletedPostsArray:function(t){e(function(e){return{type:"UPDATE_DELETED_POSTS_ARRAY",post:e}}(t))}}})(M),R=(a(131),function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.body,n=e.userId,r=e.id,o=e.deletedPost,l=e.restorePost,c=e.permanentlyDeletePost;return s.a.createElement("div",{className:"post rounded-corner padding-Xlarge margin-medium clickable",onClick:function(){o||(window.location="#/posts/".concat(r))}},s.a.createElement("div",{className:"post-header"},s.a.createElement("span",{className:"post-user-badge"},n),o&&s.a.createElement("div",null,s.a.createElement("span",{className:"small clickable",onClick:function(){c(r)}},"Delete Post")," \xa0\xa0",s.a.createElement("span",{className:"small clickable",onClick:function(){l(r)}},"Restore Post"))),s.a.createElement("br",null),s.a.createElement("b",null,s.a.createElement("h3",null,t)),s.a.createElement("br",null),s.a.createElement("p",null,a),s.a.createElement("br",null),!o&&s.a.createElement("button",{className:"post-detail-button"},"View Post Details"))}}]),t}(s.a.PureComponent)),G=(a(132),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).restorePost=a.restorePost.bind(Object(y.a)(a)),a.deletePost=a.deletePost.bind(Object(y.a)(a)),a}return Object(P.a)(t,e),Object(b.a)(t,[{key:"restorePost",value:function(e){for(var t=this.props.deletedPostsArray.find(function(t){return t.id===e}),a=this.props.postsArray.slice(),n=0;n<a.length;n++)if(e<a[n].id){a.splice(n,0,t);break}this.props.setPostsArray(a),this.props.removePostFromDeletedArray(e)}},{key:"deletePost",value:function(e){window.confirm("This is a permanent action and can't be undone, Are you sure you to proceed")&&this.props.removePostFromDeletedArray(e)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement("h1",null,"Deleted Posts")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"deleted-posts-container"},this.props.deletedPostsArray.length>0&&this.props.deletedPostsArray.map(function(t){return s.a.createElement(R,{key:t.id,title:t.title,body:t.body,id:t.id,userId:t.userId,deletedPost:!0,restorePost:e.restorePost,permanentlyDeletePost:e.deletePost})}),0===this.props.deletedPostsArray.length&&s.a.createElement("center",null,s.a.createElement("h2",null,"You haven't deleted any posts yet "))))}}]),t}(s.a.Component)),V=Object(l.b)(function(e){return{postsArray:e.postsArray,deletedPostsArray:e.deletedPostsArray}},function(e){return{setPostsArray:function(t){e(h(t))},removePostFromDeletedArray:function(t){e(function(e){return{type:"REMOVE_POST_FROM_DELETED_POSTS",postId:e}}(t))}}})(G),Y=(a(133),function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"main_header"},s.a.createElement("div",{className:"left_header"},s.a.createElement("h2",{className:"clickable",onClick:function(){window.location="/#/home"}},"Socially")),s.a.createElement("div",{className:"right_header"},s.a.createElement("span",{className:"clickable",onClick:function(){e.props.logoutUser()}}," Logout ")))}}]),t}(s.a.Component)),H=Object(l.b)(null,function(e){return{logoutUser:function(){e({type:"LOGOUT"})}}})(Y),W=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(){window.previousLocation=this.props.location}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(H,null),this.props.children)}}]),t}(s.a.Component),X=(a(134),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).state={showLoader:!1,postsArray:[]},a.fetchPosts=a.fetchPosts.bind(Object(y.a)(a)),a.searchPosts=a.searchPosts.bind(Object(y.a)(a)),a}return Object(P.a)(t,e),Object(b.a)(t,[{key:"searchPosts",value:function(e){if(0===e.length)this.setState({postsArray:this.props.postsArray});else{var t=this.props.postsArray.filter(function(t){return-1!==t.title.indexOf(e)||-1!==t.body.indexOf(e)});this.setState({postsArray:t})}}},{key:"fetchPosts",value:function(){var e=Object(k.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({showLoader:!0}),e.next=3,x(O);case 3:t=e.sent,this.setState({showLoader:!1,postsArray:t}),this.props.setPostsArray(t);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){0===this.props.postsArray.length?this.fetchPosts():this.setState({postsArray:this.props.postsArray})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"home-container"},s.a.createElement("div",{className:"white home-hero-banner"},s.a.createElement("div",{className:"home-hero-banner-pattern"}),this.props.deletedPostsArray.length>0&&s.a.createElement("p",{className:"home-deleted-posts small clickable",onClick:function(){window.location="/#/deleted-posts"}},"View Deleted Posts"),s.a.createElement("h2",null,"Welcome to Socially!"),s.a.createElement("br",null),s.a.createElement("h3",null,"Find the best posts, from all around the world."),s.a.createElement("h5",{className:"hidden-md-dowm"},"All at one place"),s.a.createElement("br",null),s.a.createElement("input",{className:"home-search-bar",type:"text",placeholder:"Search for your favourite posts",onChange:function(t){e.searchPosts(t.target.value)}})),s.a.createElement("br",null),s.a.createElement("div",{className:"post-container"},this.state.showLoader&&s.a.createElement("h2",{className:"white"},"Loading..."),!this.state.showLoader&&this.state.postsArray.map(function(e){return s.a.createElement(R,{key:e.id,title:e.title,body:e.body,id:e.id,userId:e.userId})})))}}]),t}(s.a.Component)),J=Object(l.b)(function(e){return{postsArray:e.postsArray,deletedPostsArray:e.deletedPostsArray}},function(e){return{setPostsArray:function(t){e(h(t))}}})(X),K=(a(135),Object(c.c)(d)),q=function(){o.a.render(s.a.createElement(l.a,{store:K},s.a.createElement(i.a,null,s.a.createElement(u.d,null,s.a.createElement(u.b,{path:"/login",component:S}),s.a.createElement(W,null,s.a.createElement(p,{exact:!0,path:"/",render:function(){return s.a.createElement(u.a,{to:{pathname:"/login"}})}}),s.a.createElement(p,{path:"/home",component:J}),s.a.createElement(p,{path:"/posts/:id",component:B}),s.a.createElement(p,{path:"/deleted-posts",component:V}))))),document.getElementById("root"))};K.subscribe(q),q()},56:function(e,t,a){e.exports=a(136)},72:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.a228bb38.chunk.js.map