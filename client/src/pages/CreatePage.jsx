import MasterLayout from './../components/MasterLayout';
import {Link} from "react-router-dom";


const CreatePage = () => {


    return (
        <MasterLayout>
            <div className="row">
                <div className="col-md-3">
                    <h2>First Part</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/create" className="btn btn-success">Create</Link>
                        </div>
                        <div className="col-md-12">
                            <Link to="/" className="btn btn-success">Show Food</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        </MasterLayout>
    );
};

export default CreatePage;
