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
          primary: { main: '#f95494' },
          secondary: { main: '#fdeaf0' },
        },
        shape: {
          borderRadius: 10,
          borderRadiusSecondary: 15,
        },
      },
  variant: 'expandable',

  subvariant: 'split',

  tokens: {
    // Featured tokens will appear on top of the list
    featured: [
      {
        address: '0xb2fB82f59B46c1970661b4c4895be8aed5215874',
        symbol: 'TOSHE',
        decimals: 18,
        chainId: 1,
        name: 'TOSHE',
        logoURI: 'https://tametoshe.com/images/6458fb21706407400e0d43d4_about-2.png',
      },
    ],
    // Include any token to the list
    include: [
      {
        address: '0xb2fB82f59B46c1970661b4c4895be8aed5215874',
        symbol: 'TOSHE',
        decimals: 18,
        chainId: 1,
        name: 'TOSHE',
        logoURI: 'https://tametoshe.com/images/6458fb21706407400e0d43d4_about-2.png',
      },
    ],
  },
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


