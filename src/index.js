import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
// create component. the component should produce HTML
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY= ENTER API KEY HERE ;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectVideo: null
    };

    this.onVideoSearch('post malone');

  }

  onVideoSearch(event) {
    YTSearch({key: API_KEY, term: event}, (data) => {
      this.setState({
        videos: data ,
        selectVideo: data[0]
      });
    });
  }

  render () {
    const videoSearch = _.debounce((term) => { this.onVideoSearch(term)}, 300);

      return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectVideo }/>
        <VideoList onVideoChange={selectVideo => this.setState({ selectVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }


}


// Take component and put it in the page
ReactDOM.render(<App />, document.querySelector('.container'));
