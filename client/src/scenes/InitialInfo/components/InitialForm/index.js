import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp, setPlayerName,
        setOpponentName, setEventName,
        setServe, setTableSide, setNumberOfSets,
        setDate
        } from '../../../../actions/index'; 


import WhiteButton from '../../../../components/Buttons/WhiteButton/index';

class InitialForm extends Component {

    constructor(){
        super();

        this.state = {
            serveStyle: 'radio--ex',
            respondStyle: '',
            upTabStyle: 'checked',
            lowTabStyle: '',
            tableSide: '',
            serve: true,
            date: '',
            sets: 0
        }
    }

    componentDidMount(){
        this.setState({
            serve: this.props.serve,
            tableSide: this.props.tableSide,
            date: this.takeDate(),
            sets: this.props.setsLimit
        });
    }



    takeDate(){
        const currentDate = new Date();
        const date = this.leadingZero(currentDate.getDate()) + '.'
        + this.leadingZero(currentDate.getMonth()+1) + '.'
        + currentDate.getFullYear()
        return date;
    }

    leadingZero(i) {
        return (i < 10)? '0'+i : i;
    }

    changeServeStyle(trigger){

        if(trigger){
            this.setState({
                serveStyle: "radio--ex",
                respondStyle: ""
            });
        }else {
            this.setState({
                serveStyle: "",
                respondStyle: "radio--ex"
            });
        }
    }

    changeTableSide(trigger){

        if(trigger){
            this.setState({
                upTabStyle: "checked",
                lowTabStyle: ""
            });
        }else {
            this.setState({
                upTabStyle: "",
                lowTabStyle: "checked"
            });
        }
    }

    onSubmit(values) {

        if(values.event === undefined){
            this.props.setEventName('event');
        }else {
            this.props.setEventName(values.event);
        }
        if(values.date === undefined){
            this.props.setDate(this.state.date);
        }else {
            this.props.setDate(values.date);
        }
        if(values.player === undefined){
            this.props.setPlayerName('player');
        }else {
            this.props.setPlayerName(values.player);
        }
        if(values.opponent === undefined){
            this.props.setOpponentName('opponent');
        }else {
            this.props.setOpponentName(values.opponent);
        }
        if(values.serve === undefined){
            this.props.setServe(this.state.serve);
        }else {
            this.props.setServe(values.serve);
        }
        if(values.table === undefined){
            this.props.setTableSide(this.state.tableSide);
        }else {
            this.props.setTableSide(values.table);
        }
        if(values.sets === undefined){
            this.props.setNumberOfSets(this.state.sets);
        }else {
            this.props.setNumberOfSets(values.sets);
        }
    }

    renderField(field){
        return(
            <div>
                <input
                    type={field.type}
                    placeholder={field.placeholder}
                    checked={field.checked}
                    id={field.id}
                    {...field.input}
                />
                <p className="warning">{field.meta.touched ? field.meta.error : ''}</p>
            </div>
        );
    }    

    render() {

        const { handleSubmit } = this.props;

        return (
            <div className="initial-data">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="initial-data--container--fields col--12 col-center">
                        <Field
                            placeholder="event"
                            name="event"
                            type="text"
                            component = {this.renderField}
                        />
                        <Field
                            placeholder={this.state.date}
                            name="date"
                            type="text"
                            component = {this.renderField}
                        />
                        <Field
                            placeholder="player"
                            name="player"
                            type="text"
                            component = {this.renderField}
                        />
                        <Field
                            placeholder="opponent"
                            name="opponent"
                            type="text"
                            component = {this.renderField}
                        />
                    </div>
                    <div className="initial-data--container--serve row-flex col--12">
                        <div className="action col--2 col-center" 
                            onClick = {() => {this.changeServeStyle(true)}}>
                            <div className = {`radio ${this.state.serveStyle}`}>
                                <Field
                                    name="start"
                                    type="radio"
                                    id="serve"
                                    value="serve"
                                    checked={true}
                                    component = {this.renderField}
                                />
                            </div>
                        </div>
                        <div className="action col--4 col-center">serve</div>
                        <div className="action col--2 col-center" 
                            onClick = {() => {this.changeServeStyle(false)}}>
                            <div className = {`radio ${this.state.respondStyle}`}>
                                <Field
                                    name="start"
                                    type="radio"
                                    id="respond"
                                    value="respond"
                                    component = {this.renderField}
                                />  
                            </div>
                        </div>
                        <div className="action col--4 col-center">respond</div>
                    </div>
                    <div className="initial-data--container--table col--7 col-center">
                            <p className="col--12">Select the starting side of the table:</p>
                            <div className={`initial-data--container--table--half ${this.state.upTabStyle}`}
                                onClick = {() => {this.changeTableSide(true)}}>
                                <Field
                                    name="table"
                                    type="radio"
                                    id="upper"
                                    value="upper"
                                    component = {this.renderField}
                                />  
                            </div>
                            <div className={`initial-data--container--table--half ${this.state.lowTabStyle}`}
                                onClick = {() => {this.changeTableSide(false)}}>
                                <Field
                                    name="table"
                                    type="radio"
                                    id="lower"
                                    value="lower"
                                    component = {this.renderField}
                                /> 
                            </div> 
                    </div>
                    <div className="initial-data--container--sets col--5 col-center">
                        <p>Won sets:</p>
                        <Field
                            placeholder={this.state.sets}
                            name="sets"
                            type="text"
                            value="sets"
                            component = {this.renderField}
                        />                                      
                    </div>
                    <div className="initial-data--container--button col--12 col-center">
                        <WhiteButton text='Go to the test' onClick = { () => {}} address='/test' />
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    
    const errors = {};

    if(values.sets){
        if(values.sets > 5){
            errors.sets = 'max 4'
        }
    }

    return errors;
}


function mapStateToProps(state){

    return {
        serve: state.initialData.serve,
        tableSide: state.initialData.playerTableSide,
        eventName: state.initialData.eventName,
        setsLimit: state.initialData.setsLimit
    }
}
  
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        setPlayerName,
        setOpponentName, 
        setEventName,
        setServe, 
        setTableSide, 
        setNumberOfSets,
        setDate,
        signUp
    }, dispatch);
}

export default reduxForm({
    validate,
    form: 'InitialForm'
})(
    connect(mapStateToProps, mapDispatchToProps)(InitialForm)
);