import React from 'react';
import { FetchApi } from '../classes/FetchApi';

class PostEditPage extends React.Component {

  constructor(props) {
    super(props);

    this.fetchApi = new FetchApi('http://localhost:3000');

    this.state = {
      postTitle: props.post.title,
      postText: props.post.text,
    }
  }

  handleTitleChange = (event) => {
    const title = event.target.value;
    this.setState({ postTitle: title })
  }

  handleTextChange = (event) => {
    const text = event.target.value;
    this.setState({ postText: text })
  }

  handleSave = (event) => {
    event.preventDefault();

    const { post: { id: postId } } = this.props;
    this.fetchApi.updatePost(postId, {
      title: this.state.postTitle,
      text: this.state.postText,
    }).then(() => {
      this.props.onBack();
    })


  }

  render() {
    const {
      postTitle,
      postText
    } = this.state;
    return (
      <form>
        <input
          name="title"
          placeholder="Title"
          value={postTitle}
          onChange={this.handleTitleChange}
        >
        </input>
        <input
          name="text"
          placeholder="Text"
          value={postText}
          onChange={this.handleTextChange}
        ></input>
        <button type="submit" onClick={this.handleSave}>Save</button>
      </form>
    )
  }
}

export { PostEditPage }