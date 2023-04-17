import React, { useState } from 'react'
import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const SocialNetwork = () => {

    const [modal_standard, setmodal_standard] = useState(false);

    function tog_standard() {
        setmodal_standard(!modal_standard);
    }


    return (
        <div className='mt-1'>
            <div className='d-flex justify-content-between align-content-center'>
                <div className='d-flex justify-content-between align-content-center'>
                    <div className='' style={{ marginRight: '15px'}}>
                        <a href='https://facebook.com' target="_blank" rel="noreferrer" style={{ color:'#1877f2', fontSize: '1.5rem'}}>
                            <i className="ri-facebook-box-line"></i>
                        </a>
                    </div>
                    <div className='' style={{ marginRight: '15px' }}>
                        <a href='https://facebook.com' target="_blank" rel="noreferrer" style={{ color: '#c32aa3', fontSize: '1.5rem' }}>
                            <i className="ri-instagram-line"></i>
                        </a>
                    </div>
                    <div className='' style={{ marginRight: '15px' }}>
                        <a href='https://facebook.com' target="_blank" rel="noreferrer" style={{ color: '#1da1f2', fontSize: '1.5rem' }}>
                            <i className="ri-twitter-line"></i>
                        </a>
                    </div>
                    <div className=''>
                        <a href='https://facebook.com' target="_blank" rel="noreferrer" style={{ color: '#0a66c2', fontSize: '1.5rem' }}>
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                    </div>
                </div>
                <button  className='rounded-circle border-0 bg-primary' style={{ width: '40px', height: '40px', fontSize: '1.1rem', color: 'white' }} onClick={() => tog_standard()}>
                    <i className="ri-edit-line"></i>
                </button>
            </div>


            <Modal id="myModal"
                isOpen={modal_standard} 
                toggle={() => {
                    tog_standard();
                }}
            >
                <ModalHeader>
                    <h5>Social Network</h5>
                </ModalHeader>
                <ModalBody>
                    <div>
                        <div className='mb-3'>
                            <Label htmlFor="facebook" className="form-label">Facebook</Label>
                            <Input type="password" className="form-control" id="facebook" />
                        </div>
                        <div className='mb-3'>
                            <Label htmlFor="instagram" className="form-label">Instagram</Label>
                            <Input type="password" className="form-control" id="instagram" />
                        </div>
                        <div className='mb-3'>
                            <Label htmlFor="twitter" className="form-label">Twitter</Label>
                            <Input type="password" className="form-control" id="twitter" />
                        </div>
                        <div className='mb-3'>
                            <Label htmlFor="linkedin" className="form-label">LinkedIn</Label>
                            <Input type="password" className="form-control" id="linkedin" />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="light"
                        onClick={() => {
                            tog_standard();
                        }}
                    >
                        Close
                    </Button>
                    <Button color="primary">
                        Save changes
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default SocialNetwork;