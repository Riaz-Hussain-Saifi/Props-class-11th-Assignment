import React from "react";

// Define the type for the props
interface ChildProps {
  fullName: string;
  age: number;
  occupation: string;
}
const ChildComponent: React.FC<ChildProps> = ({fullName, age, occupation}) => {
 
// Step 3: Render props passed from Parent component
  return (
    <div className="p-6 bg-gray-200 rounded-lg">
      <h3 className="text-xl font-semibold">
      {/* className="text-blue-500 hover:border-b-2 border-blue-300" */}
        I'm <span className="text-red-500 hover:text-red-600 hover:border-b-2 border-green-500">{fullName}</span> i am <span className="text-green-500 hover:text-green-600 hover:border-b-2 border-blue-400">{age}</span> years old and works as a <span className="text-blue-500 hover:text-blue-600 hover:border-b-2 border-red-500">{occupation}</span>.
        <br />
        <br />
        <p className="text-sm text-balance">This is a child component rendered by the Parent component.</p>
      </h3>
    </div>
  )
}

export default ChildComponent
