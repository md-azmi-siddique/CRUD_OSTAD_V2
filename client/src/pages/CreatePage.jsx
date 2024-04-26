import MasterLayout from './../components/MasterLayout';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";


const CreatePage = () => {

    let navigate = useNavigate();
    
    const CreateData = async  (event) => {

        event.preventDefault();


      let formData = new FormData(event.target);
      let foodName = formData.get("foodName");
      let foodCode = formData.get("foodCode");
      let foodImg = formData.get("foodImg");
      let foodCategory = formData.get("foodCategory");
      let foodQuantity = formData.get("foodQuantity");
      let foodPrice = formData.get("foodPrice");

      await axios.post("http://localhost:5050/api/Create", {
          foodName: foodName,
          foodCode: foodCode,
          foodImg: foodImg,
          foodCategory: foodCategory,
          foodQuantity: parseFloat(foodQuantity),
          foodPrice: parseFloat(foodPrice),
      })

        navigate("/")

    }




    return (
        <MasterLayout>
            <div className="row container">
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
                    <form onSubmit={CreateData}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Food Name</label>
                                    <input type="text" name="foodName" className="form-control" id="exampleInputPassword1"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Food Code</label>
                                    <input type="text" name="foodCode" className="form-control" id="exampleInputPassword1"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Image URL</label>
                                    <input type="text" name="foodImg" className="form-control" id="exampleInputPassword1"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                                    <input type="text" name="foodCategory" className="form-control" id="exampleInputPassword1"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                                    <input type="text" name="foodQuantity" className="form-control" id="exampleInputPassword1"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                                    <input type="text" name="foodPrice" className="form-control" id="exampleInputPassword1"/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        </MasterLayout>
    );
};

export default CreatePage;
