import React from "react";

const ManageUser = () => {


  const uploadImage = (e) => {
    const element = e.currentTarget
    const fileList = element.files;
    if (fileList && fileList?.length) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        // setImage(reader.result)
      });
      reader.readAsDataURL(fileList[0]);
    }
  }

  return <div className='P-manage-user'>

    <label>
      <input type="file"/>

    </label>
    <label htmlFor="">
      <input type="text"/>

    </label>
  </div>
}

export default ManageUser