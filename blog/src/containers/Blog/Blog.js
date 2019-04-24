import React, { Component, Suspense } from 'react';

// Packages
import { Route, NavLink, Switch } from 'react-router-dom'

// Components
import Posts from './Posts/Posts'
//import NewPost from './NewPost/NewPost'

// React 16.6--: Lazy Loading
//import asyncComponent from '../../hoc/asyncComponent/asyncComponent'

// CSS
import './Blog.scss';

// React 16.6--: Lazy Loading
//const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'))

// React 16.6+=: Lazy Loading
const NewPost = React.lazy(() => import('./NewPost/NewPost'))

class Blog extends Component {
    state = {
        auth: true
    }

    render() {
        let newpost = this.state.auth 
            ? <Route 
                path="/new-post" 
                render={() => (
                    <Suspense fallback={<div>Loading...</div>}>
                        <NewPost />
                    </Suspense>
                )} /> 
            : null

        return (
            <div className="ReactBlog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    //activeClassName="my-active"
                                    activeStyle={{
                                        color: '#f1f',
                                        textDecoration: 'underline'
                                    }}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: '/posts'
                                    }}>
                                    Posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    //pathname: this.props.match.url + '/new-post',
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit-true'
                                }}>
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}

                <Route path="/" exact component={Posts} />
                <Switch>
                    {newpost}
                    <Route path="/posts" component={Posts} />
                    {/* 404 error page */}
                    {/* <Route render={() => <h1>Not found</h1>} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;
