const DOCS = [
	'doc',
	'docx',
	'txt',
    'odt',
	'pdf',
    'xls',
    'xlsx',
    'pdf',
	'pptx'
]
const IMAGES = [
	'bmp',
    'gif',
	'jpg',
    'tiff',
    'svg',
	'png',
	'url'
]
const AUDIO = [
	'au',
    'midi',
	 'mp3',
	 'm4a',
	 'ogg',
	'ra',
	'ram',
	'wav'
]
const VIDEO = [
	'avi',
	 'mpeg',
	 'mp4',
	 'mov',
	 'wmv'	
]
export function buildFileListByFilter(filterName, masterFileList ) {
		let newFilterName = filterName.toUpperCase();
		let getDotFiles = []
		getDotFiles.push(masterFileList.filter(data => {
			return data.indexOf('.') !== -1;
		}))
		let allDotedFiles = getDotedFiles(newFilterName,getDotFiles);
		let splitItems = '';
		splitItems = allDotedFiles[0]
        //console.log("allDotedFiles[0] is " + splitItems.toString())
		//console.log("splitItems is " +  (splitItems.toString().split(',')).length)
		return (splitItems.toString().split(','));
	}
export function getDotedFiles(filtName, dotedArray){
  let element = '';
  let splittedItems = '';
  let filteredFileList = [];
  let holdExtensions = [];

    for (let index = 0; index < dotedArray.length; index++) {
	  element += (dotedArray[index]);
	  
	   holdExtensions.push((element.split('.').pop()));
			if (filtName == "IMAGES"){
			 	console.log("Inside filtername is")
				if(IMAGES.includes(holdExtensions[index])){
					console.log("Yes It does")
					filteredFileList.push(dotedArray[index]);
				}			
			}	
			else if (filtName == 'DOCS'){	
				if(DOCS.includes(holdExtensions[index])){
					console.log("Yes It does")
					filteredFileList.push(dotedArray[index]);			
				}	
			}
			else if (filtName == 'AUDIO'){				
				if(AUDIO.includes(holdExtensions[index])){
					console.log("Yes It does")
					filteredFileList.push(dotedArray[index]);
				}	
			}					
			else if (filtName == 'VIDEO'){				
				if(VIDEO.includes(holdExtensions[index])){
					console.log("Yes It does")
					filteredFileList.push(dotedArray[index]);
				}	
            }           
			else {
				let invalid = 'Invalid filterName!'
				return alert(invalid );
            }            
            if (filteredFileList.length == 0){
                let arrayEmpty = 'No files found';
				return alert(arrayEmpty);               
			}
			//console.log("filteredFileList " + filteredFileList.length)
			return filteredFileList;		
	}								
  }	
		
