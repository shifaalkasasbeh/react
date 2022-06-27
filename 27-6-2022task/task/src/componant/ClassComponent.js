import { Component } from "react";
import axios from "axios";

class ClassComponent extends Component {
  state = {
    list: [],
    filter: [],
    loaing: true,
    search: "",
  };

  componentDidMount = () => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        this.setState({ loaing: false });
        this.setState({ list: res.data, filter: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleSearch = (e) => {
    this.setState({ search: e.target.value });
    this.setState({
      filter: this.state.list.filter((item) =>
        item.title.includes(e.target.value)
      ),
    });
  };
  render() {
    const { search, loaing } = this.state;
    return (
      <>
        {loaing ? <div>Loading...</div> : null}
        <div>
          <input type="text" value={search} onChange={this.handleSearch} />
          {this.state?.filter.map((item) => {
            return <div key={item.id}>{item.title}</div>;
          })}
        </div>
      </>
    );
  }
}

export default ClassComponent;