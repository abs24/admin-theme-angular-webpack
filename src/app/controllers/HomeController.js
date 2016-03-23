export default class HomeController {
  constructor($filter) {
	  this.$filter = $filter;
    this.pages = [
		{title:"Dashboard",hash:"#dashboard",isSelected:true,icon:"dashboard"},
		{title:"Settings",hash:"#settings",isSelected:false,icon:"settings"},
		{title:"Reports",hash:"#report",isSelected:false,icon:"insert_chart"},
		{title:"Payment",hash:"#payment",isSelected:false,icon:"payment"}
	];
	this.collapse = true;
	
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
}

HomeController.$inject = ['$filter'];