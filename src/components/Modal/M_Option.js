import React from "react";
import { ModalSelect } from "./ModalSt";
import { connect } from "react-redux";
import {
  Choice_ROUND_OF_16,
  Choice_ROUND_OF_8,
  Choice_ROUND_OF_4,
} from "../../redux/round/actions";

const M_Option = ({
  Choice_ROUND_OF_16,
  Choice_ROUND_OF_8,
  Choice_ROUND_OF_4,
}) => {
  const handleValue = (e) => {
    // console.log(e.target.value);
    const roundValue = e.target.value;
    switch (roundValue) {
      case "16":
        return Choice_ROUND_OF_16();
      case "8":
        return Choice_ROUND_OF_8();
      case "4":
        return Choice_ROUND_OF_4();
    }
  };

  return (
    <ModalSelect className="selected" onChange={handleValue}>
      <option value="16" key="1">
        16강
      </option>
      <option value="8" key="2" selected>
        8강
      </option>
      <option value="4" key="3">
        4강
      </option>
    </ModalSelect>
  );
};

const mapStateToProps = ({ rounds }) => {
  return {
    round: rounds.round,
  };
};

const mapDispatchToProps = {
  Choice_ROUND_OF_16,
  Choice_ROUND_OF_8,
  Choice_ROUND_OF_4,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     Choice_ROUND_OF_16: () => dispatch(Choice_ROUND_OF_16()),
//     Choice_ROUND_OF_8: () => dispatch(Choice_ROUND_OF_8()),
//     Choice_ROUND_OF_4: () => dispatch(Choice_ROUND_OF_4()),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(M_Option);
