import React, { Component } from 'react';
import './App.css';
import Posts from './Posts';
import { Modal, Button } from "react-bootstrap"

class CityWithPosts extends Component {

    state = {
        show: false
    }

    open = () => {
        this.setState({show: true})
    }

    close = () => {
        this.setState({show: false})
    }

    render() {
        return(
            <div className="city-with-posts-div">
                <div className="city-country-img">
                    <div className='london-uk'>
                        <h1 className="city">London</h1>
                        <h3 className="country">United Kingdom</h3>
                    </div>
                    <img className="london-large-img" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg" alt=""></img>
                </div>
                <div className="posts-and-button">
                    <h2 className='posts'>Posts</h2>
                    <button className="plus-button" onClick={this.open}>+</button>
                </div>
                
                
                <div className="posts-div">
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                </div>

<Modal show={this.state.show} onHide={this.close}>
    <Modal.Body>
                <div className='create-new-post'>
                    <form className='new-post-form'>
                        <h2 className='new-post-h2'>Create a new post</h2>
                        <select className='new-post-dropdown'>
                            <option>London</option>
                            <option>San Francisco</option>
                            <option>New York</option>
                            <option>Paris</option>
                        </select>
                        <p className='new-post-title'>Title</p>
                        <input className='new-post-input'></input>
                        <textarea className="new-post-text-area" placeholder="New Post Here"></textarea>
                        <input className="submit-button" type="submit"></input>
                    </form>
                </div>
</Modal.Body>
<Button onClick={this.close}>Close</Button>
                </Modal>

            </div>



        )
    }
}

export default CityWithPosts;