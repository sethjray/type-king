/** @format */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setLoading } from '../actions/index'

import logo from '../logo.svg';
import './App.css';
import { generate, exerciseOne } from '../utils/words';
import useKeyPress from '../hooks/useKeyPress';
import { currentTime } from '../utils/time';

//const startingWords = generate();

const startingWords = exerciseOne();
var exerciseDone = false;

export default connect(
	mapStateToProps,
	matchDispatchToProps
)(function Exercise(props) {
    const [leftPadding, setLeftPadding] = useState(
        new Array(20).fill(' ').join(''),
      );
      const [outgoingChars, setOutgoingChars] = useState('');
      const [currentChar, setCurrentChar] = useState(startingWords.charAt(0));
      const [incomingChars, setIncomingChars] = useState(startingWords.substr(1));
      const [startTime, setStartTime] = useState();
      const [wordCount, setWordCount] = useState(0);
      const [wpm, setWpm] = useState(0);
      const [accuracy, setAccuracy] = useState(0);
      const[typedChars, setTypedChars] = useState('');
      
    
      useKeyPress(key => {
        let updatedOutgoingChars = outgoingChars;
        let updatedIncomingChars = incomingChars;
    
        if (!startTime) {
          setStartTime(currentTime());
        }

        //Put exercise end logic here?
        console.log(exerciseDone);
        if(exerciseDone === true) {
          setIncomingChars("Finished!");
          setOutgoingChars("Finished!");
          //Save WPM and accuracy here for stats?
          return;
        }
        console.log(incomingChars);
    
        const updatedTypedChars = typedChars + key;
        setTypedChars(updatedTypedChars);
        setAccuracy(((updatedOutgoingChars.length * 100) / updatedTypedChars.length).toFixed(2,),);
    
        if(key === currentChar) {
          if (incomingChars.charAt(0) === ' ') {
            setWordCount(wordCount + 1);
            const durationInMinutes = (currentTime() - startTime) / 60000.0;
            setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
          }
    
          if(leftPadding.length > 0) {
            setLeftPadding(leftPadding.substring(1));
          }
    
          updatedOutgoingChars += currentChar;
          setOutgoingChars(updatedOutgoingChars);
    
          setCurrentChar(incomingChars.charAt(0));
    
          updatedIncomingChars = incomingChars.substring(1);
        //   if(updatedIncomingChars.split(' ').length < 10) {
        //     updatedIncomingChars += ' ' + generate();
        //   }
          if(currentChar == '.') {
            exerciseDone = true;
          }
        
          setIncomingChars(updatedIncomingChars);
        }
      });
    
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="Character">
              <span className="Character-out">{(leftPadding + outgoingChars).slice(-20)}</span>
              <span className="Character-current">{currentChar}</span>
              <span>{incomingChars.substr(0, 20)}</span>
            </p>
            <h3>
              WPM: {wpm} | ACC: {accuracy}%
            </h3>
          </header>
        </div>
      );
})

//******************************************************************************
// Redux Incoming Variables Function
function mapStateToProps(state) {
	return {
    exerciseString: state.exerciseString,
	};
}
//******************************************************************************
// Redux Outgoing Variables Function
function matchDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			setLoading: setLoading,
		},
		dispatch
	)
}