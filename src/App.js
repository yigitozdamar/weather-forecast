import styled from 'styled-components';
import Dropdown from './components/dropdown/Dropdown';
import Weather from './components/weather/Weather';

const AppLayout = styled.div`
  background-color: #1d3557;
  text-align: center;
  height: 100vh;
`


function App() {
  return (
    <AppLayout>
      <Dropdown />
      <Weather />
    </AppLayout>
  );
}

export default App;
