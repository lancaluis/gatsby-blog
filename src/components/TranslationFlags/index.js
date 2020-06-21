import React from "react"
import { useTranslation } from "react-i18next"

import { Wrapper, Flags } from "./styled"

import en from "../../images/en.svg"
import es from "../../images/es.svg"
import pt from "../../images/pt.svg"

const flags = [
  { path: pt, name: "pt" },
  { path: es, name: "es" },
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
