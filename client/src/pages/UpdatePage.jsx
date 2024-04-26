import MasterLayout from './../components/MasterLayout';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";


const UpdatePage = () => {

    let {id} = useParams()

    const [existing, setExisting] = useState(null)

    let existingInfo=async (id)=>{
        let res = await axios.get(`http://localhost:5050/api/readId/${id}`)
        setExisting(res.data['row'][0]);
    }

    useEffect(()=>{
        (async ()=>{
            await existingInfo(id)
        })()
    },[])



    let navigate = useNavigate();

    const UpdateData = async (event) => {

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
                    <form onSubmit={UpdateData}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Food Name</label>
                                    <input defaultValue={existing!==null ? (existing['foodName']):("")} type="text" name="foodName" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Food Code</label>
                                    <input defaultValue={existing!==null ? (existing['foodCode']):("")} type="text" name="foodCode" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Image URL</label>
                                    <input defaultValue={existing!==null ? (existing['foodImg']):("")} type="text" name="foodImg" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                                    <input defaultValue={existing!==null ? (existing['foodCategory']):("")} type="text" name="foodCategory" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                                    <input defaultValue={existing!==null ? (existing['foodQuantity']):("")} type="text" name="foodQuantity" className="form-control" id="exampleInputPassword1"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                                    <input defaultValue={existing!==null ? (existing['foodPrice']):("")} type="text" name="foodPrice" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>

            </div>
        </MasterLayout>
    );
};

export default UpdatePage;
