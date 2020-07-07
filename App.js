import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

//the class to APP
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  //how to fetch the data to get the cases of covid-19
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;
    //to return the cases in the cards and the style 

    return (
      <div className={styles.container}>
       
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;