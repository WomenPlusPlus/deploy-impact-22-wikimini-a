import { useNavigate } from 'react-router-dom'
import { getRoutePath } from '../routes/route-utils'
import {
  LanguageRoundedHeader,
  LanguageButton,
  ImageLogo,
  Image,
} from '../styles/Language'
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ImageLogo src={wikiminiLogo}></ImageLogo>
        </div>
        <LanguageButton
          sx={{ marginTop: '24vh', marginLeft: '7vw' }}
          onClick={() => navigate(getRoutePath('HOME'))}
        >
          English
        </LanguageButton>
        <LanguageButton
          sx={{ marginTop: '34vh', marginLeft: '56vw' }}
          onClick={() => navigate(getRoutePath('HOME'))}
        >
          German
        </LanguageButton>
        <div
          style={{ display: 'flex', marginLeft: '0.5vw', marginTop: '26vh' }}
        >
          <Image
            sx={{
              width: '29%',
              maxWidth: '120px',
              height: '44%',
              marginLeft: '0.5vw',
              marginTop: '2vh',
            }}
            src={minionLeft}
          ></Image>
          <Image
            sx={{
              zIndex: 3,
              height: '6%',
              width: '7%',
              maxWidth: '45px',
              marginLeft: '12.5vw',
              marginTop: '16.5vh',
            }}
            src={monster}
          ></Image>
        </div>
        <div
          style={{ display: 'flex', marginLeft: '0.5vw', maxWidth: '500px' }}
        >
          <Image
            sx={{
              height: '30%',
              width: '14%',
              maxWidth: '80px',
              marginLeft: '70vw',
              marginTop: '14vh',
            }}
            src={minionRight}
          ></Image>
        </div>
      </div>
    </div>
  )
}

export default Language
