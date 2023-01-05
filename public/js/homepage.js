const viewPostBTNs = document.querySelectorAll(".viewPostBtn");

const viewPostHandler = async (event) => {
  event.preventDefault();


  let blogID = event.target.getAttribute('data-id');

  if (blogID) {
    
      document.location.replace(`/blog/${blogID}`);
  }
};

viewPostBTNs.forEach(viewPostBtn => {viewPostBtn.addEventListener('click', viewPostHandler)});