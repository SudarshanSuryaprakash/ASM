import React from 'react'
import {connect} from 'react-redux'

import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '229398884074-2bdsqfhknu673vb2ju9v14j53md5qpao.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    //onAuthChange gets a boolean value with the current value of authentication

    onAuthChange = (isSignedIn) => {
        isSignedIn ? this.props.signIn() : this.props.signOut()
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) return <div>Loading</div>
        else if(this.props.isSignedIn === true) {
            return (
                    <div>
                        <button
                        onClick = {() => this.auth.signOut()}
                         className = 'ui red google button'>
                            <i className = 'google icon'></i>
                            Sign Out
                        </button>
                    </div>
                )
        } 
        else {
            return (
                <div>
                    <button 
                    onClick = {() => this.auth.signIn(this.auth.currentUser.get().getId())}
                    className = 'ui red google button'>
                        <i className = 'google icon'></i>
                        Sign In With Google
                    </button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)