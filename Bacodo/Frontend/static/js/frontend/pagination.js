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
const btnShowmoreFilter = document.querySelector('.btn-filter-color');
const filterColor = document.querySelectorAll('.filter-color button');
filterColor.forEach((item, index) => {
    if(index > 5) {
        item.style.display = 'none'
    }
})
btnShowmoreFilter.addEventListener('click', function(e) {
    
    if(e.currentTarget.textContent == 'Collapse') {
        filterColor.forEach((item, index) => {
            if(index > 5) {
                item.style.display = 'none'
            }
        })
        e.currentTarget.textContent == 'Show more'
    }else {
        filterColor.forEach((item, index) => {
            item.style.display = 'block'
        });
    }
    e.currentTarget.textContent = 'Collapse';
    
})

const btnShowmoreSize = document.querySelector('.btn-filter-size');
const filterSize = document.querySelectorAll('.filter-size button');
filterSize.forEach((item, index) => {
    if(index > 4) {
        item.style.display = 'none'
    }
})
btnShowmoreSize.addEventListener('click', function(e) {
    
    if(e.currentTarget.textContent == 'Collapse') {
        filterSize.forEach((item, index) => {
            if(index > 4) {
                item.style.display = 'none'
            }
        })
        e.currentTarget.textContent == 'Show more'
    }else {
        filterSize.forEach((item, index) => {
            item.style.display = 'block'
        });
    }
    e.currentTarget.textContent = 'Collapse';
})
const btnShowmoreType = document.querySelector('.btn-filter-type');
const filterType = document.querySelectorAll('.filter-type button');
filterType.forEach((item, index) => {
    if(index > 4) {
        item.style.display = 'none'
    }
})
btnShowmoreType.addEventListener('click', function(e) {
    
    if(e.currentTarget.textContent == 'Collapse') {
        filterType.forEach((item, index) => {
            if(index > 4) {
                item.style.display = 'none'
            }
        })
        e.currentTarget.textContent == 'Show more'
    }else {
        filterType.forEach((item, index) => {
            item.style.display = 'block'
        });
    }
    e.currentTarget.textContent = 'Collapse';
})
const btnShowmoreOption = document.querySelector('.btn-filter-option');
const filterOption = document.querySelectorAll('.filter-option button');
filterOption.forEach((item, index) => {
    if(index > 4) {
        item.style.display = 'none'
    }
})
btnShowmoreOption.addEventListener('click', function(e) {
    
    if(e.currentTarget.textContent == 'Collapse') {
        filterOption.forEach((item, index) => {
            if(index > 4) {
                item.style.display = 'none'
            }
        })
        e.currentTarget.textContent == 'Show more'
    }else {
        filterOption.forEach((item, index) => {
            item.style.display = 'block'
        });
    }
    e.currentTarget.textContent = 'Collapse';
})
const btnShowmoreDetail = document.querySelector('.btn-filter-detail');
const filterDetail = document.querySelectorAll('.filter-detail button');
filterDetail.forEach((item, index) => {
    if(index > 4) {
        item.style.display = 'none'
    }
})
btnShowmoreDetail.addEventListener('click', function(e) {
    
    if(e.currentTarget.textContent == 'Collapse') {
        filterDetail.forEach((item, index) => {
            if(index > 4) {
                item.style.display = 'none'
            }
        })
        e.currentTarget.textContent == 'Show more'
    }else {
        filterDetail.forEach((item, index) => {
            item.style.display = 'block'
        });
    }
    e.currentTarget.textContent = 'Collapse';
})

// const activeBtnFilter = document.querySelectorAll(".filter-btn");
// console.log(activeBtnFilter)
// activeBtnFilter.forEach(item => {
//     item.addEventListener('click', function() {
//         item.classList.add('active')
//     })
// })


// function filterAttribute(attribute, value) {
//     // Định nghĩa endpoint mà bạn muốn gửi yêu cầu lọc
//     // Thay đổi '/your-filtering-endpoint' thành URL phù hợp với API của bạn
//     const endpoint = '/your-filtering-endpoint';
//     const data = { attribute: attribute, value: value };

//     // Gửi yêu cầu lọc đến máy chủ sử dụng fetch API
//     fetch(endpoint, {
//         method: 'POST', // hoặc 'GET', tùy thuộc vào thiết kế API của bạn
//         headers: {
//             'Content-Type': 'application/json',
//             // Thêm bất kỳ header nào cần thiết cho yêu cầu của bạn
//         },
//         body: JSON.stringify(data) // chuyển dữ liệu thành chuỗi JSON
//     })
//     .then(response => {
//         // Kiểm tra nếu phản hồi không thành công
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json(); // Chuyển phản hồi thành JSON
//     })
//     .then(data => {
//         // Xử lý dữ liệu trả về
//         console.log('Success:', data);
//         updateUI(data); // Gọi hàm cập nhật giao diện người dùng
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// }

// function updateUI(data) {
//     // Hàm này sẽ cập nhật giao diện người dùng dựa trên dữ liệu trả về
//     // Bạn sẽ cần thực hiện thay đổi dựa trên cấu trúc HTML và yêu cầu cụ thể của ứng dụng
//     console.log('Update UI with received data', data);

//     // Ví dụ, cập nhật danh sách sản phẩm
//     // document.getElementById('product-list').innerHTML = data.products.map(product => `...`).join('');
// }

