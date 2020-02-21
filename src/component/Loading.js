import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

 class Loading extends Component {
    render() {
        return (
            <div>
                <Loader className= "Spinner"
         type="Oval"
         color="lightskyblue"
         height={80}
         width={80}/>
            </div>
        )
    }
}
export default Loading