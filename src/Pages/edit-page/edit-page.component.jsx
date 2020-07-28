import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentJobDetail } from "../../Redux/job/job.selectors";
import { removeCurrentJob } from "../../Redux/job/job.actions";

import FormInput from "../../Components/form-input/form-input.component";
import CustomButton from "../../Components/custom-button/custom-button.component";
import { addNewJob } from "../../Redux/job/job.actions";

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
  handleSubmit = (event) => {
    event.preventDefault();
    const { removeCurrentJob, addNewJob } = this.props;
    const { id, title, city, employer, requirements, tasks } = this.state;
    removeCurrentJob(this.state.id);

    const obj = {
      _id: id,
      title: title,
      city: city,
      employer: employer,
      requirements: requirements,
      tasks: tasks,
    };

    addNewJob(obj);

    alert("Change Updated");
  };

  addRequirements = (event) => {
    this.setState({ requirements: [...this.state.requirements, ""] });
  };
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addTasks = (event) => {
    this.setState({ tasks: [...this.state.tasks, ""] });
  };
  removeTasks = (index) => {
    this.state.tasks.splice(index, 1);
    this.setState({ tasks: this.state.tasks });
  };

  removeRequirements = (index) => {
    this.state.requirements.splice(index, 1);
    this.setState({ requirements: this.state.requirements });
  };

  handleReqChange(event) {
    const { requirements } = this.state;
    const { name, value } = event.target;
    requirements.splice(name, 1, value);
    this.setState({ requirements: [...requirements] }, () => {
      //call back function of set state
      //console.log(this.state.requirements)
    });
  }

  handleTasksChange(event) {
    const { tasks } = this.state;
    const { name, value } = event.target;
    tasks.splice(name, 1, value);
    this.setState({ tasks: [...tasks] }, () => {
      //call back function of set state
      //console.log(this.state.tasks)
    });
  }

  render() {
    const { title, city, employer, requirements, tasks } = this.state;
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
          <CustomButton
            className="rmv"
            type="button"
            onClick={(e) => this.addRequirements(e)}
          >
            &#10010;
          </CustomButton>
          {requirements !== "NA" ? (
            requirements.map((item, index) => (
              <div key={index}>
                <CustomButton
                  className="rmv"
                  type="button"
                  onClick={() => this.removeRequirements(index)}
                >
                  &#10005;
                </CustomButton>
                <FormInput
                  key={index}
                  type="text"
                  name={index}
                  value={item}
                  onChange={(e) => this.handleReqChange(e)}
                  label="Requirements"
                  required
                />
              </div>
            ))
          ) : (
            <p>NA</p>
          )}

          <h3>Tasks :</h3>
          <CustomButton
            className="rmv"
            type="button"
            onClick={(e) => this.addTasks(e)}
          >
            &#10010;
          </CustomButton>
          {tasks !== "NA" ? (
            tasks.map((item, index) => (
              <div key={index}>
                <CustomButton
                  className="rmv"
                  type="button"
                  onClick={() => this.removeTasks(index)}
                >
                  &#10005;
                </CustomButton>
                <FormInput
                  key={index}
                  type="text"
                  name={index}
                  value={item}
                  onChange={(e) => this.handleTasksChange(e)}
                  label="Tasks"
                  required
                />
              </div>
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

const mapDispatchToProps = (dispatch) => ({
  removeCurrentJob: (_id) => dispatch(removeCurrentJob(_id)),
  addNewJob: (job) => dispatch(addNewJob(job)),
});
const mapStateToProps = createStructuredSelector({
  currentJobDetail: selectCurrentJobDetail,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
