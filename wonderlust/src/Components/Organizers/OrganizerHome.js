import React, { useState, useEffect } from "react";
import api from "../../Utils/AxiosAuth";
import OrgCreateExp from "./OrgCreateExp";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";
import { addExperience,addInfo } from "../../Actions/index";
import PagSystem from "../PagSystem";
import { Container, Row, Col } from 'reactstrap';

function OrganizerHome(props) {
  const [loading, setLoading] = useState();

  const [exps, setExps] = useState([]);

 
  
 
  useEffect(() => {
    
    const getExps = async () => {
      setLoading(true);
      const res = await api().get(`/api/exp/${props.userId}`);
      props.addExperience(res.data);
      setExps(res.data);
      setLoading(false);
    };
    getExps();
  }, [exps.length,props.userId]);

  return (
    <div>
    {props.exps &&
     <Container style={cont} className="org-home-cont">
       <Row>
        <Col xs='12' md="4"><OrgCreateExp userId={props.userId} /></Col>
        <Col xs='12' md="8"> <PagSystem exps={props.exps} user={false} loading={loading} /></Col>
     </Row>
      </Container>
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
   
    exps: state.user.experiences
   
  };
}
const mapDispatchToProps = {
  addExperience: addExperience,
  addInfo:addInfo
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OrganizerHome)
);
const cont={
  height:"100vh",
  paddingTop:"100px",
  paddingBottom:"50px"
  

}