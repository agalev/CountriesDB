import React, { Component } from 'react'
import axios from 'axios'
import Tableview from './Components/Tableview'
import Navbar from './Components/Navbar'

export default class App extends Component {
  constructor() {
    super()
    this.state = {countries: []}
  }

  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then(results => {
        this.setState({countries: results.data})
      })
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <Tableview countries={this.state.countries}/>
      </div>
    )
  }
}

// function App() {

//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//     const result = await axios('https://restcountries.eu/rest/v2/all');
//     setData(result.data);
//   }
//   fetchData();
// }, []);
//   console.log(data)
//   return (
//     <div className="container">
//       {data.map( country => {
//         return (<div key={country.name}>{country.name}</div>)
//       }
//         )}
//     </div>
//   )
// }

// export default App;
