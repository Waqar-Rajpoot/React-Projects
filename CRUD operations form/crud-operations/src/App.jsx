import { useState } from "react"
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import { ToastContainer, toast } from "react-toastify";

function App() {
  let [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: "",
  })

  let [userData, setUserData] = useState([]);
  let getValue = (e) => {
    let oldData = { ...formData }
    let inputName = e.target.name;
    let inputValue = e.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let currentUserFormData = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage
    }


    if (formData.index === '') {



      let checkFilter = userData.filter((v) => v.uemail == formData.uemail || v.uphone == formData.uphone)

      if (checkFilter.length == 1) {

        toast.error("Email or Phone No already exist!");

      } else {

        let oldUserData = [...userData, currentUserFormData];
        setUserData(oldUserData);
        toast.success("Data Successfully Entered!");

        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: ''
        })
      }
    } else {
      let editIndex = formData.index;
      let oldData = userData;


      let checkFilter = userData.filter((v, i) => (v.uemail == formData.uemail || v.uphone == formData.uphone) && i!=editIndex)
      if (checkFilter.length == 0) {
        
      

      oldData[editIndex]['uname'] = formData.uname;
      oldData[editIndex]['uemail'] = formData.uemail;
      oldData[editIndex]['uphone'] = formData.uphone;
      oldData[editIndex]['umessage'] = formData.umessage;
      setUserData(oldData);
      setFormData({
        uname: '',
        uemail: '',
        uphone: '',
        umessage: '',
        index: ''
      })
    }else{
      toast.error("Email or Phone No already exist!");
    }
    }
  }
  const deleteRow = (indexNumber) => {
    const filterRow = userData.filter((v, i) => i != indexNumber)
    toast.success("Data Deleted!");

    setUserData(filterRow);
  }
  const editRow = (indexNumber) => {
    let editData = userData.filter((v, i) => i == indexNumber)[0];
    editData['index'] = indexNumber;
    setFormData(editData);
  }
  return (
    <>
      <div className="container">
        <ToastContainer />
        <div className="inputForm">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Name</label><br />
              <input type="text" value={formData.uname} name="uname" onChange={getValue} />
            </div>
            <div>
              <label htmlFor="">Email</label><br />
              <input type="email" value={formData.uemail} name="uemail" onChange={getValue} />
            </div>
            <div>
              <label htmlFor="">Phone</label><br />
              <input type="text" value={formData.uphone} name="uphone" onChange={getValue} />
            </div>
            <div>
              <label htmlFor="">Message </label><br />
              <textarea id="" rows={5} cols={33} placeholder="opitional..." name="umessage" value={formData.umessage} onChange={getValue}></textarea>
            </div>
            <div>
              <button>
                {formData.index !== "" ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
        <div className="inputTable">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                userData.length >= 1
                  ?
                  userData.map((obj, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{obj.uname}</td>
                        <td>{obj.uemail}</td>
                        <td>{obj.uphone}</td>
                        <td>{obj.umessage}</td>
                        <td>
                          <button onClick={() => deleteRow(i)}>Delete</button>
                          <button onClick={() => editRow(i)}>Update</button>
                        </td>
                      </tr>
                    )
                  })

                  :
                  <tr>
                    <td colSpan={6}>No Data Found Yet</td>
                  </tr>
              }

            </tbody>
          </table>
        </div>
      </div >
    </>
  )
}

export default App
