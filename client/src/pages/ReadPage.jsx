import { useState, useEffect } from 'react';
import axios from 'axios';
import MasterLayout from './../components/MasterLayout';
import Loader from '../loader/loader.jsx';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

const ReadPage = () => {
    // State variable to store fetched data
    const [data, setData] = useState([]);

    // Function to fetch data from backend
    const ReadData = async () => {
        try {
            const response = await axios.get('http://localhost:5050/api/read');
            setData(response.data['row']);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const DeleteFood = async (id) =>{
        await axios.get(`http://localhost:5050/api/delete/${id}`);
        await ReadData()
    }

    useEffect(() => {
        ReadData()
    }, []); // Empty dependency array means it will run only once when component mounts

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
                    <h2>Food Items</h2>
                    <div className="row">
                        {
                            data.length === 0 ? (<Loader/>) :
                                (data.map(item => (
                                    <div key={item.id} className="col-md-4">
                                        <Card>
                                        <Card.Img variant="top" src={item.foodImg}
                                                      style={{height: "160px", width: "100%"}}/>
                                            <Card.Body>
                                                <Card.Title>{item.foodName}</Card.Title>
                                                <Card.Text>
                                                    This is a longer card with supporting text below as a natural
                                                    lead-in to additional content. This content is a little bit
                                                    longer.
                                                </Card.Text>
                                            </Card.Body>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <button className="btn btn-success">Update</button>
                                                </div>
                                                <div className="col-md-6 d-flex justify-content-end">
                                                    <button onClick={() => DeleteFood(item._id)}
                                                            className="btn btn-danger">Delete
                                                    </button>
                                                </div>
                                            </div>

                                        </Card>
                                    </div>
                                )))}
                    </div>
                </div>

            </div>
        </MasterLayout>
    );
};

export default ReadPage;
