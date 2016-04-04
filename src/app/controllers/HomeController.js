export default class HomeController {
  constructor($filter) {
	  this.$filter = $filter;
    this.pages = [
		{title:"Dashboard",hash:"/dashboard",isSelected:true,icon:"dashboard"},
		{title:"Settings",hash:"/settings",isSelected:false,icon:"settings"},
		{title:"Reports",hash:"/report",isSelected:false,icon:"insert_chart"},
		{title:"Payment",hash:"/payment",isSelected:false,icon:"payment"}
	];
	this.collapse = true;
	this.notification = [
	   {title:"Sample notification 1", icon:"sentiment_dissatisfied", isRead:false, timeStamp:"1458646635",shortNote:"simple short note"},
	    {title:"Sample notification 2", icon:"sentiment_dissatisfied", isRead:false, timeStamp:"1458646635",shortNote:"simple short note sdfdf sdfsdfsd sfdsdf"}
	]
	
  }

  gotopage(page) {
	var selectedPages = this.$filter('filter')(this.pages,{isSelected:true});

	selectedPages.forEach(v => {
		v.isSelected = false;
	});
    page.isSelected = true;
  }
  
  toggle(){
	  this.collapse = !this.collapse; 
  }

  getNotificationCount(){
	  var unreadNotification = this.$filter('filter')(this.notification,{isRead:false});
	  if(unreadNotification != null && unreadNotification.length >0)
	  {
		  return unreadNotification.length;
	  }
	  else{
		  return "";
	  }
	  
	  
  }
  getAgoTime(time){
	  var now = (new Date()).getTime()/1000;
	  
	  
	var seconds = Math.floor(now - parseInt(time));

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago"; 
  }
}

HomeController.$inject = ['$filter'];