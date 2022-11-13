import { useNavigate } from 'react-router-dom'
import { getRoutePath } from '../routes/route-utils'
import { LanguageRoundedHeader, LanguageButton, ImageLogo, Image } from '../styles/Language'
import { green, white } from '../theme/colors'
import wikiminiLogo from '../assets/wikiminiLogoLanguage.png'
import monster from '../assets/monster.png'
import minionLeft from '../assets/minionAngle.png'
import minionRight from '../assets/minion.png'

const Language = () => {
  const navigate = useNavigate()

    return (
      <div style={{ background: white }}>
        <LanguageRoundedHeader></LanguageRoundedHeader>      
        <div style={{ background: green, height: '70vh', width: '100%' }}>
          <ImageLogo src={wikiminiLogo}></ImageLogo>
          <LanguageButton sx={{marginTop: '21vh', marginLeft: '7vw'}} onClick={()=>navigate(getRoutePath('HOME'))}>English</LanguageButton>
          <LanguageButton sx={{marginTop: '34vh', marginLeft: '56vw'}} onClick={()=>navigate(getRoutePath('HOME'))}>German</LanguageButton>
          <Image 
            sx={{ 
              width: '29%', 
              height: '44%', 
              marginLeft:'0.5vw', 
              marginTop: '26vh'
            }} 
            src={minionLeft}
          ></Image>
          <Image 
            sx={{ 
              zIndex: 3, 
              height: '6%',
              width: '7%', 
              marginLeft:'14.5vw', 
              marginTop: '49.3vh'
            }} 
            src={monster}
          ></Image>
          <Image 
          sx={{ 
            height: '30%',
            width: '14%', 
            marginLeft:'70vw', 
            marginTop: '40vh'
          }} 
          src={minionRight}
          ></Image>
        </div>
      </div>  
    )
}

export default Language