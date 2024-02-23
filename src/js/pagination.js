import Pagination from 'tui-pagination'; // Імпорт бібліотеки

document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementById('pagination');
    let options = {
        totalItems: 100,
        itemsPerPage: 10,
        visiblePages: 5,
        onPageClick: function (event, pageNo) {
            console.log(event, pageNo);
        },
    };

    let pagination = new Pagination(container, options); // Використання імпортованого Pagination

    // Code for adding a book and managing element visibility
    function addBook() {
        // Code for adding a book

        // Show pagination
        container.style.display = 'block';
        // Hide the image
        document.querySelector('.shoppinglist-img96061').style.display = 'none';
    }

    // Call the addBook() function for demonstration
    addBook();

    // Update pagination options
    pagination.reset({
        totalItems: 1000, // Change total number of items
        itemsPerPage: 20, // Change items per page if needed
        visiblePages: 7, // Change number of visible pages
    });

    // Update 'beforeMove' event listener
    pagination.off('beforeMove'); // Remove existing event listener
    pagination.on('beforeMove', function(eventData) {
        return confirm('Go to page ' + eventData.page + '?');
    });

    // Update 'afterMove' event listener
    pagination.off('afterMove'); // Remove existing event listener
    pagination.on('afterMove', function(eventData) {
        alert('The current page is ' + eventData.page);
    });
});
