'use client';

import EditForm from "@/component/EditItem/EditForm";

export const EditPage: React.FC = () => {
  const registFunc = () => {
    
  }
  return (
    <EditForm
      isEdit = {true}
      registFunc = {() => registFunc()}
    ></EditForm>
  )
}
export default EditPage;
