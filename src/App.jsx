import { Outlet, NavLink } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <NavLink  className="nav-link"to="/Books">Book</NavLink>
      </li>
      <li class="nav-item">
      <NavLink  className="nav-link"to="/BookDetails">BookDetails</NavLink>
      </li>
      <li class="nav-item">
      <NavLink  className="nav-link"to="/quotes">Quotes</NavLink>
      </li>
    </ul>
  </div>
</nav>
<div className="Container">
      <Outlet />
    </div>
    </>
  )
}

export default App
