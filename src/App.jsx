import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Header />

      <div className="max-lg:contents lg:flex lg:w-full">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="main flex-1 overflow-y-auto">
            <div className='flex-1 h-full w-full py-1 px-6 bg-white rounded-xl border border-gray-200 ' style={{ position: "relative", top: "3.5rem" }}>
              <Outlet />
            </div>
          </main>
        </div>
      </div>


    </div>
  )
}

export default App
