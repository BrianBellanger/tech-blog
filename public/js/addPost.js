const addpostFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-addpost').value.trim();
    const description = document.querySelector('#description-addpost').value.trim();
  
console.log(name + "Desc: "+ description);

    if (name && description) {
      const response = await fetch('/addPost', {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to save post.');
      }
    }
  };
  console.log("OK!");


  document.querySelector('.addpost-form').addEventListener("submit",addpostFormHandler)