window.addEventListener('DOMContentLoaded', function () {

  // Gallery select 
  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    sorter: () => {},
    resetScrollPosition: false,
    placeholder: true,
  }
  );
    
});