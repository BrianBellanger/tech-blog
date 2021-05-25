const delpostFormHandler = async (e) => {
    let res = await fetch('/api/posts/delPost/' + e.target.value, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  
      if (res.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete post.');
      }
  }


document.querySelector('.delButton').addEventListener("click", delpostFormHandler);