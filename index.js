const tabItem = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

//select tab content item
function selectItem() {
    removeBorder()
    removeShow()
// add border to current
this.classList.add('tab-border')
//geab content item from dom
const tabContentItem = document.querySelector(`#${this.id}-content`)
//add show class
tabContentItem.classList.add('show')
}

//listen for click
tabItem.forEach(item => item.addEventListener('click', selectItem));

function removeBorder() {
 tabItem.forEach(item => item.classList.remove('tab-border'))
  
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

