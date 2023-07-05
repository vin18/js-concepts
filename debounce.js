const searchInput = document.querySelector('#search');

// Simple implementation debounce
const debounce = function (fn, delay) {
  let id;

  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const onChange = (event) => console.log(event.target.value);
const debouncedSearch = debounce(onChange, 1000);

searchInput.addEventListener('keyup', debouncedSearch);
