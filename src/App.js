import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from "react-redux"

import {addFeature,removeFeature,removeFeatureBack,addFeatureBack} from "./actions"


const App = (props) => {
 
  //console.log("carFeaturesData Check",  sortObj(props.carFeaturesData))


    function sortObj (recObj) {
      return{

        ...recObj,
        additionalFeatures: recObj.additionalFeatures.sort(
          function (a, b) {
            return a.id - b.id;
          })
         
       
        
        
        
        
        
        
        
      }
      }
      


   

  const removeFeature = item => {
    // dispatch an action here to remove an item
   // console.log("Remove Feature", item)
   props.removeFeature (item)
   props.addFeatureBack(item)
   props.removeFeatureBack(item)
    
  };

  const buyItem = item => {
    
   // console.log("ADD Feature", item)
    props.addFeature(item)
    props.removeFeature (item)

  };
 
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.carData.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.carData.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={  sortObj(props.carFeaturesData).additionalFeatures} />
        <Total car={props.carData.car} additionalPrice={props.carFeaturesData.additionalPrice} />
      </div>
    </div>
  );
   
};

const mapStateToProps = (globalState) => {
return{
  carData : globalState.carsReducer,
  carFeaturesData : globalState.carFeaturesReducer
}
}
export default  connect(mapStateToProps,{addFeature,removeFeature,addFeatureBack,removeFeatureBack})(App);






// console.log("carFeaturesData Check",  sortObj("hey"))
//     const sortObj = (recObj) => {
//       return{
//         recObj
//       }
//       }


// console.log("carFeaturesData Check",  sortObj("hey"))
// function sortObj (recObj) {
//   return{
//     recObj
//   }
//   }


