import React, { useState, useEffect } from "react";
import api from "../../Utils/AxiosAuth";
import OrgCreateExp from "./OrgCreateExp";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";
import { addExperience,addInfo } from "../../Actions/index";
import PagSystem from "../PagSystem";

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
  }, [exps.length]);

  return (
    <>
    {props.exps &&
      <div style={homeContainer}>
        <OrgCreateExp userId={props.userId} />
        <PagSystem exps={props.exps} user={false} loading={loading} />
      </div>
      }
    </>
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
const homeContainer = {
  width: "100%",
  display: "flex"
};
const pag = {
  width: "100%",
  display: "flex",
  padding: "10px",
  justifyContent: "center"
};
const pagGroup = {
  display: "flex",
  flexDirection: "column",
  width: "100%"
};
