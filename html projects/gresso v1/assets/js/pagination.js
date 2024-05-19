document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelector('.collection-card-content'); 
  const itemsPerPage =14;
  let currentPage = 0;
  const items = Array.from(content.getElementsByClassName('collection-card')).slice(0);


function showPage(page) {
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  items.forEach((item, index) => {
    item.classList.toggle('hidden', index < startIndex || index >= endIndex);
  });
  updateActiveButtonStates();
}

function createPageButtons() {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginationContainer = document.createElement('div');
  const paginationDiv = document.body.appendChild(paginationContainer);
  paginationContainer.classList.add('pagination');

  // Add page buttons
  for (let i = 0; i < totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i + 1;
    pageButton.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
      updateActiveButtonStates();
    });

      content.appendChild(paginationContainer);
      paginationDiv.appendChild(pageButton);
    }
}

function updateActiveButtonStates() {
  const pageButtons = document.querySelectorAll('.pagination button');
  pageButtons.forEach((button, index) => {
    if (index === currentPage) {
      button.classList.add('current-active');
    } else {
      button.classList.remove('current-active');
    }
  });
}

  createPageButtons(); // Call this function to create the page buttons initially
  showPage(currentPage);

});



// this function is used to how many collection card is available ..

// Function to update the total products count
function updateTotalProductsCount() {
  const totalProductsCount = document.querySelectorAll('.collection-card').length;
  const totalProductsElement = document.querySelector('.total-products');
  if (totalProductsElement) {
    totalProductsElement.textContent = `${totalProductsCount} PRODUCTS`;
  }
}

// Call the function to update total products count initially
updateTotalProductsCount();

