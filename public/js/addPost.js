const addpostFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-addpost').value.trim();
    const description = document.querySelector('#description-addpost').value.trim();
  
    if (name && description) {
      const response = await fetch('/api/posts/addPost', {
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



  document.querySelector('.addpost-form').addEventListener("submit",addpostFormHandler);