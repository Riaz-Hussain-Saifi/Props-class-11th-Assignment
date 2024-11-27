import React from "react"
const ChildComponent = ({fullName, age, occupation}) => {
typeof fullName === 'string'
typeof age === 'number'
typeof occupation === 'string'  

// Step 3: Render props passed from Parent component
  return (
    <div className="p-6 bg-gray-200 rounded-lg">
      <h3 className="text-xl font-semibold">
        I'm {fullName}, i am {age} years old and works as a {occupation}.
        <br />
        <br />
        <p className="text-sm text-balance">This is a child component rendered by the Parent component.</p>
      </h3>
    </div>
  )
}

export default ChildComponent
