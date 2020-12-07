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
		let holdSelectedFiles = []

		if(newFilterName === "IMAGES"){
			console.log("inside Images")
			let definedIT = '';
		for (let index = 0; index < IMAGES.length; index++) {
			definedIT += masterFileList.filter(data => {
				return data.indexOf(IMAGES[index]) !== -1 && data != null && data != "" && data != ",";
			});		
		}
		holdSelectedFiles.push(definedIT);
	   }
		// console.log("images are " + holdImagesFiles + " " + holdImagesFiles.length);
	  
		let splitItems = '';
		splitItems = holdSelectedFiles[0]
		//console.log("allDotedFiles is " + allDotedFiles + " " +  allDotedFiles.length);
        //console.log("allDotedFiles[0] is " + splitItems.toString());
		//console.log("splitItems is " +  (splitItems.toString().split(',')).length)
		return (splitItems.toString().split(','));
	}
export function getDotedFiles(filtName, dotedArray){

  let filteredFileList = [];
	console.log("dotedArray is" + dotedArray );
			if (filtName == "IMAGES"){
			 	console.log("Inside filtername is")
		        let tfg = dotedArray.filter(el => el.toString());   
				let  matches = dotedArray.filter(s => s.toString().includes('png'));
				filteredFileList.push(matches);	
				    console.log("matches" + matches);
					console.log("tfg" + tfg);			
			}	
			else if (filtName == 'DOCS'){	
				let tfd = dotedArray.filter(el => el.toString().endsWith(''));
					console.log("Yes It does")
					filteredFileList.push(tfd);				
			}
			else if (filtName == 'AUDIO'){				
				let tfo = dotedArray.filter(el => el.toString().endsWith(''));
					console.log("Yes It does")
					filteredFileList.push(tfo);	
			}					
			else if (filtName == 'VIDEO'){				
				let tfv =dotedArray.filter(el => el.toString().endsWith(''));
					console.log("Yes It does")
					filteredFileList.push(tfv);
            }           
			else {
				let invalid = 'Invalid filterName!'
				return alert(invalid );
            }            
            if (filteredFileList.length == 0){
                let arrayEmpty = 'No files found';
				return alert(arrayEmpty);               
			}			
		
	return filteredFileList;							
  }	



		
