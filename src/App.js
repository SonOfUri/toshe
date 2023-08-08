import './App.css';
import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import Navbar from './components/Navbar';
import Footnav from './components/Footnav';


const widgetConfig: WidgetConfig = {
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
  theme: {
        palette: {
          primary: { main: '#c6200d' },
          secondary: { main: '#e56226' },
        },
        shape: {
          borderRadius: 10,
          borderRadiusSecondary: 15,
        },
      },
  variant: 'expandable',

  subvariant: 'default',
};


export const WidgetPage = () => {
  return (
    <LiFiWidget integrator="xSWAP" config={widgetConfig} />
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <WidgetPage></WidgetPage>

      <Footnav />

    </div>
  );
}

export default App;


