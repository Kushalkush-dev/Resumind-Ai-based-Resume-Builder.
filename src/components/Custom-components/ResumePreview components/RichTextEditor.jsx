import React from 'react'
import { useState } from 'react'
import { BtnBold, BtnItalic, Editor, EditorProvider, Toolbar } from 'react-simple-wysiwyg'

const RichTextEditor = () => {
  
  const [value, setvalue] = useState()


  return (

    <EditorProvider>
    <Editor value={value} onChange={(e)=>setvalue(e.target.value)}>
      <Toolbar>
        <BtnBold/>
        <BtnItalic />
      </Toolbar>
    </Editor>
    </EditorProvider>
  )
}

export default RichTextEditor