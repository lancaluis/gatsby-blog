import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import SocialLinks from "../components/SocialLinks"
import { translate } from "../i18n/translate"

import * as S from "../styles/about"

const projects = [
  {
    name: 'Erick Wendel - Courses Website',
    description: 'Website developed with Gatsby and React. I used Netlify CMS as CMS for dynamic management. Erick can create, edit or delete a course.',
    url: 'https://cursos.erickwendel.com.br/',
    techs: ['React.js', 'Gatsby.js', 'Netlify CMS', 'Styled Components']
  },
  {
    name: 'Translation of Gatsby.js documentation',
    description: 'I had the opportunity to translate the official Gatsby.js documentation on Github, helping with 4 files: using-a-gatsby-theme, markdown-syntax, working-with-starters and graphql.',
    url: 'https://github.com/gatsbyjs/gatsby-pt-BR/commits?author=lancaluis',
    techs: ['Gatsby.js', 'Community', 'Translation']
  },
  {
    name: 'Webtec',
    description: 'A project created by me and my friends inside college where I studied, in order to teach web programming to beginning students.',
    url: 'https://www.facebook.com/webtecjdi',
    techs: ['Programming', 'Community', 'College']
  },
]

const AboutPage = ({ t }) => {
  return (
    <Layout>
      <SEO
        title={t("about.titlePage")}
        description={t("about.descriptionPage")}
        url="https://luislanca.dev/about"
      />
      <S.Wrapper>

        <S.Title>About me</S.Title>
        <S.Text>
          Hi, my name is Luis. I'm a Front-End Developer passionate about UX/UI Design. Currently, I work for a Brazilian company called <S.Mail href="https://www.hiplatform.com/" target="_blank">Hi Platform</S.Mail>. In my projects I always delivery friendly interfaces thinking on
          E-accessibility and usability. Since 2019 I work from non-conventional locations, seeking different cultures
          and new life experiences, maybe am I a Digital Nomad? I have no idea!
        </S.Text>

        <p>Follow me</p>
        <SocialLinks />

        <S.Title>Projects</S.Title>
        {
          projects.map(project => (
            <S.Project href={project.url} target="_blank">
              <S.ProjectTitle>
                {project.name}
              </S.ProjectTitle>
              <S.Description>
                {project.description}
              </S.Description>

              {project.techs.map(tech => <S.Tech>{tech}</S.Tech>)}

            </S.Project>
          ))
        }
      </S.Wrapper>
    </Layout>
  )
}



AboutPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(AboutPage)
