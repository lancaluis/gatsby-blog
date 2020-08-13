import React from "react"

import Icons from "./icons"
import links from "./content"
import * as S from "./styled"

const SocialLinks = () => (
  <>
    <S.Links>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <div key={i}>
            <S.Link
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.Link>
          </div>
        )
      })}
    </S.Links>
  </>
)

export default SocialLinks
