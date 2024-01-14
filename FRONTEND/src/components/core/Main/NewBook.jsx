

const NewBook = () => {
  return (
    <div className="container-form">
        <form id="bookForm" action="action" method="POST"/>
            <input type="text" id="name" className="name" placeholder="Title" required/>
            <input type="number" id="publication" className="publication" placeholder="publication year"/>
            <input type="text" id="universe" className="universe" placeholder="Universe"/>
            <input type="text" id="series" name="series" placeholder="collection"/>
            <input type="file" id="picture" className="picture" placeholder="Please, only files .JPG, .JPEG y .PNG"/>
            <button type="submit" className="special">Add book</button>
        <form/>
        <form id="authorForm" action="action" method="POST" />
            <input type="text" id="name" className="name" placeholder="Name" required/>
            <input type="text" id="country" className="country" placeholder="Country" required/>
            <input type="text" id="titles" className="titles" placeholder="Title"/>
            <input type="file" id="picture" className="picture" placeholder="Please, only files .JPG, .JPEG y .PNG"/>
            <button type="submit" className="special">Add Author</button>
        <form/>
    </div>
  )
}

export default NewBook
