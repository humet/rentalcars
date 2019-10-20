import React from "react"
import PropTypes from "prop-types"
import PlaceType from "./PlaceType"
import "./SearchInput.css"

class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: "",
      showResults: false,
      results: "loading",
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const searchString = event.target.value
    this.setState({ searchValue: searchString })

    // Test for 2 or more alphanumeric characters
    const regex = /[a-z\d ]{2,}/i

    if (searchString.match(regex)) {
      this.setState({ showResults: true })

      if (this._timeout) {
        clearTimeout(this._timeout)
      }

      this._timeout = setTimeout(() => {
        this._timeout = null
        this.fetchResults(searchString)
      }, 500)
    } else {
      // Hide search box when less than 2 alphanumeric characters
      this.setState({ showResults: false, results: "loading" })
    }
  }

  fetchResults(searchString) {
    this.setState({ results: "loading" })
    let data = null
    let xhr = new XMLHttpRequest()

    xhr.addEventListener("readystatechange", e => {
      if (e.currentTarget.readyState === 4) {
        let response = JSON.parse(e.currentTarget.responseText)

        // Check number of results found. Store results in state if more than 0.
        if (response.results.numFound > 0) {
          this.setState(response)
        } else {
          this.setState({ results: "noresults" })
        }
      } else if (e.currentTarget.readyState === 3) {
        this.setState({ results: "loading" })
      }
    })

    xhr.open(
      "GET",
      "https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=" +
        this.props.count +
        "&solrTerm=" +
        searchString
    )
    xhr.send(data)
  }

  showResults(results) {
    let content

    switch (results) {
      case "loading":
        content = (
          <li>
            <p>Loading...</p>
          </li>
        )
        break

      case "error":
        content = (
          <li>
            <p>Sorry there has been an error. Please try again.</p>
          </li>
        )
        break

      case "noresults":
        content = (
          <li>
            <p>No results found</p>
          </li>
        )
        break
      default:
        content = results.docs.map(item => (
          <li key={item.locationId}>
            <div className="results__result">
              <div>
                <PlaceType type={item.placeType} />
              </div>
              <div>
                <h3>{item.name}</h3>
                <p>
                  {item.region}, {item.country}
                </p>
              </div>
            </div>
          </li>
        ))
    }
    return <ul>{content}</ul>
  }

  render() {
    const { results } = this.state
    return (
      <div className="search-input">
        <label id="search-input__label" htmlFor="search-input__field">
          Pick-up Location
        </label>
        <input
          name="search-input__field"
          id="search-input__field"
          type="text"
          placeholder="city, airport, station, region, district..."
          required
          aria-describedby="search-input__screenReaderInstructions"
          autoComplete="off"
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <span id="search-input__screenReaderInstructions" className="hidden">
          When autocomplete results are available use up and down arrows to
          review and enter to select. Touch device users, explore by touch or
          with swipe gestures.;
        </span>
        <span
          className={`results ${this.state.showResults ? "results--show" : ""}`}
          aria-expanded={this.state.showResults ? true : false}
        >
          {this.showResults(results)}
        </span>
      </div>
    )
  }
}

SearchInput.propTypes = {
  count: PropTypes.number,
}

SearchInput.defaultProps = {
  count: 6,
}

export default SearchInput
