import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Portfolio from "./components/portofolio";
import Contacts from "./components/Contacts";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <body
        id="myPage"
        data-spy="scroll"
        data-target=".navbar"
        data-offset="60"
      >
        <Navbar />
        <div className="jumbotron text-center">
          <h1>Company</h1>
          <p>We specialize in blablabla</p>
          <form>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                size="50"
                placeholder="Email Address"
                required
              />
              <div className="input-group-btn">
                <button type="button" className="btn btn-danger">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <Contacts />
        <Footer />
        <script src="index.js" type="text/javascript"></script>
      </body>
    </>
  );
}
export default App;
