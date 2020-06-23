import React from "react"
import { useTranslation } from "react-i18next"

import en from "../../images/en.svg"
import pt from "../../images/pt.svg"
import { Wrapper, Flags } from "./styled"

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
    <Wrapper>
      {flags.map(flag => (
        <div onClick={() => handleClick(flag.name)} key={flag.name}>
          <Flags src={flag.path} alt={flag.name} />
        </div>
      ))}
    </Wrapper>
  )
}

export default TranslationFlags
