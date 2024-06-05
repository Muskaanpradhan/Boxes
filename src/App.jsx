import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  const [open, setOpen] = useState(true)
  const [open2, setOpen2] = useState(true)
  const [open3, setOpen3] = useState(true)
  const [open4, setOpen4] = useState(true)
  //muskan 


  return(
    <>
  <div id="wrapper">
    <h1>Content Hide-Box</h1>
  <div id="boxes">
    <div className="box">
      <h2 onClick={()=> setOpen(!open)}>Box 1 {open ? <FontAwesomeIcon icon={faChevronDown} /> : ">"}  </h2>

     {
      open ?
       <div className="content">
        <img src="https://placehold.co/300x200" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur sequi, voluptatum dicta amet aliquid voluptatem eum
          fuga accusantium ad illum magni aut dolore, incidunt perspiciatis
          animi architecto ex, dolorum perferendis.
        </p>
      </div>
      :
      ""
     }
     </div>
    <div className="box">
    <h2 onClick={()=> setOpen2(!open2)}>Box 2 {open2 ? <FontAwesomeIcon icon={faChevronDown} /> : ">"}  </h2>
     {
      open2 ?
      <div className="contents">
        <img src="https://placehold.co/300x200" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur sequi, voluptatum dicta amet aliquid voluptatem eum
          fuga accusantium ad illum magni aut dolore, incidunt perspiciatis
          animi architecto ex, dolorum perferendis.
        </p>
      </div>
      :
      ""
      }
    </div>
    <div className="box">
    <h2 onClick={()=> setOpen3(!open3)}>Box 3 {open3 ? <FontAwesomeIcon icon={faChevronDown} /> : ">"}  </h2>
    {
      open3 ?

      <div className="content">
        <img src="https://placehold.co/300x200" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur sequi, voluptatum dicta amet aliquid voluptatem eum
          fuga accusantium ad illum magni aut dolore, incidunt perspiciatis
          animi architecto ex, dolorum perferendis.
        </p>
      </div>
      :
      ""
    }
    </div>
    <div className="box">
    <h2 onClick={()=> setOpen4(!open4)}>Box 4 {open4 ? <FontAwesomeIcon icon={faChevronDown} /> : ">"}  </h2>
      {
      open4 ?
      <div className="content">
        <img src="https://placehold.co/300x200" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur sequi, voluptatum dicta amet aliquid voluptatem eum
          fuga accusantium ad illum magni aut dolore, incidunt perspiciatis
          animi architecto ex, dolorum perferendis.
        </p>
      </div>
      :
      ""
}
    </div>
  </div>
</div>
    </>
  )
}

export default App
