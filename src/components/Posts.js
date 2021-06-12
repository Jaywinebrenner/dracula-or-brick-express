import React, { Component} from 'react'

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            recentPosts: []
        }
    }

    componentDidMount() {
        fetch('api/post')
        .then(res => {
            return res.json()

        })
        .then(payload => {
            if(payload.confirmation != 'success') {
                throw new Error("Something is wrong.")
                return
            }
            const posts = payload.data
            this.setState({
                recentPosts: posts
            })
            // console.log("recent posts", this.recentPosts)
        })
        .catch(err => {
            console.log("ERROR" + err.message)
        })
    }
    render() {
        return (
            <div>
                <h1>Recent Posts</h1>
                <ul>
                    {this.state.recentPosts.map(post => {
                        return (
                        <li style={{ listStyleType: 'none'}} key={post.id}>
                            <div style={{display: 'flex', margin: '20px'}}>
                                <img style={{marginRight: '12px', width: '200px'}} src={post.image}></img>
                                <div>
                                    <small>{post.dateString}</small>
                                    <h3 style={{margin: '0'}}>{post.title}</h3>
                                    <a style={{ color: "maroon"}}href="">Read More</a>
                                    </div>
                            </div>
                        </li>
                        
                        )
                    })

                    }
                    
                </ul>

            </div>

        )
    }
}

export default Posts