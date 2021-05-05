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



  // const delID = document.querySelector('.delButton').value.trim();
  const delpostFormHandler = async (e) => {
    console.log(e.target.value);
    await fetch('/delPost/' + e.target.value, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  }

  
  

  document.querySelector('.delButton').addEventListener("click", delpostFormHandler);
  document.querySelector('.addpost-form').addEventListener("submit",addpostFormHandler);