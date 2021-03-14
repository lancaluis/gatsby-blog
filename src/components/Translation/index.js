import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import * as S from "./styled"

const Translation = props => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('en')

  const ChooseLanguage = () => {
    if(language === 'en') {
      setLanguage('pt')
      i18n.changeLanguage('en')
    }
    if(language === 'pt') {
      setLanguage('en')
      i18n.changeLanguage('pt')
    }
  }

  return (
    <S.Language onClick={ChooseLanguage}>
      {language === 'pt' ? 'ler em português' : 'read in english'}
    </S.Language>
  )
}

export default Translation
