class FetchApi {
  constructor(apiURL) {
    this.apiURL = apiURL;
  }

  async fetchPosts(search) {
    const response = await fetch(`${this.apiURL}/posts?search=${search ? search : ''}`);
    const postsJson = await response.json();
    return postsJson;
  }

  async fetchComments(postId) {
    const response = await fetch(`${this.apiURL}/posts/${postId}/comments`);
    const commentsJson = await response.json();
    return commentsJson;
  }

  async fetchPostById(id) {
    const response = await fetch(`${this.apiURL}/posts/${id}`);
    const postJson = await response.json();
    return postJson;
  }

  async addComment(postId, user, text) {
    const body = JSON.stringify({
      user,
      text
    });
    const response = await fetch(`${this.apiURL}/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    });
    const commentJson = await response.json();
    return commentJson;
  }


  async addPost(post) {
    const body = JSON.stringify(post);
    const response = await fetch(`${this.apiURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    });
    const postJson = await response.json();
    return postJson;
  }

  async updatePost(postId, post) {
    const body = JSON.stringify(post);
    const response = await fetch(`${this.apiURL}/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body
    });
    const postJson = await response.json();
    return postJson;
  }

  async deletePost(postId) {
    const response = await fetch(`${this.apiURL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const postJson = await response.json();
    return postJson;
  }
}

export { FetchApi }




