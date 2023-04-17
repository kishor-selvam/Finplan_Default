import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PROFILE from '../../../assets/images/profile.png';
import { FiEdit3 } from 'react-icons/fi';
import { BiCheck } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import '../../../assets/basic_details.css';
import TabBar from './components/TabBar';

import {
    Row,
    Col,
    Card,
    CardBody,
    FormGroup,
    Button,
    Label,
    Input,
    Container,
    FormFeedback,
    Form,
    InputGroup,
} from "reactstrap";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import SocialNetwork from './components/SocialNetwork';

const DashboardProfile = () => {

    const [basicDetail, setBasicDetail] = useState(false)
    const [basicDetailAddres, setBasicDetailAddres] = useState(false)

    const [addressStatus, setAddressStatus] = useState('permanent_address')

    const basicDetails = () => setBasicDetail(true)
    const removeBasicDetails = () => setBasicDetail(false)
    
    const basicDetails_address = () => setBasicDetailAddres(true)
    const removeBasicDetailsAddress = () => setBasicDetailAddres(false)


    const profile_address = (e) => {
        setAddressStatus(e.target.value);
    }


    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            firstname: "Kishor",
            lastname: "S",
            email: "kishorsbca@gmail.com",
            phone: 8667298291,
            birth_date: '01/09/2001',
            retirement_age: "",
            life_expectancy: "",
            savings: "",
            step_up: "",
            inflation: "",
            address: "",
            city: "Bengaluru",
            state: "",
            pincode: "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Please Enter Your First Name"),
            lastname: Yup.string().required("Please Enter Your Last Name"),
            email: Yup.string().required("Please Enter Your Email"),
            birth_date: Yup.string().required("Please Enter Your Date of Birth"),
            retirement_age: Yup.string().required("Please Enter Your Retirement Age"),
            life_expectancy: Yup.string().required("Please Enter Life Expectancy"),
            savings: Yup.string().required("Please Enter Your Savings"),
            step_up: Yup.string().required("Please Enter Step-Up"),
            inflation: Yup.string().required("Please Enter Inflation"),
            address: Yup.string().required("Please Enter Your Address"),
            city: Yup.string().required("Please Enter Your City"),
            state: Yup.string().required("Please Enter Your State"),
            pincode: Yup.string().required("Please Enter Your Pincode"),
        }),
        onSubmit: (values) => {
            console.log("values", values);
        },
    });


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className='card'>
                        <div className="card-body">
                            <h4>Manage Your Profile</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='text-center'>
                                        <img src={PROFILE} alt="profile" className='w-25 rounded-lg p-1' style={{ background: '#f3f4f6', borderRadius: '50%' }} />
                                    </div>
                                    <div className='text-center h5 my-3'>Kishor</div>
                                    <div className='text-center h6'>Bangalore</div>
                                </div>
                            </div>

                            <div className='card'>
                                <div className='card-body'>
                                    <div className='h5'>Subscription</div>
                                    <div className='h6 my-3'>Member Since: <span className='text-muted'>{new Date().toLocaleDateString()}</span></div>
                                    <div className='h6 my-3'>Subscription Type: <span className='text-muted'>Trial</span></div>
                                    <div className='h6 my-3'>Subscription Start: <span className='text-muted'>{new Date().toLocaleDateString()}</span></div>
                                    <div className='h6 my-3'>Subscription End: <span className='text-muted'>{new Date().toLocaleDateString()}</span></div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <SocialNetwork />
                                </div>
                            </div>

                            {/* <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="flex-grow-1">
                                            <h5 className="card-title mb-0">Portfolio</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <a href="javascript:void(0);" className="badge bg-light text-primary fs-12"><i className="ri-add-fill align-bottom me-1"></i> Add</a>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                                                <i className="ri-github-fill"></i>
                                            </span>
                                        </div>
                                        <input type="email" className="form-control" id="gitUsername" placeholder="Username" value="@daveadame" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-primary">
                                                <i className="ri-global-fill"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" id="websiteInput" placeholder="www.example.com" value="www.velzon.com" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-success">
                                                <i className="ri-dribbble-fill"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" id="dribbleName" placeholder="Username" value="@dave_adame" />
                                    </div>
                                    <div className="d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-danger">
                                                <i className="ri-pinterest-fill"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" id="pinterestName" placeholder="Username" value="Advance Dave" />
                                    </div>
                                </div>
                            </div> */}

                        </div>


                        <div className='col'>
                            <div className='card'>
                                <div className="card-body mx-3">

                                    <div className='mb-4'>
                                        <TabBar page='Basic Details' />
                                    </div>


                                    <div>
                                        <Form className="needs-validation"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                validation.handleSubmit();
                                                return false;
                                            }}
                                        >
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="validationCustom01">First name</Label> */}
                                                        <Input
                                                            name="firstname"
                                                            placeholder="First Name"
                                                            type="text"
                                                            className="form-control"
                                                            id="validationCustom01"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.firstname || ""}
                                                            invalid={
                                                                validation.touched.firstname &&
                                                                    validation.errors.firstname
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.firstname &&
                                                            validation.errors.firstname ? (
                                                            <FormFeedback type="invalid">
                                                                {validation.errors.firstname}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="validationCustom02">Last name</Label> */}
                                                        <Input
                                                            name="lastname"
                                                            placeholder="Last Name"
                                                            type="text"
                                                            className="form-control"
                                                            id="validationCustom02"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.lastname || ""}
                                                            invalid={
                                                                validation.touched.lastname &&
                                                                    validation.errors.lastname
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.lastname &&
                                                            validation.errors.lastname ? (
                                                            <FormFeedback type="invalid">
                                                                {validation.errors.lastname}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="validationCustom02">Email</Label> */}
                                                        <Input
                                                            name="email"
                                                            placeholder="example@support.com"
                                                            type="email"
                                                            className="form-control"
                                                            id="validationCustom02"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.email || ""}
                                                            invalid={
                                                                validation.touched.email &&
                                                                    validation.errors.email
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.email &&
                                                            validation.errors.email ? (
                                                            <FormFeedback type="invalid">
                                                                {validation.errors.email}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="phone">Phone Number</Label> */}
                                                        <Input
                                                            name="phone"
                                                            placeholder="Phone Number"
                                                            type="tel"
                                                            className="form-control"
                                                            id="phone"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.phone || ""}
                                                            invalid={
                                                                validation.touched.phone &&
                                                                    validation.errors.phone
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.phone &&
                                                            validation.errors.phone ? (
                                                            <FormFeedback type="invalid">
                                                                {validation.errors.phone}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                            </Row>



                                            <Row>
                                                <Col md="6">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="birth_date">Date of Birth</Label> */}
                                                        <Input
                                                            name="birth_date"
                                                            placeholder="Date of Birth"
                                                            type="date"
                                                            className="form-control"
                                                            id="birth_date"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.birth_date || ""}
                                                            invalid={
                                                                validation.touched.birth_date &&
                                                                    validation.errors.birth_date
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.birth_date &&
                                                            validation.errors.birth_date ? (
                                                            <FormFeedback type="invalid">
                                                                    {validation.errors.birth_date}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="phone">Retirement Age</Label> */}
                                                        <Input
                                                            name="retirement_age"
                                                            placeholder="Retirement Age"
                                                            type="text"
                                                            className="form-control"
                                                            id="retirement_age"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.retirement_age || ""}
                                                            invalid={
                                                                validation.touched.retirement_age &&
                                                                    validation.errors.retirement_age
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.retirement_age &&
                                                            validation.errors.retirement_age ? (
                                                            <FormFeedback type="invalid">
                                                                    {validation.errors.retirement_age}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                            </Row>



                                            <Row>
                                                <Col md="6">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="life_expectancy">life_expectancy</Label> */}
                                                        <Input
                                                            name="life_expectancy"
                                                            placeholder="Life Expectancy"
                                                            type="text"
                                                            className="form-control"
                                                            id="life_expectancy"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.life_expectancy || ""}
                                                            invalid={
                                                                validation.touched.life_expectancy &&
                                                                    validation.errors.life_expectancy
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.life_expectancy &&
                                                            validation.errors.life_expectancy ? (
                                                            <FormFeedback type="invalid">
                                                                    {validation.errors.life_expectancy}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="savings">Savings %</Label> */}
                                                        <Input
                                                            name="savings"
                                                            placeholder="Savings %"
                                                            type="text"
                                                            className="form-control"
                                                            id="savings"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.savings || ""}
                                                            invalid={
                                                                validation.touched.savings &&
                                                                    validation.errors.savings
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.savings &&
                                                            validation.errors.savings ? (
                                                            <FormFeedback type="invalid">
                                                                    {validation.errors.savings}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                            </Row>


                                            <Row>
                                                <Col md="6">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="step_up">step_up</Label> */}
                                                        <Input
                                                            name="step_up"
                                                            placeholder="Step-Up %"
                                                            type="text"
                                                            className="form-control"
                                                            id="step_up"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.step_up || ""}
                                                            invalid={
                                                                validation.touched.step_up &&
                                                                    validation.errors.step_up
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.step_up &&
                                                            validation.errors.step_up ? (
                                                            <FormFeedback type="invalid">
                                                                    {validation.errors.step_up}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="inflation">Inflation</Label> */}
                                                        <Input
                                                            name="inflation"
                                                            placeholder="Inflation"
                                                            type="text"
                                                            className="form-control"
                                                            id="inflation"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.inflation || ""}
                                                            invalid={
                                                                validation.touched.inflation &&
                                                                    validation.errors.inflation
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.inflation &&
                                                            validation.errors.inflation ? (
                                                            <FormFeedback type="invalid">
                                                                    {validation.errors.inflation }
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                            </Row>




                                            <Row>
                                                <Col md="12">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="address">Address Line</Label> */}
                                                        <Input
                                                            name="address"
                                                            placeholder="Address Line"
                                                            type="type"
                                                            className="form-control"
                                                            id="address"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.address || ""}
                                                            invalid={
                                                                validation.touched.address &&
                                                                    validation.errors.address
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.address &&
                                                            validation.errors.address ? (
                                                            <FormFeedback type="invalid">
                                                                {validation.errors.address}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="4">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="validationCustom03">City</Label> */}
                                                        <Input
                                                            name="city"
                                                            placeholder="City"
                                                            type="text"
                                                            className="form-control"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.city || ""}
                                                            invalid={
                                                                validation.touched.city && validation.errors.city
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.city && validation.errors.city ? (
                                                            <FormFeedback type="invalid">
                                                                {validation.errors.city}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                                <Col md="4">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="validationCustom04">State</Label> */}
                                                        <Input
                                                            name="state"
                                                            placeholder="State"
                                                            type="text"
                                                            className="form-control"
                                                            id="validationCustom04"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.state || ""}
                                                            invalid={
                                                                validation.touched.state &&
                                                                    validation.errors.state
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.state &&
                                                            validation.errors.state ? (
                                                            <FormFeedback type="invalid">
                                                                {validation.errors.state}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                                <Col md="4">
                                                    <FormGroup className="mb-3">
                                                        {/* <Label htmlFor="pincode">Pincode</Label> */}
                                                        <Input
                                                            name="pincode"
                                                            placeholder="Pincode"
                                                            type="text"
                                                            className="form-control"
                                                            id="pincode"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.pincode || ""}
                                                            invalid={
                                                                validation.touched.pincode && validation.errors.pincode
                                                                    ? true
                                                                    : false
                                                            }
                                                        />
                                                        {validation.touched.pincode && validation.errors.pincode ? (
                                                            <FormFeedback type="invalid">
                                                                {validation.errors.pincode}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Button color="success" type="submit">
                                                Update
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default DashboardProfile;



