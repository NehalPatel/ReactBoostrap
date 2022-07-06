import Clock from "../examples/Clock";

function Home(props) {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Welcome, Guest</h1>
          <p className="fs-4">Creating website using react.js is very easy and simple.</p>
          <button className="btn btn-primary btn-lg" type="button">Learn More</button>
          <Clock />
        </div>
      </div>
    </>
  )
}

export default Home;