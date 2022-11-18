import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import {
  CloseButtonWrapper,
  Title,
  PaperWrapperName,
  CustomContentEditable,
  ButtonFile,
  PaperWrapperDescription,
  DescriptionText,
  CustomTextArea,
  MaxLengthWrapper,
  SubmitBottonWrapper,
  ButtonSubmit,
} from '../styles/CreateActivity.js'
import close from '../assets/closeBlack.png'

const CreateActivity = () => {
  const navigate = useNavigate()
  const { name } = useParams()
  const [textareaValue, setTextareaValue] = useState('')
  const [titleValue, setTitleValue] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageName, setSelectedImageName] = useState('')

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
      reader.readAsDataURL(file)
    })
  }

  const handleSubmit = () => {
    const convertImage = async () => {
      const convertedImage = await getBase64(selectedImage)
      const uploadObj = {
        pageid: Math.random() * 100,
        category: 'activity: ',
        title: titleValue,
        image: convertedImage,
        extract: textareaValue,
      }

      if (localStorage.getItem('createdActivity')) {
        localStorage.clear()
      }
      localStorage.setItem('createdActivity', JSON.stringify(uploadObj))
      navigate('/congratulations')
    }

    convertImage()
  }

  return (
    <Container
      sx={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <CloseButtonWrapper>
        <img src={close} alt='close button' onClick={() => navigate('/home')} />
      </CloseButtonWrapper>
      <Title>Create your activity</Title>

      <PaperWrapperName>
        <CustomContentEditable
          html={titleValue || name}
          disabled={false}
          onChange={(e) => setTitleValue(e.target.value)}
        />
      </PaperWrapperName>
      <input
        accept='image/*'
        style={{ display: 'none' }}
        id='button-file'
        multiple
        type='file'
        onChange={(e) => {
          setSelectedImage(e.target.files[0])
          setSelectedImageName(e.target.files[0].name)
        }}
      />
      <label htmlFor='button-file'>
        <ButtonFile variant='outlined' component='span'>
          Add image
        </ButtonFile>
      </label>
      <p
        style={{
          margin: ' 0px',
          paddingRight: '5px',
          textAlign: 'end',
          opacity: 0.5,
        }}
      >
        {selectedImageName}
      </p>
      <PaperWrapperDescription>
        <DescriptionText>Description</DescriptionText>
      </PaperWrapperDescription>
      <section>
        <CustomTextArea
          placeholder='What are its characteristics? Where can be found?'
          maxLength={100}
          onChange={(e) => setTextareaValue(e.target.value)}
        />
        <MaxLengthWrapper>
          <p>{textareaValue.length}/400 letters</p>
        </MaxLengthWrapper>
      </section>
      <SubmitBottonWrapper>
        <ButtonSubmit onClick={() => handleSubmit()}>Publish</ButtonSubmit>
      </SubmitBottonWrapper>
    </Container>
  )
}

export default CreateActivity
