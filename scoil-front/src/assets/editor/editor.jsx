
import { formats, modulesModal } from "./config";
import 'react-quill/dist/quill.snow.css';
import Editor from './text';
import { useState } from 'react';
import SectionTextEditor from './sectionTextEditor';

const MyEditor = ({  }) => {
const  [textEditor, setTextEditor] = useState ('');

    return (
       <SectionTextEditor colorsMain=" mt-[7px]">
            <Editor theme="snow" modules={modulesModal} formats={formats} className=" text-left bg-white " onChange={setTextEditor} value={textEditor}  />
        </SectionTextEditor>
    );
  };
  
export default MyEditor;