import {FaBars, FaTimes, FaHome, FaUserAlt, FaEnvelope} from "react-icons/fa";
import {useState} from "react";

function App() {
  const [isNav, setIsNav] = useState(false);

  return (
    <div className="app">
      <div className={isNav ? "container show-nav" : "container"}>
        <div className="circle-container">
          <div className="circle">
            <button 
              className="circle-button"
              id="close" 
              onClick={()=>{setIsNav(false)}}
            ><FaTimes /></button>
            <button 
              className="circle-button"
              id="open" 
              onClick={()=>{setIsNav(true)}}
            ><FaBars /></button>
          </div>
        </div>
        <section className="content">
          <h1>Amazing Article</h1>
          <h3>Florin Pop</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis. Arcu cursus vitae congue mauris rhoncus aenean. Arcu non sodales neque sodales ut etiam sit amet nisl. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. In hac habitasse platea dictumst. Pretium fusce id velit ut. Enim sed faucibus turpis in eu mi bibendum. Et netus et malesuada fames ac turpis. In tellus integer feugiat scelerisque varius morbi enim. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Pellentesque habitant morbi tristique senectus. Dolor magna eget est lorem ipsum dolor sit. Id leo in vitae turpis massa sed elementum tempus egestas. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Tristique risus nec feugiat in fermentum posuere urna nec. Nulla aliquet enim tortor at auctor urna nunc id.</p>
          <p>Nisl vel pretium lectus quam id leo in vitae turpis. Dui nunc mattis enim ut. Consectetur libero id faucibus nisl tincidunt eget nullam. Congue nisi vitae suscipit tellus. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Potenti nullam ac tortor vitae purus. Tellus in metus vulputate eu scelerisque. Sagittis orci a scelerisque purus. Varius quam quisque id diam. Porttitor massa id neque aliquam vestibulum. Vehicula ipsum a arcu cursus vitae congue mauris. Sed viverra ipsum nunc aliquet. Fermentum iaculis eu non diam. Viverra orci sagittis eu volutpat. Ac auctor augue mauris augue neque gravida in. Consectetur a erat nam at lectus urna duis convallis.</p>
          <h2>My Dog</h2>
          <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="doggy" />
          <p>nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel</p>
        </section>
      </div>
      <nav>
        <ul>
          <li><FaHome className="icon" /> Home</li>
          <li><FaUserAlt className="icon" /> About</li>
          <li><FaEnvelope className="icon" /> Contact</li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
