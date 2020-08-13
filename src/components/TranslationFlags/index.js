import React from "react"
import { useTranslation } from "react-i18next"

import en from "../../images/uk.png"
import pt from "../../images/brazil.png"
import * as S from "./styled"

const flags = [
  { path: pt, name: "pt" },
  { path: en, name: "en" },
]

const TranslationFlags = props => {
  const { i18n } = useTranslation()

  const handleClick = flag => {
    i18n.changeLanguage(flag)
  }

  return (
    <S.Wrapper>
      {flags.map(flag => (
        <div onClick={() => handleClick(flag.name)} key={flag.name}>
          <S.Flags src={flag.path} alt={flag.name} />
        </div>
      ))}
    </S.Wrapper>
  )
}

export default TranslationFlags
