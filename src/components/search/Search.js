import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import axios from 'axios'

class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '22137405-ae6f22a17c38adb3e9b9ef900',
    images: [],
  }

  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safeSearch=true`
        )
        .then((res) => this.setState({ images: res.data.hits }))
        .catch((err) => console.log(err))
    })
  }

  render() {
    console.log(this.state.images)
    return (
      <div>
        <TextField
          id="standard-basic"
          label="Search For Images"
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          fullWidth={true}
        />
        <br />
        <TextField
          id="filled-select-currency"
          label="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          helperText="Amount"
          variant="filled">
          <MenuItem value={15} />
          <MenuItem value={10} />
          <MenuItem value={15} />
          <MenuItem value={30} />
          <MenuItem value={50} />
        </TextField>
        <br />
      </div>
    )
  }
}

export default Search
