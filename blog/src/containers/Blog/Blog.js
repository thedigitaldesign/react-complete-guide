import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import css from './Blog.module.scss';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const authors = ['', 'Josh', 'Rebekah', 'Ariah', 'Marissa']
                const posts = response.data.slice(0, 4)

                const updatedPosts = posts.map((post) => {
                    let author = authors[post.userId];

                    return {
                        ...post,
                        author: author
                    }
                })

                this.setState({
                    posts: updatedPosts
                })
            })
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
    }

    render () {
        const posts = this.state.posts.map((post) => {
            return (
                <Post 
                    key={post.id} 
                    title={post.title} 
                    body={post.body} 
                    author={post.author} 
                    clicked={() => this.postSelectedHandler(post.id)} />
            )
        })

        return (
            <div>
                <section className={css.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;