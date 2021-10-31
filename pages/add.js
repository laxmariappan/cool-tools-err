export default function Form() {
    const registerUser = async event => {
      event.preventDefault()
  
      const res = await fetch('/api/add', {
        body: JSON.stringify({
          name: event.target.name.value,
          link: event.target.link.value,
          category: event.target.category.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
  
      const result = await res.json()
       console.log(result)
      // result.user => 'Ada Lovelace'
    }
  
    return (
      <form onSubmit={registerUser}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        <input id="link" name="link" type="text" autoComplete="link" required />
        <input id="category" name="category" type="text" autoComplete="category" required />
        <button type="submit">Add</button>
      </form>
      
    )
  }