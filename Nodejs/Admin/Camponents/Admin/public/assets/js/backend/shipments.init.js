var perPage=10,editlist=!1,options={valueNames:["id","shipment_no","customer_name","supplier","location","order_date","arrival_date","status"],page:perPage,pagination:!0,plugins:[ListPagination({left:2,right:2})]},shipmentsList=new List("shipmentsList",options).on("updated",(function(e){0==e.matchingItems.length?document.getElementsByClassName("noresult")[0].style.display="block":document.getElementsByClassName("noresult")[0].style.display="none";var t=1==e.i,a=e.i>e.matchingItems.length-e.page;document.querySelector(".pagination-prev.disabled")&&document.querySelector(".pagination-prev.disabled").classList.remove("disabled"),document.querySelector(".pagination-next.disabled")&&document.querySelector(".pagination-next.disabled").classList.remove("disabled"),t&&document.querySelector(".pagination-prev").classList.add("disabled"),a&&document.querySelector(".pagination-next").classList.add("disabled"),e.matchingItems.length<=perPage?document.querySelector(".pagination-wrap").style.display="none":document.querySelector(".pagination-wrap").style.display="flex",e.matchingItems.length==perPage&&document.querySelector(".pagination.listjs-pagination").firstElementChild.children[0].click(),e.matchingItems.length>0?document.getElementsByClassName("noresult")[0].style.display="none":document.getElementsByClassName("noresult")[0].style.display="block"}));const xhttp=new XMLHttpRequest;function isStatus(e){switch(e){case"Pending":case"Pending":return'<span class="badge bg-warning-subtle text-warning ">'+e+"</span>";case"Delivered":return'<span class="badge bg-success-subtle text-success ">'+e+"</span>";case"Shipping":return'<span class="badge bg-info-subtle text-info ">'+e+"</span>";case"Pickups":return'<span class="badge bg-secondary-subtle text-secondary ">'+e+"</span>";case"Returns":return'<span class="badge bg-primary-subtle text-primary ">'+e+"</span>";case"Out Of Delivery":return'<span class="badge bg-danger-subtle text-danger ">'+e+"</span>"}}xhttp.onload=function(){var e=JSON.parse(this.responseText);Array.from(e).forEach((function(e){shipmentsList.add({id:'<a href="javascript:void(0);" class="fw-medium link-primary">#TBT'+e.id+"</a>",shipment_no:'<a href="javascript:void(0);" class="text-reset">#'+e.shipment_no+"</a>",customer_name:e.customer_name,supplier:e.supplier,location:e.location,order_date:e.order_date,arrival_date:e.arrival_date,status:isStatus(e.status)}),shipmentsList.sort("id",{order:"desc"}),refreshCallbacks()})),shipmentsList.remove("id",'<a href="javascript:void(0);" class="fw-medium link-primary">#TBSC2830</a>')},xhttp.open("GET","../assets/json/shipments.json"),xhttp.send();var idField=document.getElementById("orderId"),shipmentNoField=document.getElementById("shipmentNo"),customerNameField=document.getElementById("customerName-field"),supplierNameField=document.getElementById("supplierName-field"),orderDateField=document.getElementById("orderDate-field"),arrivalDateField=document.getElementById("arrivalDate-field"),locationField=document.getElementById("locationSelect"),statusField=document.getElementById("statusSelect"),addBtn=document.getElementById("add-btn");editBtn=document.getElementById("edit-btn"),removeBtns=document.getElementsByClassName("remove-item-btn"),editBtns=document.getElementsByClassName("edit-item-btn"),refreshCallbacks();var locationVal=new Choices(locationField,{searchEnabled:!1}),statusVal=new Choices(statusField,{searchEnabled:!1}),count=13;function refreshCallbacks(){removeBtns&&Array.from(removeBtns).forEach((function(e){e.addEventListener("click",(function(e){e.target.closest("tr").children[0].innerText,itemId=e.target.closest("tr").children[0].innerText;var t=shipmentsList.get({id:itemId});Array.from(t).forEach((function(e){var t=(new DOMParser).parseFromString(e._values.id,"text/html"),a=t.body.firstElementChild;t.body.firstElementChild.innerHTML==itemId&&document.getElementById("delete-record").addEventListener("click",(function(){shipmentsList.remove("id",a.outerHTML),document.getElementById("deleteRecord-close").click(),Swal.fire({position:"center",icon:"success",title:"Shipping record Deleted successfully!",showConfirmButton:!1,timer:2e3,showCloseButton:!0})}))}))}))})),editBtns&&Array.from(editBtns).forEach((function(e){e.addEventListener("click",(function(e){e.target.closest("tr").children[0].innerText,itemId=e.target.closest("tr").children[0].innerText;var t=shipmentsList.get({id:itemId});Array.from(t).forEach((function(e){var t=(new DOMParser).parseFromString(e._values.id,"text/html").body.firstElementChild.innerHTML,a=(new DOMParser).parseFromString(e._values.shipment_no,"text/html");if(t==itemId){editlist=!0,document.getElementById("orderID").value=t,shipmentNoField.value=a.body.firstElementChild.innerHTML,customerNameField.value=e._values.customer_name,supplierNameField.value=e._values.supplier,orderDateField.value=e._values.order_date,arrivalDateField.value=e._values.arrival_date,locationVal&&locationVal.destroy(),new Choices(locationField,{searchEnabled:!1}).setChoiceByValue(e._values.location),statusVal&&statusVal.destroy(),statusVal=new Choices(statusField,{searchEnabled:!1}),val=(new DOMParser).parseFromString(e._values.status,"text/html");var i=val.body.firstElementChild.innerHTML;statusVal.setChoiceByValue(i),flatpickr("#orderDate-field",{dateFormat:"d M, Y",defaultDate:e._values.order_date}),flatpickr("#arrivalDate-field",{dateFormat:"d M, Y",defaultDate:e._values.arrival_date})}}))}))}))}document.getElementById("createModal").addEventListener("show.bs.modal",(function(e){e.relatedTarget.classList.contains("edit-item-btn")?(document.getElementById("modal-id").style.display="block",document.getElementById("exampleModalLabel").innerHTML="Edit Shipping Info",document.getElementById("add-btn").innerHTML="Update"):e.relatedTarget.classList.contains("add-btn")?(document.getElementById("modal-id").style.display="none",document.getElementById("exampleModalLabel").innerHTML="Create Shipping",document.getElementById("add-btn").innerHTML="Add Shipping"):document.getElementById("exampleModalLabel").innerHTML="List Shipping "}));var forms=document.querySelectorAll(".tablelist-form");function filterData(){var e=document.getElementById("idStatus").value,t=document.getElementById("demo-datepicker").value,a=t.split(" to ")[0],i=t.split(" to ")[1];shipmentsList.filter((function(n){matchData=(new DOMParser).parseFromString(n.values().status,"text/html");var l=matchData.body.firstElementChild.innerHTML,s=!1,r=!1;return s="all"==l||"all"==e||l==e,r=new Date(n.values().order_date)>=new Date(a)&&new Date(n.values().order_date)<=new Date(i),s&&r?s&&r:s&&""==t?s:r||void 0})),shipmentsList.update()}function clearFields(){idField.value="",shipmentNoField.value="",customerNameField.value="",supplierNameField.value="",flatpickr("#orderDate-field").clear(),flatpickr("#arrivalDate-field").clear(),locationVal&&locationVal.destroy(),locationVal=new Choices(locationField,{searchEnabled:!1}),statusVal&&statusVal.destroy(),statusVal=new Choices(statusField,{searchEnabled:!1})}Array.prototype.slice.call(forms).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault();var t,a=document.getElementById("alert-error-msg");if(a.classList.remove("d-none"),setTimeout((()=>a.classList.add("d-none")),2e3),""==customerNameField.value)return t="Please enter a customer name",a.innerHTML=t,!1;if(""==supplierNameField.value)return t="Please enter a supplier name",a.innerHTML=t,!1;if(""==orderDateField.value)return t="Please select a order date",a.innerHTML=t,!1;if(""==arrivalDateField.value)return t="Please select a arrival date",a.innerHTML=t,!1;if(""==locationField.value)return t="Please select a location",a.innerHTML=t,!1;if(""==statusField.value)return t="Please select a status",a.innerHTML=t,!1;if(""===customerNameField.value||""===supplierNameField.value||""===orderDateField.value||""===arrivalDateField.value||""===locationField.value||""===statusField.value||editlist){if(""!==customerNameField.value&&""!==supplierNameField.value&&""!==orderDateField.value&&""!==arrivalDateField.value&&""!==locationField.value&&""!==statusField.value&&editlist){var i=shipmentsList.get({id:document.getElementById("orderID").value});Array.from(i).forEach((function(e){isid=(new DOMParser).parseFromString(e._values.id,"text/html"),isid.body.firstElementChild.innerHTML==itemId&&e.values({id:'<a href="javascript:void(0);" class="fw-medium link-primary">'+document.getElementById("orderID").value+"</a>",shipment_no:'<a href="javascript:void(0);" class="text-reset">'+shipmentNoField.value+"</a>",customer_name:customerNameField.value,supplier:supplierNameField.value,location:locationField.value,order_date:orderDateField.value,arrival_date:arrivalDateField.value,status:isStatus(statusField.value)})})),document.getElementById("alert-error-msg").classList.add("d-none"),document.getElementById("close-createmodal").click(),clearFields(),Swal.fire({position:"center",icon:"success",title:"Shipping record updated Successfully!",showConfirmButton:!1,timer:2e3,showCloseButton:!0})}}else shipmentsList.add({id:'<a href="javascript:void(0);" class="fw-medium link-primary">#TBT'+count+"</a>",shipment_no:'<a href="javascript:void(0);" class="text-reset">#TBSN15414524986</a>',customer_name:customerNameField.value,supplier:supplierNameField.value,location:locationField.value,order_date:orderDateField.value,arrival_date:arrivalDateField.value,status:isStatus(statusField.value)}),shipmentsList.sort("id",{order:"desc"}),document.getElementById("alert-error-msg").classList.add("d-none"),document.getElementById("close-createmodal").click(),clearFields(),refreshCallbacks(),count++,Swal.fire({position:"center",icon:"success",title:"Shipping record inserted successfully!",showConfirmButton:!1,timer:2e3,showCloseButton:!0});return!0}))})),document.getElementById("createModal").addEventListener("hidden.bs.modal",(function(){clearFields()})),document.querySelector(".pagination-next").addEventListener("click",(function(){document.querySelector(".pagination.listjs-pagination")&&(document.querySelector(".pagination.listjs-pagination").querySelector(".active")&&document.querySelector(".pagination.listjs-pagination").querySelector(".active").nextElementSibling.children[0].click())})),document.querySelector(".pagination-prev").addEventListener("click",(function(){document.querySelector(".pagination.listjs-pagination")&&(document.querySelector(".pagination.listjs-pagination").querySelector(".active")&&document.querySelector(".pagination.listjs-pagination").querySelector(".active").previousSibling.children[0].click())}));