var template=document.querySelector('#t');
template.pages=[
	{name:'Overview',hash:'overview'},
	//TODO:{name:'CentOS',hash:'centos',prefix:'centos/7/x86_64/'},
	{name:'Fedora',hash:'fedora',prefix:'fedora/21/x86_64/'}
];
template.repos=function(p){
	var len=p.length;
	var r=[];
	for(var i=0; i<len; ++i)if(p[i].hasOwnProperty('prefix'))r.push(p[i]);
	return r;
};
template.addEventListener('template-bound',function(e){
	this.route=this.route||'overview';
});
