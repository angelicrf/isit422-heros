const DOCS = {
	a: 'doc',
	b: 'docx',
	c: 'txt',
	d: 'odt',
	e: 'pdf',
	f: 'xls',
	g: 'xlsx'
	h: 'pdf',
	i: 'pptx'
}
Object.freeze(DOCS);

const IMAGES = {
	a: 'bmp',
	b: 'gif',
	c: 'jpg',
	d: 'tiff',
	e: 'svg',
	f: 'png'
}
Object.freeze(IMAGES);

const AUDIO = {
	a: 'au',
	b: 'midi',
	c: 'mp3',
	d: 'm4a'
	e: 'ogg',
	f: 'ra',
	g: 'ram',
	h: 'wav'
}
Object.freeze(AUDIO);

const VIDEO = {
	a: 'avi',
	b: 'mpeg',
	c: 'mp4',
	d: 'mov',
	e: 'wmv'	
}
Object.freeze(VIDEO);



/*  takes in string filterName, and array masterFileList, then returns array of files to display */
/* if filterName is not valid then error message is returned */
function buildFileListByFilter(filterName, masterFileList ) {
	
		let i;
		
		let filteredFileList = [];// make new array that will list files to display
	
		/* iterate through the list of all files, select chosen filter, find matching file extensions
		and add to array of files to display */
		for (i = 0; i < masterFileList.length; i++){
		
			let fileName = masterFileList [i];
		
			let fileExt = fileName.substr(fileName.lastIndexOf('.') + 1); // captures file mime as string
			
			let fileExtUpperCase = fileExt.toUpperCase();
			
			//return invalid message if filter name doesnt match any of the 4 types
			if(filterName === 'DOCS' || filterName === 'IMAGES' || filterName === 'AUDIO' || filterName === 'Video' ){
				
            }

            // check document file extensions, and add to array if match found
			else if (filtername === 'DOCS'){
				
				for (const prop in DOCS){
					if(fileExtUpperCase === ${DOCS[prop]}){
						filteredFileList.push(fileName);
					}
				}	
			}
			// check image file extensions, and add to array if match found
			else if (filtername === 'IMAGES'){
				
				for (const prop in IMAGES){
					if(fileExtUpperCase === ${IMAGES[prop]}){
						filteredFileList.push(fileName);
					}
				}	
			}
			
			// check audio file extensions, and add to array if match found
			else if (filtername === 'AUDIO'){
				
				for (const prop in AUDIO){
					if(fileExtUpperCase === ${AUDIO[prop]}){
						filteredFileList.push(fileName);
					}
				}	
			}
			
			// check video file extensions and add to array if match found
			else if (filtername === 'VIDEO'){
				
				for (const prop in VIDEO){
					if(fileExtUpperCase === ${VIDEO[prop]}){
						filteredFileList.push(fileName);
					}
				}	
            }
            
			//send message stating filter name is invalid
			else {
				let invalid = 'Invalid filterName!'
				return invalid;
            }
            
            // send message stating array is empty (no files found)
            if (filteredFileList.length ==0){
                arrayEmpty = 'No files found';
				return arrayEmpty;
                
            }
			
			// return array of files to be displayed
			return filteredFileList;	
			
    }// end of for Loop
}//end of function
