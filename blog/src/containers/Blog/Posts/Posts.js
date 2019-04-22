import React, { Component } from 'react'

// Packages
import axios from '../../../axios'
import { Link } from 'react-router-dom'

// Components
import Post from '../../../components/Post/Post'

// CSS
import css from './Posts.module.scss'

export default class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('/posts')
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
            .catch((error) => {
                this.setState({
                    error: true
                })
            })
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
    }

    render () {
        let posts = (
            <p style={{ textAlign: 'center' }}>
                Something went wrong
            </p>
        )

        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                    <Link 
                        key={post.id} 
                        to={{
                            pathname: '/full-post/' + post.id
                        }}>
                        <Post
                            title={post.title}
                            body={post.body}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />
                    </Link>
                )
            })
        }

        return (
            <section className={css.Posts}>
                {posts}
            </section>
        )
    }
}
