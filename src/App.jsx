import './App.css'
import Gallery from './components/Gallery'
import Left from './components/Left'
import Right from './components/Right'

function App() {
  return (
    <>
      <div className='flex flex-col lg:flex-row'>
        <Left />
        <div className='flex flex-col mx-auto lg:mx-4 lg:w-3/4'>
          <Right />
          <div
            className="w-[90%] mx-auto h-1 mt-4 mb-4"
            style={{
              background: `linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`,
              boxShadow: `0px 4px 4px 0px #00000054`
            }}
          ></div>
          <Gallery />
          <div
            className="w-[90%] mx-auto h-1 mt-3 mb-2"
            style={{
              background: `linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`,
              boxShadow: `0px 4px 4px 0px #00000054`
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default App
