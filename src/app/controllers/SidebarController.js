export default class SidebarController {
  constructor($filter) {
    this.pages = [
		{title:"Dashboard",hash:"#dashboard",isSelected:true,icon:"dashboard"}
	];
	this.collapse = true;
  }

  gotopage(page) {
	var selectedPages = $filter('filter')(this.pages,{isSelected:true});
	selectedPages.forEach(v => {
		v.isSelected = false;
	});
    page.isSelected = true;
  }
  toggle(){
	  this.collapse = !this.collapse; 
  }
}
SidebarController.$inject = ['$filter'];