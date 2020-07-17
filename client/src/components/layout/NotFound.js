import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Fragment>
        <div className="container-fluid mt-5 ml-5">
            <div className="container-fluid mt-5 ml-5">
                <h1 className="x-large text-primary mt-5 ml-5">
                <i class="fas fa-exclamation-triangle mt-5"></i>&nbsp;Page Not Found
                </h1>
                <p className="ml-5 mt-3">Sorry, this page does not exist <span className="text-warning"><i class="fas fa-exclamation-circle"></i></span></p>
                <div className="row">
                    <div className="col-sm-2">
                        <Link to="/posts">
                            <button className="btn  ml-5" type="submit"><i className="fas fa-home"></i>&nbsp;Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}


export default NotFound
