import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Carousel} from 'antd';
import imagen1 from './pics/1.jpeg';
import imagen2 from './pics/2.jpeg';
import imagen3 from './pics/3.jpeg';
import imagen4 from './pics/4.jpeg';
import imagen5 from './pics/5.jpeg';
import imagen6 from './pics/6.jpeg';
import imagen7 from './pics/7.jpeg';
import imagen8 from './pics/8.jpeg';
import imagen9 from './pics/9.jpeg';
import imagen10 from './pics/10.jpeg';
//import imagen11 from './pics/11.jpg';
//import imagen12 from './pics/12.jpg';

  function App() {

    function onChange(a, b, c) {
      console.log(a, b, c);
    }

  const contentStyle = {
    height: '720px',
    width: '720px',
    position: 'right',
    color: '#c4c4c4',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#c4c4c4',
  };

  return (
   <>
   <Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>
        <img  width='100%' src={imagen1}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen2}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen3}/>  </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img  width='100%' src={imagen4}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img  width='100%' src={imagen5}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen6}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen7}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen8}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img  width='100%' src={imagen9}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen10}/>
      </h3>
    </div>
    
  </Carousel>
   </>
    
  );
}

export default App;