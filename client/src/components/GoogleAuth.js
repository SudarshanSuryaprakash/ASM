import React from 'react'

class GoogleAuth extends React.Component {

    state = {isSignedIn : null}

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '229398884074-2bdsqfhknu673vb2ju9v14j53md5qpao.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) return <div>Loading</div>
        else if(this.state.isSignedIn === true) {
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
                    onClick = {() => this.auth.signIn()}
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

export default GoogleAuth