import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="story-content">
        <h1>Meu projeto</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptatibus voluptate dolorem nisi explicabo molestias, dolor, quod
          odio tenetur magni, ullam laborum. Quos magni necessitatibus
          perspiciatis temporibus voluptatum expedita minima.
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default App
