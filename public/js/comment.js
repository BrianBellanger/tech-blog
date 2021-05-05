const addcommentFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#body-addcomment').value.trim();



    if (name && description) {
      const response = await fetch('/addComment', {
        method: 'POST',
        body: JSON.stringify({ body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to save comment.');
      }
    }
  };




  const delcommentFormHandler = async (e) => {
    console.log(e.target.value);
    await fetch('/delComment/' + e.target.value, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  }

  
  
  //  document.querySelector('#delCommentButton').addEventListener("click", delcommentFormHandler);
  document.querySelector('#addCommentButton').addEventListener("submit", addcommentFormHandler);