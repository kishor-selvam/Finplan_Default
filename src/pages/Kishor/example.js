import React from 'react';
import { Container } from "reactstrap";

//Import Breadcrumb
import BreadCrumb from "../../Components/Common/BreadCrumb";

    const Mobile = () => {
        document.title = "Kishor | Mobile";   //for meta title
        return (
            <>
                <div className="page-content">
                    <Container fluid={true}>
                        
                            <h1>Mobile</h1>

                    </Container>
                </div>
            </>
        );
    }

export default Mobile;