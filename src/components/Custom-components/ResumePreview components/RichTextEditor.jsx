import React from 'react'
import { useState } from 'react'
import { BtnBold, BtnBulletList, BtnItalic, BtnNumberedList, BtnStrikeThrough, BtnUnderline, Editor, EditorProvider, Separator, Toolbar } from 'react-simple-wysiwyg'

const RichTextEditor = () => {
  
  const [value, setvalue] = useState()


  return (

    <EditorProvider>
    <Editor value={value} onChange={(e)=>setvalue(e.target.value)}>
      <Toolbar>
          <BtnBold />
          <BtnItalic />
          <Separator/>

          <BtnUnderline />
          <BtnStrikeThrough />
          <BtnNumberedList />
          <BtnBulletList />
          
      </Toolbar>
    </Editor>
    </EditorProvider>
  )
}

export default RichTextEditor