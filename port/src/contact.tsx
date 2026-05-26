import './contact.css'
function contact(){
    return(
        <>
        <div className = "contact-page">
        <header>
            <h1>Contact Me</h1>
        </header>
        <main>
            <form className ="Contact-Form">
            <h3>Contact Form</h3>
            <p>Questions or want to reach out? Feel free to contact me through this form!</p>
            <p>Name</p>
            <input type="text" placeholder='John Doe' required></input>
            <p>Email</p>
            <input type="text" placeholder='name@gmail.com' required></input>
            <p>Subject</p>
            <input type="text" placeholder='Recruitment' required></input>
            <label>Message</label>
            <textarea rows="15" cols="80"></textarea>
            <button>Send</button>
            </form>
        </main>
        </div>
        </>
    )
}
export default contact