import { AddPropertyForm } from "./_components/add-property"

export default function AddPropertyPage() {
  return (
    
    <>
    <div className="flex flex-col">
    <div className="font-semibold text-lg m-4">
      Add Property
    </div>
    <div className="m-4">
      <AddPropertyForm/>
    </div>
    </div>
   
    </>
    
  )
}

