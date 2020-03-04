import React, { useState, useEffect } from 'react';
import Chart from './components/Chart';

function App() {
  const [data, setData] = useState();

  useEffect(() => {

    setData({
      labels: ['Boston', 'Wprcest', 'Spcirngeil', 'Lowel', 'Cambrisge', 'NEw bradfor'],
      datasets: [
        {
          label: 'Population',
          data: [
            12323,
            3123,
            4334,
            3434,
            434,
            2334
          ],
          backgroundColor: ['red', 'green', 'blue', 'yellow', 'black', 'purple'],
        }
      ]
    })

  }, [])

  const defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City'
  }
  return (
    <div>
      <Chart data={data} location="Massachussets" defaultProps={defaultProps} legendPosition="bottom"></Chart>
    </div>
  );
}

export default App;
