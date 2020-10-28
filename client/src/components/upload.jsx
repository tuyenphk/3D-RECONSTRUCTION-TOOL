import React, {Component, useState} from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);

  const filterBySize = (file) => {
    //filter out files larger than 5MB
    return file.size < 5242880;
  };

  const fileChangedHandler = event => {
    let file = event.target.files[0];
    let reader = new FileReader();

    console.log(file);
    reader.onload = function(e) {
      setFile(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);

  //   if (file != ".png" ) {
  //     window.alert("File does not support. You must use .png or .jpg ");
  //     return false;
  //  }
  //  if (file.size > 10e6) {
  //    window.alert("Please upload a file smaller than 10 MB");
  //    return false;
  //  }
   
  };


//   uploadHandler = async (event) => { 
//     event.preventDefault() 
//     const data = new FormData() 
//     data.append('image', 
//     this.state.selectedFile) 
//     await axios.post("http://localhost:9001/uploads", 
//     data, { }).then(res => { 
//     // then print response status 
//     console.log(res.statusText) 
//     }).catch(error => 
//     console.log(error)) 
// }

  // uploadHandler = event => {
  //   let formdata = new FormData()
  //   formdata.append('image', this.state.selectedFile)
  //   axios({
  //     url: 'http://localhost:8000/upload',
  //     method: "POST",
  //     headers: {
  //       authorization: "your token"
  //     },
  //     data: formdata
  //   }). then ((res)=>{

  //   })
  // }

  // uploadHandler = event => {
  //   event.preventDefault()
  //   const data = new FormData() 
  //   data.append('image', this.state.selectedFile)
  //   axios.post("http://localhost:9001/uploads", data, { 
  //   })
  //     .then(res => { // then print response status
  //       console.log(res.statusText)
  //     }).catch(error => console.log(error))
  //   }
  
    return (
      <div id="upload">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8"> 
              <div className="upload-text">
                <h3>Upload a 2D image to get a 3D model</h3>        
                
                <input className="btn btn-secondary" 
                      id="fileInput" 
                      name="file" type="file" 
                      inputProps={{ accept: 'image/*' }}
                      fileFilter={filterBySize}
                      onChange={fileChangedHandler} 
                />
               
                {/* <button className="btn btn-primary" style={{float:"left", margin: "0px"}}
                          id="renderButton">
                  Upload
                </button> */}
             
                <button className="btn btn-primary" style={{float:"left", marginLeft: "10px", marginBottom: "10px"}} 
                        id="renderButton">
                  Render 3D Model
                </button>
              
              </div>
            </div>
          </div>
          <img src={file} alt={""} width="400" height="400" text-align="left" style={{display:'block'}} />
        </div>
      </div>
    )
  }


export default Upload;