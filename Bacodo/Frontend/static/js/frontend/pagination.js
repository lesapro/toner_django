// Thêm sự kiện click cho tất cả các nút lọc
document.querySelectorAll('.filter-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var filterType = this.getAttribute('data-filter');
        var filterValue = this.getAttribute('data-value');

        // Hiển thị thông tin lọc được chọn hoặc thực hiện hành động khác
        console.log("Filter Type: " + filterType + ", Value: " + filterValue);
    });
});

// Xử lý sự kiện cho nút "Show more"
const btnShowmoreFilter = document.querySelector('.btn-filter-more');
const filterColor = document.querySelectorAll('.filter-color button');
filterColor.forEach((item, index) => {
    if(index > 5) {
        item.style.display = 'none'
    }
})
btnShowmoreFilter.addEventListener('click', function(e) {
    // if(e.currentTarget.textContent == 'Collapse') {
    //     const filterColorArr = document.querySelectorAll('.filter-color button');
    //     filterColorArr.forEach((item, index) => {
    //         item.style.display = 'none'
    //     })
    // }
    
    filterColor.forEach((item, index) => {
        item.style.display = 'flex'
    });
    // e.currentTarget.textContent = 'Collapse';
    e.currentTarget.style.display = 'none'
    
})