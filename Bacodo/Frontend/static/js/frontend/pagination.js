// Lấy các phần tử DOM
const paginationContainer = document.querySelector('.pagination');
const firstPageBtn = paginationContainer.querySelector('.pagi-btn.first-page');
const prevPageBtn = paginationContainer.querySelector('.pagi-btn.prev-page');
const nextPageBtn = paginationContainer.querySelector('.pagi-btn.next-page');
const lastPageBtn = paginationContainer.querySelector('.pagi-btn.last-page');
const currentPageSpan = paginationContainer.querySelector('.current');

// Hàm xử lý khi nhấp vào nút First
firstPageBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Điều hướng đến trang đầu tiên
    goToPage(1);
});

// Hàm xử lý khi nhấp vào nút Prev
prevPageBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Lấy trang hiện tại từ đường dẫn href của nút Prev
    const currentPage = getCurrentPageFromUrl(prevPageBtn.href);
    // Điều hướng đến trang trước đó
    goToPage(currentPage);
});

// Hàm xử lý khi nhấp vào nút Next
nextPageBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Lấy trang hiện tại từ đường dẫn href của nút Next
    const currentPage = getCurrentPageFromUrl(nextPageBtn.href);
    // Điều hướng đến trang tiếp theo
    goToPage(currentPage);
});

// Hàm xử lý khi nhấp vào nút Last
lastPageBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Lấy tổng số trang từ đường dẫn href của nút Last
    const totalPages = getTotalPagesFromUrl(lastPageBtn.href);
    // Điều hướng đến trang cuối cùng
    goToPage(totalPages);
});

// Hàm lấy trang hiện tại từ đường dẫn URL
function getCurrentPageFromUrl(url) {
    const urlParams = new URLSearchParams(url.search);
    return parseInt(urlParams.get('page')) || 1;
}

// Hàm lấy tổng số trang từ đường dẫn URL
function getTotalPagesFromUrl(url) {
    const urlParams = new URLSearchParams(url.search);
    return parseInt(urlParams.get('total_pages')) || 1;
}

// Hàm điều hướng đến trang mới
function goToPage(pageNumber) {
    // Thực hiện điều hướng đến trang mới với số trang tương ứng
    // window.location.href = '?page=' + pageNumber;
    // Hoặc có thể thực hiện các hành động khác tùy thuộc vào yêu cầu của bạn
    console.log('Go to page', pageNumber);
}