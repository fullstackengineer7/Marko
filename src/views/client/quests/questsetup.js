import { useCallback, useState, useEffect } from 'react';
import Dropzone from '../../../components/client/dropzone';
import Cal_Icon from '../../../assets/img/buttons/calendar.svg';
// import Switch from "react-switch";
import info_icon from '../../../assets/img/info.svg';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import cuid from "cuid";

import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import test_img from '../../../assets/test.png';

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css"; 
// // CSS Modules, react-datepicker-cssmodules.css// 
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const QuestSetup = () => {

	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("aa");
	 const [date, setDate] = useState(null);
	const [noedate, setNoEDate] = useState(false);
	const handleEDate = ( checked ) => { setNoEDate( checked ); console.log(checked) }
	const [editorState, setEditorState] = useState(
	    () => EditorState.createEmpty(),
	);
	//opened image
	const [images, setImages] = useState([]);

	const onDrop = useCallback(acceptedFiles => {
	    // Loop through accepted files
	    acceptedFiles.map(file => {
	      // Initialize FileReader browser API
	      const reader = new FileReader();
	      // onload callback gets called after the reader reads the file data
	      reader.onload = function(e) {
	        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it. 
	        setImages(prevState => [
	          ...prevState,
	          { id: cuid(), src: e.target.result }
	        ]);
	      };
	      // Read the file as Data URL (since we accept only images)
	      reader.readAsDataURL(file);
	      return file;
	    });
	}, []);

	const Image = ({ image }) => {
	  return (
	    <div className="file-item">
	      <img src={image.src}  className="quest-setup-img" />
	    </div>
	  );
	};

	const ImageList = ({ images }) => {

	  // render each image by calling Image component
	  const renderImage = (image, index) => {
	    return (
	      <Image
	        image={image}
	        key={`${image.id}-image`}
	      />
	    );
	  };

	  // Return the list of files
	  return <section className="file-list">{images.map(renderImage)}</section>;
	};

	return (
		<>
			<div className="">
				<div className="flex flex-row admin-quest-container gap-3">
					<div className="admin-setup-component">
						<div className="admin-setup-component-container">
					    	<div className="admin-setup-title">
					    	<p className="title">Title</p>
					    	</div>
					    	<div className="ipt-text-div">
								<input type="text" placeholder="Quest title" className="ipt_title"/>
								<div className="flex flex-row align-items-center admin-setup-title">
						    		<p className="title">Description</p>
						    		<img src={info_icon}/>
						    	</div>
						    	<Editor 
						    	  editorState={editorState}
	        					  onEditorStateChange={setEditorState}
								  wrapperClassName="wrapper-class"
								  editorClassName="editor-class"
								  toolbarClassName="toolbar-class"
								  toolbar={{ 
								  	options: ["blockType",  "inline", "list", "image", "link"],

							        blockType: {
							          inDropdown: false, options:['H1','H2']
							        },
							        inline: { inDropdown: false, options:['bold','italic','underline'] },
							        list: { inDropdown: false, options:['unordered','ordered'] },
							        link: { inDropdown: false, options:['link'] },

								  }}
								/>
							</div>
						</div>
					</div>
					<div className="admin-setup-component">
					    <div className="admin-setup-component-container">
					    	<div className="admin-setup-title">
					    	<p className="title">Add picture</p>	
					    	</div>						
							{	images.length > 0 ?
									<> 
										<div className="quest-setup-img-containter">
											<Image image={images[0]}/>
											</div>
										<div className="admin-align-horizontal">
											<div className="quest-setup-del-btn">Delete</div>
											<div className="quest-setup-del-btn">Update</div>
										</div>
									</>
									: <Dropzone onDrop={onDrop} accept={"image/*"} />
							}
						</div>						
					</div>
				</div>
				<div className="flex flex-row admin-quest-container gap-3">
					<div className="admin-setup-component">
						<div className="admin-setup-component-container">
							<div className="admin-setup-title">
							<p className="title">Schedule</p>						
							</div>
							<div className="flex flex-row  date-align-horizontal gap-3">
								<Calendar id="icon" value={startDate} onChange={(e) => setStartDate(e.value)} showIcon placeholder='Starting date'/>								
								<Calendar id="icon" value={endDate} onChange={(e) => setEndDate(e.value)} showIcon placeholder="Ending date"/>
								
							</div>
							<div className="date-align-right">
								<div className="quest-setup-date-noending-btn">
								  <span className="date-label">No ending date</span>
								  <InputSwitch checked={noedate} onChange={(e) => handleEDate(e.value)} />
								  {/* <Switch uncheckedIcon={false} checkedIcon={true} checked={ noedate } onChange={handleEDate} width={ 40 } height={ 22 }/> */}
								</div>
							</div>
						</div>
					</div>
					<div className="admin-setup-component noneed"></div>
				</div>
				<div className="admin-quest-next-btn-right">
					{/* <div className="admin-quest-next-btn">Next</div> */}
					<Button label="Next" className="p-button-primary admin-quest-next-btn" />
				</div>
			</div>
		</>
	)

}

export default QuestSetup;