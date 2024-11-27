import React from 'react'
import ChildComponent from './child/page'

const ParentComponent = () => {
  // Step 1: Create 3 variables in Parent component
  const FullName = "Riaz Hussain";
  const Age = 23;
  const Occupation = "Full Stack Developer Student";

  return (
    <div className="mx-8 my-6">

      {/* Step 2: Pass variables as props to Child component */}
      <h2 className="text-2xl font-semibold mb-4">Parent Component</h2>
      <ChildComponent fullName={FullName} age={Age} occupation={Occupation} />
    </div>
  )
}

export default ParentComponent
