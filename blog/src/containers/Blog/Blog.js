import React, { Component } from 'react';

// Packages
import { Route, NavLink, Switch } from 'react-router-dom'

// Components
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

// CSS
import './Blog.scss';

class Blog extends Component {
    render() {
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
                                        textDecoration: 'underline'}}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: '/full-post'
                                    }}>
                                    Posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    //pathname: this.props.match.url + '/new-post',
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit-true'}}>
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
                    <Route path="/full-post/:id" exact component={FullPost} />
                    <Route path="/new-post" component={NewPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;