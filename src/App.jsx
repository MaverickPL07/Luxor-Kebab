import './index.css';
import SideNav from './components/SideNav';
import Navbar from './components/Navbar'
import Footer from './components/sections/Footer'
import { useInView, InView } from 'react-intersection-observer';
import { useState } from 'react'
import { sections } from './constants'

function App() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  const [visibleSection, setVisibleSection] = useState(sections[0])

  const setInView = (inView, entry) => {
    if(inView)
    {
      setVisibleSection(entry.target.getAttribute("id"))
    }
  }

  return (
    <div>
      <div className="xd"></div>
    
      <Navbar />
    
      <div ref={ref}>
        {sections.map((section, i) => (
          <InView onChange={setInView} threshold={0.8} key={i}>
            {({ ref }) => {
              return (
                <div id={i} ref={ref} className=''>{section}</div>
              )
            }}
          </InView>
        ))}
      </div>

      <Footer />
      <SideNav section={visibleSection} />
    </div>
  );
}

export default App;
