import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentJobDetail } from "../../Redux/job/job.selectors";

import FormInput from "../../Components/form-input/form-input.component";
import CustomButton from "../../Components/custom-button/custom-button.component";

import "./edit-page.styles.scss";

class EditPage extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      city: "",
      title: "",
      employer: "",
      requirements: [],
      tasks: [],
    };
  }

  componentDidMount() {
    const { currentJobDetail } = this.props;
    this.setState({
      id: currentJobDetail._id,
      title: currentJobDetail.title,
      city: currentJobDetail.city,
      employer: currentJobDetail.employer,
      requirements: currentJobDetail.requirements,
      tasks: currentJobDetail.tasks,
    });
  }
  handleSubmit = async (event) => {
    
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleReqChange(event) {
    const { requirements } = this.state;
    const { name, value } = event.target;
    requirements.splice(name, 1, value)
    this.setState({ requirements: [...requirements] }, () => {
      //call back function of set state
      //console.log(this.state.requirements)
    });
  }

  handleTasksChange(event) {
    const { tasks } = this.state;
    const { name, value } = event.target;
    tasks.splice(name, 1, value)
    this.setState({ tasks: [...tasks] }, () => {
      //call back function of set state
      console.log(this.state.tasks)
    });
  }

  render() {
    const { title, city, employer, requirements, tasks } = this.state;
    console.log(requirements);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="title"
            value={title}
            onChange={(e) => this.handleChange(e)}
            label="Title"
            required
          />

          <FormInput
            type="text"
            name="employer"
            value={employer}
            onChange={(e) => this.handleChange(e)}
            label="Employer"
            required
          />

          <FormInput
            type="text"
            name="city"
            value={city}
            onChange={(e) => this.handleChange(e)}
            label="City"
            required
          />
        <h3>Requirements :</h3>
          {requirements !== "NA" ? (
            requirements.map((item, index) => (
              <FormInput
                key={index}
                type="text"
                name={index}
                value={item}
                onChange={(e) => this.handleReqChange(e)}
                label="Requirements"
                required
              />
            ))
          ) : (
            <p>NA</p>
          )}

          <h3>Tasks :</h3>
          {tasks !== "NA" ? (
            tasks.map((item, index) => (
              <FormInput
                key={index}
                type="text"
                name={index}
                value={item}
                onChange={(e) => this.handleTasksChange(e)}
                label="Tasks"
                required
              />
            ))
          ) : (
            <p>NA</p>
          )}

          <CustomButton type="submit" saveButton>
            Save
          </CustomButton>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//     setCurrentJobDetail: (_id) => dispatch(setCurrentJobDetail(_id)),
//   });

const mapStateToProps = createStructuredSelector({
  currentJobDetail: selectCurrentJobDetail,
});

export default connect(mapStateToProps, null)(EditPage);
