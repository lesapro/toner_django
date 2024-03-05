var url="../assets/json/",sellerList="",editList=!1,prevButton=document.getElementById("page-prev"),nextButton=document.getElementById("page-next"),currentPage=1,itemsPerPage=8,getJSON=function(e,t){var l=new XMLHttpRequest;l.open("GET",url+e,!0),l.responseType="json",l.onload=function(){var e=l.status;t(200===e?null:e,l.response)},l.send()};function loadSellersListData(e,t){var l=Math.ceil(e.length/itemsPerPage);t<1&&(t=1),t>l&&(t=l),document.getElementById("seller-list").innerHTML="";for(var a=(t-1)*itemsPerPage;a<t*itemsPerPage&&a<e.length;a++){var n=e[a].verified?'<i class="ph-circle-wavy-check-fill text-primary align-middle fs-15 ms-1"></i></h5>':"";document.getElementById("seller-list").innerHTML+='<div class="col-xxl-3 col-lg-6">        <div class="card">            <div class="card-body p-4">                <div class="avatar-md mx-auto">                    <div class="avatar-title bg-light rounded">                        <img src="'+e[a].companyLogo+'" alt="" class="avatar-xs">                    </div>                </div>                <div class="text-center mt-3">                    <a href="seller-overview"><h5 class="mb-1">'+e[a].sellerName+n+'</h5></a>                    <p class="text-muted fs-16 mb-4">'+e[a].webUrl+'</p>                </div>                <div class="row">                    <div class="col-6">                        <div class="text-center">                            <p class="text-muted mb-2 fs-15">Item Stock</p>                            <h5 class="mb-0">'+e[a].stock+'</h5>                        </div>                    </div>                    <div class="col-6 border-start border-start-dashed">                        <div class="text-center">                            <p class="text-muted mb-2 fs-15">Revenue</p>                            <h5 class="mb-0">'+e[a].revenue+'</h5>                        </div>                    </div>                </div>                <div class="mt-4 hstack gap-2">                    <button type="button" class="btn btn-soft-secondary w-100">View Details</button>                    <div class="dropdown flex-shrink-0">                        <button class="btn btn-soft-info btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">                            <i class="ph-dots-three-outline-vertical-fill"></i>                        </button>                        <ul class="dropdown-menu">                            <li><a class="dropdown-item edit-list" href="#createModal" data-bs-toggle="modal" data-edit-id="'+e[a].id+'">Edit</a></li>                            <li><a class="dropdown-item remove-list" href="#deleteRecordModal"  data-remove-id="'+e[a].id+'" data-bs-toggle="modal">Delete</a></li>                        </ul>                    </div>                </div>            </div>        </div>    </div>'}selectedPage(),refreshCallbacks(),1==currentPage?prevButton.parentNode.classList.add("disabled"):prevButton.parentNode.classList.remove("disabled"),currentPage==l?nextButton.parentNode.classList.add("disabled"):nextButton.parentNode.classList.remove("disabled")}getJSON("sellers-grid-list.json",(function(e,t){null!==e?console.log("Something went wrong: "+e):(loadSellersListData(sellerList=t,currentPage),paginationEvents(),sortElementsById())})),document.querySelector("#companyLogo-image-input").addEventListener("change",(function(){var e=document.querySelector("#companyLogo-img"),t=document.querySelector("#companyLogo-image-input").files[0],l=new FileReader;l.addEventListener("load",(function(){e.src=l.result}),!1),t&&l.readAsDataURL(t)}));var companyLogoImg=document.getElementById("companyLogo-img"),sellerNameVal=document.getElementById("sellerName-input"),webUrlVal=document.getElementById("webUrl-input"),stockVal=document.getElementById("itemStock-input"),revenueVal=document.getElementById("revenue-input"),forms=document.querySelectorAll(".create-form");function selectedPage(){for(var e=document.getElementById("page-num").getElementsByClassName("clickPageNumber"),t=0;t<e.length;t++)t==currentPage-1?e[t].parentNode.classList.add("active"):e[t].parentNode.classList.remove("active")}function paginationEvents(){var e=function(){return Math.ceil(sellerList.length/itemsPerPage)};prevButton.addEventListener("click",(function(){currentPage>1&&(currentPage--,loadSellersListData(sellerList,currentPage))})),nextButton.addEventListener("click",(function(){currentPage<e()&&(currentPage++,loadSellersListData(sellerList,currentPage))})),function(){var t=document.getElementById("page-num");t.innerHTML="";for(var l=1;l<e()+1;l++)t.innerHTML+="<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>"+l+"</a></div>"}(),document.addEventListener("click",(function(e){"A"==e.target.nodeName&&e.target.classList.contains("clickPageNumber")&&(currentPage=e.target.textContent,loadSellersListData(sellerList,currentPage))})),selectedPage()}function fetchIdFromObj(e){return parseInt(e.id)}function findNextId(){if(0===sellerList.length)return 0;var e=fetchIdFromObj(sellerList[sellerList.length-1]),t=fetchIdFromObj(sellerList[0]);return t>=e?t+1:e+1}function sortElementsById(){loadSellersListData(sellerList.sort((function(e,t){var l=fetchIdFromObj(e),a=fetchIdFromObj(t);return l>a?-1:l<a?1:0})),currentPage)}function refreshCallbacks(){var e=0;Array.from(document.querySelectorAll(".edit-list")).forEach((function(t){t.addEventListener("click",(function(l){e=t.getAttribute("data-edit-id"),sellerList=sellerList.map((function(t){return t.id==e&&(editList=!0,document.getElementById("createModalLabel").innerHTML="Edit seller details",document.getElementById("addNew").innerHTML="Save",document.getElementById("id-field").value=t.id,companyLogoImg.src=t.companyLogo,sellerNameVal.value=t.sellerName,webUrlVal.value=t.webUrl,stockVal.value=t.stock,revenueVal.value=t.revenue),t}))}))}));var t=0;Array.from(document.querySelectorAll(".remove-list")).forEach((function(e){e.addEventListener("click",(function(l){t=e.getAttribute("data-remove-id"),document.getElementById("remove-item").addEventListener("click",(function(){var e,l=(e=t,sellerList.filter((function(t){return t.id!=e})));pageEvent(sellerList=l),loadSellersListData(sellerList,currentPage),document.getElementById("close-removeModal").click()}))}))}))}function clearFields(){document.getElementById("id-field").value="",companyLogoImg.src="",sellerNameVal.value="",webUrlVal.value="",stockVal.value="",revenueVal.value="",document.getElementById("companyLogo-image-input").value=""}function pageEvent(e){0==e.length?(document.getElementById("pagination-element").style.display="none",document.getElementById("noresult").classList.remove("d-none")):(document.getElementById("pagination-element").style.display="flex",document.getElementById("noresult").classList.add("d-none"));var t=document.getElementById("page-num");t.innerHTML="";for(var l=Math.ceil(e.length/itemsPerPage),a=1;a<l+1;a++)t.innerHTML+="<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>"+a+"</a></div>"}Array.prototype.slice.call(forms).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("alert-error-msg");t.classList.remove("d-none"),setTimeout((()=>t.classList.add("d-none")),2e3);var l,a=window.location.href.split("#");if(companyLogoImg.src.split("#")[0]==a[0])return l="Please select a company logo image",t.innerHTML=l,!1;if(""==sellerNameVal.value)return l="Please enter a seller name",t.innerHTML=l,!1;if(""==webUrlVal.value)return l="Please enter a web url",t.innerHTML=l,!1;if(""==stockVal.value)return l="Please enter a number of stocks",t.innerHTML=l,!1;if(""==revenueVal.value)return l="Please enter a revenue",t.innerHTML=l,!1;if(a[0]&&""!==sellerNameVal.value&&""!==webUrlVal.value&&""!==stockVal.value&&""!==revenueVal.value&&!editList){var n={id:findNextId(),sellerName:sellerNameVal.value,companyLogo:companyLogoImg.src,verified:!1,webUrl:webUrlVal.value,stock:stockVal.value,revenue:revenueVal.value};sellerList.push(n),sortElementsById()}else if(a[0]&&""!==sellerNameVal.value&&""!==webUrlVal.value&&""!==stockVal.value&&""!==revenueVal.value&&editList){var r;r=document.getElementById("id-field").value,sellerList=sellerList.map((function(e){return e.id==r?{id:r,sellerName:sellerNameVal.value,companyLogo:companyLogoImg.src,verified:e.verified,webUrl:webUrlVal.value,stock:stockVal.value,revenue:revenueVal.value}:e})),editList=!1}return pageEvent(sellerList),loadSellersListData(sellerList,currentPage),document.getElementById("alert-error-msg").classList.add("d-none"),document.getElementById("createModal-close").click(),!0}))})),document.getElementById("createModal").addEventListener("hidden.bs.modal",(e=>{clearFields()}));var searchInputList=document.getElementById("searchInputList");searchInputList.addEventListener("keyup",(function(){var e=searchInputList.value.toLowerCase();var t,l=(t=e,sellerList.filter((function(e){return-1!==e.sellerName.toLowerCase().indexOf(t.toLowerCase())||-1!==e.webUrl.toLowerCase().indexOf(t.toLowerCase())})));pageEvent(l),loadSellersListData(l,currentPage)}));