'use client';

import EditForm from "@/component/EditItem/EditForm";


export default function NewItem (){
  const registFunc = () => {

  }
  return (
    <EditForm
      isEdit = {false}
      registFunc={() => registFunc()}
    ></EditForm>
  )
}