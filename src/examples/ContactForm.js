export default function ContactForm() {

    function handleClickMe(e) {
        e.preventDefault();
        console.log('You clicked me!');
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted!');
    }

    return (
        <div>
            <button className="btn btn-success" onClick={handleClickMe}>Click Me</button>

            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="3" placeholder="Enter message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}