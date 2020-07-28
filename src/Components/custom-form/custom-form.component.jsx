import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./custom-form.styles.scss";
import { useHistory } from "react-router-dom";
import uuid from "react-uuid";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectJobItems } from "../../Redux/job/job.selectors";

import { addNewJob } from "../../Redux/job/job.actions";

class CustomForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      city: "",
      employer: "",
      requirements: [],
      tasks: [],
    };
  }

  handleSubmit = async (event) => {
    const { addNewJob } = this.props;
    event.preventDefault();
    const { title, city, employer, requirements, tasks } = this.state;

    const obj = {
      _id: uuid(),
      title: title,
      city: city,
      employer: employer,
      requirements: requirements,
      tasks: tasks,
    };

    addNewJob(obj);

    this.setState({
      title: "",
      city: "",
      employer: "",
      _id: "",
      requirements: [],
      tasks: [],
    });
    alert("Saved Successfully");
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRequirementsChange = (event, index) => {
    const newItems = [...this.state.requirements];
    newItems[index] = event.target.value;
    this.setState({ requirements: newItems });
  };

  handleTasksChange = (event, index) => {
    const newItems = [...this.state.tasks];
    newItems[index] = event.target.value;
    this.setState({ tasks: newItems });
  };

  addRequirements = (event) => {
    this.setState({ requirements: [...this.state.requirements, ""] });
  };

  addTasks = (event) => {
    this.setState({ tasks: [...this.state.tasks, ""] });
  };

  removeRequirements = (index) => {
    this.state.requirements.splice(index, 1);
    this.setState({ requirements: this.state.requirements });
  };

  removeTasks = (index) => {
    this.state.tasks.splice(index, 1);
    this.setState({ tasks: this.state.tasks });
  };

  render() {
    const { title, city, employer } = this.state;
    return (
      <div className="add-job">
        <h2 className="title">Add a new job posting</h2>
        <span>Please enter the required details</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            label="Title"
            required
          />

          <FormInput
            type="text"
            name="city"
            value={city}
            onChange={this.handleChange}
            label="City"
            required
          />

          <FormInput
            type="text"
            name="employer"
            value={employer}
            onChange={this.handleChange}
            label="Employer"
            required
          />
          <div>
          <span>Add Requirements</span>
          <CustomButton className='rmv' onClick={(e) => this.addRequirements(e)}>
          &#10010;
          </CustomButton>

          {this.state.requirements.map((requirement, index) => (
            <div key={index}>
              <CustomButton
                className="rmv"
                onClick={() => this.removeRequirements(index)}
              >
                &#10005;
              </CustomButton>

              <FormInput
                type="text"
                name="requirement"
                value={requirement}
                onChange={(e) => this.handleRequirementsChange(e, index)}
                label="Requirement"
                required
              />
            </div>
          ))}
          </div>
          <div>
          <span>Add Tasks</span>
          <CustomButton className='rmv' onClick={(e) => this.addTasks(e)}>
          &#10010;
          </CustomButton>
          {this.state.tasks.map((task, index) => (
            <div key={index}>
              <CustomButton
                className="rmv"
                onClick={() => this.removeTasks(index)}
              >
                &#10005;
              </CustomButton>

              <FormInput
                type="text"
                name="requirement"
                value={task}
                onChange={(e) => this.handleTasksChange(e, index)}
                label="Requirement"
                required
              />
            </div>
          ))}
          </div>
          <div>
          <hr></hr>
          <hr></hr>
          <CustomButton type="submit" saveButton>
            Save
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  jobList: selectJobItems,
});

const mapDispatchToProps = (dispatch) => ({
  addNewJob: (job) => dispatch(addNewJob(job)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomForm);
