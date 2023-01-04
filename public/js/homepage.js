const viewPostBTNs = document.querySelectorAll(".viewPostBtn");

const viewPostHandler = async (event) => {
  event.preventDefault();


  const blogID = event.target.getAttribute('data-id');

  if (blogID) {
    
      document.location.replace('/blog/1');
  }
};

viewPostBTNs.forEach(viewPostBtn => {viewPostBtn.addEventListener('click', viewPostHandler)});